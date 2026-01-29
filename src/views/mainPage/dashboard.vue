<template>
  <div class="main-page-hero">
    <div style="width: 100%;display: flex;flex-wrap: wrap;justify-content: center;align-items: center">
      <img src="../../assets/img/hero.png" alt="" class="main-page-img" />
      <div class="hero-new-block">
        <span class="hero-new">
          最新：
        </span>
        <div class="marquee">
          <div class="marquee-inner">
            <span v-for="(item, index) in newsDynamic" :key="index">
              <span class="hero-block" @click="jumpTo(item.link)">
                {{ item.title }}
              </span>
              <span>{{ (index === newsDynamic.length - 1 ? '' : '&ensp;|&ensp;') }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main">

    <div class=" mtb30 function-card">
      <div class="texture-rt"></div>
      <div class="texture-lb"></div>
      <div class="introduce-content source-search">
        <div class="source-left">
          <el-input v-model="searchValue" class="source-input" placeholder="请输入您要搜索的内容">
            <template #append>
              <div class="search-append" @click="handleSearch">
                <el-button :icon="Search" class="search-icon" />
                <span class="search-font">数据检索</span>
              </div>
            </template>
          </el-input>
          <div class="data-statics">
            <dataStatics></dataStatics>
          </div>
        </div>
        <div class="source-right">
          <div class="new-material-box" @click="jumpTo('https://www.matbd.cn')">
            <img src="../../assets/img/new-material-logo.png" alt="" />
            <div>新材料大数据中心</div>
          </div>
          <div class="gene-engine-box" @click="jumpTo('http://mathtc.nscc-tj.cn/')">
            <img src="../../assets/img/gene-engine-logo.png" alt="" />
            <div>中国材料基因工程高通量计算平台</div>
          </div>
        </div>
      </div>
      <div class="introduce-content">
        <div class="container-block">
          <div class="block-left">
            <titleLine :nameZh="'通知公告'" :nameEn="'/ NOTICE BOARD'" :showMore="true" :moreLink="'/field-updates'"
              class="block-title"></titleLine>
            <div>
              <noticeAnnouncement></noticeAnnouncement>
            </div>
          </div>
          <div class="block-right">
            <titleLine :nameZh="'新闻中心'" :nameEn="'/ NEWS CENTER'" :showMore="true" :moreLink="'/field-updates'"
              class="block-title"></titleLine>
            <div>
              <newsCenter></newsCenter>
            </div>
          </div>
        </div>
        <div class="container-block">
          <div class="block-left">
            <titleLine :nameZh="'数据资源'" :nameEn="'/ DATA RESOURCES'" :showMore="true" :moreLink="'/data-search'"
              class="block-title"></titleLine>
            <div><img src="../../assets/img/data-sources.png" alt="" class="data-sources-img" /></div>
          </div>
          <div class="block-right">
            <titleLine :nameZh="'数据产品'" :nameEn="'/ COLLECTION TOOL'" :showMore="true" :moreLink="'/data-product'"
              class="block-title"></titleLine>
            <div class="data-production">
              <div class="production-block" @click="router.push('/data-product')">
                <img src="../../assets/img/database-tools.png" alt="数据库交互工具" style="width: 96px;height: 96px" />
                <div class="block-content">
                  <div class="block-title">数据库交互工具</div>
                  <div class="block-desc">高效的数据采集工与管理工具，支持多种数据库格式</div>
                </div>
              </div>
              <el-divider border-style="dashed" />
              <div class="production-block" @click="router.push('/data-product')">
                <img src="../../assets/img/spider-tools.jpeg" alt="数据库交互工具" style="width: 96px;height: 96px" />
                <div class="block-content">
                  <div class="block-title">网络采集工具</div>
                  <div class="block-desc">自动化采集网络公开数据资源</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="mt30  introduce pbt24">
      <div class="introduce-content main-container">
        <div class="mtb30">
          <titleLine :nameZh="'建设单位'" :nameEn="'/ CONSTRUCTION ENTITY'"></titleLine>
          <div class="mtb30 wp100 construction-box">
            <img class="" src="../../assets/img/construction/国家超级计算天津中心.png" alt="" @click="jumpTo('https://www.nscc-tj.cn/zxjj/index')" />
            <img class="" src="../../assets/img/construction/四川大学.png" alt="" @click="jumpTo('https://www.scu.edu.cn/')" />
            <img class="" src="../../assets/img/construction/中国工程物理研究院计算机应用研究所.png" alt="" @click="jumpTo('https://www.caep.ac.cn/')" />
            <img class="" src="../../assets/img/construction/中国一重.png" alt="" @click="jumpTo('https://www.cfhi.com/')" />
            <img class="" src="../../assets/img/construction/北京航空航天大学.png" alt="" @click="jumpTo('https://www.buaa.edu.cn/')" />
            <img class="" src="../../assets/img/construction/福州大学.png" alt="" @click="jumpTo('https://www.fzu.edu.cn/')" />
            <img class="" src="../../assets/img/construction/中山大学.png" alt="" @click="jumpTo('https://www.sysu.edu.cn/')" />
            <img class="" src="../../assets/img/construction/信创海河实验室.png" alt="" @click="jumpTo('https://www.hl-it.cn/')" />
          </div>
        </div>
        <div class="mtb30">
          <titleLine :nameZh="'友情链接'" :nameEn="'/ SUPERIOR DEPARTMENT'"></titleLine>
          <div class="link-line">
            <div class="link-block" v-for="(friendLink, index) in friendList" :key="index">
              <span class="link-font" @click="jumpTo(friendLink.link)">{{ friendLink.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import titleLine from '@/components/cardList/titleLine.vue'
import dataStatics from "./dataStatics.vue";
import noticeAnnouncement from './noticeAnnouncement.vue'
import newsCenter from './newsCenter.vue'
import { jumpTo } from '@/utils'

import { Search } from '@element-plus/icons-vue';
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const searchValue = ref('')
const handleSearch = () => {
  if (searchValue.value.trim()) {
    router.push({
      path: '/data-search',
      query: { q: searchValue.value.trim() }
    })
  } else {
    router.push('/data-search')
  }
}
const newsDynamic = ref([])
const friendList = ref([])
onMounted(() => {
  newsDynamic.value = [
    {
      title: '材料计算设计软件天河培育计划',
      link: ''
    },
    {
      title: '津·天河科学计算奖',
      link: ''
    },
    {
      title: '结构数据总计82784条',
      link: ''
    },
    {
      title: '基组数据总计740846条',
      link: ''
    },
  ]
  friendList.value = [
    {
      title: '中华人民共和国信息部',
      link: 'https://wap.miit.gov.cn/'
    },
    {
      title: '中华人民共和国科学技术部',
      link: 'https://www.most.gov.cn/index.html'
    },
    {
      title: '国家数据局',
      link: 'https://www.nda.gov.cn/sjj/index_pc.html'
    },
    {
      title: '中华人民共和国财政部',
      link: 'https://www.mof.gov.cn/index.htm'
    },
  ]
})
</script>
<style scoped lang="scss">
.main-page-hero {
  margin-bottom: 30px;
  background-color: #f7f9fb;

  .main-page-img {
    width: 100%;
    margin-bottom: 12px;
    height: 400px;
  }

  .hero-new-block {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
    width: 1200px;
    padding-bottom: 12px;

    .hero-new {
      font-weight: 700;
      margin-right: 12px;
      width: 70px;
    }

    .marquee {
      overflow: hidden;
      white-space: nowrap;
      width: 1130px;
    }

    .marquee-inner {
      animation: marquee-inner 20s linear infinite;
    }

    .marquee-inner:hover {
      animation-play-state: paused;
      cursor: pointer;
    }

    .hero-block:hover {
      transform: translateY(-2px);
      transition: 0.5s;
      color: #1760c2;
    }

    @keyframes marquee-inner {
      0% {
        transform: translateX(20%);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    .hero-block {
      color: #333333;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      vertical-align: bottom;

      .hero-li {
        cursor: pointer;
      }

      .hero-li:hover {
        color: #2d8cf0;
      }

      .news-split {
        margin: 0 6px 0 12px;
        display: inline-block;
        background-color: #333333;
        height: 20px;
        width: 1px;
        transform: translateY(5px);
      }
    }

  }
}

.search-append {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.main-container {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
}

.mtb30 {
  margin: 30px 0;
}

.mt30 {
  margin-top: 30px;
}

.wp100 {
  width: 100%;
}

.data-production {
  margin-top: 24px;
  height: calc(100% - 128px);
  border: 1px solid #999999;
  border-radius: 12px;
  padding: 36px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .production-block {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    .block-content {
      margin-left: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;

      .block-title {
        width: 100%;
        font-size: 16px;
        font-weight: 700;
        color: #333333;
      }

      .block-desc {
        font-size: 16px;
        color: #999999;
      }
    }
  }
}

.function-card {
  position: relative;
  width: 100%;

  .texture-rt {
    position: absolute;
    width: 30vw;
    height: 30vh;
    background: url('@/assets/img/texture-rt.png') no-repeat;
    background-position-x: right;
    background-position-y: top;
    right: 0;
    top: -12px;
  }

  .texture-lb {
    position: absolute;
    width: 30vw;
    height: 30vh;
    background: url('@/assets/img/texture-lb.png') no-repeat;
    background-position-x: left;
    background-position-y: bottom;
    left: 0;
    bottom: -12px;
  }

  .source-search {
    display: flex;

    .source-left {
      flex: 1;
      z-index: 3;
    }

    .source-right {
      width: 300px;
      z-index: 2;
    }

    .source-input {
      width: 100%;
      height: 60px;

      .search-icon {
        margin-right: 6px;
        width: 16px;
        color: #1760c2;
        font-size: 16px
      }

      .search-font {
        color: #1760c2;
        font-size: 16px
      }
    }

    .new-material-box,
    .gene-engine-box {
      width: 280px;
      height: 150px;
      flex-wrap: wrap;
      margin: 0 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center !important;
      background-size: cover !important;
      position: relative;
      top: -16px;
      padding: 12px;

      img {
        position: absolute;
        top: 48px;
        margin: auto;
      }

      div {
        top: 24px;
        position: relative;
        text-align: center;
        font-weight: 700;
        color: #1760c2;
      }
    }

    .new-material-box {
      background: url('@/assets/img/new-material-bg.png') no-repeat;
    }

    .gene-engine-box {
      background: url('@/assets/img/gene-engine-bg.png') no-repeat;
    }

    .gene-engine-box:hover,
    .new-material-box:hover {
      cursor: pointer;
      transform: translateY(-5px) scale(105%);
      transition: all 0.3s ease;
    }
  }

  .data-sources-img {
    width: 724px;
    margin-top: 24px;
    height: 326px;
  }
}

.container-block {
  position: relative;
  display: flex;
  margin-bottom: 24px;

  .block-line {
    height: 32px;
  }

  .block-left {
    margin-right: 12px;
    min-width: 600px;
  }

  .block-right {
    flex: 1;
  }
}


.link-line {
  background-color: #ffffff;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 24px;
  margin-top: 24px;

  .link-block {
    font-size: 18px;
    color: #1760c2;
    width: calc(25% - 12px);
    font-weight: 700;
    display: flex;
    justify-content: center;

    .link-font {
      cursor: pointer;
    }

    .link-font:hover {
      color: #2d8cf0;
    }
  }
}

.introduce {
  width: 100%;
  background: url('@/assets/img/introduce-bg.png') no-repeat;
  background-size: calc(100% + 300px) calc(100% + 24px);
}

.pbt24 {
  padding: 24px 0;
}

.introduce-content {
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  .construction-box {
    background-color: #f8fbfe;
    padding: 24px 24px 0 24px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img {
      width: 24%;
      height: 100%;
      margin-bottom: 24px;
      object-fit: cover;
    }
  }
}

:deep(.el-input__wrapper) {
  border-right: none !important;
}

:deep(.el-input-group__append) {
  background-color: #ffffff !important;
  border: none !important;
}
</style>
