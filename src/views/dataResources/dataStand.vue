<script lang="ts" setup>
import dataProductUser from '@/assets/img/dataProduct/product-icon-user.png'
import dataProductTime from '@/assets/img/dataProduct/product-icon-time.png'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import PdfPreview from '@/components/PdfPreview.vue'

// 导入PDF文件
import pdf1 from '@/assets/pdf/dataStandard/TCSTM 00120-2019 材料基因工程数据通则.pdf'
import pdf2 from '@/assets/pdf/dataStandard/TCSTM 00837-2022 材料基因工程数据 元数据标准化原则与方法.pdf'
import pdf3 from '@/assets/pdf/dataStandard/TCSTM 00838-2022 材料基因工程 材料数据标识（MID）.pdf'
import pdf4 from '@/assets/pdf/dataStandard/TCSTM 00839-2022 材料基因工程 术语.pdf'

const router = useRouter()

const curProductList = ref([
    {
        id: 'dataCommon',
        title: 'TCSTM 00120-2019 材料基因工程数据通则',
        pdfPath: pdf1,
        user: '新材料大数据中心',
        time: '2025.10.17',
        link: ''
    },
    {
        id: 'dataMetadata',
        title: 'TCSTM 00837-2022 材料基因工程数据 元数据标准化原则与方法',
        pdfPath: pdf2,
        user: '新材料大数据中心',
        time: '2025.10.17',
    },
    {
        id: 'dataMid',
        title: 'TCSTM 00838-2022 材料基因工程 材料数据标识（MID）',
        pdfPath: pdf3,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    },
    {
        id: 'dataTerm',
        title: 'TCSTM 00839-2022 材料基因工程 术语',
        pdfPath: pdf4,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    }
])
const jumpToDetail = (productId) => {
    const url = router.resolve({ name: 'data-stand-detail', params: { id: productId } }).href;
    window.open(url, '_blank', 'noreferrer');
}
</script>
<template>
    <div class="col-content">
        <div class="production-block" v-for="(item, index) in curProductList" :key="index"
            @click="jumpToDetail(item.id || (index + 4).toString())">
            <div class="pdf-preview">
                <PdfPreview :pdf-path="item.pdfPath" />
            </div>
            <div class="block-content">
                <div class="block-title">
                    <el-text line-clamp="2" class="block-title">
                        {{ item.title }}
                    </el-text>
                </div>
                <div class="block-desc block-info">
                    <img :src="dataProductUser" alt="用户" class="mr6"> <span class="mr12">{{ item.user }}</span>
                    <img :src="dataProductTime" alt="时间" class="mr6"> <span>{{ item.time }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.col-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 24px 24px;

    .production-block {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: calc(50% - 60px);
        background-color: #f7f9fb;
        padding: 24px;
        margin: 0 0 24px 0;
        height: 10vh;
        .pdf-preview {
            width: 118px;
            height: 88px;
        }
        .block-content {
            margin-left: 24px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .block-title {
                width: 100%;
                font-size: 16px;
                font-weight: 700;
                color: #333333;
            }

            .block-desc {
                font-size: 12px;
                color: #999999;
            }

            .block-info {
                display: flex;
                align-items: center;
            }
        }
    }

    .production-block:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
        transition: box-shadow;
        cursor: pointer;
    }
}
</style>
