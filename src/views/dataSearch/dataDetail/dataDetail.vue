<template>
    <div class="data-detail-page">
        <!-- 顶部返回区域 -->
        <div class="detail-header">
            <h1 class="page-title">查看数据</h1>
            <el-button type="text" class="back-btn" @click="handleBack">
                <el-icon>
                    <ArrowLeft />
                </el-icon>
                <span>返回</span>
            </el-button>
        </div>

        <!-- 主要内容区域 -->
        <div class="detail-content">
            <!-- 左侧数据目录 -->
            <div class="data-catalog">
                <h3 class="catalog-title">数据目录</h3>
                <ul class="catalog-list">
                    <li v-for="item in Object.keys(apiResponse)" :key="item" class="catalog-item"
                        :class="{ active: activeSection === item }" :data-id="item" @click="scrollToSection($event)">
                        <img :src="activeSection === item ? fileIconSel : fileIcon" alt="" />
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>

            <!-- 右侧数据详情 -->
            <div class="data-info" ref="dataInfoRef" @scroll="handleScroll">
                <template v-for="item in Object.keys(apiResponse)" :key="item">
                    <div v-if="apiResponse[item]?.isFile || item === 'Formula'" class="info-section" :id="item">
                        <h3 class="sub-section-title">
                            {{ item }}
                            <el-button type="text" class="download-btn" @click="handleDownload">
                                <el-icon>
                                    <Download />
                                </el-icon>
                                <span>下载文件</span>
                            </el-button>
                        </h3>
                        <div v-if="item === 'Formula'" class="tdb-content">
                            <pre class="tdb-text">{{ apiResponse[item] || '暂无内容' }}</pre>
                        </div>
                        <div style="margin-bottom: 12px;">
                            <div class="meta-label">fileName:</div>
                            <div class="meta-value">{{ apiResponse[item]?.fileName }}</div>
                        </div>
                        <div v-if="apiResponse[item]?.needShow !== 'false'" class="tdb-content">
                            <pre class="tdb-text">{{ apiResponse[item].content || '暂无TDB文件内容' }}</pre>
                        </div>

                    </div>
                    <div v-else-if="(typeof apiResponse[item] !== 'object')" :id="item">
                        <div class="meta-label">{{ item }}:</div>
                        <div class="meta-value">{{ apiResponse[item] }}</div>
                    </div>
                    <!-- 基础信息 -->
                    <div v-else class="info-section" :id="item">
                        <h3 class="sub-section-title">{{catalogItems.find(cat => cat.id === item)?.label || item}}
                        </h3>
                        <div class="section-content">
                            <div class="data-meta">
                                <div v-for="(value, key) in apiResponse[item]" :key="key" class="meta-item">
                                    <div class="meta-label">{{ Array.isArray(apiResponse[item]) ? 'source' + key
                                        : formatFieldLabel(key) }}:</div>
                                    <div class="meta-value">{{ formatFieldValue(value) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, Download } from '@element-plus/icons-vue'
import fileIcon from '@/assets/img/dataSearch/icon_文件.png'
import fileIconSel from '@/assets/img/dataSearch/icon_文件1.png'
import { downloadFileById, getDataDetail } from '@/api/dataSearch'

const router = useRouter()
const route = useRoute()

// 是否展开描述
const isExpanded = ref(false)

// 当前激活的目录项
const activeSection = ref('basic-info')

// 右侧数据详情区域引用
const dataInfoRef = ref<HTMLElement | null>(null)

// API响应数据
interface ApiResponse {
    data?: Record<string, any> | null
    source?: Record<string, any> | null
    fileData?: Record<string, any> | null
}

const apiResponse = ref<ApiResponse>({

})


// 动态生成目录项
const catalogItems = computed(() => {
    const items = []
    const labelMap: Record<string, string> = {
        data: '基础信息',
        source: '数据来源',
        fileData: 'TDB文件'
    }
    for (const key in Object.keys(apiResponse.value)) {
        if (apiResponse.value[key]) {
            items.push({ id: key, label: labelMap[key] || key })
        }
    }
    return items
})

// 格式化字段名称（将驼峰转换为可读的中文标签）
const formatFieldLabel = (key: string): string => {
    const labelMap: Record<string, string> = {
        id: 'ID',
        createTime: '创建时间',
        createBy: '创建人',
        modifyTime: '修改时间',
        modifyBy: '修改人',
        // potentialType: '势函数类型',
        elements: '元素',
        epsilon: 'Epsilon',
        sigma: 'Sigma',
        reference: '来源'
    }
    return labelMap[key] || key
}

// 格式化字段值
const formatFieldValue = (value: any): string => {
    if (!value) {
        return '-'
    }
    if (Array.isArray(value)) {
        return value.join(', ')
    }
    if (typeof value === 'object') {
        return JSON.stringify(value)
    }
    return String(value)
}

// 滚动到指定区域
const scrollToSection = (event) => {
    // 获取点击的目录项
    const target = event.currentTarget
    const sectionId = target.getAttribute('data-id')
    if (!sectionId) return

    // 更新激活状态
    activeSection.value = sectionId

    // 找到对应的内容区域
    const section = document.getElementById(sectionId)
    if (!section || !dataInfoRef.value) return

    // 获取右侧内容滚动容器
    const dataInfoContainer = dataInfoRef.value

    // 计算目标section相对于滚动容器的位置
    const containerRect = dataInfoContainer.getBoundingClientRect()
    const sectionRect = section.getBoundingClientRect()

    // 计算需要滚动的距离（section顶部相对于容器顶部的偏移 + 容器当前的滚动位置）
    const targetScrollTop = dataInfoContainer.scrollTop + (sectionRect.top - containerRect.top) - 20 // 减20px留点间距

    // 平滑滚动到指定位置
    dataInfoContainer.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
    })
}

