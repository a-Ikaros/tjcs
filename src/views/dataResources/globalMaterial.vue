<script lang="ts" setup>
import { onMounted, ref, watchEffect, computed } from "vue";
import aflow from '@/assets/img/dataResources/databaseImgs/aflow.jpg';
import atomly from '@/assets/img/dataResources/databaseImgs/atomly.jpg';
import mgedata from '@/assets/img/dataResources/databaseImgs/mgedata.jpg';
import caishuku from '@/assets/img/dataResources/databaseImgs/caishuku.jpg';
import matai from '@/assets/img/dataResources/databaseImgs/matai.jpg';
import chemspider from '@/assets/img/dataResources/databaseImgs/chemspider.jpg';
import citrine from '@/assets/img/dataResources/databaseImgs/citrine.jpg';
import calphad from '@/assets/img/dataResources/databaseImgs/calphad.jpg';
import cod from '@/assets/img/dataResources/databaseImgs/cod.jpg';
import duohejin from '@/assets/img/dataResources/databaseImgs/duohejin.png';
import corrdata from '@/assets/img/dataResources/databaseImgs/corrdata.jpg';
import nbsdc from '@/assets/img/dataResources/databaseImgs/nbsdc.jpg';
import nmdms from '@/assets/img/dataResources/databaseImgs/nmdms.jpg';
import atsteel from '@/assets/img/dataResources/databaseImgs/atsteel.jpg';
import granta from '@/assets/img/dataResources/databaseImgs/granta.jpg';
import siochem from '@/assets/img/dataResources/databaseImgs/siochem.jpg';
import htem from '@/assets/img/dataResources/databaseImgs/htem.jpg';
import icsd from '@/assets/img/dataResources/databaseImgs/icsd.jpg';
import jarvis from '@/assets/img/dataResources/databaseImgs/jarvis.jpg';
import materialsproject from '@/assets/img/dataResources/databaseImgs/materialsproject.jpg';
import materialsdesign from '@/assets/img/dataResources/databaseImgs/materialsdesign.jpg';
import matweb from '@/assets/img/dataResources/databaseImgs/matweb.jpg';
import mpds from '@/assets/img/dataResources/databaseImgs/mpds.jpg';
import matmatch from '@/assets/img/dataResources/databaseImgs/matmatch.jpg';
import materialscloud from '@/assets/img/dataResources/databaseImgs/materialscloud.jpg';
import nmrr from '@/assets/img/dataResources/databaseImgs/nmrr.jpg';
import matnavi from '@/assets/img/dataResources/databaseImgs/matnavi.jpg';
import paulingfile from '@/assets/img/dataResources/databaseImgs/paulingfile.jpg';
import reaxys from '@/assets/img/dataResources/databaseImgs/reaxys.jpg';
import springermaterials from '@/assets/img/dataResources/databaseImgs/springermaterials.jpg';
import oqmd from '@/assets/img/dataResources/databaseImgs/oqmd.jpg';
import mdf from '@/assets/img/dataResources/databaseImgs/mdf.jpg';
import csd from '@/assets/img/dataResources/databaseImgs/csd.jpg';
import totalmateria from '@/assets/img/dataResources/databaseImgs/totalmateria.jpg';
import nomad from '@/assets/img/dataResources/databaseImgs/nomad.jpg';
import xincailiao from '@/assets/img/dataResources/databaseImgs/xincailiao.jpg';
import camds from '@/assets/img/dataResources/databaseImgs/camds.jpg';
import nullDataImg from '@/assets/img/null-data.png';

const currentHeader = ref('全部');

const headerList = computed(() => {
    return ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
});

const filteredDatabaseList = computed(() => {
    if (currentHeader.value === '全部') {
        return databaseList;
    }
    return databaseList.filter(item => item.header === currentHeader.value || item.pinyinHeader === currentHeader.value);
});

const selectHeader = (header: string) => {
    currentHeader.value = header;
};

