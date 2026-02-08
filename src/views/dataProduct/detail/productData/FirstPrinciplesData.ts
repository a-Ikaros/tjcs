// FirstPrinciples images
import image1 from "@/assets/img/dataProduct/detail/FirstPrinciples/image1.png";
import image2 from "@/assets/img/dataProduct/detail/FirstPrinciples/image2.png";
import image3 from "@/assets/img/dataProduct/detail/FirstPrinciples/image3.png";
import image4 from "@/assets/img/dataProduct/detail/FirstPrinciples/image4.png";
import image5 from "@/assets/img/dataProduct/detail/FirstPrinciples/image5.png";
import image6 from "@/assets/img/dataProduct/detail/FirstPrinciples/image6.png";
import image7 from "@/assets/img/dataProduct/detail/FirstPrinciples/image7.png";
import image8 from "@/assets/img/dataProduct/detail/FirstPrinciples/image8.png";

export const FirstPrinciplesData = {
  id: "FirstPrinciplesData",
  name: "第一性原理计算数据采集软件",
  unit: "材料计算设计专用数据资源节点",
  time: "2025.12.25",
  description:
    "第一性原理计算数据采集软件是一款专为科研人员开发的自动化Web端采集工具，实现Quantum-ESPRESSO网站UPF赝势数据和Turbomole网站基组数据的自动化高效采集，结合实时监控、自定义采集范围及输出目录和全局重置实用功能，为量子化学与材料科学研究提供稳定可靠的数据获取解决方案。",
  headImg: image1, // head,
  btnName: "申请使用",
  btnLink: location.pathname + "#/data-product/application/FirstPrinciplesData",
  content: [
    {
      descName: "软件介绍",
      content: [
        {
          type: "p",
          text: "第一性原理计算数据采集软件是一款专为科研人员开发的自动化Web端采集工具，实现Quantum-ESPRESSO网站UPF赝势数据和Turbomole网站基组数据的自动化高效采集，结合实时监控、自定义采集范围及输出目录和全局重置实用功能，为量子化学与材料科学研究提供稳定可靠的数据获取解决方案。",
        },
      ],
    },
    {
      descName: "使用说明",
      content: [
        {
          type: "strong",
          text: "运行环境",
        },
        {
          type: "p",
          text: "从材料计算设计专用数据资源节点点击软件链接，登录后，跳转到网页使用。",
        },
        {
          type: "strong",
          text: "模式选择界面",
        },
        {
          type: "p",
          text: '点击"Quantum-ESPRESSO UPF赝势"和"Turbomole基组数据"即可直接进入对应的工具页面。',
        },
        {
          type: "img",
          src: image1,
          imgDesc: "模式选择界面",
        },
        {
          type: "strong",
          text: "Quantum-ESPRESSO赝势数据采集工具",
        },
        {
          type: "subTitle",
          text: "01 运行模式选择",
        },
        {
          type: "p",
          text: '提供隐藏模式和可视化模式选择。勾选"隐藏模型运行"按钮，即选择隐藏模式采集，取消勾选即为选择可视化模式。隐藏模式适合生产环境运行，节省资源；可视化模式显示浏览器操作过程，便于调试和观察采集步骤。',
        },
        {
          type: "subTitle",
          text: "02 采集模式选择",
        },
        {
          type: "p",
          text: '点击"采集范围"下拉栏，支持采集全部元素、采集指定元素和采集指定范围元素三种采集范围选择。',
        },
        {
          type: "subTitle",
          text: "03 存储设置",
        },
        {
          type: "p",
          text: '点击"下载目录"下拉栏，自定义下载目录路径，支持绝对路径和相对路径。软件按元素符号自动创建子目录组织数据，每个元素目录包含对应的UPF文件和注释信息。',
        },
        {
          type: "img",
          src: image2,
          imgDesc: "Quantum-ESPRESSO采集工具界面",
        },
        {
          type: "subTitle",
          text: "04 数据采集",
        },
        {
          type: "p",
          text: '点击"开始采集"后，任务列表会展示出任务名称、时间和完成情况（包括完成、失败、取消和运行中），任务栏右侧有"取消任务"和"详情"选项，可以用于中止任务和查看任务详情功能。',
        },
        {
          type: "img",
          src: image3,
          imgDesc: "数据采集任务列表",
        },
        {
          type: "subTitle",
          text: "05 采集日志",
        },
        {
          type: "p",
          text: "采集工具会在采集过程中产生详细的分层实时日志，从浏览器初始化开始，记录每个元素的页面访问、数据发现、文件处理过程、保存状态和注释信息，到最终的完成统计，可以通过时间戳、图标和颜色编码的日志级别（info、success、warning、error）实时监控整个采集进度，快速定位问题并验证数据完整性。",
        },
        {
          type: "img",
          src: image4,
          imgDesc: "采集日志界面",
        },
        {
          type: "strong",
          text: "Turbomole基组数据采集工具",
        },
        {
          type: "subTitle",
          text: "01 运行模式",
        },
        {
          type: "p",
          text: '点击"隐藏模式运行"以隐藏模式启动，默认可视化模式运行。',
        },
        {
          type: "subTitle",
          text: "02 基组配置",
        },
        {
          type: "p",
          text: '点击"起始基组"、"输出格式"和"基组类型"下拉栏设置针对Turbomole网站信息自定义爬取范围。起始基组提供从不同基组开始采集的功能；输出格式支持TURBOMOLE、Molpro、Gaussian和Dalton等多种格式；基组类型区分Basis、J-Basis、JK-Basis和C-Basis，针对不同计算方法优化。',
        },
        {
          type: "subTitle",
          text: "03 采集模式",
        },
        {
          type: "p",
          text: '点击"采集范围"下拉栏，与Quantum-ESPRESSO模板类似，支持全部元素、指定元素和元素范围三种模式。由于基组数据的维度更高（基组×格式×类型×元素），处理时间和存储空间需求更大。',
        },
        {
          type: "img",
          src: image5,
          imgDesc: "Turbomole采集工具界面",
        },
        {
          type: "subTitle",
          text: "04 数据采集",
        },
        {
          type: "p",
          text: '点击"开始采集"后，任务列表会展示出任务名称、时间和完成情况（包括完成、失败、取消和运行中），任务栏右侧有"取消任务"和"详情"选项，可以用于中止任务和查看任务详情功能。',
        },
        {
          type: "subTitle",
          text: "05 采集日志",
        },
        {
          type: "p",
          text: "Turbomole基组采集工具会在采集过程中产生详细的分层实时日志，从任务初始化、浏览器启动、参数确认开始，记录每个基组合的选项选择过程、每个元素的处理状态、数据提取和保存结果，到最终的组合完成统计和总体进度，可以通过时间戳、图标和颜色编码的四种日志级别（info、success、warning、error）实时监控整个采集进度，快速定位问题并验证数据完整性。",
        },
        {
          type: "img",
          src: image6,
          imgDesc: "Turbomole采集日志",
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
          type: "img",
          src: image7,
          imgDesc: "全局重置功能",
        },
      ],
    },
  ],
};
