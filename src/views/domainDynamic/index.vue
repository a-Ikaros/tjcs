<template>
  <div class="dynamic-content">
    <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="dynamic-tabs">
      <el-tab-pane label="主平台动态" name="main">
        <div class="notice-main">
          <div>
            <img class="notice-img" src="../../assets/img/dynamic/dynamic-main-news.png" alt="通知公告"/>
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
            <div class="news-header">
              <span class="news-tag">近期要闻</span>
              <div class="date-picker">
                <el-date-picker
                    v-model="dateRange"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-value="[new Date(), new Date()]"
                />
              </div>
            </div>
            <div v-for="(item,index) in noticeList" :key="index" class="notice-item">
              <div>
                <el-text truncated class="title-text" @click="jumpTo(item?.link)">{{ item.title }}</el-text>
              </div>
              <div class="d-flex-center notice-time"><img :src="timeIcon" alt="time" class="mr6"/>{{ item.date }}</div>
              <el-divider/>
            </div>
            <div class="watch-more" @click="jumpTo('')">查看更多</div>
          </div>
        </div>
        <div class="tab-list">
          <div v-for="tab in dynamicTabList" :key="tab.key" class="tab-item"
               :class="selectedTab===tab.key?'is-selected':''" @click="onSelectTab(tab.key)">{{ tab.label }}
          </div>
        </div>
        <div class="block-content" v-for="(item,index) in dynamicList" :key="index">
          <el-text line-clamp="1" class="block-title" @click="jumpTo(item?.link)">
            {{ item.title }}
          </el-text>
          <div class="block-info">
            <span><img :src="dataProductUser" alt="用户" class="mr6"> <span class="mr12">{{ item.user }}</span></span>
            <span> <img :src="dataProductTime" alt="时间" class="mr6"> <span>{{ item.time }}</span></span>
          </div>
        </div>
        <div class="watch-more" @click="jumpTo('')">查看更多</div>
      </el-tab-pane>
      <el-tab-pane label="节点动态" name="node">
        <div class="notice-main" v-if="false">
          <div>
            <img class="notice-img" src="../../assets/img/dynamic/dynamic-main-news.png" alt="通知公告"/>
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
            <div class="news-header">
              <span class="news-tag">近期要闻</span>
              <div class="date-picker">
                <el-date-picker
                    v-model="dateRange"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-value="[new Date(), new Date()]"
                />
              </div>
            </div>
            <div v-for="(item,index) in noticeList" :key="index" class="notice-item">
              <div>
                <el-text truncated class="title-text" @click="jumpTo(item?.link)">{{ item.title }}</el-text>
              </div>
              <div class="d-flex-center notice-time"><img :src="timeIcon" alt="time" class="mr6"/>{{ item.date }}</div>
              <el-divider/>
            </div>
            <div class="watch-more">查看更多</div>
          </div>
        </div>
        <div class="tab-list">
          <div v-for="tab in dynamicTabList" :key="tab.key" class="tab-item"
               :class="selectedTab===tab.key?'is-selected':''" @click="onSelectTab(tab.key)">{{ tab.label }}
          </div>
        </div>
        <div class="block-content" v-for="(item,index) in dynamicList" :key="index">
          <el-text line-clamp="1" class="block-title" @click="jumpTo(item?.link)">
            {{ item.title }}
          </el-text>
          <div class="block-info">
            <span><img :src="dataProductUser" alt="用户" class="mr6"> <span class="mr12">{{ item.user }}</span></span>
            <span> <img :src="dataProductTime" alt="时间" class="mr6"> <span>{{ item.time }}</span></span>
          </div>
        </div>
        <div class="watch-more">查看更多</div>
      </el-tab-pane>
    </el-tabs>

  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import breadCrumb from '@/components/breadCrumb/index.vue'
import {jumpTo} from "@/utils";
import timeIcon from "@/assets/img/time-icon.png";
import dataProductUser from "@/assets/img/dataProduct/product-icon-user.png";
import dataProductTime from "@/assets/img/dataProduct/product-icon-time.png";
import productBlockImg from "@/assets/img/dataProduct/product-block-img.png";
import { TabsPaneContext } from 'element-plus';

const breadCrumbList = ['首页', '领域动态']
const noticeList = ref([])
const activeName = ref('main')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const dateRange = ref('')

const dynamicTabList = [
  {
    label: '部门文件',
    key: 'department'
  },
  {
    label: '行动计划',
    key: 'plan'
  },
  {
    label: '科技动态',
    key: 'technology'
  }, {
    label: '行业进展',
    key: 'industry'
  },

]

const selectedTab = ref('department')
const onSelectTab = (key) => {
  selectedTab.value = key
  getDynamicList()
}

