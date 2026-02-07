<template>
  <div class="result-table">
    <div class="badge-line" v-if="selectedType">
      <el-badge v-for="item in badgeList" :key="item.key" :value="dataMap[item.key] || 0" :max="Infinity"
        class="badge-item" type="warning" @click="handleSel(item.key)">
        <div :class="['result-type-btn', selectedType === item.key ? 'type-is-sel' : 'type-not-sel']">
          <div style="max-width: 80px;">
            {{ item.label }}
          </div>
        </div>
      </el-badge>
    </div>
    <div class="res-total-line">
      共找到 <span class="res-num">{{ total }}</span> 个结果
      <span class="res-filter" @click="handleFilter">
        <img src="@/assets/img/dataSearch/icon_筛选.png" alt="筛选" class="filter-icon" />
        <span>筛选</span>
      </span>
    </div>
    <el-table :data="tableData" border style="width: 100%" @row-click="handleRowClick">
      <el-table-column label="Num" type="index" width="80" align="center" />
      <el-table-column v-for="col in currentTableColumns" :key="col.key" :prop="col.key" :label="col.label"
        :width="col.width || 'auto'" :align="col.align || 'center'" :min-width="col.minWidth || '120px'"  empty-text="-">
        <template #default="scope" v-if="col.key === 'elements'">
          <span>{{Array.isArray(scope.row.elements) ? scope.row.elements?.join(', ') || '-' : scope.row.elements }}</span>
        </template>
        <template #default="scope" v-else-if="col.removeUnit">
          <span>{{ removeUnit(scope.row[col.key]) || '-' }}</span>
        </template>
        <template #default="scope" v-else-if="col.prefix">
          <span>{{ col.prefix + (scope.row[col.key] || '-') }}</span>
        </template>
        <template #default="scope" v-else>
          <span>{{ (scope.row[col.key] === 'null' ? '-' : scope.row[col.key])||'-' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120" align="center" fixed="right">
        <template #default="{ row }">
          <span> <img :src="watchIcon" alt="查看" style="cursor: pointer" @click="handleWatch(row)" /></span>
          <el-icon style="cursor: pointer;margin-left: 10px;color: #1760c2;font-size: 24px;"
            @click.stop="handleDownload(row)">
            <Download />
          </el-icon>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize" :small="small"
      layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" class="table-pager" />
    <el-dialog v-model="filterVisible" title="数据筛选" width="600px" :close-on-click-modal="false">
      <!-- 数据筛选组件 -->
      <DataFilter v-if="currentDataType" :filterConfigs="currentFilterConfigs" :dataType="currentDataType"
        @filter-change="handleFilterChange" ref="dataFilterRef" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleResetFilter">重置</el-button>
          <el-button type="primary" @click="handleApplyFilter">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>

</template>

<script setup lang="ts">
// 移除单位，只保留数字部分
const removeUnit = (value: any): string | number => {
  if (value === null || value === undefined || value === '' || value === '-') return value || '-';
  if (typeof value === 'number') return value;

  const str = value.toString();
  // 匹配数字（支持整数、小数、百分比）
  const match = str.match(/[-+]?(?:\d*\.)?\d+(?:[eE][+-]?\d+)?/);
  if (match) {
    const num = parseFloat(match[0]);
    return isNaN(num) ? value : num;
  }
  return value || '-';
};
import watchIcon from '@/assets/img/dataSearch/icon_查看.png'
import { tableCol } from './tableCol'
import { useRouter } from 'vue-router'
import { downloadFileById } from '@/api/dataSearch';
import DataFilter from '../DataFilter.vue';
import { getFilterConfig } from '../filterConfig';
import type { FilterConfig } from '../filterConfig';
import { computed, onMounted, ref, watch } from 'vue';
import { ElMessageBox } from 'element-plus'
import { capitalizeFirstLetter, buildCountMap } from '@/utils/common';
import { useStatisticsStore } from '@/store/statistics';

const router = useRouter()
const statisticsStore = useStatisticsStore()
const dataMap = ref({})
const badgeList = ref([
  {
    label: '晶体结构',
    key: 'aaa',
    value: '12421'
  },
  {
    label: '分子结构',
    key: 'bbb',
    value: '241'
  },
])
const selectedType = ref(badgeList.value[0].key)
const currentDataType = ref('pairPotential')

const currentTableColumns = computed(() => {
  return tableCol[selectedType.value] || tableCol.pairPotential
})

const getDataMap = async () => {
  try {
    const res = await statisticsStore.fetchDataSetCount()
    dataMap.value = buildCountMap(res)
  } catch (err) {
    dataMap.value = {}
  }
}
const totalNumRes = computed(() => {
  return badgeList.value.map(item => dataMap.value[item.key] || 0)?.reduce((a, b) => a + b) || 0
})
onMounted(() => {
  getDataMap()
})
// 根据选中的类型切换表格数据
const tableData = ref([])
const refResTableData = (arr, dataType = 'pairPotential') => {
  const privateDatasetTypes = ['oc', 'op', '3dWeaving', 'magneticMaterial']

  if (privateDatasetTypes.includes(dataType)) {
    badgeList.value = [{
      label: arr.label || arr.name || dataType,
      key: dataType,
      value: Math.floor(Math.random() * 10000) + 100
    }]
    selectedType.value = dataType
    currentDataType.value = dataType
  } else if (arr && arr.children && arr.children.length > 0) {
    const enabledChildren = arr.children.filter(item => !item.disabled)
    
    if (enabledChildren.length > 0) {
      const matchingChild = enabledChildren.find(item => item.key === dataType)
      
      if (matchingChild) {
        badgeList.value = [{
          label: matchingChild.name || matchingChild.label,
          key: matchingChild.key || matchingChild.value,
          value: Math.floor(Math.random() * 10000) + 100
        }]
        selectedType.value = matchingChild.key
      } else {
        badgeList.value = enabledChildren.map(item => ({
          label: item.name || item.label,
          key: item.key || item.value,
          value: Math.floor(Math.random() * 10000) + 100
        }))
        selectedType.value = badgeList.value[0]?.key
      }
    } else {
      badgeList.value = []
      selectedType.value = ''
    }
    currentDataType.value = dataType
  } else if (Array.isArray(arr)) {
    const enabledItems = arr.filter(item => !item.disabled)
    if (enabledItems.length > 0) {
      badgeList.value = enabledItems.map(item => ({
        label: item.name || item.label,
        key: item.key || item.value,
        value: Math.floor(Math.random() * 10000) + 100
      }))
      selectedType.value = badgeList.value[0]?.key
    } else {
      badgeList.value = []
      selectedType.value = ''
    }
    currentDataType.value = dataType
  }

  currentFilters.value = {}
  tempFilters.value = {}
  if (dataFilterRef.value) {
    dataFilterRef.value.reset()
  }
}

// 注释掉模拟数据逻辑，使用真实API数据
// const tableFlag = ref(true)
watch(selectedType, () => {
  // 根据选中的类型切换表格数据
  tableData.value = []
})

const currentPage3 = ref(1)
const pageSize = ref(10)
const total = ref(0)
const small = ref(false)
const emit = defineEmits(['page-change', 'filter-apply'])

const handleSizeChange = (val: number) => {
  pageSize.value = val
  emit('page-change', { page: currentPage3.value, pageSize: pageSize.value })
}
const handleCurrentChange = (val: number) => {
  currentPage3.value = val
  emit('page-change', { page: currentPage3.value, pageSize: pageSize.value })
}

const setTableData = (data) => {
  tableData.value = data || []
}

const setTotal = (t) => {
  total.value = Number(t) || 0
}

const setCurrentPage = (page) => {
  currentPage3.value = page || 1
}

const getPagination = () => ({ page: currentPage3.value, pageSize: pageSize.value })

const setDataType = (dataType) => {
  currentDataType.value = dataType
}

defineExpose({
  refResTableData,
  setTableData,
  setTotal,
  setCurrentPage,
  getPagination,
  setDataType,
  totalNumRes
})

const handleWatch = async (row) => {
  // 检查是否已登录
  const token = localStorage.getItem('token')
  if (!token) {
    ElMessageBox.confirm('用户登录后可查看详情,是否跳转到登录页？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      router.push('/login')
    })
    return
  }

  // 跳转到详情页，传递数据的唯一标识
  const id = row.id || '1' // 这里假设row有id属性，如果没有可以根据实际情况调整
  const dataType = currentDataType.value || 'pairPotential'
  router.push({ name: 'data-detail', params: { dataType, id } })
}
const handleDownload = async (row) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      ElMessageBox.confirm('用户登录后可下载数据,是否跳转到登录页？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        router.push('/login')
      })
      return
    }

    // if (currentDataType.value === 'machineLearningPotential') {
    //   try {
    //     await getDownloadBf(currentDataType.value, row.id as string)
    //   } catch (err) {
    //     console.error('下载失败:', err)
    //   }
    // }
    // else {
    //   const url = `${import.meta.env.VITE_BASE_URL}potdata/${currentDataType.value}/download?id=${row.id}&satoken=${token}`
    //   window.open(url, '_blank', 'noopener,noreferrer')
    // }
    try {
        const { data } = await downloadFileById({ rule: currentDataType.value, id: row.id as string })
        // const url = `${import.meta.env.VITE_BASE_URL}potdata/${currentDataType.value}/download?id=${row.id}&satoken=${token}`
        window.open(data?.data, '_blank', 'noopener,noreferrer')
    } catch (err) {
        console.error('下载失败:', err)
    }
  } catch (err) {
    console.error('下载失败:', err)
  }
}
const handleRowClick = (row) => {
  // handleWatch(row)
}

