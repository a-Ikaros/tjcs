# 数据筛选功能使用说明

## 功能概述

数据筛选功能为数据检索页面提供了灵活、可扩展的筛选能力。支持多种筛选类型，包括：
- 单选下拉框
- 多选下拉框
- 年份范围选择
- 文本输入

## 文件结构

```
src/views/dataSearch/
├── filterConfig.ts       # 筛选配置文件
├── DataFilter.vue        # 筛选组件
├── index.vue            # 主搜索页面（已集成筛选）
└── README_FILTER.md     # 本文档
```

## 当前配置

### 1. 对势 (pairPotential)
- **Potential Type**: 从接口 `/potdata/pairPotential/getPotentialTypes` 动态获取

### 2. 反应力场 (reaxffPotential)
- **Potential Type**: 从接口 `/potdata/reaxffPotential/getPotentialTypes` 动态获取
- **Year**: 年份范围选择器（From - To）

### 3. 神经网络势 (machineLearningPotential)
- **Potential Type**: 从接口 `/potdata/machineLearningPotential/getPotentialTypes` 动态获取
- **Year**: 年份范围选择器（From - To）
- **Compute Device**: 静态选项（CPU/GPU/CPU+GPU）

## 如何添加新的筛选配置

### 步骤 1: 编辑 `filterConfig.ts`

在 `filterConfigMap` 中添加新的数据类型配置：

```typescript
export const filterConfigMap: Record<string, FilterConfig[]> = {
  // ... 现有配置

  // 新增数据类型
  yourNewDataType: [
    {
      key: 'potentialType',
      label: 'Potential Type',
      type: 'select',
      api: '/potdata/yourNewDataType/getPotentialTypes',
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
    // 添加更多筛选项...
  ],
};
```

### 步骤 2: 筛选类型说明

#### 2.1 单选下拉框 (select)
```typescript
{
  key: 'fieldName',           // 字段名
  label: 'Display Label',     // 显示标签
  type: 'select',             // 类型
  api: '/api/endpoint',       // API 地址（动态获取选项）
  // 或使用静态选项
  options: [
    { label: 'Option 1', value: 'value1' },
    { label: 'Option 2', value: 'value2' },
  ],
  placeholder: 'Please select',
  clearable: true,
}
```

#### 2.2 多选下拉框 (multiSelect)
```typescript
{
  key: 'fieldName',
  label: 'Display Label',
  type: 'multiSelect',        // 多选类型
  options: [
    { label: 'Option 1', value: 'value1' },
    { label: 'Option 2', value: 'value2' },
  ],
  placeholder: 'Please select multiple',
  clearable: true,
}
```

#### 2.3 年份范围选择器 (yearRange)
```typescript
{
  key: 'yearRange',           // 会自动生成 yearRangeFrom 和 yearRangeTo
  label: 'Year',
  type: 'yearRange',
  placeholder: '选择年份范围',
  clearable: true,
}
```

#### 2.4 文本输入框 (input)
```typescript
{
  key: 'fieldName',
  label: 'Display Label',
  type: 'input',
  placeholder: 'Please input',
  clearable: true,
}
```

### 步骤 3: 后端接口要求

#### 获取筛选选项的接口
```
GET /potdata/{dataType}/getPotentialTypes

返回格式：
{
  "data": ["Type1", "Type2", "Type3"]
}

或

{
  "data": [
    { "label": "Type 1", "value": "type1" },
    { "label": "Type 2", "value": "type2" }
  ]
}
```

#### 搜索接口（带筛选参数）
```
POST /potdata/{dataType}/pageQuery

请求体：
{
  "elements": "Fe,Ni",
  "page": 1,
  "pageSize": 10,
  "potentialType": "EAM",              // 筛选参数会自动展开到这里
  "yearRange": {                        // 年份范围会转换为对象
    "from": "2020",
    "to": "2024"
  },
  "computeDevice": "gpu"
}
```

## 筛选数据流程

1. **用户选择数据类型** → 根据 `dataType` 加载对应的筛选配置
2. **加载筛选选项** → 如果配置了 `api`，自动调用接口获取选项
3. **用户修改筛选条件** → 触发 `filter-change` 事件
4. **更新筛选参数** → `currentFilters` 更新
5. **执行搜索** → 调用 `searchPotData` 接口，筛选参数自动展开到请求体中

## 扩展示例

### 示例 1: 添加温度范围筛选

```typescript
{
  key: 'temperatureRange',
  label: 'Temperature Range',
  type: 'yearRange',  // 复用年份范围选择器的逻辑
  placeholder: '选择温度范围',
  clearable: true,
}
```

### 示例 2: 添加材料类型多选

```typescript
{
  key: 'materialTypes',
  label: 'Material Types',
  type: 'multiSelect',
  api: '/api/getMaterialTypes',
  placeholder: '请选择材料类型（可多选）',
  clearable: true,
}
```

### 示例 3: 添加关键词搜索

```typescript
{
  key: 'keyword',
  label: 'Keyword',
  type: 'input',
  placeholder: '请输入关键词',
  clearable: true,
}
```

## 组件 API

### DataFilter 组件

#### Props
- `filterConfigs`: FilterConfig[] - 筛选配置数组
- `dataType`: string - 数据类型（用于区分不同数据类型）

#### Events
- `filter-change`: (filters: Record<string, any>) => void - 筛选条件变化时触发

#### Methods (通过 ref 调用)
- `reset()`: 重置所有筛选条件
- `getFilterValues()`: 获取当前筛选值

## 注意事项

1. **年份范围处理**: `yearRange` 类型的筛选会自动转换为 `{ from: string, to: string }` 格式
2. **多选处理**: `multiSelect` 返回的是数组，后端需要支持数组参数
3. **动态选项**: 使用 `api` 配置时，确保接口返回正确的数据格式
4. **默认配置**: 如果某个数据类型没有特定配置，会使用 `default` 配置

## 调试技巧

1. 查看控制台日志 `'筛选条件变化:'` 确认筛选参数是否正确
2. 检查网络请求，确认筛选参数是否正确传递到后端
3. 使用 Vue DevTools 查看 `currentFilters` 的值

## 未来扩展建议

1. 添加日期范围选择器（支持精确到日）
2. 添加数值范围输入（温度、压力等）
3. 添加级联选择器（省市区联动等）
4. 添加树形选择器（分类层级选择）
5. 支持筛选条件的保存和恢复
