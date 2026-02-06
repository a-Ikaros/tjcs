// 晶体结构
const crystals=[
  {
    key:'id',
    label:'ID'
  },
  {
    key:'formula',
    label:'formula'
  },
  {
    key:'spaceGroup',
    label:'SpaceGroup'
  },
  {
    key:'crystalSystem',
    label:'Crystal System'
  },
  {
    key:'density',
    label:'density'
  },
  {
    key:'volume',
    label:'volume'
  }
]
// 基组
const basisSetPotential = [
  {
    key: "elements",
    label: "元素",
  },
  {
    key: "basisSet",
    label: "基组名称",
  },
  {
    key: "outputFormat",
    label: "输出格式",
  },
];
// 赝势
const pseudopotential = [
  {
    key: "elements",
    label: "元素",
  },
  {
    key: "pseudopotentialMethod",
    label: "赝势方法",
  },
  {
    key: "functional",
    label: "泛函",
  },
  {
    key: "relativisticTreatment",
    label: "相对论处理",
  },
];
// 多物理场耦合参数
const multiphysicsPotential = [
  {
    key: "materialName",
    label: "材料名称",
  },
  {
    key: "materialType",
    label: "材料类别",
  },
  {
    key: "elements",
    label: "元素组成",
  },
  {
    key: "modulusOfElasticityMetric",
    label: "弹性模量(GPa)",
    removeUnit: true,
  },
  {
    key: "yieldTensileStrengthMetric",
    label: "抗拉强度(极限,MPa)",
    removeUnit: true,
  },
  {
    key: "poissonsRatio",
    label: "泊松比",
    removeUnit: true,
  },
  {
    key: "meltingPointMetric",
    label: "熔点（℃）",
    removeUnit: true,
  },
  {
    key: "specificHeatCapacityMetric",
    label: "比热(J/(g·℃))",
    removeUnit: true,
  },
  {
    key: "thermalConductivityMetric",
    label: "热导率(W/(m·K))",
    removeUnit: true,
  },
];

// 动力学数据
const dynamics = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "elements",
    label: "元素",
  },
  {
    key: "diffusionMode",
    label: "Diffusion Mode",
  },
  {
    key: "diffusingElement",
    label: "Diffusing Element",
  },
  {
    key: "d0",
    label: "D0 (m2/s)",
    removeUnit: true,
  },
  {
    key: "q",
    label: "Q (kJ/mol)",
    removeUnit: true,
  },
  {
    key: "d",
    label: "D (m2/s)",
    removeUnit: true,
  },
  {
    key: "tmin",
    label: "T min (K)",
    removeUnit: true,
  },
  {
    key: "tmax",
    label: "T max (K)",
    removeUnit: true,
  },
  {
    key: "t",
    label: "T (K)",
    removeUnit: true,
  },
  {
    key: "year",
    label: "Year",
  },
];
// 热力学数据
const mtd=[
  {
    key: "id",
    label: "ID",
  },
  {
    key: "elements",
    label: "元素",
  },
  {
    key: "authors",
    label: "生产作者",
  },
   {
    key: "date",
    label: "生产日期",
  },
]
export const tableCol = {
  // 晶体结构
  crystals: crystals,
  // 基组
  basisSetPotential: basisSetPotential,
  pmbjz: basisSetPotential,
  // 赝势
  pseudopotential: pseudopotential,
  tyzjb: pseudopotential,
  // 对势
  pairPotential: [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "elements",
      label: "元素",
    },
    {
      key: "epsilon",
      label: "Epsilon",
    },
    {
      key: "sigma",
      label: "Sigma",
    },
  ],
  nist:[
    {
      key: "id",
      label: "Many-body Potential ID",
    },
    {
      key: "elements",
      label: "Elements",
    },
    {
      key: "potentialType",
      label: "Potential Type",
    },
    {
      key: "year",
      label: "Year",
    },
    {
      key: "dois",
      label: "DOI",
    },
  ],
  //反应力场
  reaxffPotential: [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "elements",
      label: "元素",
    },
    {
      key: "potentialType",
      label: "Potential Type",
    },
    {
      key: "year",
      label: "Year",
    },
    {
      key: "doi",
      label: "DOI",
    },
  ],

  //神经网络势
  machineLearningPotential: [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "elements",
      label: "Elements",
    },
    {
      key: "potentialType",
      label: "Potential Type",
    },
    {
      key: "year",
      label: "Year",
    },
    {
      key: "computeDevice",
      label: "Compute Device",
    },
  ],
  nep:[
    {
      key: "id",
      label: "ID",
    },
    {
      key: "elements",
      label: "Elements",
    },
    {
      key: "potentialType",
      label: "Potential Type",
    },
    {
      key: "year",
      label: "Year",
    },
    {
      key: "computeDevice",
      label: "Compute Device",
    },
  ],
  // 多物理场耦合参数
  multiphysicsPotential: multiphysicsPotential,

  // 热力学数据
  mtd: mtd,

  //金属材料
  metalMaterial: multiphysicsPotential,
  dynamics: dynamics,
  // 电池有机正极材料数据
  oc: [
    {
      key: "molecularFormula",
      label: "化学式",
    },
    {
      key: "electrolyte",
      label: "电解质",
    },
    {
      key: "cathode",
      label: "负极",
    },
    {
      key: "batteryType",
      label: "电池类型",
    },
    {
      key: "theoSpecificCapacity",
      label: "理论比容量(mAh/g)",
      removeUnit: true,
    },
    {
      key: "lumoHomoGap",
      label: "LUMO-HOMO Gap(eV)",
        removeUnit: true,
    },
    {
      key: "avgWorkingVoltage",
      label: "平均工作电压(V)",
      removeUnit: true,
    },
    {
      key: "cyclicStability",
      label: "循环稳定性(mAAhg-1/C/cycles)",
    }
  ],
  // 有机光电材料
  op: [
     {
      key: "cod",
      label: "COD Number",
    },
    {
      key: "formula",
      label: "Formula",
    },
    {
      key: "lumoHomo",
      label: "LUMO-HOMO Gap(eV)",
    },
    {
      key: "avgHoleMobility",
      label: "Average Hole Mobility (cm2/Ve)",
    },
    {
      key: "avgElecMobility",
      label: "Average Electron Mobility (cm2/Ve)",
    },
    {
      key: "maxHoleTransferIntegral",
      label: "Max Hole Tranefer Integral (meV)",
      removeUnit: true,
    },
    {
      key: "maxElecTransferIntegral",
      label: "Max Electron Tranefer Integral (meV)",
        removeUnit: true,
    },
    {
      key: "holeTREnergy",
      label: "Hole Tranefer Reorganization Energy (meV)",
      removeUnit: true,
    },
    {
      key: "elecTREnergy",
      label: "Electron Tranefer Reorganization Energy (meV)",
      removeUnit: true,
    }
  ],
  //三维编织材料数据
  '3dWeaving': [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "materialName",
      label: "材料名称",
    },
    {
      key: "fiberType",
      label: "纤维类型",
    },
    {
      key: "weavingPattern",
      label: "编织方式",
    },
    {
      key: "modulusOfElasticity",
      label: "弹性模量(GPa)",
      removeUnit: true,
    },
    {
      key: "tensileStrength",
      label: "抗拉强度(MPa)",
      removeUnit: true,
    },
  ],
};
