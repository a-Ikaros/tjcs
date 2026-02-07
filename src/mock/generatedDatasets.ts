// 由 dataRules 的 micro/meso/macro 类型生成的示例数据集
// 格式参考：
// {
//   title: '晶体结构数据库（CIF）',
//   desc: '收录多晶/单晶的 CIF 文件及其元数据，包含晶格参数、对称信息与来源文献，适用于结构分析与相似性检索。',
//   num: '128,340',
//   example: '10',
//   link: ''
// },

export interface DatasetMock {
  title: string
  desc: string
  num: string
  example: string
  link: string
}

// 公益数据集 - 只展示dataRules中三种尺度的叶子节点
export const generatedDatasets: DatasetMock[] = [
  // 微观尺度 - 机器学习用数据
  {
    title: '机器学习用数据',
    desc: '机器学习相关数据集合，包含训练样本、特征数据与验证集，适用于材料性能预测模型开发。',
    num: '2,580',
    example: '2',
    link: '/data-search?scale=micro&type=cdMachineLearn'
  },
  // 介观尺度 - 粗粒化势函数
  {
    title: '粗粒化势函数',
    desc: '粗粒化势函数与映射参数集合，适用于大尺度分子/材料模拟以降低计算成本。',
    num: '1,220',
    example: '3',
    link: '/data-search?scale=meso&type=cgp'
  },
  // 介观尺度 - 热力学数据
  {
    title: '热力学数据',
    desc: '热力学性质数据（热容、自由能、相图数据等），用于相稳定性与热力学分析。',
    num: '6,480',
    example: '5',
    link: '/data-search?scale=meso&type=mtd'
  },
  // 介观尺度 - 动力学数据
  {
    title: '动力学数据',
    desc: '动力学相关数据（扩散系数、反应速率、迁移能垒等），便于动力学建模与反应网络分析。',
    num: '3,900',
    example: '4',
    link: '/data-search?scale=meso&type=dynamics'
  },
  // 宏观尺度 - 力学性能
  {
    title: '力学性能',
    desc: '材料力学性能数据（弹性模量、屈服强度、拉伸曲线等），适用于力学性能统计与模型训练。',
    num: '14,200',
    example: '6',
    link: '/data-search?scale=macro&type=macroMechanics'
  },
  // 宏观尺度 - 热物性数据
  {
    title: '热物性数据',
    desc: '热导率、热膨胀系数、比热等热物性数据集合，便于热管理与传热分析。',
    num: '8,640',
    example: '4',
    link: '/data-search?scale=macro&type=macroHeat'
  }
]
export const privateDatasets: DatasetMock[] = [
  {
    title: '磁性材料电子结构性质计算数据库',
    desc: '磁性材料因其高能量存储密度、场响应特性优异、多功能耦合性强等特性，在新一代电子信息与绿色能源装备领域具有革命性的潜力。本数据集涵盖了磁性材料的总能量，带隙，费米能级等关键参数。系统构建了磁性材料的电子结构性质计算数据库，可为磁性材料机器学习中的稳定性筛选及磁性-电性关联预测提供关键支撑。',
    num: '1,200',
    example: '1',
    link: ''
  },
    {
    title: '电池有机正极材料数据',
    desc: '收录有机正极材料的合成信息、电化学性能（容量、循环寿命）、结构与表征数据，支持电池材料设计与筛选。',
    num: '1,320',
    example: '6',
    link: '/data-search?type=oc'
  },
  {
    title: '有机光电材料数据',
    desc: '包含有机小分子与聚合物光电材料的光谱、能级、器件性能及结构表征数据，便于光电器件建模与优化。',
    num: '1,050',
    example: '4',
    link: '/data-search?type=op'
  },
  {
    title: '三维编织复合材料数据',
    desc: '三维编织复合材料的设计参数、力学性能、微观结构与制造工艺数据，支持复合材料性能预测与工艺改进。',
    num: '1,750',
    example: '5',
    link: '/data-search?type=3dWeaving'
  }
]


