// 筛选配置类型定义
export interface FilterOption {
  label: string;
  value: string | number;
}

export interface FilterConfig {
  key: string; // 筛选字段的key
  label: string; // 筛选字段的显示名称
  type: 'select' | 'yearRange' | 'multiSelect' | 'input'; // 筛选类型
  options?: FilterOption[]; // 下拉选项（select/multiSelect使用）
  api?: string; // 获取选项的API（动态获取时使用）
  placeholder?: string; // 占位符文本
  clearable?: boolean; // 是否可清空
  multiple?: boolean; // 是否多选（已废弃，用multiSelect代替）
}

// 筛选配置映射表：根据不同的数据类型配置不同的筛选项
export const filterConfigMap: Record<string, FilterConfig[]> = {
  // 对势 - 只筛选 Potential Type
  pairPotential: [
    {
      key: 'potentialType',
      label: 'Potential Type',
      type: 'select',
      api: '/potdata/pairPotential/getPotentialTypes', // 从接口获取
      placeholder: '请选择 Potential Type',
      clearable: true,
    },
  ],

  // 反应力场 - 筛选 Potential Type 和 Year
  reaxffPotential: [
    {
      key: 'potentialType',
      label: 'Potential Type',
      type: 'select',
      api: '/potdata/reaxffPotential/getPotentialTypes',
      placeholder: '请选择 Potential Type',
      clearable: true,
    },
    {
      key: 'yearRange',
      label: 'Year',
      type: 'yearRange',
      placeholder: '选择年份范围',
      clearable: true,
    },
  ],

  // 神经网络势 - 筛选 Potential Type、Year、Compute Device
  machineLearningPotential: [
    {
      key: 'potentialType',
      label: 'Potential Type',
      type: 'select',
      api: '/potdata/machineLearningPotential/getPotentialTypes',
      placeholder: '请选择 Potential Type',
      clearable: true,
    },
    {
      key: 'yearRange',
      label: 'Year',
      type: 'yearRange',
      placeholder: '选择年份范围',
      clearable: true,
    },
    {
      key: 'computeDevice',
      label: 'Compute Device',
      type: 'select',
      options: [
        { label: 'CPU', value: 'CPU' },
        { label: 'GPU', value: 'GPU' },
      ],
      placeholder: '请选择计算设备',
      clearable: true,
    },
  ],

  // 其他数据类型默认只筛选 Potential Type
  default: [
    {
      key: 'potentialType',
      label: 'Potential Type',
      type: 'select',
      api: '/potdata/default/getPotentialTypes',
      placeholder: '请选择 Potential Type',
      clearable: true,
    },
  ],
};

/**
 * 获取指定数据类型的筛选配置
 * @param dataType 数据类型key
 * @returns 筛选配置数组
 */
export function getFilterConfig(dataType: string): FilterConfig[] {
  return filterConfigMap[dataType] || filterConfigMap.default;
}

/**
 * 检查数据类型是否有筛选配置
 * @param dataType 数据类型key
 * @returns 是否有筛选配置
 */
export function hasFilterConfig(dataType: string): boolean {
  return !!filterConfigMap[dataType] || !!filterConfigMap.default;
}
