import overviewIcon from '@/assets/img/dataResources/icon_data-overview.png'
import publicIcon from '@/assets/img/dataResources/icon_public-dataset.png'
import privateIcon from '@/assets/img/dataResources/icon_private-dataset.png'
import specialIcon from '@/assets/img/dataResources/icon_special-dataset.png'
import templateIcon from '@/assets/img/dataResources/icon_data-template.png'
import standardIcon from '@/assets/img/dataResources/icon_data-standard.png'
import materialDataIcon from '@/assets/img/dataResources/icon_global-material-database.png'
import materialSoftwareIcon from '@/assets/img/dataResources/icon_global-material-software-library.png'

interface cardInfo {
    path: string;
    name: string;
    icon?: string;
    children?: Array<cardInfo>
}

export const list: Array<cardInfo> = [
    {
        path: 'overview',
        name: '数据总览',
        icon: overviewIcon
    },
    {
        path: 'public',
        name: '公益数据集',
        icon: publicIcon,
    },
    {
        path: 'private',
        name: '私有数据集',
        icon: privateIcon,
        children:[
            {
                path:'private/magneticMaterial',
                name:'磁性材料电子结构性质计算数据库'
            },
             {
                path: 'private/battery',
                name: '电池有机正极材料数据'
            },
            {
                path: 'private/optoelectronics',
                name: '有机光电材料数据'
            },
            {
                path: 'private/composite',
                name: '三维编织复合材料数据'
            },
        ]
    },
  
    {
        path: 'template',
        name: '数据模板',
        icon: templateIcon,
        children:[
            {
                path:"template/two-dimensional",
                name:'二维材料'
            },
            {
                path:"template/optoelectronic",
                name:'光电材料'
            },
            {
                path:"template/perovskite",
                name:'钙钛矿材料'
            },
            {
                path:"template/catalytic",
                name:'催化材料'
            },
            {
                path:"template/metallic",
                name:'金属材料'
            },
             {
                path: 'template/battery',
                name: '电池有机正极材料数据'
            },
            {
                path: 'template/optoelectronics',
                name: '有机光电材料数据'
            },
            {
                path: 'template/composite',
                name: '三维编织复合材料数据'
            },
        ]
    },
    {
        path: 'standard',
        name: '数据标准',
        icon: standardIcon,
        children:[
            {
                path:"standard/manufacture",
                name:'大型锻件材料制备元数据标准'
            },
            {
                path:"standard/sim",
                name:'大型铸锻件仿真用材料计算数据规范'
            }
        ]
    },
    {
        path: 'materialData',
        name: '全球材料数据库',
        icon: materialDataIcon
    },
]
