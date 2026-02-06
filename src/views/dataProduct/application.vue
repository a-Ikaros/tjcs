<template>
  <div class="application-page">
    <iframe :src="iframeUrl" frameborder="0" class="application-iframe"></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PrivateDomainDataSharingSystemData } from './detail/productData/PrivateDomainDataSharingSystemData';

const route = useRoute();
const urlMap = {
  FirstPrinciplesData: 'http://172.31.6.90:5001/',
  PrivateDomainDataSharingSystemData: 'http://1.92.89.15:8080/',
  MesoMtdData: 'http://172.31.6.90:8000/',
  PhaseFieldData: 'http://172.31.6.90:5002/',
  OrganicCathodePotentialEngine: 'http://mathtc.nscc-tj.cn/workflow_v3/work?project=133&category=5&name=%E6%9C%89%E6%9C%BA%E6%AD%A3%E6%9E%81%E6%9D%90%E6%96%99%E8%BF%98%E5%8E%9F%E7%94%B5%E4%BD%8D%E7%94%9F%E4%BA%A7%E5%BC%95%E6%93%8E&desc=%E6%9C%89%E6%9C%BA%E6%AD%A3%E6%9E%81%E6%9D%90%E6%96%99%E8%BF%98%E5%8E%9F%E7%94%B5%E4%BD%8D%E7%94%9F%E4%BA%A7%E5%BC%95%E6%93%8E',
  BatteryElectrodeSolubilityEngine: 'http://mathtc.nscc-tj.cn/workflow_v3/work?project=134&category=5&name=%E7%94%B5%E6%B1%A0%E7%94%B5%E6%9E%81%E6%9D%90%E6%96%99%E6%BA%B6%E8%A7%A3%E5%BA%A6%E7%94%9F%E4%BA%A7%E5%BC%95%E6%93%8E&desc=%E7%94%B5%E6%B1%A0%E7%94%B5%E6%9E%81%E6%9D%90%E6%96%99%E6%BA%B6%E8%A7%A3%E5%BA%A6%E7%94%9F%E4%BA%A7%E5%BC%95%E6%93%8E'
}
const iframeUrl = computed(() => {
  const id = route.params.id as string;
  if (id in urlMap) {
    return urlMap[id];
  }
  return 'http://1.92.89.15:8080/';
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
  height: 100%;
  border: none;
}
</style>
