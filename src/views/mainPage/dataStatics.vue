<script lang="ts" setup>
import { onMounted, ref } from "vue";
import dataType from "@/assets/img/dataStatics/data-type.png";
import dataCol from '@/assets/img/dataStatics/data-col.png'
import dataEngine from "@/assets/img/dataStatics/data-engine.png";
import dataRecord from "@/assets/img/dataStatics/data-record.png";
import { useRouter } from "vue-router";
import { getStatistics } from "@/api";
const router = useRouter()

const dataList = ref([])
onMounted( async () => {
    const {data} = await getStatistics()
  const getNumber = (key: string) => {
    return data?.find(item => item.key === key)?.val || 0
  }
  dataList.value = [
    {
      imgSrc: dataType,
      alt: '数据种类',
      title: '数据种类',
      number:getNumber("dateTypeCount"),
      click: () => {
        router.push('/data-search')
      }
    },
    {
      imgSrc: dataCol,
      alt: '数据采集工具',
      title: '数据采集工具',
      number: getNumber('toolsCount'),
      click: () => {
        router.push('/data-product')
      }
    },
    {
      imgSrc: dataEngine,
      alt: '数据生产引擎',
      title: '数据生产引擎',
      number: getNumber('engine'),
      click: () => {
        router.push('/data-product')
      }
    },
    {
      imgSrc: dataRecord,
      alt: '数据记录量',
      title: '数据记录量',
      number: getNumber('dataCount'),
      click: () => {
        router.push('/data-resources')
      }
    },
  ]
})

</script>
<template>
  <div class="data-list">
    <div v-for="(item, index) in dataList" :key="index" class="data-item" @click="item.click()">
      <img :src="item.imgSrc" :alt="item.alt" class="data-img">
      <div class="data-content">
        <div class="data-number">{{ item.number }}</div>
        <div class="data-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.data-list {
  display: flex;
  justify-content: space-around;
  background-color: #f7f9fb;
  border-radius: 8px;
  margin: 24px 0;
  padding: 16px 24px;

  .data-item {
    display: flex;
    align-items: center;
    height: 202px;
    position: relative;
    width: 25%;
    cursor: pointer;
  }
  .data-item:hover{
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
  .data-img {
    display: inline-block;
    width: 60px;
    height: 60px;
  }

  .data-content {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;

    .data-number {
      color: #ff7e00;
      font-size: 24px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .data-title {
      font-size: 20px;
      font-weight: 600;
      color: #333333;
    }
  }

  .data-item:not(:last-child)::after {
    content: '';
    width: 2px;
    height: 80px;
    /* 分割线高度 */
    background-color: #deebf8;
    position: relative;
    right: 6px;
  }
}
</style>
