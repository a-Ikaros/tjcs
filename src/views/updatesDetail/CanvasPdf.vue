<template>
  <div ref="pdfRef" class="pdf-view"></div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue"
import PdfjsWorker from "pdfjs-dist/build/pdf.worker.js?worker"
import { offset } from "@antv/x6/lib/common/dom/position"
const props = defineProps({
  url: { type: String, required: true}
})
const pdfRef = ref(null)
// 侦听props的url改变，则立即切换渲染pdf
watch(
  () => props.url,
  () => {
    setTimeout(() => init(), 1)
  },
  { immediate: true }
)

// 渲染pdf
async function init() {
   // 异步加载pdf.js
  const PDFJS = await import("pdfjs-dist/build/pdf.js")
  if (typeof window !== "undefined" && "Worker" in window) {
    PDFJS.GlobalWorkerOptions.workerPort = new PdfjsWorker()
  }
  // 加载文档
  let loadingTask = PDFJS.getDocument({ url: props.url })
  loadingTask.__PDFDocumentLoadingTask = true
  const pdf = await loadingTask.promise  // 使用await等待加载完毕
  // 循环渲染每一页
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    let pixelRatio = 3
    let viewport = page.getViewport({ scale: 1 })
    let divPage = window.document.createElement("div") // canvas的外层div
    // 使用canvas渲染
    let canvas = divPage.appendChild(window.document.createElement("canvas"))
    divPage.className = "page"
    pdfRef.value.appendChild(divPage)
    canvas.width = viewport.width * pixelRatio  // 计算宽度
    canvas.height = viewport.height * pixelRatio
    let renderContext = {
      canvasContext: canvas.getContext("2d"),
      viewport: viewport,
      transform: [pixelRatio, 0, 0, pixelRatio, 0, 0]
    }
    await page.render(renderContext).promise // 一页一页的渲染
    divPage.className = "page complete"
  }
}
</script>
<style scoped lang="scss">
.pdf-view {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
// 组件样式
:deep() {
  .page {
    position: relative;
    canvas {
      width: 100%;
    }
  }
}
</style>