const handleSel = (key) => {
  // 更新选中的类型
  selectedType.value = key

  // 重置分页到第一页
  currentPage3.value = 1

  // 清空当前筛选条件
  currentFilters.value = {}
  tempFilters.value = {}
  if (dataFilterRef.value) {
    dataFilterRef.value.reset()
  }

  // 更新当前数据类型
  currentDataType.value = key

  // 触发筛选条件变化事件，通知父组件更新接口数据
  emit('filter-apply', { ...currentFilters.value, type: key })
}

const filterVisible = ref(false)
const dataFilterRef = ref<any>(null)
const tempFilters = ref<Record<string, any>>({}) // 临时存储筛选值
const currentFilters = ref<Record<string, any>>({}) // 实际应用的筛选值

// 当前筛选配置
const currentFilterConfigs = computed<FilterConfig[]>(() => {
  if (!currentDataType.value) return []
  return getFilterConfig(currentDataType.value)
})

// 处理筛选变化（只临时存储，不立即应用）
const handleFilterChange = (filters: Record<string, any>) => {
  tempFilters.value = filters
}

// 应用筛选（点击确定按钮时）
const handleApplyFilter = () => {
  currentFilters.value = { ...tempFilters.value }
  filterVisible.value = false
  // 触发筛选搜索事件，传递给父组件
  emit('filter-apply', currentFilters.value)
}

