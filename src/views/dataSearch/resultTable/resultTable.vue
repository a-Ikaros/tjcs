<template>
  <div class="result-table">
    <div class="badge-line">
      <el-badge v-for="item in badgeList" :key="item.key" :value="item.value" class="badge-item" type="warning"
        @click="handleSel(item.key)">
        <div :class="['result-type-btn', selectedType === item.key ? 'type-is-sel' : 'type-not-sel']">
          <div style="max-width: 80px;">
            {{ item.label }}
          </div>

        </div>
      </el-badge>
    </div>
    <div class="res-total-line">
      共找到 <span class="res-num">{{ tableData.length }}</span> 个结果
      <span class="res-filter" @click="handleFilter">
        <img src="@/assets/img/dataSearch/icon_筛选.png" alt="筛选" class="filter-icon" />
        <span>筛选</span>
      </span>
    </div>
    <el-table :data="tableData" border style="width: 100%" @row-click="handleRowClick">
      <el-table-column label="序号" type="index" width="60" align="center" />
      <el-table-column prop="name" label="数据名称" width="180" />
      <el-table-column prop="type" label="数据类型" width="180" />
      <el-table-column prop="source" label="数据来源" />
      <el-table-column prop="date" label="更新日期" />
      <el-table-column label="操作" width="60" align="center">
        <template #default="scope">
          <img :src="watchIcon" alt="查看" style="cursor: pointer" @click="handleWatch(scope.row)" />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize" :small="small"
      layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" class="table-pager" />
    <el-dialog v-model="filterVisible" title="数据筛选" width="500">
      <el-tree style="max-width: 600px" :props="defaultProps" :data="nodeData" show-checkbox
        @check-change="handleCheckChange" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="filterVisible = false">取消</el-button>
          <el-button type="primary" @click="filterVisible = false">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref, computed, watchEffect } from 'vue'
import watchIcon from '@/assets/img/dataSearch/icon_查看.png'
import { crystalData, moleculeData } from "./data";
import { jumpTo } from '@/utils';
interface Tree {
  name: string
}
const defaultProps = {
  children: 'children',
  label: 'label',
}
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

// 根据选中的类型切换表格数据
const tableData = ref([])
const refResTableData = (arr) => {
  badgeList.value = arr.map(item => ({
    label: item.name || item.label,
    key: item.key || item.value,
    value: Math.floor(Math.random() * 10000) + 100 // 模拟数据数量
  }))
  selectedType.value = badgeList.value[0]?.key
}

const tableFlag = ref(true)
watchEffect(() => {
  // 根据选中的类型切换表格数据
  if (selectedType.value === 'jtjg') {
    tableData.value = crystalData
  } else if (selectedType.value === 'fzjg') {
    tableData.value = moleculeData
  } else {
    tableData.value = tableFlag.value ? crystalData : moleculeData
    tableFlag.value = !tableFlag.value
  }
})

const currentPage3 = ref(1)
const pageSize = ref(10)
const total = ref(0)
const small = ref(false)
const emit = defineEmits(['page-change'])

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

const getPagination = () => ({ page: currentPage3.value, pageSize: pageSize.value })

defineExpose({
  refResTableData,
  setTableData,
  setTotal,
  getPagination
})

const handleWatch = (row) => {
  console.log(row, 'row')
}
const handleRowClick = (row) => {
  console.log(row, 'row')
  jumpTo('')
}

const handleSel = (key) => {
  selectedType.value === key ? selectedType.value = '' : selectedType.value = key
}

const filterVisible = ref(false)
const handleFilter = () => {
  filterVisible.value = true
}


const props = {
  label: 'name',
  children: 'zones',
}

const handleCheckChange = (
  data: Tree,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log(data, checked, indeterminate)
}

const nodeData = ref([])
onMounted(() => {
  nodeData.value = [
    {
      label: '数据名称',
      children: [
        {
          label: '铜',
        },
        {
          label: 'tie',
        },
      ],
    },
    {
      label: '数据类型',
      children: [
        {
          label: '晶体结构',
        },
        {
          label: '分子结构',
        },
      ],
    },
    {
      label: '数据来源',
      children: [
        {
          label: '国家材料库',
        },
        {
          label: '材料研究所',
        },
      ],
    },
    {
      label: '更新日期',
      children: [
        {
          label: '2025',
        },
        {
          label: '2024',
        },
      ],
    },
  ]
})
</script>


<style lang="scss" scoped>
.result-table {
  position: relative;
  width: 100%;
  min-height: 600px;
}

.badge-line {
  border-bottom: 1px dotted #999999;
}

.badge-item {
  height: 50px;
  margin-right: 24px;
  width: 120px;
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
  box-sizing: border-box;
  cursor: pointer;
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
</style>
