<template>
  <div class="application-page">
    <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
    <iframe :src="iframeUrl" frameborder="0" class="application-iframe"></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
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
</style>
