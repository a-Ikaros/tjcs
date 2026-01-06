<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import duke from '@/assets/img/dataResources/databaseImgs/duke.jpg';

const databaseList = [
    {
        name: 'Automatic FLOW for Materials Discovery (AFLOW)',
        bg: '开放',
        bgEn: 'Duke University',
        herf: 'https://aflowlib.org/',
        img: duke,
        country: '美国',
        unit: '杜克大学',
        unitEn: 'Duke University',
        hot: '7300万'
    },
    {
        name: 'Atomly（中科院物理所）',
        bg: '开放',
        herf: 'https://www.atomly.net/#/',
        img: duke,
        country: '中国',
        unit: '中国科学院物理研究所',
        hot: '20万'
    },
    {
        name: '材料基因工程数据库',
        bg: '开放',
        herf: 'https://www.mgedata.cn/',
        img: duke,
        country: '中国',
        unit: '北京科技大学',
        hot: '100万'
    },
    {
        name: '材数库（易紧通）',
        bg: '部分开放',
        herf: 'https://www.caishuku.com/',
        img: duke,
        country: '中国',
        unit: '氢能数科有限公司、杭州中工科技有限公司',
        hot: '10万'
    },
    {
        name: '材易通',
        bg: '部分开放',
        herf: 'https://www.mat.ai/home',
        img: duke,
        country: '中国',
        unit: 'MatAi（成都材智科技有限公司）',
        hot: '三十余种产品与解决方案'
    },
    {
        name: 'ChemSpider',
        bg: '开放',
        herf: 'https://www.chemspider.com/',
        img: duke,
        country: '英国',
        unit: '英国皇家化学学会',
        unitEn: 'The Royal Society of Chemistry',
        hot: '1.28亿'
    },
    {
        name: 'Citrine Informatics',
        bg: '商业',
        herf: 'https://citrine.io/',
        img: duke,
        country: '美国',
        unit: 'Citrine Informatics有限责任公司',
        unitEn: 'Citrine Informatics, LLC',
        hot: '402万'
    },
    {
        name: 'Calphad',
        bg: '开放',
        herf: 'https://calphad.org/',
        img: duke,
        country: '美国',
        unit: '合金相图国际委员会',
        unitEn: 'APDIC (The Alloy Phase Diagram International Commission)',
        hot: '40个体系'
    },
    {
        name: 'Crystallography Open Database (COD)',
        bg: '开放',
        herf: 'https://www.crystallography.net/cod/index.php',
        img: duke,
        country: '英国',
        unit: '剑桥大学',
        unitEn: 'the University of Cambridge',
        hot: '21万种结构'
    },
    {
        name: '多孔合金材料数据库',
        bg: '开放',
        herf: 'https://www.matbd.cn/sjhj/qqclsjk/',
        img: duke,
        country: '中国',
        unit: '之江实验室、浙大城市学院',
        hot: '200万'
    },
    {
        name: '国家材料腐蚀与防护科学数据中心',
        bg: '开放',
        herf: 'https://www.corrdata.org.cn/',
        img: duke,
        country: '中国',
        unit: '北京科技大学',
        hot: '35年野外试验数据'
    },
    {
        name: '国家基础学科公共科学数据中心',
        bg: '开放',
        herf: 'https://www.nbsdc.cn/',
        img: duke,
        country: '中国',
        unit: '中国科学院计算机网络信息中心',
        hot: '7万'
    },
    {
        name: '国家材料基因工程数据汇交',
        bg: '开放',
        herf: 'http://nmdms.ustb.edu.cn/',
        img: duke,
        country: '中国',
        unit: '北京科技大学、中国科学院、宁波材料技术与工程研究所、天津南大通用数据技术股份有限公司、中国科学院数学与系统科学研究院、北京市计算中心、中国科学院计算机网络信息中心、中国科学院高能物理研究所、国家超级计算大津中心四川大学、清华大学',
        hot: '1200万'
    },
    {
        name: '钢研·新材道',
        bg: '部分开放',
        herf: 'https://www.atsteel.com.cn/',
        img: duke,
        country: '中国',
        unit: '北京钢研新材科技有限公司',
        hot: '3000万'
    },
    {
        name: 'Granta Design',
        bg: '商业',
        herf: 'https://www.ansys.com/products/materials',
        img: duke,
        country: '美国',
        unit: '英国ANSYS公司',
        unitEn: 'ANSYS',
        hot: '10万种牌号'
    },
    {
        name: '化学专业数据库（上海有机所）',
        bg: '开放',
        herf: 'https://organchem.csdb.cn/scdb/default.asp',
        img: duke,
        country: '中国',
        unit: '上海有机所',
        hot: '29个子库'
    },
    {
        name: 'High Throughput Experimental Materials Database (HTEM)',
        bg: '开放',
        herf: 'https://htem.nrel.gov/',
        img: duke,
        country: '美国',
        unit: '美国能源部国家可再生能源实验室',
        unitEn: 'National Renewable Energy Laboratory, U.S. Department of Energy',
        hot: '20万'
    },
    {
        name: 'Inorganic Crystal Structure Database (ICSD)',
        bg: '商业',
        herf: 'https://icsd.products.fiz-karlsruhe.de/en',
        img: duke,
        country: '德国',
        unit: '莱布尼茨信息基础设施研究所',
        unitEn: 'FIZ Karlsruhe—Leibniz Institute for Information Infrastructure',
        hot: '25万'
    },
    {
        name: 'Joint Automated Repository for Various Integrated Simulations (JARVIS)',
        bg: '开放',
        herf: 'https://jarvis.nist.gov/',
        img: duke,
        country: '美国',
        unit: '美国国家标准与技术研究院',
        unitEn: 'National Institute of Standards and Technology',
        hot: '150万'
    },
    {
        name: 'Materials Project',
        bg: '开放',
        herf: 'https://next-gen.materialsproject.org/',
        img: duke,
        country: '美国',
        unit: '劳伦斯伯克利国家实验室',
        unitEn: 'Lawrence Berkeley National Laboratory',
        hot: '80万'
    },
    {
        name: 'Materials Design',
        bg: '商业',
        herf: 'https://www.materialsdesign.com/',
        img: duke,
        country: '法国',
        unit: '材料设计公司',
        unitEn: 'Materials Design, Inc.',
        hot: '120万'
    },
    {
        name: 'MatWeb',
        bg: '部分开放',
        herf: 'https://matweb.com/',
        img: duke,
        country: '美国',
        unit: 'MatWeb有限责任公司',
        unitEn: 'MatWeb, LLC',
        hot: '9.8万'
    },
    {
        name: 'Materials Platform for Data Science (MPDS)',
        bg: '商业',
        herf: 'https://mpds.io/#start',
        img: duke,
        country: '瑞士',
        unit: 'MPDS公司',
        unitEn: 'MPDS (by Pierre Villars)',
        hot: '24.7万'
    },
    {
        name: 'Matmatch',
        bg: '部分开放',
        herf: 'https://matmatch.com/',
        img: duke,
        country: '德国',
        unit: '德国Matmatch股份有限公司',
        unitEn: 'Matmatch GmbH',
        hot: '>3.1万种材料'
    },
    {
        name: 'Materials Cloud',
        bg: '开放',
        herf: 'https://www.materialscloud.org/home',
        img: duke,
        country: '瑞士',
        unit: '瑞士国家计算设计和新材料发现中心',
        unitEn: 'National Centre for Computational Design and Discovery of Novel Materials (MARVEL)',
        hot: '2900万'
    },
    {
        name: 'NIST Materials Resource Registry (NMRR)',
        bg: '开放',
        herf: 'https://materials.registry.nist.gov/',
        img: duke,
        country: '美国',
        unit: '美国国家标准与技术研究院',
        unitEn: 'National Institute of Standards and Technology',
        hot: '316个专题数据库+软件服务'
    },
    {
        name: 'NIMS Materials Database (MatNavi)',
        bg: '开放',
        herf: 'https://mits.nims.go.jp/',
        img: duke,
        country: '日本',
        unit: '日本国家材料科学研究院',
        unitEn: 'National Institute for Materials Science',
        hot: '包括聚合物、陶瓷、合金、超导材料等材料'
    },
    {
        name: 'Pauling File',
        bg: '商业',
        herf: 'https://www.paulingfile.com/',
        img: duke,
        country: '瑞士',
        unit: 'PAULING FILE公司',
        unitEn: 'PAULING FILE (by Pierre Villars)',
        hot: '50万'
    },
    {
        name: 'Reaxys',
        bg: '商业',
        herf: 'https://www.reaxys.com/',
        img: duke,
        country: '荷兰',
        unit: '爱思唯尔',
        unitEn: 'Elsevier',
        hot: '8亿'
    },
    {
        name: 'SpringerMaterials',
        bg: '商业',
        herf: 'https://www.springernature.com/',
        img: duke,
        country: '德国',
        unit: '施普林格·自然集团',
        unitEn: 'Springer Nature',
        hot: '29万个材料'
    },
    {
        name: 'The Open Quantum Materials Database (OQMD)',
        bg: '开放',
        herf: 'https://oqmd.org/',
        img: duke,
        country: '美国',
        unit: '美国西北大学',
        unitEn: 'Northwestern University',
        hot: '122万'
    },
    {
        name: 'The Materials Data Facility (MDF)',
        bg: '开放',
        herf: 'https://materialsdatafacility.org/portal',
        img: duke,
        country: '美国',
        unit: '美国芝加哥大学',
        unitEn: 'University of Chicago',
        hot: '>45TB'
    },
    {
        name: 'The Cambridge Structural Database (CSD)',
        bg: '商业',
        herf: 'https://www.ccdc.cam.ac.uk/solutions/software/csd/',
        img: duke,
        country: '英国',
        unit: '剑桥大学',
        unitEn: 'University of Cambridge',
        hot: '100万'
    },
    {
        name: 'Total Materia',
        bg: '商业',
        herf: 'https://www.totalmateria.com/',
        img: duke,
        country: '瑞士',
        unit: '瑞士Key to Metals AG 公司',
        unitEn: 'Key to Metals AG',
        hot: '45万种牌号'
    },
    {
        name: 'The Novel Materials Discovery (NOMAD)',
        bg: '开放',
        herf: 'https://nomad-lab.eu/nomad-lab/',
        img: duke,
        country: '欧盟',
        unit: '欧洲新型材料发现(NOMAD)卓越中心',
        unitEn: 'The Novel Materials Discovery (NOMAD) Centre of Excellence',
        hot: '292万'
    },
    {
        name: '新材料在线',
        bg: '部分开放',
        herf: 'https://www.xincailiao.com/',
        img: duke,
        country: '中国',
        unit: '深圳市赛瑞产业研究有限公司',
        hot: '1000万'
    },
    {
        name: '中国汽车材料数据系统',
        bg: '开放',
        herf: 'https://www.test.camds.org.cn/',
        img: duke,
        country: '中国',
        unit: '中国汽车技术研究中心有限公司',
        hot: '5万'
    }
]
</script>
<template>
    <div class="data-item">
        <div class="list-header-box">全球材料数据库（37个）</div>
        <el-alert title="由于网络环境和链接限制等原因，可能存在部分国际链接无法访问现象 " type="warning" show-icon :closable="false"
            class="alert-warning" />
        <div class="material-list-box">
            <a v-for="(item, index) in databaseList" :key="index" :href="item.herf" target="_blank"
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

.material-list-box {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 19px;
    margin-left: 24px;
    box-sizing: border-box;
    justify-content: space-between;
    margin: 24px 0 24px 24px;

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