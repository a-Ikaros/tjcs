import { defineStore } from "pinia";

interface StatisticsData {
  clazz: string;
  count: number;
}

interface StatisticsItem {
  key: string;
  val: number;
}

export const useStatisticsStore = defineStore("statistics", {
  state: () => {
    return {
      dataSetCount: [] as StatisticsData[],
      statisticsData: [] as StatisticsItem[],
      lastFetchTime: 0,
      lastStatisticsFetchTime: 0,
      cacheDuration: 5 * 60 * 1000,
    };
  },
  getters: {
    isExpired: (state) => {
      return Date.now() - state.lastFetchTime > state.cacheDuration;
    },
    isStatisticsExpired: (state) => {
      return Date.now() - state.lastStatisticsFetchTime > state.cacheDuration;
    },
    countMap: (state) => {
      const map: Record<string, number> = {};
      state.dataSetCount.forEach((item) => {
        const key = item.clazz.charAt(0).toLowerCase() + item.clazz.slice(1);
        map[key] = item.count;
      });
      return map;
    },
    statisticsMap: (state) => {
      const map: Record<string, number> = {};
      state.statisticsData.forEach((item) => {
        map[item.key] = item.val;
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
        
        const additionalData = [
          {
            clazz: 'MagneticMaterial',
            count: 76
          },
          {
            clazz: 'Oc',
            count: 1066
          },
          // {
          //   clazz: 'MacroMechanics',
          //   count: 3186156
          // },
          // {
          //   clazz: 'MacroHeat',
          //   count: 3186156
          // },
          {
            clazz: 'Op',
            count: 4040
          },
          {
            clazz: '3dWeaving',
            count: 360
          }
        ];
        
        this.dataSetCount = [...data, ...additionalData];
        this.lastFetchTime = Date.now();
        return this.dataSetCount;
      } catch (err) {
        console.error("Failed to fetch data set count:", err);
        return [];
      }
    },
    async fetchStatistics() {
      if (this.statisticsData.length > 0 && !this.isStatisticsExpired) {
        return this.statisticsData;
      }
      
      try {
        const { getStatistics } = await import("@/api");
        const { data } = await getStatistics();
        this.statisticsData = data;
        this.lastStatisticsFetchTime = Date.now();
        return data;
      } catch (err) {
        console.error("Failed to fetch statistics:", err);
        return [];
      }
    },
    clearCache() {
      this.dataSetCount = [];
      this.statisticsData = [];
      this.lastFetchTime = 0;
      this.lastStatisticsFetchTime = 0;
    },
  },
});
