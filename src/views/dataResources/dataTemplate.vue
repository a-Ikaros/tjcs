<script lang="ts" setup>
import dataProductUser from '@/assets/img/dataProduct/product-icon-user.png'
import dataProductTime from '@/assets/img/dataProduct/product-icon-time.png'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import ProductionBlock from '@/components/ProductionBlock.vue'
import { Search } from '@element-plus/icons-vue'

import twoDimensional from '@/assets/pdf/dataTemplate/two-dimensional-material-calculation-template.pdf'
import optoelectronic from '@/assets/pdf/dataTemplate/optoelectronic-material-calculation-template.pdf'
import perovskite from '@/assets/pdf/dataTemplate/perovskite-material-calculation-template.pdf'
import catalytic from '@/assets/pdf/dataTemplate/catalytic-material-template.pdf'
import metallic from '@/assets/pdf/dataTemplate/alloy-steel-composite-material-template.pdf'
import battery from '@/assets/pdf/dataTemplate/battery-organic-cathode-voltage-calculation-template.pdf'
import optoelectronics from '@/assets/pdf/dataTemplate/organic-optoelectronic-charge-transport-template.pdf'
import composite from '@/assets/pdf/dataTemplate/3d-weaving-composite-material-performance-template.pdf'
import stainlessSteel from '@/assets/pdf/dataTemplate/stainless-steel-composite-material-template.pdf'

const router = useRouter()

const searchValue = ref('')

const curProductList = ref([
    {
        id: 'two-dimensional',
        title: '二维材料计算数据模板',
        pdfPath: twoDimensional,
        user: '材料计算设计专用数据资源节点',
        time: '2025.10.17',
        link: ''
    },
    {
        id: 'optoelectronic',
        title: '光电材料计算数据模板',
        pdfPath: optoelectronic,
        user: '材料计算设计专用数据资源节点',
        time: '2025.10.17',
    },
    {
        id: 'perovskite',
        title: '钙钛矿材料计算数据模板',
        pdfPath: perovskite,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    },
    {
        id: 'catalytic',
        title: '催化材料数据模板',
        pdfPath: catalytic,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    },
    {
        id: 'metallic',
        title: '合金钢综合材料数据模版',
        pdfPath: metallic,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    },
    {
        id: 'battery',
        title: '电池有机正极材料电压计算数据模板',
        pdfPath: battery,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    },
    {
        id: 'optoelectronics',
        title: '有机光电材料电荷传输计算数据模板',
        pdfPath: optoelectronics,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    },
    {
        id: 'composite',
        title: '三维编织复合材料性能数据模板',
        pdfPath: composite,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    },
    {
        id: 'stainless-steel',
        title: '不锈钢综合材料数据模版',
        pdfPath: stainlessSteel,
        user: '材料计算设计专用数据资源节点',
        time: '2025.12.25'
    }
])

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
    const url = router.resolve({ name: 'data-template-detail', params: { id: productId } }).href;
    window.open(url, '_blank', 'noreferrer');
}
</script>
<template>
    <div class="data-template-container">
        <div class="search-container">
            <el-input
                v-model="searchValue"
                placeholder="请输入模板名称进行搜索"
                clearable
                :prefix-icon="Search"
                class="search-input"
            />
        </div>

        <div class="col-content">
            <ProductionBlock 
                v-for="(item, index) in filteredProductList" 
                :key="index"
                :item="item"
                @click="jumpToDetail(item.id || (index + 1).toString())"
            >
                <template #icon>
                    <div class="pdf-preview">
                        <div class="pdf-placeholder">
                            <div class="pdf-icon-wrapper">
                                <el-icon :size="48" color="#ff4d4f">
                                    <Document />
                                </el-icon>
                                <span class="pdf-label">PDF</span>
                            </div>
                            <div class="pdf-title">{{ item.title }}</div>
                        </div>
                    </div>
                </template>
            </ProductionBlock>

            <div v-if="filteredProductList.length === 0" class="no-result">
                <el-empty description="未找到匹配的数据模板" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.data-template-container {
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
        background-color: #f7f9fb;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
    }

    .pdf-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
    }

    .pdf-icon-wrapper {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .pdf-label {
        position: absolute;
        bottom: -2px;
        right: -8px;
        background-color: #ff4d4f;
        color: white;
        font-size: 8px;
        padding: 2px 4px;
        border-radius: 2px;
        font-weight: 600;
    }

    .pdf-title {
        margin-top: 8px;
        font-size: 10px;
        color: #333333;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
