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
    key: "jg",
    name: "结构",
    children: [
      {
        name: "晶体结构",
        key: "jtjg",
      },
      {
        name: "分子结构",
        key: "fzjg",
        disabled: true,
      },
    ],
  },
  {
    key: "basisSetPotential",
    name: "基组",
    children: [
      {
        name: "平面波基组",
        key: "pmbjz",
      },
      {
        name: "数值原子轨道基组",
        key: "szyzgdjz",
        disabled: true,
      },
      {
        name: "高斯型基组",
        key: "gsxjz",
        disabled: true,
      },
      {
        name: "混合基组",
        key: "hhjz",
        disabled: true,
      },
      {
        name: "赝势基组",
        key: "ysjz",
        disabled: true,
      },
    ],
  },
  {
    key: "pseudopotential",
    name: "赝势",
    children: [
      {
        name: "投影缀加波",
        key: "tyzjb",
      },
      {
        name: "模守恒赝势",
        key: "mshys",
        disabled: true,
      },
      {
        name: "超软赝势",
        key: "crys",
        disabled: true,
      },
    ],
  },
  {
    key: "jyshs",
    name: "经验势函数",
    children: [
      {
        name: "对势",
        key: "pairPotential",
      },
      {
        name: "多体势",
        key: "dts",
        disabled: true,
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
      {
        name: "专用领域势",
        key: "zylys",
        disabled: true,
      },
    ],
  },
  {
    key: "jqxxshs",
    name: "机器学习势函数",
    children: [
      {
        name: "神经网络势",
        key: "machineLearningPotential",
      },
       {
        name: "NEP",
        key: "nep",
      },
      {
        name: "核方法与高斯过程势",
        key: "hffygsgcs",
        disabled: true,
      },
      {
        name: "基函数展开与线性方法",
        key: "jhszkyxxff",
        disabled: true,
      },
      {
        name: "物理信息与约束模型",
        key: "wlxxyysmx",
        disabled: true,
      },
      {
        name: "专用优化模型",
        key: "zyyhmx",
        disabled: true,
      },
    ],
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
        key: "tcl",
        disabled: true,
      },
      {
        name: "金属材料",
        key: "metalMaterial",
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
    key: "lxxn",
    name: "力学性能",
    disabled: true,
  },
  {
    key: "rwxsj",
    name: "热物性数据",
    disabled: true,
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
