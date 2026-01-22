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
                    <li
                        v-for="item in catalogItems"
                        :key="item.id"
                        class="catalog-item"
                        :class="{ active: activeSection === item.id }"
                        :data-id="item.id"
                        @click="scrollToSection($event)"
                    >
                        <img :src="activeSection === item.id ? fileIconSel : fileIcon" alt=""/>
                        <span>{{ item.label }}</span>
                    </li>
                </ul>
            </div>

            <!-- 右侧数据详情 -->
            <div class="data-info" ref="dataInfoRef" @scroll="handleScroll">
                <!-- 基本信息 -->
                <div class="info-section" id="basic-info">
                    <h3 class="sub-section-title">基本信息</h3>
                    <h4 class="">{{ dataDetail.name }}</h4>
                    <div class="section-content">
                        <div class="data-description">
                            {{ dataDetail.description }}
                            <el-button type="text" class="expand-btn" @click="isExpanded = !isExpanded">
                                {{ isExpanded ? '收起' : '展开' }}
                            </el-button>
                        </div>

                        <div class="data-meta">
                            <div class="meta-item">
                                <span class="meta-label">数据分类:</span>
                                <span class="meta-value">{{ dataDetail.category || '无' }}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">数据来源:</span>
                                <span class="meta-value">{{ dataDetail.source || '无' }}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">发布时间:</span>
                                <span class="meta-value">{{ dataDetail.publishDate || '无' }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 数据来源 -->
                <div class="info-section" id="data-source">
                    <h3 class="sub-section-title">数据来源</h3>
                    <div class="section-content">
                        <div class="source-item">
                            <span class="meta-label">系统:</span>
                            <span class="meta-value">{{ dataDetail.system || '无' }}</span>
                        </div>
                        <div class="source-item">
                            <span class="meta-label">作者:</span>
                            <span class="meta-value">{{ dataDetail.author || '无' }}</span>
                        </div>
                        <div class="source-item">
                            <span class="meta-label">数据原文:</span>
                            <span class="meta-value">{{ dataDetail.reference || '无' }}</span>
                        </div>
                        <div class="source-item">
                            <span class="meta-label">doi:</span>
                            <span class="meta-value">{{ dataDetail.doi || 'null' }}</span>
                        </div>
                        <div class="source-item">
                            <span class="meta-label">数据生产日期:</span>
                            <span class="meta-value">{{ dataDetail.productionDate || '无' }}</span>
                        </div>
                    </div>
                </div>

                <!-- TDB数据文件 -->
                <div class="info-section" id="tdb-file">
                    <h3 class="sub-section-title">
                        TDB文件
                        <el-button type="text" class="download-btn" @click="handleDownload">
                            <el-icon>
                                <Download />
                            </el-icon>
                            <span>下载文件</span>
                        </el-button>
                    </h3>
                    <div class="tdb-content">
                        <pre class="tdb-text">{{ dataDetail.tdbContent || '暂无TDB文件内容' }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, Document, DataAnalysis, Download } from '@element-plus/icons-vue'
import fileIcon from '@/assets/img/dataSearch/icon_文件.png'
import fileIconSel from '@/assets/img/dataSearch/icon_文件1.png'
const router = useRouter()

// 是否展开描述
const isExpanded = ref(false)

// 当前激活的目录项
const activeSection = ref('basic-info')

// 右侧数据详情区域引用
const dataInfoRef = ref<HTMLElement | null>(null)

// 目录项配置
const catalogItems = [
  { id: 'basic-info', label: '基本信息' },
  { id: 'data-source', label: '数据来源' },
  { id: 'tdb-file', label: 'TDB文件' }
]

// 数据详情
const dataDetail = reactive({
    name: 'XXX热力学数据',
    description: '这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字',
    category: '物理化学材料',
    source: 'XXXX大学研究室',
    publishDate: '2025-11-12 08:13:16',
    system: 'Be-Hf',
    author: 'N. Saunders',
    reference: 'Calphad,9,297-309(1985)',
    doi: 'null',
    productionDate: '1995',
    tdbContent: `\nDatabase for Be-Hf from N. Saunders 1995.\n\n\n# Saunders, Calphad, 9, 297-309(1985).\n# Dataset created 2011-10-17 by Bengt Hallstedt.\n# The phase diagram is only approximately reproduced.\n\n\nELEMENT VA_VACUUM    0.0000000000E+00  1.0000000000E+00  0.0000000000E+00 ! \nELEMENT BE BERYLLIUM  9.0121800000E+00  4.0460000000E+03  1.5860000000E+01 ! \nELEMENT HF HAFNIUM   1.7849000000E+02  2.4150000000E+03  5.3440000000E+01 ! \n\nTYPE_DEFINITION % SEQ * !\nDEFINE_SYSTEM_DEFAULT ELEMENT  VA BE HF !\n\nPARAMETER REFERENCE_FILE  SAUNDERS_BeHf_1985 ! \n\nPHASE LIQUID:L1  %  1 1 ! \n    CONSTITUENT LIQUID:L1  : VA,BE,HF : 1 1 1 ! \n    PARAMETER G(LIQUID:L1,BE;0)  298.15  +7.5338E+03 -4.0530E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2 -1.4630E+05 T**(-1); 505.0 N ! \n    PARAMETER G(LIQUID:L1,HF;0)  298.15  +1.5207E+04 -5.3843E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2; 2506.0 N ! \nPHASE FCC_A1:B1  %  1 1 ! \n    CONSTITUENT FCC_A1:B1  : BE,HF : 1 1 ! \n    PARAMETER G(FCC_A1:B1,BE;0)  298.15  +7.1444E+03 -3.8510E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2 -1.4630E+05 T**(-1); 1560.0 N ! \n    PARAMETER G(FCC_A1:B1,HF;0)  298.15  +1.5255E+04 -5.4605E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2; 2506.0 N ! \nPHASE BCC_A2:B2  %  1 1 ! \n    CONSTITUENT BCC_A2:B2  : BE,HF : 1 1 ! \n    PARAMETER G(BCC_A2:B2,BE;0)  298.15  +9.5000E+03 -3.8510E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2 -1.4630E+05 T**(-1); 1560.0 N ! \n    PARAMETER G(BCC_A2:B2,HF;0)  298.15  +1.7655E+04 -5.4605E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2; 2506.0 N ! \nPHASE HCP_A3:B3  %  1 1 ! \n    CONSTITUENT HCP_A3:B3  : BE,HF : 1 1 ! \n    PARAMETER G(HCP_A3:B3,BE;0)  298.15  +0.0000E+00 -0.0000E+00 T ! \n    PARAMETER G(HCP_A3:B3,HF;0)  298.15  +1.5255E+04 -5.4605E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2; 2506.0 N ! \nPHASE BE12HF:P1  %  1 1 ! \n    CONSTITUENT BE12HF:P1  : BE : 1 ! \n    PARAMETER G(BE12HF:P1,BE;0)  298.15  +1.1000E+04 -3.8510E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2 -1.4630E+05 T**(-1); 1560.0 N ! \nPHASE HF2BE7:P2  %  1 1 ! \n    CONSTITUENT HF2BE7:P2  : BE : 1 ! \n    PARAMETER G(HF2BE7:P2,BE;0)  298.15  +9.2000E+03 -3.8510E+01 T +1.3600E-02 T LN T +8.3500E-06 T**2 -1.4630E+05 T**(-1); 1560.0 N ! \n\n# Keep in P0(2),3(jmol) and M0(3) data files, type PH, Vm, Bm, Bp, M0, V0, T0, n0, beta.\n`
})

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
  for (let i = catalogItems.length - 1; i >= 0; i--) {
    const sectionId = catalogItems[i].id
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
const handleDownload = () => {
    // 这里可以实现文件下载逻辑
    console.log('下载文件')
}
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
    height: calc(100vh - 240px); /* 设置固定高度，减去header和padding的高度 */
    position: relative;
}

.data-catalog {
    width: 240px;
    background-color: #f7f9fb;
    padding: 20px;
    border-right: 1px solid #ebeef5;
    flex-shrink: 0; /* 防止目录被压缩 */
    position: sticky;
    top: 0;
    height: 100%;
    overflow-y: auto; /* 目录内容过长时可滚动 */
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
    overflow-y: auto; /* 右侧内容可独立滚动 */
    height: 100%;
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
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
}

.meta-item {
    display: flex;
    gap: 8px;
}

.meta-label {
    font-weight: bold;
    color: #303133;
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
</style>
