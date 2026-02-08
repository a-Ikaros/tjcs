<template>
  <breadCrumb :breadCrumbList="breadCrumbList" class="search-p"></breadCrumb>
  <div class="search-type" v-if="!isPrivateDataset && !isDirectJump">
    <span class="head-tag">
      <span class="tag-content">
        <img src="../../assets/img/dataSearch/icon_calculation-scale.png" alt="计算尺度" class="tag-img" />计算尺度
      </span>
    </span>
    <el-segmented style="flex: 1;" v-model="computeRules" :options="rulesOptions" @change="onRulesChange" />
  </div>
  <div class="search-content search-p">
    <div class="content-left" v-if="!isPrivateDataset && !isDirectJump">
      <div class="card-title">
        <img src="../../assets/img/dataSearch/icon_data-type.png" alt="数据类型." class="card-title-img" />
        <span>{{`${rulesOptions.find(item => item.value === computeRules).label}`}}</span>
      </div>
      <div class="card-item" v-for="(card, index) in cardList" :key="card.key">
        <div class="card-first-level" :class="{
          'first-selected': selectedCard === card.key,
          'is-last-expanded': (index === cardList.length - 1) && expandedCard.indexOf(card.key) !== -1,
          'card-disabled': card.disabled
        }" @click="handleSelect(card)">
          <span class="child-li"></span>
          <span class="title">{{ card.name }}</span>
          <span v-if="card?.children?.length" class="card-collapse" @click.stop="handleExpand(card)">
            <el-icon v-if="expandedCard.indexOf(card.key) !== -1">
              <ArrowDown />
            </el-icon>
            <el-icon v-else>
              <ArrowRight />
            </el-icon>
          </span>
        </div>
        <div class="card-second-level" v-if="card?.children?.length && expandedCard.indexOf(card.key) !== -1"
          :class="{ 'last-expanded-second': (index === cardList.length - 1) && expandedCard.indexOf(card.key) !== -1 }">
          <span v-for="child in card?.children" :key="child.key" class="child-tag"
            :class="{ 'second-selected': selectedCard === child.key, 'child-disabled': child.disabled }"
            @click.stop="handleSelect(card, child)">{{
              child.name
            }}</span>
        </div>
      </div>
    </div>
    <div class="content-right">
      <el-input v-model="searchValue" class="source-input" placeholder="请输入您要搜索的内容" clearable>
        <template #append>
          <div class="search-append">
            <img src="../../assets/img/dataSearch/pic_element.png" alt="元素周期表"
              v-if="computeRules !== 'macro' && elemTableVisible" class="elem-table-ctr"
              @click="handleElemTableVisible(false)" />

            <img src="../../assets/img/dataSearch/pic_element1.png" alt="元素周期表" class="elem-table-ctr"
              v-if="computeRules !== 'macro' && !elemTableVisible" @click="handleElemTableVisible(true)" />
            <span @click="searchTableData">
              <el-button :icon="Search" class="search-icon" />
              <span class="search-font">搜索</span>
            </span>
          </div>
        </template>
      </el-input>
      <div class="elem-table" v-if="computeRules !== 'macro' && elemTableVisible && !isDirectJump">
        <periodicTable @handleSelElem="handleSelElem"></periodicTable>
      </div>
      <div class="search-path">
        检索范围：
        <span v-for="(item, index) in searchPath" :key="item.value" class="path-item">
          {{ item.label + (index === searchPath.length - 1 ? '' : ' / ') }}
        </span>
        <span class="total-num">{{ totalNum }}</span>
      </div>
      <div class="search-result">
        <resultTable ref="resTable" @page-change="handlePageChange" @filter-apply="handleFilterApply"
          :selectedCard="selectedCard"></resultTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onActivated, onMounted, onDeactivated, ref, nextTick, watch } from 'vue';
import periodicTable from './periodicTable/PeriodicTable.vue'
import breadCrumb from '@/components/breadCrumb/index.vue'
import { ArrowDown, Search } from "@element-plus/icons-vue";
import {
  microDataTypes,
  mesoDataTypes,
  macroDataTypes
} from "./dataRules";
import resultTable from "@/views/dataSearch/resultTable/resultTable.vue";
import { searchPotData } from '@/api/dataSearch';
import { useRoute, useRouter } from 'vue-router';
import { useStatisticsStore } from '@/store/statistics';