const databaseList = [
    {
        name: 'Automatic FLOW for Materials Discovery (AFLOW)',
        bg: '开放',
        bgEn: 'Duke University',
        herf: 'https://aflowlib.org/',
        img: aflow,
        country: '美国',
        unit: '杜克大学',
        unitEn: 'Duke University',
        hot: '7300万',
        header: 'A',
        pinyinHeader: 'A'
    },
    {
        name: 'Atomly（中科院物理所）',
        bg: '开放',
        herf: 'https://www.atomly.net/#/',
        img: atomly,
        country: '中国',
        unit: '中国科学院物理研究所',
        hot: '20万',
        header: 'A',
        pinyinHeader: 'A'
    },
    {
        name: '材料基因工程数据库',
        bg: '开放',
        herf: 'https://www.mgedata.cn/',
        img: mgedata,
        country: '中国',
        unit: '北京科技大学',
        hot: '100万',
        header: '材',
        pinyinHeader: 'C'
    },
    {
        name: '材数库（易紧通）',
        bg: '部分开放',
        herf: 'https://www.caishuku.com/',
        img: caishuku,
        country: '中国',
        unit: '氢能数科有限公司、杭州中工科技有限公司',
        hot: '10万',
        header: '材',
        pinyinHeader: 'C'
    },
    {
        name: '材易通',
        bg: '部分开放',
        herf: 'https://www.mat.ai/home',
        img: matai,
        country: '中国',
        unit: 'MatAi（成都材智科技有限公司）',
        hot: '三十余种产品与解决方案',
        header: '材',
        pinyinHeader: 'C'
    },
    {
        name: 'ChemSpider',
        bg: '开放',
        herf: 'https://www.chemspider.com/',
        img: chemspider,
        country: '英国',
        unit: '英国皇家化学学会',
        unitEn: 'The Royal Society of Chemistry',
        hot: '1.28亿',
        header: 'C',
        pinyinHeader: 'C'
    },
    {
        name: 'Citrine Informatics',
        bg: '商业',
        herf: 'https://citrine.io/',
        img: citrine,
        country: '美国',
        unit: 'Citrine Informatics有限责任公司',
        unitEn: 'Citrine Informatics, LLC',
        hot: '402万',
        header: 'C',
        pinyinHeader: 'C'
    },
    {
        name: 'Calphad',
        bg: '开放',
        herf: 'https://calphad.org/',
        img: calphad,
        country: '美国',
        unit: '合金相图国际委员会',
        unitEn: 'APDIC (The Alloy Phase Diagram International Commission)',
        hot: '40个体系',
        header: 'C',
        pinyinHeader: 'C'
    },
    {
        name: 'Crystallography Open Database (COD)',
        bg: '开放',
        herf: 'https://www.crystallography.net/cod/index.php',
        img: cod,
        country: '英国',
        unit: '剑桥大学',
        unitEn: 'the University of Cambridge',
        hot: '21万种结构',
        header: 'C',
        pinyinHeader: 'C'
    },
    {
        name: '多孔合金材料数据库',
        bg: '开放',
        herf: 'https://www.matbd.cn/sjhj/qqclsjk/',
        img: duohejin,
        country: '中国',
        unit: '之江实验室、浙大城市学院',
        hot: '200万',
        header: '多',
        pinyinHeader: 'D'
    },
    {
        name: '国家材料腐蚀与防护科学数据中心',
        bg: '开放',
        herf: 'https://www.corrdata.org.cn/',
        img: corrdata,
        country: '中国',
        unit: '北京科技大学',
        hot: '35年野外试验数据',
        header: '国',
        pinyinHeader: 'G'
    },
    {
        name: '国家基础学科公共科学数据中心',
        bg: '开放',
        herf: 'https://www.nbsdc.cn/',
        img: nbsdc,
        country: '中国',
        unit: '中国科学院计算机网络信息中心',
        hot: '7万',
        header: '国',
        pinyinHeader: 'G'
    },
    {
        name: '国家材料基因工程数据汇交',
        bg: '开放',
        herf: 'http://nmdms.ustb.edu.cn/',
        img: nmdms,
        country: '中国',
        unit: '北京科技大学、中国科学院、宁波材料技术与工程研究所、天津南大通用数据技术股份有限公司、中国科学院数学与系统科学研究院、北京市计算中心、中国科学院计算机网络信息中心、中国科学院高能物理研究所、国家超级计算大津中心四川大学、清华大学',
        hot: '1200万',
        header: '国',
        pinyinHeader: 'G'
    },
    {
        name: '钢研·新材道',
        bg: '部分开放',
        herf: 'https://www.atsteel.com.cn/',
        img: atsteel,
        country: '中国',
        unit: '北京钢研新材科技有限公司',
        hot: '3000万',
        header: '钢',
        pinyinHeader: 'G'
    },
    {
        name: 'Granta Design',
        bg: '商业',
        herf: 'https://www.ansys.com/products/materials',
        img: granta,
        country: '美国',
        unit: '英国ANSYS公司',
        unitEn: 'ANSYS',
        hot: '10万种牌号',
        header: 'G',
        pinyinHeader: 'G'
    },
    {
        name: '化学专业数据库（上海有机所）',
        bg: '开放',
        herf: 'https://organchem.csdb.cn/scdb/default.asp',
        img: siochem,
        country: '中国',
        unit: '上海有机所',
        hot: '29个子库',
        header: '化',
        pinyinHeader: 'H'
    },
    {
        name: 'High Throughput Experimental Materials Database (HTEM)',
        bg: '开放',
        herf: 'https://htem.nrel.gov/',
        img: htem,
        country: '美国',
        unit: '美国能源部国家可再生能源实验室',
        unitEn: 'National Renewable Energy Laboratory, U.S. Department of Energy',
        hot: '20万',
        header: 'H',
        pinyinHeader: 'H'
    },
    {
        name: 'Inorganic Crystal Structure Database (ICSD)',
        bg: '商业',
        herf: 'https://icsd.products.fiz-karlsruhe.de/en',
        img: icsd,
        country: '德国',
        unit: '莱布尼茨信息基础设施研究所',
        unitEn: 'FIZ Karlsruhe—Leibniz Institute for Information Infrastructure',
        hot: '25万',
        header: 'I',
        pinyinHeader: 'I'
    },
    {
        name: 'Joint Automated Repository for Various Integrated Simulations (JARVIS)',
        bg: '开放',
        herf: 'https://jarvis.nist.gov/',
        img: jarvis,
        country: '美国',
        unit: '美国国家标准与技术研究院',
        unitEn: 'National Institute of Standards and Technology',
        hot: '150万',
        header: 'J',
        pinyinHeader: 'J'
    },
    {
        name: 'Materials Project',
        bg: '开放',
        herf: 'https://next-gen.materialsproject.org/',
        img: materialsproject,
        country: '美国',
        unit: '劳伦斯伯克利国家实验室',
        unitEn: 'Lawrence Berkeley National Laboratory',
        hot: '80万',
        header: 'M',
        pinyinHeader: 'M'
    },
    {
        name: 'Materials Design',
        bg: '商业',
        herf: 'https://www.materialsdesign.com/',
        img: materialsdesign,
        country: '法国',
        unit: '材料设计公司',
        unitEn: 'Materials Design, Inc.',
        hot: '120万',
        header: 'M',
        pinyinHeader: 'M'
    },
    {
        name: 'MatWeb',
        bg: '部分开放',
        herf: 'https://matweb.com/',
        img: matweb,
        country: '美国',
        unit: 'MatWeb有限责任公司',
        unitEn: 'MatWeb, LLC',
        hot: '9.8万',
        header: 'M',
        pinyinHeader: 'M'
    },
    {
        name: 'Materials Platform for Data Science (MPDS)',
        bg: '商业',
        herf: 'https://mpds.io/#start',
        img: mpds,
        country: '瑞士',
        unit: 'MPDS公司',
        unitEn: 'MPDS (by Pierre Villars)',
        hot: '24.7万',
        header: 'M',
        pinyinHeader: 'M'
    },
    {
        name: 'Matmatch',
        bg: '部分开放',
        herf: 'https://matmatch.com/',
        img: matmatch,
        country: '德国',
        unit: '德国Matmatch股份有限公司',
        unitEn: 'Matmatch GmbH',
        hot: '>3.1万种材料',
        header: 'M',
        pinyinHeader: 'M'
    },
    {
        name: 'Materials Cloud',
        bg: '开放',
        herf: 'https://www.materialscloud.org/home',
        img: materialscloud,
        country: '瑞士',
        unit: '瑞士国家计算设计和新材料发现中心',
        unitEn: 'National Centre for Computational Design and Discovery of Novel Materials (MARVEL)',
        hot: '2900万',
        header: 'M',
        pinyinHeader: 'M'
    },
    {
        name: 'NIST Materials Resource Registry (NMRR)',
        bg: '开放',
        herf: 'https://materials.registry.nist.gov/',
        img: nmrr,
        country: '美国',
        unit: '美国国家标准与技术研究院',
        unitEn: 'National Institute of Standards and Technology',
        hot: '316个专题数据库+软件服务',
        header: 'N',
        pinyinHeader: 'N'
    },
    {
        name: 'NIMS Materials Database (MatNavi)',
        bg: '开放',
        herf: 'https://mits.nims.go.jp/',
        img: matnavi,
        country: '日本',
        unit: '日本国家材料科学研究院',
        unitEn: 'National Institute for Materials Science',
        hot: '包括聚合物、陶瓷、合金、超导材料等材料',
        header: 'N',
        pinyinHeader: 'N'
    },
    {
        name: 'Pauling File',
        bg: '商业',
        herf: 'https://www.paulingfile.com/',
        img: paulingfile,
        country: '瑞士',
        unit: 'PAULING FILE公司',
        unitEn: 'PAULING FILE (by Pierre Villars)',
        hot: '50万',
        header: 'P',
        pinyinHeader: 'P'
    },
    {
        name: 'Reaxys',
        bg: '商业',
        herf: 'https://www.reaxys.com/',
        img: reaxys,
        country: '荷兰',
        unit: '爱思唯尔',
        unitEn: 'Elsevier',
        hot: '8亿',
        header: 'R',
        pinyinHeader: 'R'
    },
    {
        name: 'SpringerMaterials',
        bg: '商业',
        herf: 'https://www.springernature.com/',
        img: springermaterials,
        country: '德国',
        unit: '施普林格·自然集团',
        unitEn: 'Springer Nature',
        hot: '29万个材料',
        header: 'S',
        pinyinHeader: 'S'
    },
    {
        name: 'The Open Quantum Materials Database (OQMD)',
        bg: '开放',
        herf: 'https://oqmd.org/',
        img: oqmd,
        country: '美国',
        unit: '美国西北大学',
        unitEn: 'Northwestern University',
        hot: '122万',
        header: 'T',
        pinyinHeader: 'T'
    },
    {
        name: 'The Materials Data Facility (MDF)',
        bg: '开放',
        herf: 'https://materialsdatafacility.org/portal',
        img: mdf,
        country: '美国',
        unit: '美国芝加哥大学',
        unitEn: 'University of Chicago',
        hot: '>45TB',
        header: 'T',
        pinyinHeader: 'T'
    },
    {
        name: 'The Cambridge Structural Database (CSD)',
        bg: '商业',
        herf: 'https://www.ccdc.cam.ac.uk/solutions/software/csd/',
        img: csd,
        country: '英国',
        unit: '剑桥大学',
        unitEn: 'University of Cambridge',
        hot: '100万',
        header: 'T',
        pinyinHeader: 'T'
    },
    {
        name: 'Total Materia',
        bg: '商业',
        herf: 'https://www.totalmateria.com/',
        img: totalmateria,
        country: '瑞士',
        unit: '瑞士Key to Metals AG 公司',
        unitEn: 'Key to Metals AG',
        hot: '45万种牌号',
        header: 'T',
        pinyinHeader: 'T'
    },
    {
        name: 'The Novel Materials Discovery (NOMAD)',
        bg: '开放',
        herf: 'https://nomad-lab.eu/nomad-lab/',
        img: nomad,
        country: '欧盟',
        unit: '欧洲新型材料发现(NOMAD)卓越中心',
        unitEn: 'The Novel Materials Discovery (NOMAD) Centre of Excellence',
        hot: '292万',
        header: 'T',
        pinyinHeader: 'T'
    },
    {
        name: '新材料在线',
        bg: '部分开放',
        herf: 'https://www.xincailiao.com/',
        img: xincailiao,
        country: '中国',
        unit: '深圳市赛瑞产业研究有限公司',
        hot: '1000万',
        header: '新',
        pinyinHeader: 'X'
    },
    {
        name: '中国汽车材料数据系统',
        bg: '开放',
        herf: 'https://www.test.camds.org.cn/',
        img: camds,
        country: '中国',
        unit: '中国汽车技术研究中心有限公司',
        hot: '5万',
        header: '中',
        pinyinHeader: 'Z'
    }
]
</script>
<template>
    <div class="data-item">
        <div class="list-header-box">全球材料数据库（37个）</div>
        <el-alert title="由于网络环境和链接限制等原因，可能存在部分国际链接无法访问现象 " type="warning" show-icon :closable="false"
            class="alert-warning" />
        <div class="header-nav-box">
            <div class="name">按中英文<span>首字母</span>快速检索</div>
            <div class="header-nav">
                <span v-for="header in headerList" :key="header" 
                    :class="['header-item', { active: currentHeader === header }]"
                    @click="selectHeader(header)">
                    {{ header }}
                </span>
            </div>
        </div>
        <div class="material-list-box">
            <template v-if="filteredDatabaseList.length > 0">
                <a v-for="(item, index) in filteredDatabaseList" :key="index" :href="item.herf" target="_blank"
                    rel="noopener noreferrer">
                    <dl>
                        <dt>
                            <img :src="item.img" :alt="item.name">
                        </dt>
                        <dd>
                            <div class="name">
                                <div>
                                    <p><el-text truncated :tooltip="{ effect: 'dark', placement: 'top' }">{{ item.name
                                        }}</el-text></p>
                                </div>
                            </div>
                            <div class="summary">
                                <div class="summary-subname">
                                    <div>
                                        <p><el-text truncated :tooltip="{ effect: 'dark', placement: 'top' }">{{ item.unit
                                            }}</el-text></p>
                                    </div>
                                    <div>
                                        <p><el-text truncated :tooltip="{ effect: 'dark', placement: 'top' }">{{ item.unitEn
                                            }}</el-text></p>
                                    </div>
                                </div>
                                <div class="unit-time">
                                    <div class="left">
                                        <span class=""><img src="@/assets/img/dataResources/databaseImgs/icon002.png"
                                                title="" class="img-size"></span>
                                        <el-text truncated :tooltip="{ effect: 'dark', placement: 'top' }" class="country-text">{{ item.country }}</el-text>
                                        <span class="ml12"><img src="@/assets/img/dataResources/databaseImgs/icon003.png" title=""
                                                class="img-size"></span>
                                        <el-text truncated :tooltip="{ effect: 'dark', placement: 'top' }" class="bg-text">{{ item.bg }}</el-text>
                                    </div>
                                    <div class="right"><img src="@/assets/img/dataResources/databaseImgs/icon001.png"
                                            title="" class="img-size"><el-text truncated
                                            :tooltip="{ effect: 'dark', placement: 'top' }" class="hot-text">{{ item.hot }}</el-text></div>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </a>
            </template>
            <div v-else class="null-data-box">
                <img :src="nullDataImg" alt="暂无数据" class="null-data-img">
                <div class="null-data-text">暂无数据</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.list-header-box {
    height: 120px;
    color: #1760c2;
    background-image: url('@/assets/img/dataResources/qqclsjk-bg.jpg');
    background-size: 1920px;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: AlibabaPuHuiTi-Bold;
    font-size: 28px;
    font-weight: 700;
    gap: 20px;
    margin-bottom: 12px;
    border-radius: 8px;
    margin-left: 24px;
}

