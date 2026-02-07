import materialDataIcon from "@/assets/img/dataResources/icon_全球材料数据库.png";
import materialSoftwareIcon from "@/assets/img/dataResources/icon_全球材料计算软件库.png";

interface cardInfo {
  key: string;
  name: string;
  children?: Array<cardInfo>;
  disabled?: boolean; // 是否禁用（未配置表头的数据类型）
}

// 微观尺度数据类型
const microDataTypes: Array<cardInfo> = [
  {
    key: "crystals",
    name: "结构",
    children: [
      {
        name: "晶体结构",
        key: "crystals",
      },
      {
        name: "分子结构",
        key: "molecule",
      },
    ],
  },
  {
    key: "basisSetPotential",
    name: "基组",
    children: [
      {
        name: "赝势基组",
        key: "basisSetPotential",
      },
      {
        name: "数值原子轨道基组",
        key: "trackBasisSet",
      },
      {
        name: "高斯型基组",
        key: "gsBasisSet",
      },
      // {
      //   name: "混合基组",
      //   key: "hhjz",
      //   disabled: true,
      // },
      // {
      //   name: "赝势基组",
      //   key: "ysjz",
      //   disabled: true,
      // },
    ],
  },
  {
    key: "pawPseudopotential",
    name: "赝势",
    children: [
      {
        name: "投影缀加波",
        key: "pawPseudopotential",
      },
      {
        name: "模守恒赝势",
        key: "ncppPseudopotential",
      },
      {
        name: "超软赝势",
        key: "usppPseudopotential",
      },
    ],
  },
  {
    key: "pairPotential",
    name: "经验势函数",
    children: [
      {
        name: "对势",
        key: "pairPotential",
      },
      {
        name: "多体势",
        key: "nist",
      },
      {
        name: "分子力场",
        key: "fzlc",
        disabled: true,
      },
      {
        name: "反应力场",
        key: "reaxffPotential",
      },
      // {
      //   name: "专用领域势",
      //   key: "zylys",
      //   disabled: true,
      // },
    ],
  },
  {
    key: "machineLearningPotential",
    name: "机器学习势函数",
    children: [
      {
        name: "神经网络势",
        key: "machineLearningPotential",
      },
      // {
      //   name: "核方法与高斯过程势",
      //   key: "hffygsgcs",
      //   disabled: true,
      // },
      {
        name: "基函数展开与线性方法",
        key: "machineLearnGap",
      },
      {
        name: "物理信息与约束模型",
        key: "wlxxyysmx",
        disabled: true,
      },
      // {
      //   name: "专用优化模型",
      //   key: "zyyhmx",
      //   disabled: true,
      // },
    ],
  },
  {
    key: "cdMachineLearn",
    name: "机器学习用数据",
  },
];

// 介观尺度数据类型
const mesoDataTypes: Array<cardInfo> = [
  {
    key: "klhshs",
    name: "粗粒化势函数",
    disabled: true,
  },
  {
    key: "mtd",
    name: "热力学数据",
  },
  {
    key: "dynamics",
    name: "动力学数据",
  },
  {
    key: "multiphysicsPotential",
    name: "多物理场耦合参数",
    children: [
      {
        name: "碳材料",
        key: "carbon",
      },
      {
        name: "金属材料",
        key: "metalMaterial",
        disabled: true,
      },
      {
        name: "陶瓷材料",
        key: "tccl",
        disabled: true,
      },
      {
        name: "流体材料",
        key: "ltcl",
        disabled: true,
      },
      {
        name: "聚合物材料",
        key: "jhwcl",
        disabled: true,
      },
      {
        name: "木材材料和天然产品",
        key: "mccl",
        disabled: true,
      },
      {
        name: "其他工程材料",
        key: "qtgccl",
        disabled: true,
      },
    ],
  },
];

// 宏观尺度数据类型
const macroDataTypes: Array<cardInfo> = [
  {
    key: "macroMechanics",
    name: "力学性能",
  },
  {
    key: "macroHeat",
    name: "热物性数据",
  },
  {
    key: "xbsj",
    name: "相变数据",
    disabled: true,
  },
  {
    key: "dxxnsj",
    name: "电学性能数据",
    disabled: true,
  },
];
export { microDataTypes, mesoDataTypes, macroDataTypes };