const dynamicList = ref([])
const getDynamicList = () => {
  // 根据 selectedTab 返回更合理的条目（保持 title/user/time/link 字段不变）
  const department = [
    { title: '关于中心年度工作汇报的通知', user: '办公室', time: '2025-11-01', link: '' },
    { title: '中心数据治理实施细则（修订）发布', user: '数据治理组', time: '2025-10-20', link: '' },
    { title: '节点接入验收工作通告', user: '运维组', time: '2025-09-30', link: '' },
    { title: '中心组织结构调整公告', user: '人事与行政', time: '2025-09-10', link: '' },
  ]

  const plan = [
    { title: '新材料产业发展五年行动计划（征求意见稿）', user: '政策研究组', time: '2025-11-05', link: '' },
    { title: '高通量筛选能力建设项目启动', user: '项目组', time: '2025-10-18', link: '' },
    { title: '数据标准化与互操作性建设计划', user: '标准化办公室', time: '2025-09-25', link: '' },
    { title: '材料数据库互联互通试点方案', user: '平台工程', time: '2025-09-01', link: '' },
  ]

  const technology = [
    { title: '高通量计算在催化材料中的应用进展', user: '计算材料团队', time: '2025-10-30', link: '' },
    { title: '基于图神经网络的材料性能预测论文解读', user: '模型团队', time: '2025-10-12', link: '' },
    { title: '原位表征新方法在电池材料中的应用', user: '表征中心', time: '2025-09-28', link: '' },
    { title: '低成本制备纳米合金的新工艺', user: '合成研究组', time: '2025-09-10', link: '' },
  ]

  const industry = [
    { title: '光伏材料产线升级与数据标准化', user: '产业合作部', time: '2025-11-10', link: '' },
    { title: '新能源汽车电池材料研发进展报告', user: '产业观察', time: '2025-10-22', link: '' },
    { title: '半导体封装材料国产化进程', user: '产业观察', time: '2025-09-15', link: '' },
    { title: '金属3D打印材料市场动态', user: '产业观察', time: '2025-08-30', link: '' },
  ]

  if (selectedTab.value === 'department') {
    dynamicList.value = department
  } else if (selectedTab.value === 'plan') {
    dynamicList.value = plan
  } else if (selectedTab.value === 'technology') {
    dynamicList.value = technology
  } else if (selectedTab.value === 'industry') {
    dynamicList.value = industry
  } else {
    dynamicList.value = []
  }
}
onMounted(() => {
  noticeList.value = [
    {
      title: '京津冀初步形成”北京建能力、区域造生态“ 协同爱的激情我的几按地区你在西祠街区你擦十多年年前蛋a壳',
      date: '2025-04-10',
      link: ''
    },
    {
      title: 'MGE Advances期刊主编血剑心院士|材料基因工程时的情景哦i大家无穷二九五七',
      date: '2025-04-10',
      link: ''
    },
    {
      title: '第八届材料基因工程高层论坛成功举办',
      date: '2025-04-10',
      link: ''
    },
    {
      title: 'CSTM/FC93 材料数据标准化领域委员会亨利大会今天大家我却觉得去我家其',
      date: '2025-04-10',
      link: ''
    },
  ]
  getDynamicList()
})
</script>

<style lang="scss" scoped>
.mr6 {
  margin-right: 6px;
}

.dynamic-content {
  max-width: 1200px;
  margin: 0 auto;
}
.el-divider--horizontal{
  margin: 12px 0;
}
:deep(.el-tabs__nav-wrap) {
  display: flex;
  justify-content: center;
}

:deep(.el-tabs__nav-scroll) {
  width: auto;

  .el-tabs__item {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
    margin-right: 48px;
  }

}

:deep(.el-tabs__item.is-active) {
  color: #333333 !important;
}

:deep(.el-tabs__active-bar) {
  height: 4px;
  color: #1760c2;
}

.notice-main {
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-top: 24px;
  font-size: 14px;
  .d-flex-center {
    display: flex;
    align-items: center;
  }

  .notice-img {
    width: 600px;
    height: auto;
  }

  .notice-title {
    box-sizing: border-box;
    width: 600px;
    background-color: #f5fcff;
    padding: 12px 24px;
  }

  .notice-title-text {
    font-size: 16px;
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
    width: calc(100% - 798px);

    .notice-item {
      width: calc(100% - 12px);
    }
  }

  .notice-time {
    font-size: 16px;
    color: #999999;
    margin-top: 12px;
  }

  .title-text {
    cursor: pointer;
    font-size: 16px;
    color: #333333
  }

  .title-text:hover {
    color: #2d8cf0;
  }
}

.news-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 12px;
  margin-right: 12px;
}

.news-tag {
  display: inline-block;
  background-color: #1760c2;
  width: 92px;
  height: 22px;
  padding: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: white;
}

.date-picker {
  display: flex;
  align-items: center;
}

.watch-more {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
  font-size: 14px;
  color: #1760c2;
  cursor: pointer;
}

.watch-more:hover {
  color: #3498db;
}

.tab-list {
  display: flex;
  width: 100%;
  position: relative;
  margin: 12px 0;
  height: 60px;

  .tab-item {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1760c2;
    font-size: 14px;
    font-weight: 600;
    background-color: #f5fcff;
    cursor: pointer;
  }

  .tab-item.is-selected {
    transition: 0.5s;
    color: white;
    background-color: #1760c2;
  }
}

.block-content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 32px;
  background-color: #f7f9fb;
  margin: 32px 0;

  .block-title {
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    color: #1760c2;
    margin-bottom: 24px;
    cursor: pointer;
  }

  .block-title:hover {
    color: #3498db;
  }

  .block-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999999;
  }
}

:deep(.el-date-editor) {
  width: 200px !important;
  margin-right: 12px;
}
</style>
