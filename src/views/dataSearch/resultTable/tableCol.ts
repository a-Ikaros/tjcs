//基组
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
export const tableCol = {
  //基组
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

  // 多物理场耦合参数
  multiphysicsPotential: multiphysicsPotential,

  //金属材料
  metalMaterial: multiphysicsPotential,
};
