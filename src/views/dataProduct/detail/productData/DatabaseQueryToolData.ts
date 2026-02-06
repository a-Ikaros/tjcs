// DatabaseQueryTool images
// 注意：需要将实际的图片文件放到 @/assets/img/dataProduct/detail/DatabaseQueryTool/ 目录下
import dbImage1 from "@/assets/img/dataProduct/detail/DBSearch/主界面.png";
import dbImage2 from "@/assets/img/dataProduct/detail/DBSearch/元素筛选器.png";
import dbImage3 from "@/assets/img/dataProduct/detail/DBSearch/结果查询.png";
import dbImage4 from "@/assets/img/dataProduct/detail/DBSearch/结果导出.png";

export const DatabaseQueryToolData = {
  id: "DatabaseQueryToolData",
  name: "材料数据库统一采集工具",
  unit: "材料计算设计专用数据资源节点",
  time: "2026.01.28",
  description:
    "材料数据库统一采集工具是一款基于 OPTIMADE 标准的材料数据库查询软件，专为材料科学研究人员设计。通过本工具可以统一查询全球多个材料数据库，提供可视化元素选择、智能结果管理和数据导出功能，无需逐个访问不同数据库，大幅提升材料数据检索效率。",
  headImg: dbImage1,
  btnName: "申请使用",
  btnLink: "/data-product/application/DatabaseQueryToolData",
  content: [
    {
      descName: "软件介绍",
      content: [
        // {
        //   type: "strong",
        //   text: "材料数据库统一采集工具是什么？",
        // },
        {
          type: "p",
          text: "材料数据库统一采集工具是一款基于 OPTIMADE 标准的材料数据库查询软件，专为材料科学研究人员设计。通过本工具可以实现以下功能：",
        },
        {
          type: "p",
          text: "• 统一查询多个材料数据库：一次性查询全球多个材料数据库，无需逐个访问",
        },
        {
          type: "p",
          text: "• 可视化元素选择：通过交互式元素周期表快速构建查询条件",
        },
        {
          type: "p",
          text: "• 智能结果管理：自动整合、筛选和展示来自不同数据库的查询结果",
        },
        {
          type: "p",
          text: "• 数据导出：支持将查询结果导出为 CSV 格式，便于后续分析",
        },
        {
          type: "img",
          src: dbImage1,
          imgDesc: "材料数据库统一采集工具主界面",
        },
      ],
    },
    {
      descName: "使用说明",
      content: [
        {
          type: "strong",
          text: "1. 启动软件",
        },
        {
          type: "p",
          text: "双击运行软件后，主界面分为左右两部分：",
        },
        {
          type: "p",
          text: "• 左侧：数据库选择和查询选项",
        },
        {
          type: "p",
          text: "• 右侧：查询结果表格",
        },
        {
          type: "img",
          src: dbImage1,
          imgDesc: "软件主界面布局",
        },
        {
          type: "strong",
          text: "2. 选择要查询的数据库",
        },
        {
          type: "subTitle",
          text: "方法一：从数据库列表选择（推荐）",
        },
        {
          type: "p",
          text: "1. 在\"从数据库列表选择\"区域，浏览可用的数据库提供者",
        },
        {
          type: "p",
          text: "2. 使用搜索框快速查找特定数据库（支持按 ID 或名称搜索）",
        },
        {
          type: "p",
          text: "3. 勾选您想要查询的数据库",
        },
        {
          type: "p",
          text: "   💡 提示：可以使用\"✓ 全选\"按钮快速选择所有数据库",
        },
        {
          type: "p",
          text: "4. 点击\"✓ 应用选择\"按钮，将选中的数据库 URL 填充到地址框",
        },
        {
          type: "subTitle",
          text: "方法二：手动输入数据库地址",
        },
        {
          type: "p",
          text: "在\"数据库地址\"文本框中，每行输入一个 OPTIMADE 数据库的根地址，例如：",
        },
        {
          type: "p",
          text: "https://www.crystallography.net/cod/optimade",
        },
        {
          type: "p",
          text: "https://optimade.materialsproject.org",
        },
        {
          type: "p",
          text: "注意：留空数据库地址将查询所有已注册的 OPTIMADE 数据库（可能较慢）",
        },
        {
          type: "strong",
          text: "3. 设置筛选条件",
        },
        {
          type: "subTitle",
          text: "使用元素选择器",
        },
        {
          type: "p",
          text: "1. 点击\"元素选择器\"按钮，打开可视化元素周期表",
        },
        {
          type: "p",
          text: "2. 在周期表中点击元素进行选择：",
        },
        {
          type: "p",
          text: "   • 第一次点击：包含该元素（绿色高亮）",
        },
        {
          type: "p",
          text: "   • 第二次点击：排除该元素（红色高亮）",
        },
        {
          type: "p",
          text: "   • 第三次点击：取消选择",
        },
        {
          type: "p",
          text: "3. 设置匹配模式：",
        },
        {
          type: "p",
          text: "   • 包含任意选中元素：结构中至少包含一个选中的元素",
        },
        {
          type: "p",
          text: "   • 包含所有选中元素：结构中必须包含所有选中的元素",
        },
        {
          type: "p",
          text: "   • 精确匹配：结构中仅包含选中的元素，不能有其他元素",
        },
        {
          type: "p",
          text: "4. （可选）设置元素种类数量范围",
        },
        {
          type: "p",
          text: "5. 预览生成的筛选条件",
        },
        {
          type: "p",
          text: "6. 点击\"确定\"应用筛选条件",
        },
        {
          type: "img",
          src: dbImage2,
          imgDesc: "元素选择器界面",
        },
        {
          type: "subTitle",
          text: "示例场景",
        },
        {
          type: "p",
          text: "场景 1：查找含硅的材料",
        },
        {
          type: "p",
          text: "• 选择 Si（绿色）",
        },
        {
          type: "p",
          text: "• 匹配模式：包含任意选中元素",
        },
        {
          type: "p",
          text: "• 结果：所有含硅的材料",
        },
        {
          type: "p",
          text: "场景 2：查找硅氧化合物",
        },
        {
          type: "p",
          text: "• 选择 Si 和 O（都为绿色）",
        },
        {
          type: "p",
          text: "• 匹配模式：精确匹配",
        },
        {
          type: "p",
          text: "• 元素种类：最少 2 种，最多 2 种",
        },
        {
          type: "p",
          text: "• 结果：仅由硅和氧组成的化合物（如 SiO₂）",
        },
        {
          type: "p",
          text: "场景 3：查找不含过渡金属的氧化物",
        },
        {
          type: "p",
          text: "• 选择 O（绿色）",
        },
        {
          type: "p",
          text: "• 选择 Fe, Co, Ni, Cu 等过渡金属（红色）",
        },
        {
          type: "p",
          text: "• 匹配模式：包含任意选中元素",
        },
        {
          type: "p",
          text: "• 结果：含氧但不含选中过渡金属的材料",
        },
        {
          type: "strong",
          text: "4. 设置查询选项",
        },
        {
          type: "subTitle",
          text: "每个数据库最多返回结果数",
        },
        {
          type: "p",
          text: "• 默认值：50 条",
        },
        {
          type: "p",
          text: "• 范围：0-500 条",
        },
        {
          type: "p",
          text: "• 设置为 0 表示不限制（可能导致查询时间较长）",
        },
        {
          type: "strong",
          text: "5. 开始查询",
        },
        {
          type: "p",
          text: "1. 确认已选择数据库和设置筛选条件",
        },
        {
          type: "p",
          text: "2. 点击\"开始查询\"按钮",
        },
        {
          type: "p",
          text: "3. 等待查询完成（进度会在控制台显示）",
        },
        {
          type: "p",
          text: "4. 查询完成后，结果将显示在右侧表格中",
        },
        {
          type: "subTitle",
          text: "查询过程中",
        },
        {
          type: "p",
          text: "• 所有控件将被禁用，防止重复操作",
        },
        {
          type: "p",
          text: "• 控制台会显示查询进度和调试信息",
        },
        {
          type: "p",
          text: "• 如有错误，会在查询完成后显示错误摘要",
        },
        {
          type: "subTitle",
          text: "查询完成后",
        },
        {
          type: "p",
          text: "• 成功的数据库会在\"选择要显示的供应商\"列表中显示",
        },
        {
          type: "p",
          text: "• 默认选中所有成功的数据库",
        },
        {
          type: "p",
          text: "• 可以点击\"查询日志\"查看详细的错误信息",
        },
        {
          type: "img",
          src: dbImage3,
          imgDesc: "查询结果展示",
        },
        {
          type: "strong",
          text: "6. 查看和筛选结果",
        },
        {
          type: "subTitle",
          text: "按数据库筛选",
        },
        {
          type: "p",
          text: "在\"选择需要的数据库查询结果（可多选）\"列表中：",
        },
        {
          type: "p",
          text: "• 单选：仅显示该数据库的结果",
        },
        {
          type: "p",
          text: "• 多选：合并显示多个数据库的结果",
        },
        {
          type: "p",
          text: "• 取消选择：隐藏该数据库的结果",
        },
        {
          type: "strong",
          text: "7. 导出结果",
        },
        {
          type: "subTitle",
          text: "导出 CSV 文件",
        },
        {
          type: "p",
          text: "1. 点击\"导出CSV\"按钮",
        },
        {
          type: "p",
          text: "2. 文件将保存到指定目录",
        },
        {
          type: "p",
          text: "3. 文件名格式：optimade_data_2026xxxx.csv",
        },
        {
          type: "img",
          src: dbImage4,
          imgDesc: "结果导出功能",
        },
        {
          type: "strong",
          text: "8. 查看错误日志",
        },
        {
          type: "p",
          text: "如果查询过程中出现错误：",
        },
        {
          type: "p",
          text: "1. 点击\"查询日志\"按钮",
        },
        {
          type: "p",
          text: "2. 查看两个标签页：",
        },
        {
          type: "p",
          text: "   • 当前查询：本次查询的错误详情",
        },
        {
          type: "p",
          text: "   • 历史日志：所有历史错误记录",
        },
        {
          type: "p",
          text: "3. 常见错误类型：",
        },
        {
          type: "p",
          text: "   • 服务器内部错误(500)：数据库服务器问题",
        },
        {
          type: "p",
          text: "   • 接口未找到(404)：数据库不支持该端点",
        },
        {
          type: "p",
          text: "   • 连接超时：网络问题或服务器响应慢",
        },
        {
          type: "p",
          text: "   • SSL错误：证书验证问题",
        },
      ],
    },
  ],
};
