<template>
  <div class="application-page">
    <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
    <div v-if="loadError" class="error-message">
      <div class="error-icon">⚠️</div>
      <h3>无法加载应用</h3>
      <p>抱歉，该应用暂时无法访问。这可能是由于服务器配置或网络问题导致的。</p>
      <p class="error-detail">错误信息：{{ errorMessage }}</p>
      <button @click="retryLoad" class="retry-button">重试</button>
    </div>
    <iframe 
      v-else
      :src="iframeUrl" 
      frameborder="0" 
      class="application-iframe"
      @error="handleIframeError"
      @load="handleIframeLoad"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import breadCrumb from '@/components/breadCrumb/index.vue';
import { PrivateDomainDataSharingSystemData } from './detail/productData/PrivateDomainDataSharingSystemData';
import { FirstPrinciplesData } from './detail/productData/FirstPrinciplesData';
import { PhaseFieldData } from './detail/productData/PhaseFieldData';
import { MesoMtdData } from './detail/productData/MesoMtdData';
import { LiteratureData } from './detail/productData/LiteratureData';
import { DatabaseQueryToolData } from './detail/productData/DatabaseQueryToolData';
import { ReaxFFData } from './detail/productData/ReaxFFData';

const route = useRoute();
const loadError = ref(false);
const errorMessage = ref('');
const iframeKey = ref(0);

const isProduction = import.meta.env.PROD;

const urlMap = {
  FirstPrinciplesData: isProduction ? '/proxy/firstprinciples/' : 'http://172.31.6.90:5001/',
  PrivateDomainDataSharingSystemData: isProduction ? '/proxy/privatedomain/' : 'http://1.92.89.15:8080/',
  MesoMtdData: isProduction ? '/proxy/mesomtd/' : 'http://172.31.6.90:8000/',
  PhaseFieldData: isProduction ? '/proxy/phasefield/' : 'http://172.31.6.90:5002/',
  LiteratureData: isProduction ? '/proxy/literature/' : 'http://172.31.6.90:8010/',
  OrganicCathodePotentialEngine: 'http://mathtc.nscc-tj.cn/workflow_v3/work?project=133&category=5&name=%E6%9C%89%E6%9C%BA%E6%AD%A3%E6%9E%81%E6%9D%90%E6%96%99%E8%BF%98%E5%8E%9F%E7%94%B5%E4%BD%8D%E7%94%9F%E4%BA%A7%E5%BC%95%E6%93%8E&desc=%E6%9C%89%E6%9C%BA%E6%AD%A3%E6%9E%81%E6%9D%90%E6%96%99%E8%BF%98%E5%8E%9F%E7%94%B5%E4%BD%8D%E7%94%9F%E4%BA%A7%E5%BC%95%E6%93%8E',
  BatteryElectrodeSolubilityEngine: 'http://mathtc.nscc-tj.cn/workflow_v3/work?project=134&category=5&name=%E7%94%B5%E6%B1%A0%E7%94%B5%E6%9E%81%E6%9D%90%E6%96%99%E6%BA%B6%E8%A7%A3%E5%BA%A6%E7%94%9F%E4%BA%A7%E5%BC%95%E6%93%8E&desc=%E7%94%B5%E6%B1%A0%E7%94%B5%E6%9E%81%E6%9D%90%E6%96%99%E6%BA%B6%E8%A7%A3%E5%BA%A6%E7%94%9F%E4%BA%A7%E5%BC%95%E6%93%8E'
}

const productNameMap = {
  FirstPrinciplesData: FirstPrinciplesData.name,
  PrivateDomainDataSharingSystemData: PrivateDomainDataSharingSystemData.name,
  MesoMtdData: MesoMtdData.name,
  PhaseFieldData: PhaseFieldData.name,
  LiteratureData: LiteratureData.name,
  DatabaseQueryToolData: DatabaseQueryToolData.name,
  ReaxFFData: ReaxFFData.name,
};

const iframeUrl = computed(() => {
  const id = route.params.id as string;
  if (id in urlMap) {
    return urlMap[id];
  }
  return isProduction ? '/proxy/privatedomain/' : 'http://1.92.89.15:8080/';
});

const breadCrumbList = computed(() => {
  const from = route.query.from as string;
  const parentTitle = from === 'data-sharing' ? '数据共享' : '数据产品';
  const id = route.params.id as string;
  const productName = productNameMap[id] || '产品申请';
  return ['首页', parentTitle, productName];
});

const handleIframeError = () => {
  loadError.value = true;
  errorMessage.value = '无法连接到服务器，请检查网络连接或稍后重试';
};

const handleIframeLoad = () => {
  loadError.value = false;
  errorMessage.value = '';
};

const retryLoad = () => {
  loadError.value = false;
  errorMessage.value = '';
  iframeKey.value++;
};
</script>

<style scoped>
.application-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.application-iframe {
  width: 100%;
  height: calc(100vh - 60px);
  border: none;
}

.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  padding: 40px;
  text-align: center;
  background-color: #f5f5f5;
}

.error-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.error-message h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
}

.error-message p {
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;
  max-width: 600px;
}

.error-detail {
  font-size: 14px;
  color: #999;
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #fff;
  border-radius: 4px;
  word-break: break-all;
}

.retry-button {
  margin-top: 24px;
  padding: 12px 32px;
  font-size: 16px;
  color: #fff;
  background-color: #409eff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.retry-button:hover {
  background-color: #66b1ff;
}
</style>
