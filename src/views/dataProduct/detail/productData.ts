import image1 from "@/assets/img/dataProduct/detail/ReaXFF/image1.png";
import image2 from "@/assets/img/dataProduct/detail/ReaXFF/image2.png";
import image3 from "@/assets/img/dataProduct/detail/ReaXFF/image3.png";
import image4 from "@/assets/img/dataProduct/detail/ReaXFF/image4.png";
import head from "@/assets/img/dataProduct/detail/ReaXFF/ReaxFF_head.png";

// LiteratureFileMINI images
import litImage1 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/1.png";
import litImage2 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/2.png";
import litImage3 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/3.png";
import litImage4 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/4.png";
import litImage5 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/5.png";
import litImage6 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/6.png";
import litImage7 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/7.png";
import litImage8 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/8.png";
import litImage9 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/9.png";
import litImage10 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/10.png";
import litImage11 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/11.png";
import litImage12 from "@/assets/img/dataProduct/detail/LiteratureFileMINI/12.png";
import { text } from "@antv/x6/lib/common/dom/text";

const ReaxFFData = {
  id: "ReaxFFData",
  name: "反应力场数据采集软件ReaxFFCollector",
  unit: "材料计算设计专用数据资源节点",
  time: "2025.10.17",
  description:
    "反应力场数据采集软件ReaxFFCollector面向文献中ReaXFF参数主要以PDF形式发布、难以直接复用的问题，提供从PDF自动提取、清洗与格式修复的一体化解决方案。该软件可将分散目易出错的反应力场文本标准化为可被LAMMPS等主流分子动力学软件直接读取的力场文件，并通过自动化验证快速评估参数可用性，显著降低人工整理成本，提高反应力场参数复用的可靠性与分子动力学研究效率。",
  headImg: head,
  btnName: "申请使用",
  btnLink: "https://www.baidu.com",
  content: [
    {
      descName: "软件介绍",
      content: [
        {
          type: "p",
          text: "反应力场数据采集软件ReaxFFCollector面向文献中ReaXFF参数主要以PDF形式发布、难以直接复用的问题，提供从PDF自动提取、清洗与格式修复的一体化解决方案。该软件可将分散且易出错的反应力场文本标准化为可被LAMMPS等主流分子动力学软件直接读取的力场文件，并通过自动化验证快速评估参数可用性，显著降低人工整理成本，提高反应力场参数复用的可靠性与分子动力学研究效率。",
        },
      ],
    },
    {
      descName: "使用说明",
      content: [
        {
          type: "p",
          text: "反应力场数据采集软件ReaxFFCollector面向文献中ReaXFF参数主要以PDF形式发布、难以直接复用的问题，提供从PDF自动提取、清洗与格式修复的一体化解决方案。该软件可将分散且易出错的反应力场文本标准化为可被LAMMPS等主流分子动力学软件直接读取的力场文件，并通过自动化验证快速评估参数可用性，显著降低人工整理成本，提高反应力场参数复用的可靠性与分子动力学研究效率。",
        },
        {
          type: "strong",
          text: "运行环境",
        },
        {
          type: "p",
          text: "从材料计算设计专用数据资源节点直接下载到本地使用，下载完成后，双击“ReaxFFCollector.exe”文件即可启动软件。",
        },
        {
          type: "strong",
          text: "力场数据采集",
        },
        {
          type: "subTitle",
          text: "01 PDF文件选择",
        },
        {
          type: "p",
          text: "点击“选择PDF文件”按钮，在弹出的文件选择窗口中，选择包含ReaXFF参数的PDF文件。",
        },
        {
          type: "subTitle",
          text: "02 ReaxFF输出配置",
        },
        {
          type: "p",
          text: "点击第二个“从本地选择”按钮，可自定义输出路径和文件名。",
        },
        {
          type: "subTitle",
          text: "03 采集力场数据",
        },
        {
          type: "p",
          text: "点击“采集力场数据”按钮开始自动化采集流程，包括四个步骤:首先从PDF中提取所有文本行;然后自动定位ReaxFF参数的开始和结束位置;接着进行数据清洗，去除无关文本，仅保留纯参数数据;最后将数据转换为标准ReaxFF力场文件格式。",
        },
        {
          type: "subTitle",
          text: "04 采集日志",
        },
        {
          type: "p",
          text: "采集完成后，采集日志区域会显示详细信息，包括参数表的位置信息(起始页和结束页的具体行内容)、力场参数覆盖的化学元素列表，以及各参数区块的完整性检查情况。",
        },
        {
          type: "img",
          src: image1,
          imgDesc: "力场数据采集功能页面",
        },
        {
          type: "strong",
          text: "力场数据预览与编辑",
        },
        {
          type: "subTitle",
          text: "01 内容预览",
        },
        {
          type: "p",
          text: "采集成功后，右侧面板会显示生成的力场文件内容，包括文件头信息、通用参数、原子参数、键参数、非对角项、角参数、扭转参数、氢键参数等。通过右侧滚动条方便地浏览整个内容，实现对力场文件的整体查看与检查。",
        },
        {
          type: "subTitle",
          text: "02 编辑功能",
        },
        {
          type: "p",
          text: "用户可以在文本编辑区直接修改任意参数值。编辑过程中，系统会实时检测修改情况，一旦内容被更改，“保存修改”按钮将变为可用状态。",
        },
        {
          type: "subTitle",
          text: "03 保存操作",
        },
        {
          type: "p",
          text: "点击“保存修改”按钮将当前编辑内容保存到内存中，更新显示内容。",
        },
        {
          type: "subTitle",
          text: "04 下载操作",
        },
        {
          type: "p",
          text: "点击“下载力场文件”按钮，系统会根据已设置的输出路径，将力场文件直接保存到指定位置。",
        },
        {
          type: "img",
          src: image2,
          imgDesc: "力场数据预览与编辑功能页面",
        },
        {
          type: "strong",
          text: "力场数据验证",
        },
        { type: "subTitle", text: "01 验证前准备" },
        {
          type: "p",
          text: "点击“从本地选择”按钮指定lmp.exe路径。确保LAMMPS已正确安装，且支持反应力场的计算模块。",
        },
        { type: "subTitle", text: "02 元素列表配置" },
        {
          type: "p",
          text: "采集成功后，元素列表会自动从力场文件中提取，也可根据需要手动添加或删除元素。元素输入格式要求为元素符号之间用空格分隔，例如CHON。",
        },
        { type: "subTitle", text: "03 验证力场文件" },
        {
          type: "p",
          text: "点击“验证力场文件”按钮启动自动化验证流程，包括临时文件创建、结构生成、能量最小化、分子动力学模拟。通常验证计算耗时1-5秒，特殊情况限时5分钟，耗时取决于力场所支持元素数量、本地LAMMPS运行环境及计算机性能。",
        },
        { type: "subTitle", text: "04 验证日志" },
        {
          type: "p",
          text: "验证完成后，验证日志区域会依次显示完整流程，包括开始LAMMPS计算验证、计算元素列表、自动生成临时输入文件、执行能量最小化和分子动力学计算等信息。成功完成时，会显示“计算正常完成”和“力场验证成功!”等提示。-5秒，特殊情况限时5分钟，耗时取决于力场所支持元素数量、本地LAMMPS运行环境及计算机性能。",
        },
        {
          type: "img",
          src: image3,
          imgDesc: "力场数据验证功能页面",
        },
        {
          type: "strong",
          text: "全局重置",
        },
        {
          type: "p",
          text: "全局重置功能可一键清空当前会话中产生的全部输入参数、解析结果、输出文件路径以及运行日志信息，使软件快速恢复到初始状态，便于用户重新开始新的数据采集任务或在测试、调试结束后统一清理无效数据。",
        },
        {
          type: "p",
          text: "在执行全局重置前，系统将自动弹出二次确认对话框，仅在用户确认后才会执行重置操作，保障数据安全与使用稳定性。",
        },
        {
          type: "img",
          src: image4,
          imgDesc: "全局重置功能页面",
        },
      ],
    },
  ],
};