const route = useRoute()
const router = useRouter()
const statisticsStore = useStatisticsStore()

const isPrivateDataset = ref(false)
const isDirectJump = ref(false)

const privateDatasetTypes = {
   'magneticMaterial': { name: '磁性材料电子结构性质计算数据库', key: 'magneticMaterial' },
  'oc': { name: '电池有机正极材料数据', key: 'oc' },
  'op': { name: '有机光电材料数据', key: 'op' },
  '3dWeaving': { name: '三维编织复合材料数据', key: '3dWeaving' }
}

const handlePublicDatasetJump = () => {
  const scale = route.query.scale as string
  const type = route.query.type as string
  
  if (scale && type) {
    isDirectJump.value = true
    isPrivateDataset.value = false
    
    const scaleMap = {
      'micro': 'micro',
      'meso': 'meso',
      'macro': 'macro'
    }
    
    if (scaleMap[scale]) {
      computeRules.value = scaleMap[scale]
      
      nextTick(() => {
        let card = cardList.value.find(item => item.key === type)
        let child = null
        
        if (!card) {
          for (const parentCard of cardList.value) {
            if (parentCard.children) {
              const foundChild = parentCard.children.find(childItem => childItem.key === type)
              if (foundChild) {
                card = parentCard
                child = foundChild
                break
              }
            }
          }
        }
        
        if (card) {
          selectedCard.value = type
          searchPath.value = [rulesOptions.find(item => item.value === computeRules.value), { label: card.name, value: card.key }]
          
          if (child) {
            searchPath.value.push({ label: child.name, value: child.key })
          }
          
          if (resTable.value) {
            resTable.value.refResTableData(card, type)
          }
          
          searchTableData()
        }
      })
    }
  }
}

const handlePrivateDatasetJump = () => {
  const type = route.query.type as string
  if (type && privateDatasetTypes[type]) {
    isDirectJump.value = true
    isPrivateDataset.value = true
    const dataset = privateDatasetTypes[type]
    selectedCard.value = dataset.key
    searchPath.value = [{ label: dataset.name, value: dataset.key }]
    
    if (resTable.value) {
      resTable.value.refResTableData(dataset, dataset.key)
    }
    
    searchTableData()
  }
}

const selectDefaultCrystalStructure = () => {
  if (isPrivateDataset.value) return false
  
  const structureCard = cardList.value.find(card => card.key === 'jg')
  if (structureCard && structureCard.children) {
    const crystalChild = structureCard.children.find(child => child.key === 'jtjg')
    if (crystalChild) {
      expandedCard.value = ['jg']
      handleSelect(structureCard, crystalChild)
      return true
    }
  }
  return false
}

onMounted(async () => {
  await statisticsStore.fetchDataSetCount()
  handlePublicDatasetJump()
  handlePrivateDatasetJump()
  
  if (!isPrivateDataset.value) {
    const query = route.query.q as string
    if (query) {
      searchValue.value = query
      if (selectDefaultCrystalStructure()) {
        setTimeout(() => {
          searchTableData()
        }, 100)
      }
    } else {
      selectDefaultCrystalStructure()
    }
  }
});

