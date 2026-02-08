// Private Domain Data Sharing System images
import img1 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img1.png";
import img2 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img2.png";
import img3 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img3.png";
import img4 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img4.png";
import img5 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img5.png";
import img6 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img6.png";
import img7 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img7.png";
import img8 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img8.png";
import img9 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img9.png";
import img10 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img10.png";
import img11 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img11.png";
import img12 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img12.png";
import img13 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img13.png";
import img14 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img14.png";
import img15 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img15.png";
import img16 from "@/assets/img/dataProduct/detail/PrivateDomainDataSharing/img16.png";

export const PrivateDomainDataSharingSystemData = {
  id: "PrivateDomainDataSharingSystemData",
  name: "私域材料数据安全共享专区系统",
  unit: "材料计算设计专用数据资源节点",
  time: "2026.01.28",
  description:
    "私域材料数据安全共享专区是以高价值数据价值流通与协同利用为核心的数据协作平台。实现跨主体材料数据的可控流动及复杂协同计算，支撑私域高价值数据的有偿交换。平台提供与中心目录及计算层的双向对接接口，同时支持节点级数据的注册、授权、审计及收益结算，创新高价值数据的共享与有偿使用机制。",
  headImg: img1,
  btnName: "申请使用",
  btnLink:
    location.pathname +
    "#/data-product/application/PrivateDomainDataSharingSystemData",
  content: [
    {
      descName: "软件介绍",
      content: [
        {
          type: "p",
          text: "私域材料数据安全共享专区是以高价值数据价值流通与协同利用为核心的数据协作平台。实现跨主体材料数据的可控流动及复杂协同计算，支撑私域高价值数据的有偿交换。平台提供与中心目录及计算层的双向对接接口，同时支持节点级数据的注册、授权、审计及收益结算，创新高价值数据的共享与有偿使用机制。",
        },
        {
          type: "img",
          src: img1,
          imgDesc: "私域材料数据安全共享专区系统主界面",
        },
      ],
    },
    {
      descName: "使用说明",
      content: [
        {
          type: "strong",
          text: "数据注册",
        },
        {
          type: "p",
          text: "将已有的本地文件注册为数据集，以及如何在 Local Datasets 页面中对数据集进行更新、预览和记录管理。",
        },
        {
          type: "subTitle",
          text: "步骤与操作：",
        },
        {
          type: "subTitle",
          text: "01. 数据注册",
        },
        {
          type: "p",
          text: "在 Dataset Registration 卡片中点击 Register。",
        },
        {
          type: "p",
          text: "输入数据文件的完整路径（例如：/data/example.csv）；数据集名称默认使用文件名，并支持手动修改。",
        },
        {
          type: "p",
          text: "点击 Submit 创建数据集记录。注册过程仅对本地文件进行读取，不会将任何数据上传至中央服务器。",
        },
        {
          type: "img",
          src: img2,
          imgDesc: "数据注册界面",
        },
        {
          type: "subTitle",
          text: "02. 查看数据集列表",
        },
        {
          type: "p",
          text: "表格中展示数据集的 ID、名称、路径、文件大小、创建时间和更新时间。",
        },
        {
          type: "p",
          text: "• 过长的路径和名称将被截断显示，并通过悬浮提示（Tooltip）查看完整内容",
        },
        {
          type: "p",
          text: "• 文件大小支持排序",
        },
        {
          type: "p",
          text: "点击 Refresh 按钮以获取最新的数据集列表。",
        },
        {
          type: "img",
          src: img3,
          imgDesc: "数据集列表界面",
        },
        {
          type: "subTitle",
          text: "03. 预览数据集",
        },
        {
          type: "p",
          text: "在 Actions 列中点击 Preview，打开预览对话框。",
        },
        {
          type: "p",
          text: "对话框显示数据集的基本信息、列标题以及示例行；对于不支持的格式，则显示友好的空状态提示。",
        },
        {
          type: "img",
          src: img4,
          imgDesc: "数据集预览界面",
        },
        {
          type: "subTitle",
          text: "04. 编辑路径或名称",
        },
        {
          type: "p",
          text: "点击 Edit 打开编辑对话框。",
        },
        {
          type: "p",
          text: "修改现有的本地路径和/或名称后保存，系统会重新加载文件大小和预览内容。",
        },
        {
          type: "subTitle",
          text: "05. 刷新数据集文件",
        },
        {
          type: "p",
          text: "点击 Update File，重新读取磁盘上的当前文件，刷新文件大小和预览内容，同时保持记录 ID 不变。",
        },
        {
          type: "subTitle",
          text: "06. 删除数据集",
        },
        {
          type: "p",
          text: "点击 Delete 并确认，删除操作不可撤销。",
        },
        {
          type: "img",
          src: img5,
          imgDesc: "删除数据集界面",
        },
        {
          type: "strong",
          text: "2、数据发布",
        },
        {
          type: "p",
          text: "使用以下流程，将数据集从本地服务器发布到平台：",
        },
        {
          type: "subTitle",
          text: "Step1: 打开发布页面",
        },
        {
          type: "p",
          text: "操作：在左侧导航栏中点击 Publish。",
        },
        {
          type: "img",
          src: img6,
          imgDesc: "打开发布页面",
        },
        {
          type: "subTitle",
          text: "Step2: 加载本地数据集",
        },
        {
          type: "p",
          text: "操作：在 My Datasets 区域，点击 Refresh，加载当前用户已注册的数据集。",
        },
        {
          type: "p",
          text: "数据集表格字段说明：",
        },
        {
          type: "p",
          text: "• ID：本地数据集 ID",
        },
        {
          type: "p",
          text: "• dataset_name：数据集名称",
        },
        {
          type: "p",
          text: "• file_path：本地文件路径",
        },
        {
          type: "p",
          text: "• size：文件大小",
        },
        {
          type: "p",
          text: "• created_time：创建时间",
        },
        {
          type: "p",
          text: "• updated_time：最后更新时间",
        },
        {
          type: "img",
          src: img7,
          imgDesc: "加载本地数据集界面",
        },
        {
          type: "subTitle",
          text: "Step3: 选择要发布的数据集",
        },
        {
          type: "p",
          text: "操作：在数据集表格中，勾选要发布的数据集对应的复选框。选择成功后，系统会显示提示信息。",
        },
        {
          type: "img",
          src: img8,
          imgDesc: "选择要发布的数据集",
        },
        {
          type: "p",
          text: "注意：每次只能发布一个数据集。",
        },
        {
          type: "subTitle",
          text: "Step4: 输入数据集元数据",
        },
        {
          type: "img",
          src: img9,
          imgDesc: "输入数据集元数据",
        },
        {
          type: "p",
          text: "操作：完成提交表单中的各项内容：",
        },
        {
          type: "p",
          text: "• 在 Title 中输入数据集标题",
        },
        {
          type: "p",
          text: "• 在 Price 中输入数据集价格",
        },
        {
          type: "p",
          text: "• 在 Category Tags 下选择一个或多个预定义标签（例如：Computer Science、NLP、CV、PSI）",
        },
        {
          type: "p",
          text: "• （可选）添加自定义标签：",
        },
        {
          type: "p",
          text: "  - 在 Enter the tag you want to add 中输入标签名称，点击 Add",
        },
        {
          type: "p",
          text: "  - 从标签列表中选择新添加的标签",
        },
        {
          type: "p",
          text: "• 在 Detailed Description 中详细描述数据集，包括：",
        },
        {
          type: "p",
          text: "  - 数据来源/背景",
        },
        {
          type: "p",
          text: "  - 关键特性",
        },
        {
          type: "p",
          text: "  - 推荐使用场景",
        },
        {
          type: "p",
          text: "• 在 Dataset Summary 中提供简明摘要，突出数据集的价值",
        },
        {
          type: "p",
          text: "• 在 Data Fields 中描述数据集的列/字段，包括：",
        },
        {
          type: "p",
          text: "  - 字段名称及含义",
        },
        {
          type: "p",
          text: "  - 数据类型",
        },
        {
          type: "p",
          text: "  - 字段间关系（如适用）",
        },
        {
          type: "p",
          text: "• 在 Attribution Information 中提供数据来源及版权/许可信息",
        },
        {
          type: "subTitle",
          text: "Step5: 上传示例文件",
        },
        {
          type: "p",
          text: "操作：在上传区域，点击 Drag & drop files to upload or click to browse，或将文件直接拖拽到上传框中。",
        },
        {
          type: "img",
          src: img10,
          imgDesc: "上传示例文件",
        },
        {
          type: "p",
          text: "注意：示例文件仅用于预览，方便其他用户了解数据集的格式（例如前几行数据）。你可以上传真实数据的小片段，或与真实数据结构相同的合成样本。此步骤不会再次上传完整数据集。仅支持大小不超过 5 MB 的 CSV 示例文件。",
        },
        {
          type: "p",
          text: "点击 Upload。系统会解析 CSV 文件，并在 Sample Dataset 中显示预览（包括前几行数据及列标题）。",
        },
        {
          type: "img",
          src: img11,
          imgDesc: "示例文件预览",
        },
        {
          type: "subTitle",
          text: "Step6: 审核并发布",
        },
        {
          type: "p",
          text: "操作：在右侧 Confirmation Form 中核对所有信息。",
        },
        {
          type: "p",
          text: "然后点击 Publish，完成数据集发布流程。",
        },
        {
          type: "img",
          src: img12,
          imgDesc: "审核并发布",
        },
        {
          type: "strong",
          text: "3、计算任务",
        },
        {
          type: "p",
          text: "数据订阅方基于已发布数据发起计算请求。",
        },
        {
          type: "subTitle",
          text: "Step1: 创建任务",
        },
        {
          type: "p",
          text: "操作：在 Computation Tasks 模块中点击 Create New Task 按钮。",
        },
        {
          type: "img",
          src: img13,
          imgDesc: "创建任务",
        },
        {
          type: "subTitle",
          text: "Step2: 填写必要信息",
        },
        {
          type: "p",
          text: "操作：在 Task Name 和 Task Description 输入框中，分别填写任务名称和任务描述。随后，在 Execution Code 模块中输入需要执行的代码；也可以点击下方的 Load Code from File 按钮，上传本地代码文件。",
        },
        {
          type: "subTitle",
          text: "Step3: 数据绑定",
        },
        {
          type: "p",
          text: '操作：在 Data Binding 模块中点击 Add Data Binding，生成如图所示的"节点–变量名–数据集"依赖关系。对于每一条绑定关系，需要指定节点 ID 以及代码中用于读取该节点数据集的变量名。然后，在 Dataset 列中点击 Bind Dataset。系统将在右侧面板中展示你当前已订阅的数据集列表。',
        },
        {
          type: "img",
          src: img14,
          imgDesc: "数据绑定界面",
        },
        {
          type: "img",
          src: img15,
          imgDesc: "数据绑定详情",
        },
        {
          type: "p",
          text: "对于需要在多个节点之间进行联合计算的任务，请再次点击 Add Data Binding 按钮，以添加更多计算节点（站点）及其所持有的对应数据集。",
        },
        {
          type: "subTitle",
          text: "Step4: 添加计算节点",
        },
        {
          type: "p",
          text: "操作：在 Compute Node Configuration 模块中，选择用于计算的节点数量，该数量需与上一步中添加的节点数量保持一致，并点击 Confirm。系统将弹出节点配置面板。在该面板中，点击 Assign Node 按钮，为每个已选站点配置实际参与计算的计算节点。",
        },
        {
          type: "img",
          src: img16,
          imgDesc: "添加计算节点",
        },
        {
          type: "subTitle",
          text: "Step5: 执行计算任务",
        },
        {
          type: "p",
          text: "操作：点击页面底部的 Start Execution 按钮，即可创建并执行计算任务。",
        },
      ],
    },
  ],
};
