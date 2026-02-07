<template>
  <div class="overview">
    <div v-for="item in overviewList" :key="item.title" class="overview-item">
      <div class="item-left">
        <div class="item-title">{{ item.title }}</div>
        <div class="item-num">{{ `${formatNumber(item.num)}条` }}</div>
      </div>
      <img :src="item.icon" alt="item.title" class="item-img">
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import dataIcon from '@/assets/img/dataResources/data-icon.png'
import { getStatistics } from "@/api";

const overviewList = ref([])

const formatNumber = (num, separator = ',') => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
onMounted(async () => {
  const { data } = await getStatistics()
  const getNumber = (key: string) => {
    return data?.find(item => item.key === key)?.val || 0
  }
  overviewList.value = [
    {
      title: '数据种类',
      num: getNumber("dateTypeCount"),
      icon: dataIcon
    },
    {
      title: '数据采集工具',
      num: getNumber('toolsCount'),
      icon: dataIcon
    },
    {
      title: '数据生产引擎',
      num: getNumber('engine'),
      icon: dataIcon
    },
    {
      title: '数据记录量',
      num: getNumber('dataCount'),
      icon: dataIcon
    },
  ]
})
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-wrap: wrap;
}

.overview-item {
  width: calc(50% - 24px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 96px;
  background-color: #f7f9fb;
  padding: 48px 24px;
  margin-bottom: 24px;
  margin-left: 24px;
  border-radius: 12px;

  .item-left {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;

    .item-title {
      color: #333333;
      margin-bottom: 12px;
    }

    .item-num {
      color: #1760c2;
    }
  }

  .item-img {
    display: inline-block;
  }

}
</style>
