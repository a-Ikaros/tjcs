<template>
  <iframe :src="src" frameborder="0" width="100%" height="100%" class="pdf-iframe"></iframe>
</template>
<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
  url: {
    type: String,
    required: true
  }
})
const emit = defineEmits(["pdfload"])
const src = computed(() => {
    // 拼接url路径，如果你的url有参数，那么需要URL编码一下
  return `/web-pdfjs2.6.347/web/viewer.html?file=${props.url}`
})
</script>