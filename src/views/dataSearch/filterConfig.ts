// 筛选配置类型定义
export interface FilterOption {
  label: string;
  value: string | number;
}

export interface FilterConfig {
  key: string; // 筛选字段的key
  label: string; // 筛选字段的显示名称
  type: 'select' | 'yearRange' | 'multiSelect' | 'input' | 'numberRange'; // 筛选类型
  options?: FilterOption[]; // 下拉选项（select/multiSelect使用）
  api?: string; // 获取选项的API（动态获取时使用）
  placeholder?: string; // 占位符文本
  clearable?: boolean; // 是否可清空
  multiple?: boolean; // 是否多选（已废弃，用multiSelect代替）
  unit?: string; // 单位（用于numberRange显示）
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
  // 机器学习用数据 - 支持 Band Gap 和 Energy per Atom 筛选
  cdMachineLearn: [
    {
      key: 'bandGap',
      label: 'Band Gap',
      type: 'numberRange',
      placeholder: '请输入 Band Gap 范围',
      clearable: true,
      unit: 'eV',
    },
    {
      key: 'energyPerAtom',
      label: 'Energy per Atom',
      type: 'numberRange',
      placeholder: '请输入 Energy per Atom 范围',
      clearable: true,
      unit: 'eV/atom',
    },
  ],
  // 晶体结构 - 增加按化学式筛选
  crystals: [
    {
      key: 'formula',
      label: 'formula',
      type: 'input',
      placeholder: '搜索formula',
      clearable: true,
    },
  ],
  // 分子结构 - 增加按 Molecular Formula 筛选
  molecule: [
    {
      key: 'molecularFormula',
      label: 'Molecular Formula',
      type: 'input',
      placeholder: '搜索Molecular Formula',
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
    // {
    //   key: 'computeDevice',
    //   label: 'Compute Device',
    //   type: 'select',
    //   options: [
    //     { label: 'CPU', value: 'CPU' },
    //     { label: 'GPU', value: 'GPU' },
    //   ],
    //   placeholder: '请选择计算设备',
    //   clearable: true,
    // },
  ],

  // 多体势 - 筛选 Elements、Potential Type 和 Year
  nist: [
    {
      key: 'potentialType',
      label: 'Potential Type',
      type: 'select',
      api: '/potdata/nist/getPotentialTypes',
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

  // 基组：支持按 Basis Set 和 Supported Software 搜索
  basisSetPotential: [
    {
      key: 'basisSet',
      label: 'Basis Set',
      type: 'input',
      placeholder: '搜索 Basis Set',
      clearable: true,
    },
    {
      key: 'outputFormat',
      label: 'Supported Software',
      type: 'input',
      placeholder: '搜索 Supported Software',
      clearable: true,
    },
  ],

  trackBasisSet: [
    {
      key: 'basisSet',
      label: 'Basis Set',
      type: 'input',
      placeholder: '搜索 Basis Set',
      clearable: true,
    },
    {
      key: 'outputFormat',
      label: 'Supported Software',
      type: 'input',
      placeholder: '搜索 Supported Software',
      clearable: true,
    },
  ],

  gsBasisSet: [
    {
      key: 'basisSet',
      label: 'Basis Set',
      type: 'input',
      placeholder: '搜索 Basis Set',
      clearable: true,
    },
    {
      key: 'outputFormat',
      label: 'Supported Software',
      type: 'input',
      placeholder: '搜索 Supported Software',
      clearable: true,
    },
  ],

  // 粗粒化势函数 - 下拉筛选：Particle Type、Param Type、Potential Type
  cgp: [
    {
      key: 'particleType',
      label: 'Particle Type',
      type: 'select',
      api: '/potdata/cgp/getParticleTypes',
      placeholder: '请选择 Particle Type',
      clearable: true,
    },
    {
      key: 'paramType',
      label: 'Param Type',
      type: 'select',
      api: '/potdata/cgp/getParamTypes',
      placeholder: '请选择 Param Type',
      clearable: true,
    },
    {
      key: 'potentialType',
      label: 'Potential Type',
      type: 'select',
      api: '/potdata/cgp/getPotentialTypes',
      placeholder: '请选择 Potential Type',
      clearable: true,
    },
  ],

  // 热力学数据 - 支持按 phases 搜索
  mtd: [
    {
      key: 'phases',
      label: 'Phases',
      type: 'input',
      placeholder: '搜索 Phases',
      clearable: true,
    },
  ],

  // 介观尺度 - 动力学数据
  dynamics: [
    {
      key: 'diffusionMode',
      label: 'Diffusion Mode',
      type: 'select',
      api: '/potdata/dynamics/getDiffusionModes',
      placeholder: '请选择 Diffusion Mode',
      clearable: true,
    },
    {
      key: 'diffusingElement',
      label: 'Diffusing Element',
      type: 'select',
      api: '/potdata/dynamics/getDiffusingElements',
      placeholder: '请选择 Diffusing Element',
      clearable: true,
    },
    // {
    //   key: 'd0',
    //   label: 'D0 (m²/s)',
    //   type: 'numberRange',
    //   placeholder: '请输入范围',
    //   clearable: true,
    //   unit: 'm²/s',
    // },
    // {
    //   key: 'q',
    //   label: 'Q (kJ/mol)',
    //   type: 'numberRange',
    //   placeholder: '请输入范围',
    //   clearable: true,
    //   unit: 'kJ/mol',
    // },
    // {
    //   key: 'd',
    //   label: 'D (m²/s)',
    //   type: 'numberRange',
    //   placeholder: '请输入范围',
    //   clearable: true,
    //   unit: 'm²/s',
    // },
    {
      key: 'yearRange',
      label: 'Year',
      type: 'yearRange',
      placeholder: '选择年份范围',
      clearable: true,
    },
  ],
  // 赝势 - 支持按 Pseudopotential Method 和 Functional 搜索
  pawPseudopotential: [
    {
      key: 'pseudopotentialMethod',
      label: 'Pseudopotential Method',
      type: 'input',
      placeholder: '搜索 Pseudopotential Method',
      clearable: true,
    },
    {
      key: 'functional',
      label: 'Functional',
      type: 'input',
      placeholder: '搜索 Functional',
      clearable: true,
    },
  ],
  ncppPseudopotential: [
    {
      key: 'pseudopotentialMethod',
      label: 'Pseudopotential Method',
      type: 'input',
      placeholder: '搜索 Pseudopotential Method',
      clearable: true,
    },
    {
      key: 'functional',
      label: 'Functional',
      type: 'input',
      placeholder: '搜索 Functional',
      clearable: true,
    },
  ],
  usppPseudopotential: [
    {
      key: 'pseudopotentialMethod',
      label: 'Pseudopotential Method',
      type: 'input',
      placeholder: '搜索 Pseudopotential Method',
      clearable: true,
    },
    {
      key: 'functional',
      label: 'Functional',
      type: 'input',
      placeholder: '搜索 Functional',
      clearable: true,
    },
  ],
  // 多物理场 - 碳材料（Electrical Resistivity, Thermal Conductivity）
  carbon: [
    {
      key: 'electricalResistivity',
      label: 'Electrical Resistivity',
      type: 'numberRange',
      placeholder: '请输入 Electrical Resistivity 范围',
      clearable: true,
      unit: 'ohm-cm',
    },
    {
      key: 'thermalConductivity',
      label: 'Thermal Conductivity',
      type: 'numberRange',
      placeholder: '请输入 Thermal Conductivity 范围',
      clearable: true,
      unit: 'W/m-K',
    },
  ],
  // 力学性能 - 可按材料牌号筛选
  macroMechanics: [
    {
      key: 'systemName',
      label: '材料牌号',
      type: 'input',
      placeholder: '搜索材料牌号',
      clearable: true,
    },
  ],
  // 热物性 - 可按材料牌号筛选
  macroHeat: [
    {
      key: 'systemName',
      label: '材料牌号',
      type: 'input',
      placeholder: '搜索材料牌号',
      clearable: true,
    },
  ],
// 介观尺度 - 多物理场耦合数据 - 金属材料  metalMaterial: [    // 力学性质    {      key: 'elasticModulus',      label: '弹性模量 (GPa)',      type: 'numberRange',      placeholder: '请输入范围',      clearable: true,      unit: 'GPa',    },    {      key: 'tensileStrength',      label: '抗拉强度(极限) (MPa)',      type: 'numberRange',      placeholder: '请输入范围',      clearable: true,      unit: 'MPa',    },    {      key: 'poissonRatio',      label: '泊松比',      type: 'numberRange',      placeholder: '请输入范围',      clearable: true,      unit: ''',    },    // 热学性质    {      key: 'meltingPoint',      label: '熔点 (K)',      type: 'numberRange',      placeholder: '请输入范围',      clearable: true,      unit: 'K',    },    {      key: 'specificHeat',      label: '比热 (J/(kg·K))',      type: 'numberRange',      placeholder: '请输入范围',      clearable: true,      unit: 'J/(kg·K)',    },    {      key: 'thermalConductivity',      label: '热导率 (W/(m·K))',      type: 'numberRange',      placeholder: '请输入范围',      clearable: true,      unit: 'W/(m·K)',    },  ],

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
