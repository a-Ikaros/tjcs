<template>
  <div class="data-filter">
    <div class="filter-content">
      <div v-for="config in filterConfigs" :key="config.key" class="filter-item">
        <div class="filter-label">{{ config.label }}</div>

        <!-- 单选下拉框 -->
        <el-select v-if="config.type === 'select'" v-model="filterValues[config.key]" :placeholder="config.placeholder"
          :clearable="config.clearable" @change="handleFilterChange" class="filter-select">
          <el-option v-for="option in filterOptions[config.key] || []" :key="option.value" :label="option.label"
            :value="option.value" />
        </el-select>

        <!-- 多选下拉框 -->
        <el-select v-else-if="config.type === 'multiSelect'" v-model="filterValues[config.key]"
          :placeholder="config.placeholder" :clearable="config.clearable" multiple collapse-tags collapse-tags-tooltip
          @change="handleFilterChange" class="filter-select">
          <el-option v-for="option in filterOptions[config.key] || []" :key="option.value" :label="option.label"
            :value="option.value" />
        </el-select>

        <!-- 年份范围选择器 -->
        <div v-else-if="config.type === 'yearRange'" class="year-range-picker">
          <el-date-picker v-model="filterValues[config.key + 'From']" type="year" placeholder="开始年份"
            :clearable="config.clearable" @change="handleFilterChange" class="year-input" format="YYYY"
            value-format="YYYY" />
          <span class="year-separator">至</span>
          <el-date-picker v-model="filterValues[config.key + 'To']" type="year" placeholder="结束年份"
            :clearable="config.clearable" @change="handleFilterChange" class="year-input" format="YYYY"
            value-format="YYYY" />
        </div>

        <!-- 数值范围（最小 - 最大） -->
        <div v-else-if="config.type === 'numberRange'" class="number-range-picker">
          <el-input type="number" v-model.number="filterValues[config.key + 'From']"
            :placeholder="config.placeholder ? config.placeholder + ' 最小' : '最小值'"
            :clearable="config.clearable" @input="handleFilterChange" class="number-input" />
          <span class="range-separator">-</span>
          <el-input type="number" v-model.number="filterValues[config.key + 'To']"
            :placeholder="config.placeholder ? config.placeholder + ' 最大' : '最大值'"
            :clearable="config.clearable" @input="handleFilterChange" class="number-input" />
        </div>

        <!-- 输入框 -->
        <el-input v-else-if="config.type === 'input'" v-model="filterValues[config.key]"
          :placeholder="config.placeholder" :clearable="config.clearable" @change="handleFilterChange"
          class="filter-input" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onMounted } from 'vue';
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
      filterValues[config.key + 'From'] = null;
      filterValues[config.key + 'To'] = null;
    } else if (config.type === 'numberRange') {
      // 使用 null 作为占位符状态，便于显示 placeholder
      filterValues[config.key + 'From'] = null;
      filterValues[config.key + 'To'] = null;
    } else if (config.type === 'multiSelect') {
      filterValues[config.key] = [];
    } else {
      filterValues[config.key] = '';
    }
  });
};

// 加载筛选选项
const loadFilterOptions = async () => {
  console.log('开始加载筛选选项，配置:', props.filterConfigs);
  
  for (const config of props.filterConfigs) {
    if (config.type === 'select' || config.type === 'multiSelect') {
      if (config.options) {
        // 使用静态配置的选项
        filterOptions[config.key] = config.options;
      } else if (config.api) {
        // 从API获取选项
        try {
          const response = await request({
            url: config.api,
            method: 'get',
          });
          // axios返回的response.data可能是后端的响应体
          // 后端通常返回 {code, data, message} 格式
          let apiData = response.data;

          // 如果response.data是对象且包含data字段，则取内层data
          if (apiData && typeof apiData === 'object' && 'data' in apiData && !Array.isArray(apiData)) {
            apiData = apiData.data;
          }

          // 转换为下拉框选项格式
          if (Array.isArray(apiData)) {
            filterOptions[config.key] = apiData.map((item: any) => {
              if (typeof item === 'string') {
                return { label: item, value: item };
              }
              return item;
            });
          } else {
            filterOptions[config.key] = [];
          }
        } catch (error) {
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
    } else if (config.type === 'numberRange') {
      const fromKey = config.key + 'From';
      const toKey = config.key + 'To';
      const hasFrom = filterValues[fromKey] !== '' && filterValues[fromKey] !== null && filterValues[fromKey] !== undefined;
      const hasTo = filterValues[toKey] !== '' && filterValues[toKey] !== null && filterValues[toKey] !== undefined;

      // 特殊映射：bandGap 与 energyPerAtom 要以对象形式传递
      if (config.key === 'bandGap') {
        if (hasFrom || hasTo) {
          filters['bandGap'] = { min: hasFrom ? filterValues[fromKey] : null, max: hasTo ? filterValues[toKey] : null };
        }
      } else if (config.key === 'energyPerAtom') {
        if (hasFrom || hasTo) {
          // 按后端要求映射为 energyAboveHull
          filters['energyAboveHull'] = { min: hasFrom ? filterValues[fromKey] : null, max: hasTo ? filterValues[toKey] : null };
        }
      } else {
        // 对于一些后端期望的字段，使用对象形式传递 {min,max}
        if (config.key === 'efermi' || config.key === 'cbm') {
          if (hasFrom || hasTo) {
            filters[config.key] = { min: hasFrom ? filterValues[fromKey] : null, max: hasTo ? filterValues[toKey] : null };
          }
        } else {
          if (hasFrom || hasTo) {
            filters[config.key + 'From'] = hasFrom ? filterValues[fromKey] : null;
            filters[config.key + 'To'] = hasTo ? filterValues[toKey] : null;
          }
        }
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
  emit('filter-change', filters);
};

// 重置筛选
const handleReset = () => {
  initFilterValues();
  emit('filter-change', {});
};

// 监听dataType变化，重新加载配置
onMounted(async () => {
  // 初始化筛选值并加载筛选选项
  initFilterValues();
  await loadFilterOptions();
});

// 监听dataType变化，重新加载配置
watch(
  () => props.dataType,
  async (newVal) => {
    initFilterValues();
    loadFilterOptions();
  }
);

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
        max-width: 520px;
      }
    }

    .number-range-picker {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .number-range-picker .number-input {
      flex: 1;
    }

    .number-range-picker .range-separator {
      width: 18px;
      text-align: center;
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

/* 限制下拉菜单最大宽度并使 option 文本换行，保证与 select 宽度一致 */
:deep(.el-select-dropdown) {
  max-width: 520px !important;
  box-sizing: border-box;
}

:deep(.el-select-dropdown__wrap) {
  max-width: 520px !important;
}

:deep(.el-select-dropdown__item) {
  white-space: normal;
  word-break: break-word;
}

:deep(.el-select .el-input__inner) {
  /* 防止 select 内部输入过宽导致布局破坏 */
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.el-input__wrapper) {
  background-color: white;
  border-right: 2px solid #e5e5e5;
}

:deep(.el-date-editor) {
  .el-input__wrapper {
    background-color: white;
  }
}
</style>
