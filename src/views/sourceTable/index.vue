<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";

const tableCol = [
  {
    prop: 'ruler',
    label: '数据尺度'
  },
  {
    prop: 'type',
    label: '数据种类'
  },
  {
    prop: 'number',
    label: '数量'
  },
  {
    prop: 'updateTime',
    label: '更新时间'
  },
]
const tableData = ref([])
const setOptByKey = (key: string, item: any) => {
  filterSelection.value?.[key]?.every(sel => {
    return sel.value !== item[key]
  }) && filterSelection.value?.[key]?.push({
    label: item[key],
    value: item[key]
  })
}
const allTableData = ref([])
onMounted(() => {

  allTableData.value = [
    {
      ruler: '微观',
      type: '结构数据',
      number: '1234',
      updateTime: '2025-04-28'
    },
    {
      ruler: '介观',
      type: '热力学数据',
      number: '12154',
      updateTime: '2025-04-30'
    },
    {
      ruler: '宏观',
      type: '力学性能数据',
      number: '3121',
      updateTime: '\t2025-05-01'
    },
    {
      ruler: '微观',
      type: '结构数据',
      number: '1234',
      updateTime: '2025-04-28'
    },
    {
      ruler: '介观',
      type: '热力学数据',
      number: '12154',
      updateTime: '2025-04-30'
    },
    {
      ruler: '宏观',
      type: '力学性能数据',
      number: '3121',
      updateTime: '\t2025-05-01'
    },
    {
      ruler: '微观',
      type: '结构数据',
      number: '1234',
      updateTime: '2025-04-28'
    },
    {
      ruler: '介观',
      type: '力学性能数据',
      number: '12154',
      updateTime: '2025-04-30'
    },
    {
      ruler: '宏观',
      type: '力学性能数据',
      number: '3121',
      updateTime: '\t2025-05-01'
    },
    {
      ruler: '微观',
      type: '结构数据',
      number: '1234',
      updateTime: '2025-04-28'
    },
    {
      ruler: '介观',
      type: '热力学数据',
      number: '12154',
      updateTime: '2025-04-30'
    },
    {
      ruler: '宏观',
      type: '力学性能数据',
      number: '3121',
      updateTime: '\t2025-05-01'
    },
    {
      ruler: '微观',
      type: '结构数据',
      number: '1234',
      updateTime: '2025-04-28'
    },
    {
      ruler: '介观',
      type: '热力学数据',
      number: '12154',
      updateTime: '2025-04-30'
    },
    {
      ruler: '宏观',
      type: '电学性能数据',
      number: '3121',
      updateTime: '\t2025-05-01'
    },
    {
      ruler: '微观',
      type: '结构数据',
      number: '1234',
      updateTime: '2025-04-28'
    },
    {
      ruler: '介观',
      type: '热力学数据',
      number: '12154',
      updateTime: '2025-04-30'
    },
    {
      ruler: '宏观',
      type: '力学性能数据',
      number: '3121',
      updateTime: '\t2025-05-01'
    },
  ]
  tableData.value = [...allTableData.value]
  tableData.value.forEach(item => {
    setOptByKey('ruler', item)
    setOptByKey('type', item)
  })
})

const filterConfig = ref([
  {label: '数据尺度：', prop: "ruler"},
  {label: '数据种类：', prop: "type"},
])
const filterData = ref({
  ruler: 'all',
  type: 'all'
})
const filterSelection = ref({
  ruler: [{label: '全部', value: 'all'}],
  type: [{label: '全部', value: 'all'}]
})
const handleChange = () => {
  let data = [...allTableData.value]
  for (let key of Object.keys(filterData.value)) {
    data = data.filter(item => item[key] === filterData.value[key] || filterData.value[key] === 'all')
  }
  tableData.value = [...data]
}

const handleReset = () => {
  for (let key in Object.keys(filterData.value)) {
    filterData.value[key] = 'all'
  }
  tableData.value = [...allTableData.value]
}
</script>
<template>
  <div class="table-filter-container">
    <div v-for="select in filterConfig" :key="select.prop" class="filter-box">
      <span>{{ select.label }}</span>
      <el-select
          v-model="filterData[select.prop]"
          placeholder="Activity zone"
          class="filter-sel"
          @change="handleChange"
      >
        <el-option :label="opt?.label" :value="opt?.value" v-for="opt in filterSelection[select.prop]"
                   :key="opt.value"/>
      </el-select>
    </div>
    <el-button type="primary" @click="handleReset">重置筛选</el-button>
  </div>
  <el-table :data="tableData" stripe style="width: 100%" max-height="600" class="data-filter-table">
    <el-table-column :prop="item.prop" :label="item.label" v-for="item in tableCol" :key="item.prop"/>
  </el-table>
</template>
<style scoped lang="scss">
.table-filter-container {
  margin: 30px 0;
  gap: 20px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
  position: relative;
  display: flex;
  align-items: center;

  .filter-box {
    display: inline-block;
    margin-right: 30px;
  }

  .filter-sel {
    width: 180px;
    margin-left: 12px;
  }
}

.data-filter-table {
  overflow-x: auto;
  box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
  border-radius: 8px;
}

.el-table thead {
  background-color: red;
}
</style>