export const templateDatasets: DatasetMock[] = [
  {
    title: '二维材料',
    desc: '二维材料（如 MoS2、Graphene）数据模板，包含层厚、缺陷、表征光谱与器件参数等字段示例。',
    num: '640',
    example: '2',
    link: ''
  },
  {
    title: '光电材料',
    desc: '光电材料数据模板，覆盖能级、光谱特性、量子效率与器件测试结果等标准字段。',
    num: '520',
    example: '2',
    link: ''
  },
  {
    title: '钙钛矿材料',
    desc: '钙钛矿光伏/光电材料的数据模板，包含成分配比、制备工艺、光电性能与稳定性测试字段。',
    num: '410',
    example: '1',
    link: ''
  },
  {
    title: '催化材料',
    desc: '催化材料数据模板，包含表面化学、催化活性/选择性及稳定性表征的标准字段与示例。',
    num: '420',
    example: '1',
    link: ''
  },
  {
    title: '金属材料',
    desc: '金属材料（结构/功能）数据模板，覆盖成分、加工工艺、热处理参数与力学性能字段。',
    num: '410',
    example: '1',
    link: ''
  },
   {
    title: '电池有机正极材料数据',
    desc: '收录有机正极材料的合成信息、电化学性能（容量、循环寿命）、结构与表征数据，支持电池材料设计与筛选。',
    num: '1,320',
    example: '6',
    link: ''
  },
  {
    title: '有机光电材料数据',
    desc: '包含有机小分子与聚合物光电材料的光谱、能级、器件性能及结构表征数据，便于光电器件建模与优化。',
    num: '1,050',
    example: '4',
    link: ''
  },
  {
    title: '三维编织复合材料数据',
    desc: '三维编织复合材料的设计参数、力学性能、微观结构与制造工艺数据，支持复合材料性能预测与工艺改进。',
    num: '1,750',
    example: '5',
    link: ''
  }
]

export const standardDatasets: DatasetMock[] = [
  {
    title: '大型锻件材料制备元数据标准',
    desc: '针对大型锻件材料制备过程的元数据规范，涵盖原料、锻造/热处理工艺参数与质量检验字段。',
    num: '420',
    example: '1',
    link: ''
  },
  {
    title: '大型铸锻件仿真用材料计算数据规范',
    desc: '为铸锻件仿真提供的材料计算数据规范，包含本构参数、温度依赖性、网格与边界条件示例字段。',
    num: '560',
    example: '1',
    link: ''
  }
]

export const computationalDatasets: DatasetMock[] = [
  {
    title: 'Gaussian',
    desc: '针对Gaussian量子化学计算的元数据规范，涵盖输入参数、基组设置、计算方法与输出分析字段。',
    num: '680',
    example: '1',
    link: ''
  },
  {
    title: 'Orca',
    desc: '为Orca量子化学程序提供的计算数据规范，包含DFT方法、波函数分析、光谱性质与优化参数示例字段。',
    num: '520',
    example: '1',
    link: ''
  },
  {
    title: 'VASP',
    desc: '针对VASP第一性原理计算的元数据规范，涵盖赝势设置、K点网格、电子自洽与能带结构字段。',
    num: '750',
    example: '1',
    link: ''
  },
  {
    title: 'CP2K',
    desc: '为CP2K混合高斯平面波方法提供的计算数据规范，包含DFT-D3校正、元动力学、自由能计算示例字段。',
    num: '610',
    example: '1',
    link: ''
  },
  {
    title: 'LAMMPS',
    desc: '针对LAMMPS分子动力学模拟的元数据规范，涵盖力场参数、系综设置、边界条件与输出轨迹字段。',
    num: '890',
    example: '1',
    link: ''
  },
  {
    title: 'Gromacs',
    desc: '为Gromacs生物分子动力学模拟提供的计算数据规范，包含水模型选择、约束算法、温度耦合与分析工具示例字段。',
    num: '720',
    example: '1',
    link: ''
  }
]
export default generatedDatasets
