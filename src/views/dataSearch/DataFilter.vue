<template>
  <div class="data-filter">
    <div class="filter-content">
      <div
        v-for="config in filterConfigs"
        :key="config.key"
        class="filter-item"
      >
        <div class="filter-label">{{ config.label }}</div>

        <!-- 单选下拉框 -->
        <el-select
          v-if="config.type === 'select'"
          v-model="filterValues[config.key]"
          :placeholder="config.placeholder"
          :clearable="config.clearable"
          @change="handleFilterChange"
          class="filter-select"
        >
          <el-option
            v-for="option in filterOptions[config.key] || []"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>

        <!-- 多选下拉框 -->
        <el-select
          v-else-if="config.type === 'multiSelect'"
          v-model="filterValues[config.key]"
          :placeholder="config.placeholder"
          :clearable="config.clearable"
          multiple
          collapse-tags
          collapse-tags-tooltip
          @change="handleFilterChange"
          class="filter-select"
        >
          <el-option
            v-for="option in filterOptions[config.key] || []"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>

        <!-- 年份范围选择器 -->
        <div v-else-if="config.type === 'yearRange'" class="year-range-picker">
          <el-date-picker
            v-model="filterValues[config.key + 'From']"
            type="year"
            placeholder="开始年份"
            :clearable="config.clearable"
            @change="handleFilterChange"
            class="year-input"
            format="YYYY"
            value-format="YYYY"
          />
          <span class="year-separator">至</span>
          <el-date-picker
            v-model="filterValues[config.key + 'To']"
            type="year"
            placeholder="结束年份"
            :clearable="config.clearable"
            @change="handleFilterChange"
            class="year-input"
            format="YYYY"
            value-format="YYYY"
          />
        </div>

        <!-- 输入框 -->
        <el-input
          v-else-if="config.type === 'input'"
          v-model="filterValues[config.key]"
          :placeholder="config.placeholder"
          :clearable="config.clearable"
          @change="handleFilterChange"
          class="filter-input"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, reactive } from 'vue';
import type { FilterConfig, FilterOption } from './filterConfig';
import request from '@/utils/request';

interface Props {
  filterConfigs: FilterConfig[];
  dataType: string;
}

interface Emits {
  (e: 'filter-change', filters: Record<string, any>): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// 筛选值
const filterValues = reactive<Record<string, any>>({});

// 筛选选项（用于下拉框）
const filterOptions = reactive<Record<string, FilterOption[]>>({});

// 初始化筛选值
const initFilterValues = () => {
  // 清空所有值
  Object.keys(filterValues).forEach(key => {
    delete filterValues[key];
  });

  props.filterConfigs.forEach((config) => {
    if (config.type === 'yearRange') {
      filterValues[config.key + 'From'] = '';
      filterValues[config.key + 'To'] = '';
    } else if (config.type === 'multiSelect') {
      filterValues[config.key] = [];
    } else {
      filterValues[config.key] = '';
    }
  });
};

// 加载筛选选项
const loadFilterOptions = async () => {
  for (const config of props.filterConfigs) {
    if (config.type === 'select' || config.type === 'multiSelect') {
      if (config.options) {
        // 使用静态配置的选项
        filterOptions[config.key] = config.options;
      } else if (config.api) {
        // 从API获取选项
        try {
          const { data } = await request({
            url: config.api,
            method: 'get',
          });
          // 假设API返回的数据格式为 { data: string[] } 或 { data: {label: string, value: string}[] }
          if (Array.isArray(data)) {
            filterOptions[config.key] = data.map((item: any) => {
              if (typeof item === 'string') {
                return { label: item, value: item };
              }
              return item;
            });
          }
        } catch (error) {
          console.error(`加载筛选选项失败 (${config.key}):`, error);
          filterOptions[config.key] = [];
        }
      }
    }
  }
};

// 处理筛选变化
const handleFilterChange = () => {
  // 构建筛选参数对象
  const filters: Record<string, any> = {};

  props.filterConfigs.forEach((config) => {
    if (config.type === 'yearRange') {
      const fromKey = config.key + 'From';
      const toKey = config.key + 'To';
      if (filterValues[fromKey] || filterValues[toKey]) {
        filters['yearFrom'] = filterValues[fromKey] || null;
        filters['yearTo'] = filterValues[toKey] || null;
      }
    } else {
      const value = filterValues[config.key];
      if (value !== '' && value !== null && value !== undefined) {
        // 对于多选，只有当数组不为空时才添加
        if (Array.isArray(value) && value.length === 0) {
          return;
        }
        filters[config.key] = value;
      }
    }
  });
  console.log(filters,'filters')
  emit('filter-change', filters);
};

// 重置筛选
const handleReset = () => {
  initFilterValues();
  emit('filter-change', {});
};

// 监听dataType变化，重新加载配置
watch(
  () => props.dataType,
  () => {
    initFilterValues();
    loadFilterOptions();
  },
  { immediate: true }
);

// 组件挂载时加载选项
onMounted(() => {
  loadFilterOptions();
});

// 暴露方法供父组件调用
defineExpose({
  reset: handleReset,
  getFilterValues: () => filterValues,
});
</script>

<style lang="scss" scoped>
.data-filter {
  width: 100%;

  .filter-content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .filter-item {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .filter-label {
        font-size: 14px;
        font-weight: 500;
        color: #333333;
      }

      .filter-select,
      .filter-input {
        width: 100%;
      }
    }

    .year-range-picker {
      display: flex;
      align-items: center;
      gap: 8px;

      .year-input {
        flex: 1;
      }

      .year-separator {
        color: #999999;
        font-size: 14px;
      }
    }
  }
}

:deep(.el-select) {
  .el-select__wrapper {
    background-color: white;
  }
}

:deep(.el-input__wrapper) {
  background-color: white;
}

:deep(.el-date-editor) {
  .el-input__wrapper {
    background-color: white;
  }
}
</style>
