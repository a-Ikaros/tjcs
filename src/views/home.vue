<template>
  <div class="wrapper">
    <vHeader/>
    <div class="main-menu">
      <vSidebar/>
    </div>

    <div class="content-box">
      <div class="content">
        <router-view v-slot="{ Component }">
          <keep-alive :include="tabs.nameList">
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </div>
    </div>
    <div class="page-footer">
      <div class="footer-title">材料计算设计专用数据资源节点</div>
      <div class="footer-copyright">版权所有@2025 国家超级计算天津中心 保留一切权利 津IPC备12008252号-1</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useTabsStore} from '@/store/tabs';
import vHeader from '@/components/header.vue';
import vSidebar from '@/components/sidebar.vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();
const tabs = useTabsStore();

// 调试：监听 tabs.nameList 的变化
watch(() => tabs.nameList, (newList) => {
  console.log('Keep-alive include list:', newList);
}, { immediate: true });
</script>

<style lang="scss">
.wrapper {
  height: 100vh;
  overflow-y: scroll;
}
.main-menu {
  position: sticky;
  top: 70px;
  height: 70px;
  display: flex;
  font-size: 16px;
  background-color: #063e8b;
  z-index: 9;
}
.content-box {
  right: 0;
  top: 150px;
  bottom: 0;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #ffffff;
}

.content {
  width: auto;
  height: calc(100% - 24px);
  padding: 0;
  overflow-y: scroll;
  box-sizing: border-box;
  margin: auto;
}

.content::-webkit-scrollbar {
  width: 0;
}

.page-footer {
  width: 100%;
  height: 120px;
  background-color: #44546a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .footer-title {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
  }

  .footer-copyright {
    font-size: 16px;
    font-weight: 500;
    color: #999999;
    margin-top: 24px;
  }
}


</style>
