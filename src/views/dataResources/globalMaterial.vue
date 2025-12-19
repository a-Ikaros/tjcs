<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import duke from '@/assets/img/dataResources/databaseImgs/duke.jpg';
const databaseList = [
    {
        name: 'Materials Project',
        bg: '杜克大学',
        bgEn: 'Duke University',
        herf: 'https://materialsproject.org/',
        img: duke,
        country: '美国',
        unit: '美国杜克大学',
        hot: 11412
    },
    {
        name: 'AFLOW',
        herf: 'http://www.aflowlib.org/',
        img: duke,
        country: '美国',
        unit: '美国杜克大学',
        hot: 11412
    },
    {
        name: 'OQMD',
        herf: 'http://oqmd.org/',
        img: duke,
        country: '美国',
        unit: '美国杜克大学',
        hot: 11412
    },
    {
        name: 'CSD',
        herf: 'https://www.ccdc.cam.ac.uk/solutions/csd-system/components/csd/',
        img: duke,
        country: '英国',
        unit: '英国剑桥大学',
        hot: 11412
    },
    {
        name: 'ICSD',
        herf: 'https://icsd.fiz-karlsruhe.de/',
        img: duke,
        country: '德国',
        unit: '德国卡尔斯鲁厄大学',
        hot: 11412
    },
    {
        name: 'Pauling File',
        herf: 'https://paulingfile.com/',
        img: duke,
        country: '德国',
        unit: '德国卡尔斯鲁厄大学',
        hot: 11412
    },
    {
        name: 'Materials Cloud',
        herf: 'https://www.materialscloud.org/',
        img: duke,
        country: '瑞士',
        unit: '瑞士苏黎世联邦理工学院',
        hot: 11412
    },
    {
        name: 'NIMS Materials Database',
        herf: 'https://mits.nims.go.jp/index_en.html',
        img: duke,
        country: '日本',
        unit: '日本国家材料科学研究所',
        hot: 11412
    },
    {
        name: 'JARVIS-DFT',
        herf: 'https://jarvis.nist.gov/',
        img: duke,
        country: '美国',
        unit: '美国国家标准与技术研究院',
        hot: 11412
    },
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
                                <p>{{ item.name }}</p>
                            </div>
                        </div>
                        <div class="summary">
                            <div class="summary-subname">
                                <div>
                                    <p>{{ item.unit }}</p>
                                </div>
                            </div>
                            <div class="unit-time">
                                <div class="left">
                                    <span class="mr12"><img src="@/assets/img/dataResources/databaseImgs/icon002.png"
                                            title="" class="img-size">{{ item.country }}</span>
                                    <span><img src="@/assets/img/dataResources/databaseImgs/icon003.png" title=""
                                            class="img-size">开放</span>
                                </div>
                                <div class="right"><img src="@/assets/img/dataResources/databaseImgs/icon001.png"
                                        title="" class="img-size"><span>{{ item.hot }}</span></div>
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
    width: 100%;
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
                overflow: hidden;

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
            margin-top: 12px !important;

            .img-size {
                width: 14px;
                height: 14px;
                margin-right: 5px;
            }

            .mr12 {
                margin-right: 12px;
            }
        }
    }
}

:deep(.el-alert__title) {
    font-size: 16px;
    color: #ffb524;
}
</style>