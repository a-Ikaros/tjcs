<template>
    <div class="comment-box">
        <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
        <div class="comment-content">
            <div class="general-details-title">
                <div class="title">图解《“人工智能+制造”专项行动实施意见》</div>
                <div class="content">
                    <span>发布机构：工业和信息化部</span>
                    <span>发布时间：2026-01-08 08:53:00</span>
                </div>
            </div>
            <!-- <div class="pdf-container"> -->
            <!-- <h3>PDF 示例</h3> -->
            <!-- <iframe :src="pdfExample" width="100%" height="600px" frameborder="0"></iframe> -->
            <CanvasPdf :url="pdfExample"></CanvasPdf>
            <!-- </div> -->
            <!-- <PDFIframe :url="pdfExample"></PDFIframe> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import breadCrumb from '@/components/breadCrumb/index.vue'
import pdfExample from '@/assets/pdf/新闻稿.pdf'
import CanvasPdf from '@/views/updatesDetail/CanvasPdf.vue'
import PDFIframe from '@/views/updatesDetail/PDFIframe.vue'
const breadCrumbList = ['首页', '领域动态']

const form = ref({
    type: '',
    desc: '',
    append: ''
})

const submitUpload = () => {
}
</script>

<style lang="scss" scoped>
.comment-box {
    max-width: 1200px;
    margin: 0 auto;
}

.mb24 {
    margin-bottom: 24px;
}

.comment-content {
    margin-top: 24px;
    border: 2px solid #e5e5e5;
    border-radius: 12px;
    width: 100%;
    margin-bottom: 48px;
    position: relative;
    padding: 48px 80px;
    box-sizing: border-box;
    min-height: 80vh;
}

.general-details-title {
    padding-bottom: 14px;
    margin-bottom: 32px;
    border-bottom: 1px dashed #e5e5e5;

    .title {
        font-family: MicrosoftYaHei-Bold;
        font-size: 24px;
        color: #333;
        letter-spacing: 0;
        text-align: center;
        font-weight: 700;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        width: 100%;
        margin-top: 14px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #999;
    }
}

.pdf-container {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;

    h3 {
        margin-top: 0;
        color: #333;
    }

    iframe {
        width: 100%;
        height: 600px;
        border: none;
    }
}
</style>
