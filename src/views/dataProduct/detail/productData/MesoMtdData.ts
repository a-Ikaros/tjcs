// MesoMtd images
import image1 from "@/assets/img/dataProduct/detail/mesoMtd/image1.png";
import image2 from "@/assets/img/dataProduct/detail/mesoMtd/image2.png";
import image3 from "@/assets/img/dataProduct/detail/mesoMtd/image3.png";
import image4 from "@/assets/img/dataProduct/detail/mesoMtd/image4.png";
import image5 from "@/assets/img/dataProduct/detail/mesoMtd/image5.png";
import image6 from "@/assets/img/dataProduct/detail/mesoMtd/image6.png";

export const MesoMtdData = {
  id: "MesoMtdData",
  name: "介观热力学数据采集整合工具",
  unit: "材料计算设计专用数据资源节点",
  time: "2026.01.28",
  description:
    "TDB（热力学数据库，Thermodynamic DataBase）文件包含热力学参数的完整描述，内部包括元素、相、组成、参数等多个部分，结构复杂多样，是介观尺度相图计算用的共性基础数据。TDB元数据抽取与校验平台集成了从数据获取到结果验证的全流程功能，帮助高效管理和利用.TDB文件。",
  headImg: image1,
  btnName: "申请使用",
  btnLink: location.pathname + "#/data-product/application/MesoMtdData",
  content: [
    {
      descName: "软件介绍",
      content: [
        {
          type: "p",
          text: "TDB（热力学数据库，Thermodynamic DataBase）文件包含热力学参数的完整描述，内部包括元素、相、组成、参数等多个部分，结构复杂多样，是介观尺度相图计算用的共性基础数据。TDB元数据抽取与校验平台集成了从数据获取到结果验证的全流程功能，帮助高效管理和利用.TDB文件。平台主要功能包括：",
        },
        {
          type: "p",
          text: "• 数据采集：内置数据采集工具，从公开的热力学数据库网站自动批量下载 .TDB 文件。",
        },
        {
          type: "p",
          text: "• 元数据构建：自动解析每个 .TDB 文件中的元素列表、相（相图相）信息等关键内容，提取出结构化的元数据，并生成标准化的 JSON 模板文件以统一描述这些信息。",
        },
        {
          type: "p",
          text: "• 元数据校验与差异检查：平台对大模型抽取补充的元数据进行自动验证和校对。通过校验流程，可发现并标记潜在的不一致或错误之处（例如模型生成的幻觉信息）。同时提供原始解析元数据与LLM补充结果之间的差异对比。",
        },
        {
          type: "p",
          text: "• 可视化对比与发布包导出：提供直观的界面来可视化展示元数据差异，支持一键导出发布包：即按照标准子目录结构导出仅包含 .TDB 原始文件和对应 JSON 元数据文件的结果包，方便后续分享和发布。",
        },
        {
          type: "img",
          src: image1,
          imgDesc: "平台主界面",
        },
      ],
    },
    {
      descName: "使用说明",
      content: [
        {
          type: "strong",
          text: "流程 A：从数据采集开始的完整流程",
        },
        {
          type: "p",
          text: "适用情形：当用户希望从公开数据库网站上批量获取 .TDB 文件并提取元数据信息时，可采用流程 A。平台将从数据抓取开始，自动完成后续的解析和导出。其步骤如下：",
        },
        {
          type: "subTitle",
          text: "1. 启动数据采集",
        },
        {
          type: "p",
          text: "在平台的工具页中，选择数据采集功能，平台将自动从公开资料库中采集下载 .TDB 文件数据。",
        },
        {
          type: "subTitle",
          text: "2. 获取本地 TDB 文件",
        },
        {
          type: "p",
          text: "爬虫任务完成后，下载的 .TDB 文件会保存在平台的工作空间中。用户可以在任务列表或指定的批次结果页查看此次采集获得的文件清单，确认文件获取成功。",
        },
        {
          type: "subTitle",
          text: "3. 运行元数据抽取流程",
        },
        {
          type: "p",
          text: "接下来，对采集到的 .TDB 文件执行元数据抽取处理。用户通过平台界面调用一体化处理流程，平台将依次进行元数据构建、LLM 抽取，以及自动校验和差异检查。整个过程由系统自动完成，用户只需等待任务完成通知。",
        },
        {
          type: "img",
          src: image3,
          imgDesc: "元数据抽取流程",
        },
        {
          type: "subTitle",
          text: "4. 查看结果并导出发布包",
        },
        {
          type: "p",
          text: "处理完成后，可在任务详情页查看每个 .TDB 文件的元数据提取结果，包括标准化的 JSON 文件、校验报告和差异对比结果等。确认无误后，用户可以导出发布包——平台会按照标准目录结构打包包含原始 .TDB 和 JSON 元数据的文件夹，供用户下载保存。",
        },
        {
          type: "img",
          src: image2,
          imgDesc: "结果导出界面",
        },
        {
          type: "p",
          text: "备注：流程 A 往往会处理多个文件，因此平台会将同一次数据采集产生的任务归为一个批次，方便统一管理和比较。",
        },
        {
          type: "strong",
          text: "流程 B：本地上传处理",
        },
        {
          type: "p",
          text: "适用情形：当用户已经拥有本地的 .TDB 文件，或希望对单个文件快速执行元数据提取时，可采用流程 B。由用户直接上传文件，平台自动完成指定阶段的处理。具体步骤如下：",
        },
        {
          type: "img",
          src: image4,
          imgDesc: "本地上传处理界面",
        },
        {
          type: "subTitle",
          text: "1. 上传 TDB 文件",
        },
        {
          type: "p",
          text: "打开平台的任务上传页面，在界面中选择本地 .TDB 文件进行上传。用户可以拖拽文件或点击选择，并支持一次上传单个或多个 .TDB 文件。",
        },
        {
          type: "subTitle",
          text: "2. 设置抽取阶段与模型",
        },
        {
          type: "p",
          text: "在上传界面，配置本次任务的处理选项。用户可选择需要执行的阶段（例如是否启用 LLM 抽取阶段），以及所使用的大语言模型类型。如果不确定，可使用默认设置（通常执行全部阶段，模型采用系统默认）。",
        },
        {
          type: "subTitle",
          text: "3. 提交任务并自动运行",
        },
        {
          type: "p",
          text: '配置完成后，点击"开始"或"提交"按钮创建任务。平台将自动按照选定流程执行元数据解析、模型抽取、校验等步骤。用户此时可前往任务列表页查看该任务的状态，平台会以后台方式完成处理。',
        },
        {
          type: "subTitle",
          text: "4. 查看任务进度与结果",
        },
        {
          type: "p",
          text: '在任务列表或详情页监控任务状态。当任务状态显示为"已完成"时，点击该任务进入详情页即可查看结果。用户能看到提取生成的 JSON 元数据、check 校验文件和 diff 差异报告等内容。如需保存结果，可直接在详情页下载单个发布包，或返回任务列表进行批量导出。',
        },
        {
          type: "img",
          src: image5,
          imgDesc: "任务列表页",
        },
        {
          type: "strong",
          text: "任务列表页",
        },
        {
          type: "p",
          text: "任务列表页用于集中展示所有提交的任务及其当前状态。页面以表格或列表形式列出每个任务的名称（或文件名）、提交时间、所选模型、以及状态标识等信息。常见的任务状态包括：排队中（等待处理）、进行中（处理中）、已完成（处理成功）、失败（处理出错），用户可以在此页面实时监控多个任务的进度，并支持对已完成的任务执行后续操作，例如查看详情或批量下载结果。",
        },
        {
          type: "img",
          src: image6,
          imgDesc: "任务列表详情",
        },
      ],
    },
  ],
};
