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

export const generatedDatasets: DatasetMock[] = [
  // -- microDataTypes 父项与子项 --
  {
    title: '结构',
    desc: '结构相关数据集合，包含晶格参数、对称信息与结构文件（CIF/POSCAR），适用于晶体/分子结构分析。',
    num: '128,340',
    example: '10',
    link: ''
  },
  {
    title: '晶体结构',
    desc: '收录多晶/单晶的 CIF 文件及其元数据，包含晶格参数、对称信息与来源文献，适用于结构分析与相似性检索。',
    num: '78,902',
    example: '6',
    link: ''
  },
  {
    title: '分子结构',
    desc: '常见分子的几何构型与拓扑信息，包含 SMILES/SDF 描述与三维坐标，便于分子模拟与筛选。',
    num: '49,438',
    example: '4',
    link: ''
  },

  {
    title: '基组',
    desc: '常见基组集合，包含平面波、数值轨道与高斯型基组的参数与适用场景说明，便于计算化学软件调用。',
    num: '12,430',
    example: '5',
    link: ''
  },
  {
    title: '平面波基组',
    desc: '平面波截断能、赝势配套参数与参考说明，供周期性体系第一性原理计算使用。',
    num: '3,210',
    example: '2',
    link: ''
  },
  {
    title: '数值原子轨道基组',
    desc: '数值原子轨道基组集合及其收敛测试结果，适用于原子基展开的量子化学计算。',
    num: '2,874',
    example: '2',
    link: ''
  },
  {
    title: '高斯型基组',
    desc: '常用的高斯型基组（Gaussian-type）及其参考文献与使用建议，适用于分子计算和能量计算。',
    num: '4,120',
    example: '3',
    link: ''
  },
  {
    title: '混合基组',
    desc: '混合基组配置示例与适用场景集合，便于在复杂体系中折中精度与效率。',
    num: '1,900',
    example: '1',
    link: ''
  },
  {
    title: '赝势',
    desc: '赝势类型与参数集合，包含投影缀加波、模守恒、超软与有效核赝势等，适用于多种第一性原理软件。',
    num: '8,450',
    example: '5',
    link: ''
  },
  {
    title: '投影缀加波',
    desc: '投影缀加波（PAW）赝势集合与生成参数，方便电子结构计算中使用。',
    num: '2,300',
    example: '2',
    link: ''
  },
  {
    title: '模守恒赝势',
    desc: '模守恒赝势（Norm-conserving）集合与适用软件说明，包含测试用例与匹配信息。',
    num: '1,850',
    example: '1',
    link: ''
  },
  {
    title: '超软赝势',
    desc: '超软赝势（USPP）与相关参数数据库，适合降低平面波基截断能以加速计算。',
    num: '1,720',
    example: '1',
    link: ''
  },
  {
    title: '有效核赝势',
    desc: '有效核近似的赝势集合，适用于重元素与相对论效应显著的体系。',
    num: '2,580',
    example: '1',
    link: ''
  },

  {
    title: '机器学习哈密顿量',
    desc: '机器学习哈密顿量相关训练/测试数据，包含输入特征与目标能量/力数据，适用于 ML 势开发。',
    num: '1,200',
    example: '2',
    link: ''
  },
  {
    title: '相对论有效核势',
    desc: '相对论有效核势相关参数与参考数值，供含重元素计算时使用。',
    num: '680',
    example: '1',
    link: ''
  },

  {
    title: '经验势函数',
    desc: '常见经验势（如 EAM、Tersoff 等）集合，含参数集与适用材料类型说明，便于经典力场模拟。',
    num: '9,450',
    example: '6',
    link: ''
  },
  {
    title: '对势',
    desc: '两体势参数集合及其来源与适用示例，常用于简单的经典力场模拟。',
    num: '1,100',
    example: '1',
    link: ''
  },
  {
    title: '多体势',
    desc: '多体势参数（如 EAM、多体势）集合，包含材料类型与参考性能。',
    num: '2,400',
    example: '2',
    link: ''
  },
  {
    title: '分子力场',
    desc: '常用分子力场（如 OPLS、CHARMM）参数与样例数据，适用于有机分子与聚合物模拟。',
    num: '2,300',
    example: '1',
    link: ''
  },
  {
    title: '反应力场',
    desc: '用于反应动力学模拟的力场参数集合及典型反应路径样例。',
    num: '1,350',
    example: '1',
    link: ''
  },
  {
    title: '专用领域势',
    desc: '针对特定研究领域（如催化、表面）定制的势参数与验证数据。',
    num: '1,900',
    example: '1',
    link: ''
  },

  {
    title: '机器学习势函数',
    desc: '机器学习势函数（ML-Potential）训练/验证数据集合，包含参考能量、力和构型样本。',
    num: '3,200',
    example: '5',
    link: ''
  },
  {
    title: '神经网络势',
    desc: '神经网络势训练数据与示例模型，含数据预处理与评价指标。',
    num: '1,100',
    example: '2',
    link: ''
  },
  {
    title: '核方法与高斯过程势',
    desc: '基于核方法与高斯过程的势函数训练数据与示例，适用于不确定性估计场景。',
    num: '450',
    example: '1',
    link: ''
  },
  {
    title: '基函数展开与线性方法',
    desc: '基函数展开与线性回归类方法的训练样本与基集描述，便于基线模型构建。',
    num: '380',
    example: '1',
    link: ''
  },
  {
    title: '物理信息与约束模型',
    desc: '包含加入物理约束的模型训练样本，可用于提升模型物理一致性。',
    num: '420',
    example: '1',
    link: ''
  },
  {
    title: '专用优化模型',
    desc: '特定任务优化的模型与数据集合示例（如针对某材料体系的参数化数据）。',
    num: '480',
    example: '1',
    link: ''
  },

  // -- mesoDataTypes --
  {
    title: '粗粒化势函数',
    desc: '粗粒化势函数与映射参数集合，适用于大尺度分子/材料模拟以降低计算成本。',
    num: '1,220',
    example: '3',
    link: ''
  },
  {
    title: '热力学数据',
    desc: '热力学性质数据（热容、自由能、相图数据等），用于相稳定性与热力学分析。',
    num: '6,480',
    example: '5',
    link: ''
  },
  {
    title: '动力学数据',
    desc: '动力学相关数据（扩散系数、反应速率、迁移能垒等），便于动力学建模与反应网络分析。',
    num: '3,900',
    example: '4',
    link: ''
  },
  {
    title: '多物理场耦合参数',
    desc: '描述热-电-力耦合等多物理场交互参数的集合，适用于耦合仿真与多物理场分析。',
    num: '980',
    example: '2',
    link: ''
  },

  // -- macroDataTypes --
  {
    title: '力学性能',
    desc: '材料力学性能数据（弹性模量、屈服强度、拉伸曲线等），适用于力学性能统计与模型训练。',
    num: '14,200',
    example: '6',
    link: ''
  },
  {
    title: '热物性数据',
    desc: '热导率、热膨胀系数、比热等热物性数据集合，便于热管理与传热分析。',
    num: '8,640',
    example: '4',
    link: ''
  },
  {
    title: '相变数据',
    desc: '材料相变数据（相变温度、焓变、相图数据），适用于相变建模与热处理工艺设计。',
    num: '3,120',
    example: '3',
    link: ''
  },
  {
    title: '电学性能数据',
    desc: '电导率、电阻率、载流子迁移率等电学性能数据集合，便于电子材料与器件性能预测。',
    num: '5,400',
    example: '3',
    link: ''
  }
]
export const privateDatasets: DatasetMock[] = [
  {
    title: '中国一重私域数据',
    desc: '中国一重集团内部的私有数据集合，包含特定工艺流程、设备运行参数与质量控制信息，适用于企业内部数据分析与优化。',
    num: '1,200',
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