onActivated(() => {
  window.scroll(0, 0);

  const scale = route.query.scale as string
  const type = route.query.type as string
  const query = route.query.q as string
  if(!scale && !type && !query) return
  // Only process if we have new query parameters (not just returning from navigation)
  const hasNewParams = (scale && type) || (type && privateDatasetTypes[type]) || (query && query !== searchValue.value)
  
  if (!hasNewParams) {
    // No new parameters, preserve current state when returning from keep-alive
    return
  }
  
  if (scale && type) {
    isDirectJump.value = true
    isPrivateDataset.value = false
    
    const scaleMap = {
      'micro': 'micro',
      'meso': 'meso',
      'macro': 'macro'
    }
    
    if (scaleMap[scale]) {
      computeRules.value = scaleMap[scale]
      
      nextTick(() => {
        let card = cardList.value.find(item => item.key === type)
        let child = null
        
        if (!card) {
          for (const parentCard of cardList.value) {
            if (parentCard.children) {
              const foundChild = parentCard.children.find(childItem => childItem.key === type)
              if (foundChild) {
                card = parentCard
                child = foundChild
                break
              }
            }
          }
        }
        
        if (card) {
          selectedCard.value = type
          searchPath.value = [rulesOptions.find(item => item.value === computeRules.value), { label: card.name, value: card.key }]
          
          if (child) {
            searchPath.value.push({ label: child.name, value: child.key })
          }
          
          if (resTable.value) {
            resTable.value.refResTableData(card, type)
          }
          
          searchTableData()
        }
      })
    }
    return
  }

  if (type && privateDatasetTypes[type]) {
    isDirectJump.value = true
    isPrivateDataset.value = true
    const dataset = privateDatasetTypes[type]
    selectedCard.value = dataset.key
    searchPath.value = [{ label: dataset.name, value: dataset.key }]
    
    if (resTable.value) {
      resTable.value.refResTableData(dataset, dataset.key)
    }
    
    searchTableData()
    return
  }

  if (query && query !== searchValue.value) {
    searchValue.value = query
    setTimeout(() => {
      searchTableData()
    }, 100)
  }
});

onDeactivated(() => {
});

const breadCrumbList = computed(() => {
  const type = route.query.type as string;
  if (type) {
    return ['首页', '数据资源']
  }
  return ['首页', '数据检索']
})
const computeRules = ref('micro')
const rulesOptions = [
  { label: '微观尺度', value: 'micro' },
  { label: '介观尺度', value: 'meso' },
  { label: '宏观尺度', value: 'macro' },
]
const onRulesChange = (e) => {
  searchPath.value = [rulesOptions.find(item => item.value === e)]
  searchValue.value = ''

  // 清空选中的卡片
  selectedCard.value = ''

  // 清空展开的卡片
  expandedCard.value = []

  // 清空表格数据和总数
  totalNum.value = ''
  if (resTable.value) {
    resTable.value.refResTableData([])
  }

  // 重置筛选条件
  currentFilters.value = {}

  // 自动选择该尺度下的第一个结构
  // 由于 cardList 是 computed 属性，它会根据 computeRules.value 自动更新
  // 需要在下一个 tick 中访问更新后的 cardList
  nextTick(() => {
    if (cardList.value && cardList.value.length > 0) {
      const firstCard = cardList.value[0]

      // 如果第一个结构有子类，选择第一个子类
      if (firstCard.children && firstCard.children.length > 0) {
        const firstChild = firstCard.children[0]
        // 展开父级卡片
        expandedCard.value = [firstCard.key]
        // 选中第一个子类
        handleSelect(firstCard, firstChild)
      } else {
        // 如果没有子类，直接选择该结构
        handleSelect(firstCard)
      }
    }
  })
}
// 标签列表
const cardList = computed(() => {
  const listMap = {
    micro: microDataTypes,
    meso: mesoDataTypes,
    macro: macroDataTypes
  }
  listMap[computeRules.value].forEach(item => {
    if (item.children) {
      item.children?.sort((a, b) => {
        if (a.disabled && !b.disabled) {
          return 1
        } else if (!a.disabled && b.disabled) {
          return -1
        } else {
          return 0
        }
      })
    }
  })
  return listMap[computeRules.value]
})

const resTable = ref<any>(null)

// 筛选相关
const currentFilters = ref<Record<string, any>>({})

// 处理来自 resultTable 的筛选应用事件
const handleFilterApply = (filters: Record<string, any>) => {
  currentFilters.value = filters
  
  // 如果有类型切换，更新选中的卡片
  if (filters.type && filters.type !== selectedCard.value) {
    selectedCard.value = filters.type
    
    // 更新搜索路径显示
    const card = cardList.value.find(item => item.key === filters.type)
    if (card) {
      // 检查是否是子类型
      const parentCard = cardList.value.find(item => item.children?.some(child => child.key === filters.type))
      if (parentCard) {
        const child = parentCard.children.find(c => c.key === filters.type)
        searchPath.value = [
          rulesOptions.find(item => item.value === computeRules.value),
          { label: parentCard.name, value: parentCard.key },
          { label: child.name, value: child.key }
        ]
      } else {
        searchPath.value = [
          rulesOptions.find(item => item.value === computeRules.value),
          { label: card.name, value: card.key }
        ]
      }
    }
  }
  
  // 触发搜索
  searchTableData()
}