const LiteratureData = {
  id: "LiteratureData",
  name: "材料文献数据挖掘系统",
  unit: "材料计算设计专用数据资源节点",
  time: "2025.12.25",
  description:
    "材料文献数据挖掘系统是支撑新材料计算设计数据资源节点--文献数据挖掘工具。面向PDF、markdown等材料文献文件类型，自动识别并挖掘材料成分、工艺、性能等要素，抽取结构化性质数据，同时构建材料结构化知识图谱，具有图谱可视化功能，同时支持根据抽取的性质数据知识库开展智能知识问答。",
  headImg: litImage1,
  btnName: "申请使用",
  btnLink: "https://www.baidu.com",
  content: [
    {
      descName: "软件介绍",
      content: [
        {
          type: "p",
          text: "材料文献数据挖掘系统是支撑新材料计算设计数据资源节点--文献数据挖掘工具。面向PDF、markdown等材料文献文件类型，自动识别并挖掘材料成分、工艺、性能等要素，抽取结构化性质数据，同时构建材料结构化知识图谱，具有图谱可视化功能，同时支持根据抽取的性质数据知识库开展智能知识问答。",
        },
      ],
    },
    {
      descName: "使用说明",
      content: [
        {
          type: "strong",
          text: "1、 系统首页",
        },
        {
          type: "p",
          text: "首页用于展示系统概况与核心入口。",
        },
        {
          type: "img",
          src: litImage2,
          imgDesc: "文献导入功能界面",
        },
        {
          type: "subTitle",
          text: "顶部导航:",
        },
        {
          type: "p",
          text: "首页/工作流工具/任务列表，便于在全局块间切换。",
        },
        {
          type: "subTitle",
          text: "系统简介:",
        },
        {
          type: "p",
          text: "系统面向材料文献自动识别与抽取成分、工艺、性能等要素，形成结构化数据集与关系知识图谱，支持基于知识图谱的领域知识智能问答。",
        },
        {
          type: "subTitle",
          text: "核心功能概览:",
        },
        {
          type: "p",
          text: "以图标卡片方式展示“论文管理、数据抽取、结果可视化、智能问答”等能力范围。",
        },
        {
          type: "subTitle",
          text: "最近任务:",
        },
        {
          type: "p",
          text: "展示近期任务卡片，包含任务ID、创建时间、文件数量与状态徽标，支持一键进入任务详情。",
        },
        {
          type: "strong",
          text: "2、工作流工具:独立步骤执行",
        },
        {
          type: "p",
          text: "独立步骤模式用于“按需运行某一步”，适合已具备中间文件或需要反复调参重跑的场景。该模式包含模型设置、四个可独立运行模块、实时日志查看与输出下载功能。",
        },
        {
          type: "img",
          src: litImage3,
          imgDesc: "导入配置界面",
        },
        {
          type: "subTitle",
          text: "01 抽取模型设置(用于Step2:MD抽取)",
        },
        {
          type: "p",
          text: "供应商/模型名称/APIKey: 选择或填写抽取所用模型(如deepseek deepseek-reasoner、mimo_mimo-v2-flash等)。",
        },
        {
          type: "subTitle",
          text: "02 四个独立功能模块与具体操作",
        },
        {
          type: "subTitle",
          text: "Step1:PDF上传与OCR解析",
        },
        {
          type: "p",
          text: "操作:拖拽或选择 PDF(支持多文件)→点击“执行0CR解析”。",
        },
        {
          type: "p",
          text: "输出:Markdown文件(用于后续抽取或下载留存)。",
        },
        {
          type: "img",
          src: litImage4,
          imgDesc: "PDF上传与OCR解析界面",
        },
        {
          type: "subTitle",
          text: "Step2:MD文件抽取",
        },
        {
          type: "p",
          text: "操作:拖拽或选择.md(可来自Step1输出，也可自备)→点击“执行数据抽取”。",
        },
        {
          type: "p",
          text: "输出:结构化数据表(包含材料名称、成分、工艺、性质等字段)和知识图谱.JSON(节点与关系)。",
        },
        {
          type: "img",
          src: litImage5,
          imgDesc: "MD抽取界面",
        },
        {
          type: "subTitle",
          text: "Step3:知识图谱导入",
        },
        {
          type: "p",
          text: "操作:上传 Step2 产出的图谱JSON →点击“导入 Neo4j”。",
        },
        {
          type: "p",
          text: "数据写入本地Neo4j数据库，为可视化与问答提供数据库基础。",
        },
        {
          type: "img",
          src: litImage6,
          imgDesc: "数据可视化界面",
        },
        {
          type: "subTitle",
          text: "Step4:图谱节点合并与清理",
        },
        {
          type: "p",
          text: "操作:无需上传文件→点击“执行节点合并”。",
        },
        {
          type: "p",
          text: "作用:对Neo4j内重复实体进行合并，减少余节点与关系。",
        },
        {
          type: "p",
          text: "说明:独立步骤模式下每执行一次都会创建一个独立任务ID，结果分别存放。若要继续下一步，需要将上一步产物(如.md、JSON)在下一步重新上传或选择对应任务产物进行使用。:合并后的知识图谱JSON(节点与关系)。",
        },
        {
          type: "img",
          src: litImage7,
          imgDesc: "数据可视化界面",
        },
        {
          type: "subTitle",
          text: "02 实时日志查看与输出下载功能",
        },
        {
          type: "p",
          text: "实时日志: 在任务执行中，日志窗口会逐行输出后台执行信息(开始、进度、警告、错误等)。",
        },
        {
          type: "p",
          text: "产出文件下载: 文件列表会展示该任务生成的所有结果文件(数据集、图谱等)。支持单文件直接下载和全部ZIP/datasetZlP/graph ZIP一键打包下载，便于归档或离线分析。",
        },
        { type: "strong", text: "3、工作流工具:完整工作流" },
        {
          type: "p",
          text: "完整工作流适合“从PDF开始端到端处理”，步骤顺序固定、数据自动衔接，减少中间文件的反复上传。实时日志查看与输出下载功能与独立运行模块相同。",
        },
        {
          type: "img",
          src: litImage8,
          imgDesc: "完整工作流下载文件建议",
        },
        {
          type: "subTitle",
          text: "步骤与操作:",
        },
        {
          type: "p",
          text: "PDF上传与OCR:选择PDF→点击“上传并执行;",
        },
        {
          type: "p",
          text: "结构化数据抽取: 点击“执行抽取”(自动使用OCR输出的.md文件);",
        },
        {
          type: "p",
          text: "Neo4j导入: 点击“导入Neo4j”(自动使用抽取生成的图谱.JSON)",
        },
        {
          type: "p",
          text: "图谱合并: 点击“执行合并”;",
        },
        {
          type: "p",
          text: "查看结果: 点击“查看结果”展开数据表、图谱与问答入口。",
        },
        {
          type: "img",
          src: litImage9,
          imgDesc: "查看结果界面",
        },
        {
          type: "strong",
          text: "4、任务列表页",
        },
        {
          type: "p",
          text: "用于集中管理系任务列表统内全部任务，表格列出:任务ID、状态、文件数量、创建时间，并提供“进入”按钮进入详情页。。",
        },
        {
          type: "img",
          src: litImage10,
          imgDesc: "任务列表页",
        },
        {
          type: "strong",
          text: "5、任务详情页",
        },
        {
          type: "p",
          text: "任务详情页汇总单个任务的“进度、控制、结果、下载”，支持图片可视化与智能问答功能。",
        },
        {
          type: "subtitle",
          text: "01 结果展示",
        },
        {
          type: "p",
          text: "单步操作: 可手动点击执行extract/执行Neo4j导入/执行合井/加载结果，加载独立工作模块补跑或重新生成结果。",
        },
        {
          type: "p",
          text: "提供文件列表与ZIP打包下载。",
        },
        {
          type: "p",
          text: "日志: 支持加载/刷新/清空，用于定位问题与留存运行记录。",
        },
        {
          type: "p",
          text: "结构化数据表+知识图谱可视化(需“加载结果”后显示)。",
        },
        {
          type: "img",
          src: litImage11,
          imgDesc: "任务详情页",
        },
        {
          type: "subtitle",
          text: "02 知识图谱可视化",
        },
        {
          type: "p",
          text: "加载结果后，图谱区以节点-关系方式展示抽取到的实体与关联，可调参数有:最大节点数/最大边数:控制渲染规模，避免图谱过密。",
        },
        {
          type: "p",
          text: "布局选择(cose、concentric、grid、breadthfirst四种方式): 切换不同布局以观察图谱结构;",
        },
        {
          type: "p",
          text: "重新渲染: 应用参数后刷新图谱。",
        },
        {
          type: "subtitle",
          text: "03 基于图谱的智能问答(Agent)",
        },
        {
          type: "p",
          text: "问答模块支持用户用自然语言对领域知识提问，系统会结合图谱检索与模型推理给出回答，并在右侧展示知识图谱检索过程。",
        },
        {
          type: "p",
          text: "供应商/模型名称/APIKey:选择或填写抽取所用模型(如deepseekdeepseek-reasoner、mimo mimo-v2-flash等",
        },
        {
          type: "p",
          text: "交互: 输入问题→点击发送→左侧输出答案/右侧输出检索过程。",
        },
        {
          type: "p",
          text: "交互: 输入问题→点击发送→左侧输出答案/右侧输出检索过程;",
        },
        {
          type: "img",
          src: litImage12,
          imgDesc: "问答模块交互示例",
        },
      ],
    },
  ],
};

const data = { ReaxFFData, LiteratureData };
export { data };
