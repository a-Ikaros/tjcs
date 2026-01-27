<template>
  <div class="data-stand-detail">
      <iframe :src="pdfUrl" width="100%" height="100%" frameborder="0"></iframe>
      <!-- <CanvasPdf :url="pdfExample"></CanvasPdf> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import dataCommon from '@/assets/pdf/dataStandard/TCSTM 00120-2019 材料基因工程数据通则.pdf'
import dataMetadata from '@/assets/pdf/dataStandard/TCSTM 00837-2022 材料基因工程数据 元数据标准化原则与方法.pdf'
import dataMid from '@/assets/pdf/dataStandard/TCSTM 00838-2022 材料基因工程 材料数据标识（MID）.pdf'
import dataTerm from '@/assets/pdf/dataStandard/TCSTM 00839-2022 材料基因工程 术语.pdf'

const route = useRoute();
const pdfUrl = ref('');

// Map of IDs to PDF file paths in public folder
const pdfMap: Record<string, string> = {
  dataCommon: dataCommon,
  dataMetadata: dataMetadata,
  dataMid: dataMid,
  dataTerm: dataTerm
};

onMounted(() => {
  const id = route.params.id as string;
  pdfUrl.value = pdfMap[id] || pdfMap['dataCommon'];
});
</script>

<style scoped lang="scss">
.data-stand-detail {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