// 选择左侧标签事件
const selectedCard = ref('')
const handleSelect = (card, child = null) => {
   if (selectedCard.value === (child?.key || card.key))  return
  // 检查是否禁用
  const targetItem = child || card
  if (targetItem.disabled) {
    return // 禁用的卡片不可选择
  }

  totalNum.value = ''
  resTable.value.refResTableData([])

  // 重置筛选条件
  currentFilters.value = {}

  // if (selectedCard.value === (child?.key || card.key)) {
  //   selectedCard.value = ''
  //   searchPath.value = [rulesOptions.find(item => item.value === computeRules.value)]
  //   resTable.value.refResTableData([])
  //   return
  // }
  searchPath.value = [rulesOptions.find(item => item.value === computeRules.value), { label: card.name, value: card.key }]
  if (child) {
    searchPath.value.push({ label: child.name, value: child.key })
  }

  // 设置选中的卡片
  selectedCard.value = child?.key || card.key

  // 临时造数据用于显示badge
  if (child) {
    resTable.value.refResTableData(card, child.key)
  } else {
    let arr = [searchPath.value[searchPath.value.length - 1]]
    const childArr = cardList.value.find(item => item.key === searchPath.value[searchPath.value.length - 1].value)?.children
    childArr?.length && (arr = [...childArr])
    resTable.value.refResTableData(arr, card.key)
  }

  // 调用API更新列表数据
  searchTableData()
}

// 展开左侧标签
const expandedCard = ref([])
const handleExpand = (card) => {
  const index = expandedCard.value.indexOf(card.key)
  expandedCard.value = []
  if (index === -1) {
    expandedCard.value.push(card.key)
  } else {
    expandedCard.value.splice(index, 1)
  }
}

const searchValue = ref('')

// 检索范围路径
const searchPath = ref([rulesOptions.find(item => item.value === computeRules.value)])

// 元素周期表显示与隐藏
const elemTableVisible = ref(true)
const handleElemTableVisible = (isShow: boolean) => {
  elemTableVisible.value = isShow
}

const handleSelElem = (elem) => {
  if (elem.symbol !== 'Ac-Lr' && elem.symbol !== 'La-Lu') {
    searchValue.value = searchValue.value ? searchValue.value + ',' + elem.symbol : elem.symbol
  }
}
const totalNum = ref('')
const searchTableData = async () => {
  try {
    let page = 1
    let pageSize = 10
    if (resTable.value && resTable.value.getPagination) {
      const p = resTable.value.getPagination()
      page = p.page
      pageSize = p.pageSize
    }
    const { data: response } = await searchPotData({
      rule: selectedCard.value,
      elements: searchValue.value || null,
      page,
      pageSize,
      filters: currentFilters.value // 传递筛选参数
    })

    // 正确处理响应数据结构
    const dataList = response?.data || []
    const total = response?.total || 0
    const currentPage = response?.current || 1

    // 同步表格数据与分页信息到 resultTable
    resTable.value.setTableData && resTable.value.setTableData(dataList)
    resTable.value.setTotal && resTable.value.setTotal(total)
    resTable.value.setCurrentPage && resTable.value.setCurrentPage(currentPage)
    // 使用 API 返回的 total 值更新 totalNum
    totalNum.value = `共计${resTable.value.totalNumRes}条`
  } catch (error) {
    console.error('搜索失败:', error)
  }
}

// 处理分页变化
const handlePageChange = (pagination) => {
  searchTableData()
}
</script>

<style lang="scss" scoped>
.search-p {
  max-width: 1200px;
  margin: 12px auto;
}

.search-content {
  width: 76vw;
  display: flex;
  position: relative;
  min-height: 70vh;
}

.search-type {
  width: 100%;
  background-color: #f7f9fb;
  height: 80px;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  .head-tag {
    height: 80px;
    width: 250px;
    display: inline-block;
    background-image: url("@/assets/img/dataSearch/pic_calculation-scale.png");
    background-size: cover;
    position: relative;

    .tag-content {
      margin: 0 auto;
      position: absolute;
      left: calc(50% - 45px);
      top: calc(50% - 12px);
      font-size: 16px;
      font-weight: 600;
      color: #1760c2;
    }

    .tag-img {
      display: inline-block;
      margin-right: 6px;
    }
  }
}

