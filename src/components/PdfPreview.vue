<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'

// 配置 PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

// 定义props
const props = defineProps<{
  pdfPath: string
}>()

// 定义组件状态
const canvasRef = ref<HTMLCanvasElement | null>(null)
const loading = ref<boolean>(true)
const error = ref<string>('')

// 加载PDF首页
const loadPdfFirstPage = async (pdfPath: string) => {
  try {
    loading.value = true
    error.value = ''

    // 等待下一个tick确保canvas已渲染
    await new Promise(resolve => setTimeout(resolve, 0))

    // 准备canvas
    const canvas = canvasRef.value
    if (!canvas) {
      throw new Error('Canvas element not found')
    }

    // 加载PDF文档
    const loadingTask = pdfjsLib.getDocument(pdfPath)
    const pdf = await loadingTask.promise

    // 获取第一页
    const page = await pdf.getPage(1)

    // 获取原始viewport
    const originalViewport = page.getViewport({ scale: 1 })

    // 容器尺寸
    const containerWidth = 118
    const containerHeight = 88

    // 计算缩放比例，使PDF适配容器
    const scaleX = containerWidth / originalViewport.width
    const scaleY = containerHeight / originalViewport.height
    const scale = Math.min(scaleX, scaleY) // 使用较小的缩放比例确保完全适配

    // 应用缩放后的viewport
    const viewport = page.getViewport({ scale })

    const context = canvas.getContext('2d')
    if (!context) {
      throw new Error('Cannot get canvas context')
    }

    canvas.height = viewport.height
    canvas.width = viewport.width

    // 渲染PDF页面到canvas
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    }

    await page.render(renderContext).promise
    loading.value = false
  } catch (err) {
    console.error('PDF加载失败:', err)
    error.value = '加载PDF失败'
    loading.value = false
  }
}

onMounted(async () => {
  if (props.pdfPath) {
    await loadPdfFirstPage(props.pdfPath)
  }
})

// 监听pdfPath变化
watch(() => props.pdfPath, (newPath) => {
  if (newPath) {
    loadPdfFirstPage(newPath)
  }
})
</script>

<template>
  <div class="pdf-preview-container">
    <div v-show="loading" class="loading">
      加载中...
    </div>
    <div v-show="error" class="error">
      {{ error }}
    </div>
    <canvas ref="canvasRef" class="pdf-canvas" :style="{ display: loading || error ? 'none' : 'block' }"></canvas>
  </div>
</template>

<style scoped>
.pdf-preview-container {
  width: 118px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9eff8;
  overflow: hidden;
  position: relative;
}

.pdf-canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.loading, .error {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #999;
}

.error {
  color: #ff4d4f;
}
</style>