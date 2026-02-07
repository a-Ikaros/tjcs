<template>
  <div class="data-template-detail">
      <iframe :src="pdfUrl" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import twoDimensional from '@/assets/pdf/dataTemplate/two-dimensional-material-calculation-template.pdf'
import optoelectronic from '@/assets/pdf/dataTemplate/optoelectronic-material-calculation-template.pdf'
import perovskite from '@/assets/pdf/dataTemplate/perovskite-material-calculation-template.pdf'
import catalytic from '@/assets/pdf/dataTemplate/catalytic-material-template.pdf'
import metallic from '@/assets/pdf/dataTemplate/alloy-steel-composite-material-template.pdf'
import battery from '@/assets/pdf/dataTemplate/battery-organic-cathode-voltage-calculation-template.pdf'
import optoelectronics from '@/assets/pdf/dataTemplate/organic-optoelectronic-charge-transport-template.pdf'
import composite from '@/assets/pdf/dataTemplate/3d-weaving-composite-material-performance-template.pdf'
import stainlessSteel from '@/assets/pdf/dataTemplate/stainless-steel-composite-material-template.pdf'

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
