<script lang="ts" setup>
import dataProductUser from '@/assets/img/dataProduct/product-icon-user.png'
import dataProductTime from '@/assets/img/dataProduct/product-icon-time.png'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import PdfPreview from '@/components/PdfPreview.vue'
import ProductionBlock from '@/components/ProductionBlock.vue'
import { Search } from '@element-plus/icons-vue'

// 导入PDF文件
import pdf1 from '@/assets/pdf/dataStandard/TCSTM 00120-2019 材料基因工程数据通则.pdf'
import pdf2 from '@/assets/pdf/dataStandard/TCSTM 00837-2022 材料基因工程数据 元数据标准化原则与方法.pdf'
import pdf3 from '@/assets/pdf/dataStandard/TCSTM 00838-2022 材料基因工程 材料数据标识（MID）.pdf'
import pdf4 from '@/assets/pdf/dataStandard/TCSTM 00839-2022 材料基因工程 术语.pdf'

const router = useRouter()

// 搜索关键词
const searchValue = ref('')

const curProductList = ref([
    {
        id: 'dataCommon',
        title: 'TCSTM 00120-2019 材料基因工程数据通则',
        pdfPath: pdf1,
        user: '材料计算设计专用数据资源节点',
        time: '2025.10.17',
        link: ''
    },
    {
        id: 'dataMetadata',
        title: 'TCSTM 00837-2022 材料基因工程数据 元数据标准化原则与方法',
        pdfPath: pdf2,
        user: '材料计算设计专用数据资源节点',
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

// 根据搜索关键词过滤列表
const filteredProductList = computed(() => {
    if (!searchValue.value.trim()) {
        return curProductList.value
    }
    const keyword = searchValue.value.toLowerCase()
    return curProductList.value.filter(item =>
        item.title.toLowerCase().includes(keyword)
    )
})

const jumpToDetail = (productId) => {
    const url = router.resolve({ name: 'data-stand-detail', params: { id: productId } }).href;
    window.open(url, '_blank', 'noreferrer');
}
</script>
<template>
    <div class="data-stand-container">
        <!-- 搜索框 -->
        <div class="search-container">
            <el-input
                v-model="searchValue"
                placeholder="请输入标准名称进行搜索"
                clearable
                :prefix-icon="Search"
                class="search-input"
            />
        </div>

        <!-- 列表内容 -->
        <div class="col-content">
            <ProductionBlock 
                v-for="(item, index) in filteredProductList" 
                :key="index"
                :item="item"
                @click="jumpToDetail(item.id || (index + 4).toString())"
            >
                <template #icon>
                    <div class="pdf-preview">
                        <PdfPreview :pdf-path="item.pdfPath" />
                    </div>
                </template>
            </ProductionBlock>

            <!-- 无搜索结果提示 -->
            <div v-if="filteredProductList.length === 0" class="no-result">
                <el-empty description="未找到匹配的数据标准" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.data-stand-container {
    width: 100%;
}

.search-container {
    width: 100%;
    margin: 0 24px 24px;
    box-sizing: border-box;

    .search-input {
        width: 100%;
        height: 48px;

        :deep(.el-input__wrapper) {
            height: 48px;
        }
    }
}

.col-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 24px 24px;

    :deep(.production-block) {
        width: calc(50% - 60px);
        margin-bottom: 24px;
    }

    .pdf-preview {
        width: 118px;
        height: 88px;
    }

    .no-result {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 60px 0;
    }
}
</style>
