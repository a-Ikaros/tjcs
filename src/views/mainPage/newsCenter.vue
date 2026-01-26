<template>
  <div class="news-main">
    <div v-for="(item,index) in newsList" :key="index" class="news-item">
      <div class="news-date">
        <div class="new-date-day">{{ item.date.slice(8, 10) }}</div>
        <div class="news-date-month">{{ item.date.slice(0, 7) }}</div>
      </div>
      <div class="news-title">
          <el-text line-clamp="2"  class="title-text" @click="jumpTo(item?.link)">{{ item.title }}</el-text>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {jumpTo} from "@/utils";

const newsList = ref([])
onMounted(() => {
  newsList.value = [
    {
      title: '新材料大数据中心关于统一服务门户（测试版）上线公开征求意见的通知',
      date: '2025-04-10',
      link:'http://localhost:9999/#/updates-detail'
    },
    {
      title: '国家数据局综合司关于组织开展2025年可信数据空间创新发展试点工作的通知',
      date: '2025-04-10',
      link:'http://localhost:9999/#/updates-detail'
    },
    {
      title: '国家发展改革委国家数据局工业和信息化部关于印发《埃斯基等会啊哇打网球的那瞬间年代》的卡是京东i去我家',
      date: '2025-04-10',
      link:'http://localhost:9999/#/updates-detail'
    },
    {
      title: '三部门关于印发《新材料大数据中心总体建设方案》的通知',
      date: '2025-04-10',
      link:'http://localhost:9999/#/updates-detail'
    },
  ]
})
</script>
<style lang="scss">
.news-main{
  overflow: hidden;
  margin-top: 12px;
}
.news-item {
  display: flex;
  margin: 12px 0;
  position: relative;
  width: 100%;
  overflow: hidden;
  .news-date {
    width: 70px;
    height: 55px;
    border: 1px solid #999999;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: 12px;
    padding: 6px;
    .new-date-day {
      width: 100%;
      display: flex;
      justify-content: center;
      font-weight: 600;
      font-size: 20px;
    }
    .news-date-month{
      width: 100%;
      display: flex;
      justify-content: center;
      color: #999999;
      font-size: 14px;
    }
  }
  .news-title{
    width: 100%;
    margin-left: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .title-text{
    font-size: 14px;
    color: #333333
  }
  .title-text:hover{
    color: #2d8cf0;
  }
}

</style>
