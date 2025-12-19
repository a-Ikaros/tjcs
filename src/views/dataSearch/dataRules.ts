import materialDataIcon from '@/assets/img/dataResources/icon_全球材料数据库.png'
import materialSoftwareIcon from '@/assets/img/dataResources/icon_全球材料计算软件库.png'

interface cardInfo {
    key: string;
    name: string;
    children?: Array<cardInfo>
}

// 微观尺度数据类型
const microDataTypes: Array<cardInfo> = [
    {
        key: 'jg',
        name: '结构',
        children:[
            {
                name:'晶体结构',
                key:"jtjg"
            },
            {
                name:'分子结构',
                key:"fzjg"
            },
        ]
    },
    {
        key: 'jz',
        name: '基组',
        children:[
            {
                name:'平面波基组',
                key:"pmbjz",
            },
            {
                name:'数值原子轨道基组',
                key:"szyzgdjz",
            },
            {
                name:'高斯型基组',
                key:"gsxjz",
            },
            {
                name:'混合基组',
                key:"hhjz",
            },
            {
                name:'赝势基组',
                key:"ysjz",
            },
        ]
    },
    {
        key: 'public',
        name: '赝势',
        children:[
            {
                name:'投影缀加波',
                key:"tyzjb",
            },
            {
                name:'模守恒赝势',
                key:"mshys",
            },
            {
                name:'超软赝势',
                key:"crys",
            },
            {
                name:'有效核赝势',
                key:"hxhys",
            },
        ]
    },
    {
        key: 'jqxxhmdl',
        name: '机器学习哈密顿量',
    },
    {
        key: 'xdlyxhs',
        name: '相对论有效核势',
    },
    {
        key: 'jyshs',
        name: '经验势函数',
        children: [
            {
                name:'对势',
                key:"ds",
            },
            {
                name:'多体势',
                key:"dts",
            },
            {
                name:'分子力场',
                key:"fzlc",
            },
            {
                name:'反应力场',
                key:"fylc",
            },
            {
                name:'专用领域势',
                key:"zylys",
            },
        ]
    },
    {
        key: 'jqxxshs',
        name: '机器学习势函数',
        children: [
            {
                name:'神经网络势',
                key:"sjwls",
            },
            {
                name:'核方法与高斯过程势',
                key:"hffygsgcs",
            },
            {
                name:'基函数展开与线性方法',
                key:"jhszkyxxff",
            },
            {
                name:'物理信息与约束模型',
                key:"wlxxyysmx",
            },
            {
                name:'专用优化模型',
                key:"zyyhmx",
            },
        ]
    },
]

// 介观尺度数据类型
const mesoDataTypes: Array<cardInfo> = [
    {
        key: 'klhshs',
        name: '粗粒化势函数',
    },
    {
        key: 'rlxsj',
        name: '热力学数据',
    },
    {
        key: 'dlxsj',
        name: '动力学数据',
    },{
        key: 'dwlcohcs',
        name: '多物理场耦合参数',
    },

]

// 宏观尺度数据类型
const macroDataTypes: Array<cardInfo> = [
    {
        key: 'lxxn',
        name: '力学性能',
    },
    {
        key: 'rwxsj',
        name: '热物性数据',
    },
    {
        key: 'xbsj',
        name: '相变数据',
    },{
        key: 'dxxnsj',
        name: '电学性能数据',
    },

]
export {
    microDataTypes,
    mesoDataTypes,
    macroDataTypes
}
