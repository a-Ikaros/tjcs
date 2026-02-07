// 晶体结构
const crystals = [
  {
    key: "sourceId",
    label: "ID",
  },
  {
    key: "formula",
    label: "formula",
  },
  {
    key: "spaceGroup",
    label: "SpaceGroup",
  },
  {
    key: "crystalSystem",
    label: "Crystal System",
  },
  {
    key: "density",
    label: "density",
  },
  {
    key: "volume",
    label: "volume",
  },
];
// 基组
const basisSetPotential = [
  {
    key: "id",
    label: "Effective Core Potential ID",
    prefix: "ECP-",
  },
  {
    key: "elements",
    label: "Elements",
  },
  {
    key: "basisSet",
    label: "Basis Set",
  },
  {
    key: "outputFormat",
    label: "Supported Software",
  },
];
// 赝势
const pseudopotential = [
  {
    key: "pid",
    label: "Projected Augmented Wave ID",
    prefix: "PAW-",
  },
  {
    key: "elements",
    label: "Elements",
  },
  {
    key: "pseudopotentialMethod",
    label: "Pseudopotential Method",
  },
  {
    key: "functional",
    label: "Functional",
  },
  {
    key: "relativisticTreatment",
    label: "Relativistic Treatment",
  },
];
// 机器学习用数据
const cdMachineLearn = [
  {
    key: "materialId",
    label: "Material ID",
  },
  {
    key: "formulaPretty",
    label: "Formula",
  },
  {
    key: "volume",
    label: "Volume",
  },
  {
    key: "atomicDensity",
    label: "Atomic Density",
  },
  {
    key: "formationEnergyPerAtom",
    label: "Formation Energy per atom",
  },
  {
    key: "energyAboveHull",
    label: "Energy Above Hull",
  },
  {
    key: "bandGap",
    label: "Band Gap",
  },
  {
    key: "efermi",
    label: "Efermi",
  },
  {
    key: "totalMagnetization",
    label: "Total Magnetization",
  },
  {
    key: "energyPerAtom",
    label: "Energy per Atom",
  },
];

