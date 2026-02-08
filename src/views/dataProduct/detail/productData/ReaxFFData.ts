import image1 from "@/assets/img/dataProduct/detail/ReaXFF/image1.png";
import image2 from "@/assets/img/dataProduct/detail/ReaXFF/image2.png";
import image3 from "@/assets/img/dataProduct/detail/ReaXFF/image3.png";
import image4 from "@/assets/img/dataProduct/detail/ReaXFF/image4.png";
import head from "@/assets/img/dataProduct/detail/ReaXFF/ReaxFF_head.png";

export const ReaxFFData = {
  id: "ReaxFFData",
  name: "反应力场数据采集软件ReaxFFCollector",
  unit: "材料计算设计专用数据资源节点",
  time: "2025.10.17",
  description:
    "反应力场数据采集软件ReaxFFCollector面向文献中ReaXFF参数主要以PDF形式发布、难以直接复用的问题，提供从PDF自动提取、清洗与格式修复的一体化解决方案。该软件可将分散且易出错的反应力场文本标准化为可被LAMMPS等主流分子动力学软件直接读取的力场文件，并通过自动化验证快速评估参数可用性，显著降低人工整理成本，提高反应力场参数复用的可靠性与分子动力学研究效率。",
  headImg: head,
  btnName: "申请使用",
  btnLink: "http://mathtc.nscc-tj.cn/msdb/download/ReaxFFCollector.exe",
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
