import image1 from "@/assets/img/dataProduct/detail/ReaXFF/image1.png";
import image2 from "@/assets/img/dataProduct/detail/ReaXFF/image2.png";
import image3 from "@/assets/img/dataProduct/detail/ReaXFF/image3.png";
import image4 from "@/assets/img/dataProduct/detail/ReaXFF/image4.png";
import head from "@/assets/img/dataProduct/detail/ReaXFF/ReaxFF_head.png";

const ReaxFFData = {
  id: "ReaxFFData",
  name: "材料计算设计专用数据资源节点eaxFF",
  unit: "新材料大数据中心",
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
          type: "title",
          text: "01 PDF文件选择",
        },
        {
          type: "p",
          text: "点击“选择PDF文件”按钮，在弹出的文件选择窗口中，选择包含ReaXFF参数的PDF文件。",
        },
        {
          type: "img",
          src: image1,
        },
      ],
    },
  ],
};

const data = { ReaxFFData };
export { data };