// 监听滚动，更新激活的目录项
const handleScroll = () => {
    if (!dataInfoRef.value) return

    const container = dataInfoRef.value
    const containerRect = container.getBoundingClientRect()
    const scrollTop = container.scrollTop

    // 遍历所有section，找到当前在视口中的section
    for (let i = catalogItems?.value.length - 1; i >= 0; i--) {
        const sectionId = catalogItems.value[i].id
        const section = document.getElementById(sectionId)

        if (section) {
            const sectionRect = section.getBoundingClientRect()
            // 如果section的顶部在容器顶部以上或在容器顶部附近（允许50px的容差）
            if (sectionRect.top <= containerRect.top + 50) {
                activeSection.value = sectionId
                break
            }
        }
    }
}

// 返回上一页
const handleBack = () => {
    router.back()
}

// 下载文件
const handleDownload = async () => {
    try {
        const { data } = await downloadFileById({ rule: route.params.dataType as string, id: route.params.id as string })
        // const url = `${import.meta.env.VITE_BASE_URL}potdata/${currentDataType.value}/download?id=${row.id}&satoken=${token}`
        window.open(data?.url, '_blank', 'noopener,noreferrer')
    } catch (err) {
        console.error('下载失败:', err)
    }
}

onMounted(async () => {
    const { dataType, id } = route.params
    const res = await getDataDetail({ rule: dataType as string, id: id as string })
    apiResponse.value = res.data

    // 设置默认激活的section
    if (apiResponse.value) {
        activeSection.value = Object.keys(apiResponse.value)[0]
    }
})
</script>

<style scoped lang="scss">
.data-detail-page {
    width: 100%;
    background-color: #f5f7fa;
    padding: 20px 0;
}

.detail-header {
    width: 1200px;
    margin: 0 auto 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.back-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    color: #606266;

    &:hover {
        color: #409eff;
    }
}

.page-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: #303133;
}

.detail-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    height: calc(100vh - 240px);
    /* 设置固定高度，减去header和padding的高度 */
    position: relative;
}

.data-catalog {
    width: 240px;
    background-color: #f7f9fb;
    padding: 20px;
    border-right: 1px solid #ebeef5;
    flex-shrink: 0;
    /* 防止目录被压缩 */
    position: sticky;
    top: 0;
    height: 100%;
    overflow-y: auto;
    /* 目录内容过长时可滚动 */
}

.catalog-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 20px;
    color: #303133;
}

.catalog-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.catalog-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    margin-bottom: 8px;
    border-radius: 4px;
    cursor: pointer;
    color: #606266;
    transition: all 0.3s;

    img {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
    }

    &:hover {
        background-color: #ecf5ff;
        color: #409eff;
    }

    &.active {
        background-color: #ecf5ff;
        color: #409eff;
        border-left: 4px solid #409eff;
        padding-left: 12px; // 补偿border-left的宽度
    }
}

.data-info {
    flex: 1;
    padding: 30px;
    overflow-y: auto;
    /* 右侧内容可独立滚动 */
    //height: 100%;
}

.info-section {
    margin-bottom: 40px;
}

.sub-section-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 20px;
    color: #303133;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section-content {
    line-height: 1.8;
}

.data-description {
    margin-bottom: 20px;
    color: #606266;

    &.expanded {
        white-space: normal;
    }
}

.expand-btn {
    color: #409eff;
    padding: 0;
    margin-left: 10px;
}

.data-meta {
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
}

.meta-item {
    margin: 8px 0;
}

.meta-label {
    font-weight: bold;
    color: #303133;
    display: block;
}

.meta-value {
    color: #606266;
}

.source-item {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
}

.download-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #409eff;
    font-size: 14px;
}

.tdb-content {
    background-color: #f7f9fb;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #ebeef5;
}

.tdb-text {
    padding: 20px;
    margin: 0;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.6;
    color: #303133;
    white-space: pre-wrap;
    word-break: break-all;
}

.file-item {
    margin-bottom: 12px;
}
</style>