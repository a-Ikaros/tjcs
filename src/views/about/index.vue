<template>
  <div class="comment-box">
    <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
    <div class="comment-content">
      <div class="mb24">
        <span class="col-online-icon"></span>
        <span class="about-title">关于我们</span>
      </div>
      <div class="about-intro">
          <p>材料计算设计专用数据资源节点以国家超级计算天津中心为依托单位，联合杭州市北京航空航天大学国际创新研究院（北京航空航天大学国际创新学院）、四川大学、中国工程物理研究院计算机应用研究所、天津重型装备工程研究有限公司、福州大学、中山大学、先进计算与关键软件（信创）海河实验室进行建设。</p>
       <p>节点主要职责包括：</p>
       <p>1、构建超智融合与存算安全协同的支撑新材料计算设计专用数据资源应用平台。依托我国新一代国产E级超级计算和"十三五"国家材料基因工程专项成果，实现多尺度、多来源、多主题的材料共性基础数据的规模化采集、生产、整合和积累；</p>
       <p>2、采集整合和生产积累用于支撑材料微观计算设计的结构、赝势、基组、原子势函数（经验势和机器学习势）等数据；用于支撑材料介观计算的粗粒化势函数、支撑材料相图计算与相场模拟的热力学、动力学、多物理场耦合参数等数据；用于支撑材料宏观计算设计的力学性能、热物性、相变、电学性能等数据；以及用于支撑材料计算设计与智能研发的机器学习用数据；</p>
       <p>3、研发数据采集工具和面向数据生产的大规模计算与智能分析工作流引擎。推动数据采集生产工具服务化，并通过定期完善更新与按需采集生产相结合的持续数据供给策略，保障共性基础数据持续供给。</p>
      </div>
      <div class="mb24">
        <span class="col-online-icon"></span>
        <span class="about-title">联系方式</span>
      </div>
      <div class="about-link">
        <div class="link-detail">
          <div class="detail-card">
            <img class="card-img" :src="aboutPhone" alt="电话" />
            <div class="card-text">
              <div>电话</div>
              <div class="text-content">022-65375552</div>
            </div>
          </div>
          <div class="detail-card">
            <img class="card-img" :src="aboutEmail" alt="电话" />
            <div class="card-text">
              <div>邮箱</div>
              <div class="text-content">cnmge_msdb@nscc-tj.cn</div>
            </div>
          </div>
          <div class="detail-card">
            <img class="card-img" :src="aboutAddress" alt="电话" />
            <div class="card-text">
              <div>地址</div>
              <div class="text-content">天津经济技术开发区信环西路10号</div>
            </div>
          </div>
        </div>
        <div class="link-map">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import breadCrumb from '@/components/breadCrumb/index.vue'
import aboutPhone from '@/assets/img/about/about-phone.png'
import aboutEmail from '@/assets/img/about/about-email.png'
import aboutAddress from '@/assets/img/about/about-address.png'

const breadCrumbList = ['首页', '关于我们']

const form = ref({
  type: '',
  desc: '',
  append: ''
})
const submitUpload = () => {
}
</script>

<style lang="scss" scoped>
.comment-box {
  max-width: 1200px;
  margin: 0 auto;
}

.mb24 {
  margin-bottom: 24px;
}

.comment-content {
  margin-top: 24px;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 48px;
  position: relative;
  padding: 48px 80px;
  box-sizing: border-box;
}

.col-online-icon {
  display: inline-block;
  background-color: #1760c2;
  ;
  width: 8px;
  height: 24px;
  margin-right: 12px;
  vertical-align: text-bottom;
}

.about-title {
  font-size: 20px;
  font-weight: 600;
}

.about-intro {
  width: calc(100% - 96px);
  //height: 35vh;
  background-color: #f8f9fb;
  margin-bottom: 24px;
  background-image: url("../../assets/img/about/about-bg.png");
  background-size: cover;
  color: #666666;
  padding: 48px;
  font-size: 20px;
  line-height: 32px;
  text-indent: 2em;
}

.about-link {
  display: flex;
  width: 100%;
  height: 40vh;

  .link-detail {
    width: calc(33% - 24px);

    .detail-card {
      height: 12vh;
      display: flex;
      align-items: center;
      background-color: #f7f9fb;
      border-radius: 12px;
      margin-right: 24px;
      margin-bottom: 24px;

      .card-img {
        display: inline-block;
        width: 18%;
        margin: 0 24px;
      }

      .card-text {
        display: inline-block;
        font-size: 16px;
        padding-right: 24px;

        .text-content {
          color: #1760c2;
          margin-top: 5px;
        }
      }
    }
  }

  .link-map {
    flex: 1;
    height: calc(36vh + 48px);
    background-image: url("../../assets/img/about/about-map.png");
    background-size: cover;
    border-radius: 12px;
  }
}
</style>
