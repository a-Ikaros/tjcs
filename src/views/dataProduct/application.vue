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
const urlMap={
  FirstPrinciplesData:'http://172.31.6.90:5001/',
  PrivateDomainDataSharingSystemData:'http://1.92.89.15:8080/',
  MesoMtdData:'http://172.31.6.90:8000/',
  PhaseFieldData:'http://172.31.6.90:5002/'
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