.search-append {
  cursor: pointer;
  display: flex;
  align-items: center;

  .elem-table-ctr {
    margin-right: 24px;
  }
}

.content-left {
  width: 250px;
  height: 100%;
  margin-right: 24px;
  border-radius: 12px;
  position: relative;

  .card-title {
    box-sizing: border-box;
    background-color: #f3f9ff;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e4e7ed;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    .card-title-img {
      margin-right: 12px;
    }
  }

  .card-item {
    .card-first-level {
      padding: 12px 24px;
      color: #333333;
      display: flex;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      font-size: 16px;
      background-color: #f7f9fb;
      cursor: pointer;
      border-bottom: 2px solid #e4e7ed;
      font-weight: 600;

      .child-li {
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: #1760c2;
        margin-right: 4px;
        border-radius: 3px;
      }

      .title {
        margin-left: 12px;
        display: inline-block;
        line-height: 32px;
      }

      .card-collapse {
        position: absolute;
        top: 16px;
        right: 24px;
        font-size: 20px;
      }

      .card-collapse:hover {
        color: #3498db;
      }
    }

    .first-selected {
      color: #3498db;
      background-color: #f3f9ff;
    }

    .card-disabled {
      opacity: 0.5;
      cursor: not-allowed !important;
      color: #999999 !important;

      .child-li {
        background-color: #cccccc !important;
      }

      &:hover {
        background-color: #f7f9fb !important;
        color: #999999 !important;
      }
    }

    .is-last-expanded {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }

    .card-second-level {
      background-color: #f7f9fb;
      font-size: 14px;
      color: #333333;
      padding: 12px;
      border-bottom: 2px solid #e4e7ed;
      font-weight: 500;

      .child-tag {
        background-color: white;
        color: #1760c2;
        padding: 5px;
        border-radius: 5px;
        margin: 5px;
        display: block;
        font-size: 14px;
        cursor: pointer;
      }

      .second-selected {
        color: #3498db !important;
        background-color: #a6ddf5 !important;
      }

      .child-disabled {
        opacity: 0.5;
        cursor: not-allowed !important;
        color: #999999 !important;
        background-color: #f0f0f0 !important;

        &:hover {
          background-color: #f0f0f0 !important;
          color: #999999 !important;
        }
      }
    }

    .last-expanded-second {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }

  .card-item:last-child {
    .card-first-level {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
}

.content-right {
  flex: 1;
  width: calc(100% - 300px);

  .source-input {
    width: 100%;
    height: 60px;

    .search-icon {
      margin-right: 6px;
      width: 16px;
      color: #1760c2;
      font-size: 16px
    }

    .search-font {
      color: #1760c2;
      font-size: 16px
    }
  }

  .elem-table {
    width: 100%;
    box-sizing: border-box;
    border: 2px solid #e5e5e5;
    border-radius: 12px;
    margin: 24px 0;
  }

  .search-path {
    width: 100%;
    background-color: #f7f9fb;
    box-sizing: border-box;
    padding: 12px;
    margin: 24px 0;

    .path-item {
      cursor: pointer;
      color: #666666;
    }

    .path-item:last-child {
      color: #1760c2;
    }
  }

  .total-num {
    margin-left: 24px;
    color: #ffac2d;
    font-size: 16px;
  }
}

.search-result {
  min-height: 600px;
}

.el-segmented {
  height: 100%;
  font-size: 16px;
  font-weight: 600;
}

:deep(.el-segmented__item) {
  width: 33.3% !important;
}

:deep(.el-segmented__item-selected) {
  border-bottom: 2px solid #063e8b;
}

.search-type .el-segmented {
  --el-segmented-item-selected-color: #1760c2;
  --el-segmented-item-selected-bg-color: #e3f1ff;
}

:deep(.el-select__wrapper) {
  height: 100%;
}

:deep(.el-input__wrapper) {
  box-shadow: none;
  border-top: 2px solid #e5e5e5;
  border-left: 2px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
}

:deep(.el-input-group__append) {
  background-color: transparent !important;
}

:deep(.el-input-group__prepend) {
  background-color: transparent !important;
  border-right: none;
  padding: 0 12px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