.alert-warning {
    width: calc(100% - 24px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #ffb524;
    margin-left: 24px;
}

.el-alert__icon {
    width: 24px;
}

.header-nav-box {
    margin: 20px 0 24px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .name {
        font-size: 20px;
        color: #333;
        font-weight: 400;
        margin-bottom: 16px;
        
        span {
            color: #1760c2;
            font-weight: 700;
        }
    }
    
    .header-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px 8px;
        flex-wrap: wrap;
        
        .header-item {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 28px;
            padding: 0 8px;
            cursor: pointer;
            border: 1px solid rgb(229, 229, 229);
            border-radius: 2px;
            font-family: MicrosoftYaHei-Bold;
            font-size: 13px;
            color: #333;
            letter-spacing: 0;
            text-align: center;
            transition: all 0.3s;
            
            &:hover {
                border-color: #1760c2;
                color: #1760c2;
            }
            
            &.active {
                background: #1760c2;
                border-radius: 2px;
                font-family: MicrosoftYaHei-Bold;
                color: #fff;
            }
        }
    }
}

.material-list-box {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 19px;
    margin-left: 24px;
    box-sizing: border-box;
    justify-content: start;
    margin: 24px 0 24px 24px;
    min-height: 200px;

    .null-data-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60px 0;

        .null-data-img {
            width: 200px;
            height: 200px;
            object-fit: contain;
            margin-bottom: 20px;
        }

        .null-data-text {
            font-size: 16px;
            color: #999;
            text-align: center;
        }
    }

    a {
        width: 27%;
        padding: 20px;
        background: url('@/assets/img/dataResources/data-bg001.png') right top / auto 96px no-repeat #ffffff;
        background-size: 99px 60px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        cursor: pointer;

        dl {
            width: 100%;
            height: 180px;
            dt {
                display: flex;
                align-items: center;
                gap: 20px;

                img {
                    width: 44px;
                    height: 44px;
                    border: 1px solid #e5e5e5;
                    border-radius: 4px;
                }
            }

            dd {
                .name {
                    width: 100%;
                    height: 28px;
                    margin: 10px 0 15px;
                    font-size: 18px;
                    color: #333;
                    font-weight: 400;
                }

                .summary {
                    margin-bottom: 20px;
                    height: 40px;
                }

                .summary>div {
                    width: 100%;
                    line-height: 20px;
                    font-size: 14px;
                    color: #666;
                    letter-spacing: 0;
                    font-weight: 400;
                    margin-top: 5px;
                }
            }
        }

        .unit-time {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;

            .img-size {
                width: 14px;
                height: 14px;
                margin-right: 8px;
                vertical-align: middle;
            }

            .mr8 {
                margin-right: 8px;
            }

            .ml12 {
                margin-left: 12px;
            }

            .left {
                display: flex;
                align-items: center;
                flex: 1;
                overflow: hidden;
            }

            .right {
                display: flex;
                align-items: center;
                flex-shrink: 0;
            }

            .country-text,
            .bg-text,
            .hot-text {
                display: inline-block;
                max-width: 100px;
                vertical-align: middle;
            }

            .hot-text {
                max-width: 80px;
            }
        }
    }
    a:hover{
        border-color: #1760c2;
        .name:hover {
            color: #1760c2 !important;
        }
        .summary:hover {
            color: #1760c2 !important;
        }
        .summary>div:hover {
            color: #1760c2 !important;
        }
    }
}

:deep(.el-alert__title) {
    font-size: 16px;
    color: #ffb524;
}
</style>