// 重置筛选
const handleResetFilter = () => {
  if (dataFilterRef.value) {
    dataFilterRef.value.reset()
  }
  tempFilters.value = {}
}

const handleFilter = () => {
  filterVisible.value = true
}

</script>


<style lang="scss" scoped>
.result-table {
  position: relative;
  width: 100%;
  min-height: 600px;
}

.badge-line {
  border-bottom: 1px dotted #999999;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

.badge-item {
  height: 50px;
  margin-right: 24px;
  width: auto;
  min-width: 120px;
  max-width: 200px;
}

.result-type-btn {
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  cursor: pointer;

  >div {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.type-is-sel {
  background-image: url("@/assets/img/dataSearch/选中.png");
  background-size: cover;
}

.type-not-sel {
  color: #333333;
}

.res-total-line {
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  background-color: #f7f9fb;
  margin: 24px 0;
  position: relative;
  display: flex;
  align-items: center;

  .res-num {
    color: #1760c2;
  }

  .res-filter {
    position: absolute;
    right: 12px;
    color: #1760c2;
    cursor: pointer;
    display: flex;
    align-items: center;

    .filter-icon {
      width: 18px;
      margin-right: 6px;
    }
  }
}

.table-pager {
  margin: 24px 0;
  position: absolute;
  right: 0;
}

:deep(.el-badge__content) {
  background-color: #ffac2d;
  right: 40px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
