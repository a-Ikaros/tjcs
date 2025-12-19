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
import {onMounted, ref} from "vue";
import dataIcon from '@/assets/img/dataResources/数据图标.png'

const overviewList = ref([])

const formatNumber = (num, separator = ',') => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
onMounted(() => {
  overviewList.value = [
    {
      title: '数据记录总量',
      num: '68715623',
      icon: dataIcon
    },
    {
      title: '数据集数量',
      num: '12,458',
      icon: dataIcon
    },
    {
      title: '数据来源数量',
      num: '342',
      icon: dataIcon
    },
    {
      title: '资源文件总数',
      num: '512340',
      icon: dataIcon
    },
    {
      title: '近30天新增记录',
      num: '12,567',
      icon: dataIcon
    },
  ]
})
</script>

<style lang="scss" scoped>
.overview{
  display: flex;
  flex-wrap: wrap;
}
.overview-item{
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
  .item-left{
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    .item-title{
      color: #333333;
      margin-bottom: 12px;
    }
    .item-num{
      color: #1760c2;
    }
  }
  .item-img{
    display: inline-block;
  }

}

</style>
