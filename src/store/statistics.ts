import { defineStore } from "pinia";

interface StatisticsData {
  clazz: string;
  count: number;
}

export const useStatisticsStore = defineStore("statistics", {
  state: () => {
    return {
      dataSetCount: [] as StatisticsData[],
      lastFetchTime: 0,
      cacheDuration: 5 * 60 * 1000,
    };
  },
  getters: {
    isExpired: (state) => {
      return Date.now() - state.lastFetchTime > state.cacheDuration;
    },
    countMap: (state) => {
      const map: Record<string, number> = {};
      state.dataSetCount.forEach((item) => {
        const key = item.clazz.charAt(0).toLowerCase() + item.clazz.slice(1);
        map[key] = item.count;
      });
      return map;
    },
  },
  actions: {
    async fetchDataSetCount() {
      if (this.dataSetCount.length > 0 && !this.isExpired) {
        return this.dataSetCount;
      }
      
      try {
        const { getStatisticsSetCount } = await import("@/api");
        const { data } = await getStatisticsSetCount();
        this.dataSetCount = data;
        this.lastFetchTime = Date.now();
        return data;
      } catch (err) {
        console.error("Failed to fetch data set count:", err);
        return [];
      }
    },
    clearCache() {
      this.dataSetCount = [];
      this.lastFetchTime = 0;
    },
  },
});
