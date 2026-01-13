import materialDataIcon from '@/assets/img/dataResources/icon_全球材料数据库.png'
import materialSoftwareIcon from '@/assets/img/dataResources/icon_全球材料计算软件库.png'

interface cardInfo {
    value: string;
    label: string;
    children?: Array<cardInfo>
}

// 微观尺度数据类型
const microSelectData: Array<cardInfo> = [
    {
        label:'全文检索',
        value:'all',
    },
    {
        value: 'jg',
        label: '结构',
        children:[
            {
                label:'晶体结构',
                value:"jtjg"
            },
            {
                label:'分子结构',
                value:"fzjg"
            },
        ]
    },
    {
        value: 'jz',
        label: '基组',
        children:[
            {
                label:'平面波基组',
                value:"pmbjz",
            },
            {
                label:'数值原子轨道基组',
                value:"szyzgdjz",
            },
            {
                label:'高斯型基组',
                value:"gsxjz",
            },
            {
                label:'混合基组',
                value:"hhjz",
            },
            {
                label:'赝势基组',
                value:"ysjz",
            },
        ]
    },
    {
        value: 'public',
        label: '赝势',
        children:[
            {
                label:'投影缀加波',
                value:"tyzjb",
            },
            {
                label:'模守恒赝势',
                value:"mshys",
            },
            {
                label:'超软赝势',
                value:"crys",
            },
            {
                label:'有效核赝势',
                value:"hxhys",
            },
        ]
    },
    {
        value: 'jqxxhmdl',
        label: '机器学习哈密顿量',
    },
    {
        value: 'xdlyxhs',
        label: '相对论有效核势',
    },
    {
        value: 'jyshs',
        label: '经验势函数',
        children: [
            {
                label:'对势',
                value:"reaxffPotential",
            },
            {
                label:'多体势',
                value:"dts",
            },
            {
                label:'分子力场',
                value:"fzlc",
            },
            {
                label:'反应力场',
                value:"fylc",
            },
            {
                label:'专用领域势',
                value:"zylys",
            },
        ]
    },
    {
        value: 'jqxxshs',
        label: '机器学习势函数',
        children: [
            {
                label:'神经网络势',
                value:"sjwls",
            },
            {
                label:'核方法与高斯过程势',
                value:"hffygsgcs",
            },
            {
                label:'基函数展开与线性方法',
                value:"jhszkyxxff",
            },
            {
                label:'物理信息与约束模型',
                value:"wlxxyysmx",
            },
            {
                label:'专用优化模型',
                value:"zyyhmx",
            },
        ]
    },
]

// 介观尺度数据类型
const mesoSelectData: Array<cardInfo> = [
    {
        label:'全文检索',
        value:'all',
    },
    {
        value: 'klhshs',
        label: '粗粒化势函数',
    },
    {
        value: 'rlxsj',
        label: '热力学数据',
    },
    {
        value: 'dlxsj',
        label: '动力学数据',
    },{
        value: 'dwlcohcs',
        label: '多物理场耦合参数',
    },

]

// 宏观尺度数据类型
const macroSelectData: Array<cardInfo> = [
    {
        label:'全文检索',
        value:'all',
    },
    {
        value: 'lxxn',
        label: '力学性能',
    },
    {
        value: 'rwxsj',
        label: '热物性数据',
    },
    {
        value: 'xbsj',
        label: '相变数据',
    },{
        value: 'dxxnsj',
        label: '电学性能数据',
    },

]
export {
    microSelectData,
    mesoSelectData,
    macroSelectData
}