// 粗粒化势函数
const cgp = [
  {
    label: "Coarse-Grained Potential ID",
    key: "dataId",
  },
  {
    label: "Particle Type",
    key: "particleType",
  },
  {
    label: "Param Type",
    key: "paramType",
  },
  {
    label: "Potential Type ",
    key: "potentialType",
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
//碳材料
const carbon = [
  {
    label: "Multiphysics Coupling ID",
    key: "id",
    prefix: "MC-",
  },
  {
    label: "Material Name",
    key: "name",
  },
  {
    label: "Material Type",
    key: "type",
  },
  {
    label: "Electrical Resistivity（ohm-cm）",
    key: "electricalResistivity",
    removeUnit: true,
  },
  {
    label: "Thermal Conductivity（W/m-K）",
    key: "thermalConductivity",
    removeUnit: true,
  },
];
// 动力学数据
const dynamics = [
  {
    key: "dataId",
    label: "Diffusion ID",
  },
  {
    key: "elements",
    label: "Elements",
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
const mtd = [
  {
    key: "dataId",
    label: "ID",
  },
  {
    key: "elements",
    label: "Elements",
  },
  {
    key: "authors",
    label: "Authors",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "phases",
    label: "Phases",
  }
];
// 力学性能
const macroMechanics = [
  {
    key: "id",
    label: "序号",
  },
  {
    key: "materialName",
    label: "材料牌号",
  },
  {
    key: "elements",
    label: "元素组成",
  },
  {
    key: "temperature",
    label: "温度(℃)",
  },
  {
    key: "youngModulus",
    label: "杨氏模量(GPa)",
    removeUnit: true,
  },
  {
    key: "poissonRatio",
    label: "泊松比",
    removeUnit: true,
  },
];

// 热物性
const macroHeat = [
  {
    key: "id",
    label: "序号",
  },
  {
    key: "materialName",
    label: "材料牌号",
  },
  {
    key: "temperature",
    label: "温度（℃）",
    removeUnit: true,
  },
  {
    key: "elements",
    label: "元素组成",
  },
  {
    key: "density",
    label: "密度（g/cm3）",
    removeUnit: true,
  },
  {
    key: "electricalConductivity",
    label: "导热系数(W/(m·K))",
    removeUnit: true,
  },
  {
    key: "specificHeat",
    label: "比热（J/(g·K)）",
    removeUnit: true,
  },
  {
    key: "thermalDiffusivity",
    label: "热扩散系数（m2/s）",
    removeUnit: true,
  },
];
export const tableCol = {
  // 晶体结构
  crystals: crystals,
  // 分子结构
  molecule: [
    {
      key: "cid",
      label: "ID",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "iupacName",
      label: "IUPAC Name",
    },
    {
      key: "molecularFormula",
      label: "Molecular Formula",
    },
  ],
  // 赝势基组
  basisSetPotential: basisSetPotential,
  // 数值原子轨道基组
  trackBasisSet: [
    { label: "Numerical Atomic Orbital ID", key: "id", prefix: "NAO-" },
    ...basisSetPotential.slice(1),
  ],
  // 高斯型基组
  gsBasisSet: [
    { label: " ‌Gaussian-type Orbital ID", key: "id", prefix: "GTO-" },
    ...basisSetPotential.slice(1),
  ],
  // 赝势
  pseudopotential: pseudopotential,
  // 投影缀加波
  pawPseudopotential: pseudopotential,
  // 模守恒赝势
  ncppPseudopotential: [
    {
      label: "Norm-Conserving Pseudopotential ID",
      key: "pid",
      prefix: "NCPP-",
    },
    ...pseudopotential.slice(1),
  ],
  // 超软赝势
  usppPseudopotential: [
    { label: "Ultrasoft Pseudopotential ID", key: "pid", prefix: "USPP-" },
    ...pseudopotential.slice(1),
  ],
  // 对势
  pairPotential: [
    {
      key: "dataId",
      label: "Pair Potential ID",
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
      key: "epsilon",
      label: "Epsilon",
    },
    {
      key: "sigma",
      label: "Sigma",
    },
  ],
  //多体势
  nist: [
    {
      key: "mbpId",
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
      key: "dataId",
      label: "ReaxFF ID",
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
      key: "doi",
      label: "DOI",
    },
  ],

  //神经网络势
  machineLearningPotential: [
    {
      key: "dataId",
      label: "Neural Network Potential ID",
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
    // {
    //   key: "computeDevice",
    //   label: "Compute Device",
    // },
  ],

  //
  machineLearnGap: [
    {
      key: "id",
      label: "GAP ID",
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
  ],
  nep: [
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
  cdMachineLearn: cdMachineLearn,
  // 多物理场耦合参数
  multiphysicsPotential: carbon,
  // 碳材料
  carbon: carbon,
  // 粗粒化势函数
  cgp: cgp,
  // 热力学数据
  mtd: mtd,
  //金属材料
  metalMaterial: multiphysicsPotential,

  // 动力学数据
  dynamics: dynamics,

  // 力学性能
  macroMechanics: macroMechanics,
  // 热物性
  macroHeat: macroHeat,
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
    },
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
    },
  ],
  //三维编织材料数据
  "3dWeaving": [
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
  magneticMaterial: [
    {
      key: "formulaPretty",
      label: "Formula Pretty",
    },
    {
      key: "energy",
      label: "Energy",
    },
    {
      key: "bandGap",
      label: "Band Gap",
    },
    {
      key: "efermi",
      label: "Efermi",
    },
    {
      key: "cbm",
      label: "Cbm",
    },
    {
      key: "vbm",
      label: "Vbm",
    },{
      key: "gapDirect",
      label: "Is Gap Direct",
    }
  ],
};
