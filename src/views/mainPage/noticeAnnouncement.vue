<template>
  <div class="notice-main">
    <div>
      <img class="notice-img" src="../../assets/img/notice-img.png" alt="通知公告"/>
      <div class="notice-title">
        <div>
          <el-text truncated class="notice-title-text" @click="jumpTo('')">
            新材料大数据中心著平台啊实打实的钱啊嘎关系地区嗡嗡项目实施方案验证会在去哦点进去哦
          </el-text>
        </div>
        <div class="d-flex-center notice-time"><img :src="timeIcon" alt="time" class="mr6"/>2025-11-24</div>
      </div>
    </div>
    <div class="notice-content">
      <div v-for="(item,index) in noticeList" :key="index" class="notice-item">
        <div>
          <el-text truncated class="title-text" @click="jumpTo(item?.link)">{{ item.title }}</el-text>
        </div>
        <div class="d-flex-center notice-time"><img :src="timeIcon" alt="time" class="mr6"/>{{ item.date }}</div>
        <el-divider style="margin: 12px 0"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import timeIcon from '../../assets/img/time-icon.png'
import {jumpTo} from "@/utils";

const noticeList = ref([])
onMounted(() => {
  noticeList.value = [
    {
      title: '京津冀初步形成”北京建能力、区域造生态“ 协同爱的激情我的几按地区你在西祠街区你擦十多年年前蛋a壳',
      date: '2025-04-10',
      link:'http://localhost:9999/#/updates-detail'
    },
    {
      title: 'MGE Advances期刊主编血剑心院士|材料基因工程时的情景哦i大家无穷二九五七',
      date: '2025-04-10',
      link:'http://localhost:9999/#/updates-detail'
    },
    {
      title: '第八届材料基因工程高层论坛成功举办',
      date: '2025-04-10',
      link:'http://localhost:9999/#/updates-detail'
    },
    {
      title: 'CSTM/FC93 材料数据标准化领域委员会亨利大会今天大家我却觉得去我家其',
      date: '2025-04-10',
      link:'http://localhost:9999/#/updates-detail'
    },
  ]
})
</script>
<style lang="scss" scoped>
.mr6 {
  margin-right: 6px;
}

.notice-main {
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-top: 24px;
  .d-flex-center {
    display: flex;
    align-items: center;
  }

  .notice-img {
    width: 400px;
    height: 225px;
  }

  .notice-title {
    box-sizing: border-box;
    width: 400px;
    background-color: #f5fcff;
    max-width: 652px;
    padding: 12px 24px;
  }

  .notice-title-text {
    font-size: 18px;
    color: #333333;
  }

  .notice-title-text:hover {
    cursor: pointer;
    color: #2d8cf0;
  }

  .notice-content {
    flex: 1;
    display: flex;
    margin-left: 24px;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    width: 300px;

    .notice-item {
      width: calc(100% - 24px);
      padding-right: 24px;
    }
  }

  .notice-time {
    font-size: 16px;
    color: #999999;
    margin-top: 12px;
  }

  .title-text {
    cursor: pointer;
    font-size: 14px;
    color: #333333
  }

  .title-text:hover {
    color: #2d8cf0;
  }
}
</style>
