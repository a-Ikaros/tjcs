<template>
  <div class="data-template-detail">
      <iframe :src="pdfUrl" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import twoDimensional from '@/assets/pdf/dataTemplate/二维材料计算数据模板.pdf'
import optoelectronic from '@/assets/pdf/dataTemplate/光电材料计算数据模板.pdf'
import perovskite from '@/assets/pdf/dataTemplate/钙钛矿材料计算数据模板.pdf'
import catalytic from '@/assets/pdf/dataTemplate/催化材料数据模板.pdf'
import metallic from '@/assets/pdf/dataTemplate/合金钢综合材料数据模版.pdf'
import battery from '@/assets/pdf/dataTemplate/电池有机正极材料电压计算数据模板.pdf'
import optoelectronics from '@/assets/pdf/dataTemplate/有机光电材料电荷传输计算数据模板.pdf'
import composite from '@/assets/pdf/dataTemplate/三维编织复合材料性能数据模板.pdf'
import stainlessSteel from '@/assets/pdf/dataTemplate/不锈钢综合材料数据模版.pdf'

const route = useRoute();
const pdfUrl = ref('');

const pdfMap: Record<string, string> = {
  'two-dimensional': twoDimensional,
  'optoelectronic': optoelectronic,
  'perovskite': perovskite,
  'catalytic': catalytic,
  'metallic': metallic,
  'battery': battery,
  'optoelectronics': optoelectronics,
  'composite': composite,
  'stainless-steel': stainlessSteel
};

onMounted(() => {
  const id = route.params.id as string;
  pdfUrl.value = pdfMap[id] || pdfMap['two-dimensional'];
});
</script>

<style scoped lang="scss">
.data-template-detail {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
