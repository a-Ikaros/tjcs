// PhaseField images
import image1 from "@/assets/img/dataProduct/detail/PhaseField/image1.png";
import image2 from "@/assets/img/dataProduct/detail/PhaseField/image2.png";
import image3 from "@/assets/img/dataProduct/detail/PhaseField/image3.png";
// import pfImage4 from "@/assets/img/dataProduct/detail/PhaseField/4.png";
// import head from "@/assets/img/dataProduct/detail/PhaseField/head.png";

export const PhaseFieldData = {
  id: "PhaseFieldData",
  name: "相场模拟数据采集软件",
  unit: "材料计算设计专用数据资源节点",
  time: "2025.12.25",
  description:
    "相场模拟数据采集软件是一款专为材料科学研究人员设计的专业数据采集工具。该软件采用自动化技术，通过Web界面实现NIST相场数据库的高效采集，支持批量数据下载和智能断点续传功能。系统提供实时任务监控、日志查看和统计分析等功能，帮助科研人员快速获取高质量的相场模拟数据集，提升科研效率和数据处理精度。",
  headImg: image1, // head,
  btnName: "申请使用",
  btnLink: "/#/data-product/application/PhaseFieldData",
  content: [
    {
      descName: "软件介绍",
      content: [
        {
          type: "p",
          text: "相场模拟数据采集软件是一款专为材料科学研究人员设计的专业数据采集工具。该软件采用自动化技术，通过Web界面实现NIST相场数据库的高效采集，支持批量数据下载和智能断点续传功能。系统提供实时任务监控、日志查看和统计分析等功能，帮助科研人员快速获取高质量的相场模拟数据集，提升科研效率和数据处理精度。",
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
          text: "相场模拟数据采集工具",
        },
        {
          type: "subTitle",
          text: "01 运行模式选择",
        },
        {
          type: "p",
          text: "提供隐藏模式和可视化模式选择。勾选\"隐藏模型运行\"按钮，即选择隐藏模式采集，取消勾选即为选择可视化模式。隐藏模式适合生产环境运行，节省资源；可视化模式显示浏览器操作过程，便于调试和观察采集步骤。",
        },
        {
          type: "subTitle",
          text: "02 采集模式选择",
        },
        {
          type: "p",
          text: "点击\"采集范围\"下拉栏，支持采集全部数据和采集指定页码两种采集范围选择。",
        },
        {
          type: "subTitle",
          text: "03 存储设置",
        },
        {
          type: "p",
          text: "\"数据目录\"内显示采集的数据存储位置，支持自定义下载目录路径，支持绝对路径和相对路径。依据NIST网站特点，点击\"下载格式\"下拉栏，选择JSON、BLOB和XML三种下载格式。",
        },
        {
          type: "subTitle",
          text: "04 断点续传",
        },
        {
          type: "p",
          text: "勾选\"启用断点续传\"后，软件能够在网络中断、系统崩溃或其他异常情况下从中断点自动恢复采集，避免重复下载已完成的数据。",
        },
        {
          type: "img",
          src: image1,
          imgDesc: "相场模拟采集工具配置界面",
        },
        {
          type: "subTitle",
          text: "05 数据采集",
        },
        {
          type: "p",
          text: "点击\"开始采集\"后，任务列表会展示出任务名称、开始时间和完成情况（包括完成、失败、取消和运行中），任务栏下方有\"取消任务\"选项，可以用于中止任务功能。",
        },
        {
          type: "img",
          src: image2,
          imgDesc: "数据采集任务列表",
        },
        {
          type: "subTitle",
          text: "06 采集日志",
        },
        {
          type: "p",
          text: "采集日志功能是一个完整的实时监控系统，通过分层架构实现从后端记录到前端展示的全链路日志追踪，提供详细的采集进度监控、错误诊断和性能分析能力，支持多级别日志分类、自动刷新显示和历史记录保存。",
        },
        {
          type: "img",
          src: image3,
          imgDesc: "采集日志监控界面",
        },
      ],
    },
  ],
};
