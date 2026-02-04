<template>
    <div class="page-content">
        <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
        <div class="product-content">
            <div class="frame-top">
                <div class="frame-top-left">
                    <div class="top">
                        <div class="title">
                            <i></i>
                            {{ data.name }}
                        </div>
                    </div>
                    <div class="center">{{ data.description }}</div>
                    <div class="bottom">
                        <p>
                            <span>
                                <img :src="dataProductUser" alt="用户" class="mr6"> <span class="mr12">{{ data.unit
                                }}</span>
                            </span>
                            <span>
                                <img :src="dataProductTime" alt="时间" class="mr6"> <span>{{ data.time }}</span>
                            </span>
                        </p>
                    </div>
                    <div class="frame-btns">
                        <a :href="data.btnLink" target="_blank" no-referrer>
                            {{ data.btnName }}
                        </a>
                    </div>
                </div>
                <div class="frame-top-right">
                    <img :src="data.headImg" :alt="data.name" />
                </div>
            </div>
            <div class="frame-bottom">
                <div class="describe-box">
                    <div class="describe-info">
                        <template v-for="(item, index) in data.content" :key="index">
                            <div class="title">
                                <i></i>
                                {{ item.descName }}
                            </div>
                            <div v-for="li in item.content" class="describe-item">
                                <p v-if="li.type === 'p'">
                                    {{ li.text }}
                                </p>
                                <strong v-if="li.type === 'strong'" class="strong-red">
                                    {{ li.text }}
                                </strong>
                                <p v-if="li.type === 'img'" class="img-box">
                                    <img :src="li.src" :alt="item.descName" class="img-item" />
                                    <el-divider />
                                <div class="img-desc">{{ li.imgDesc }}</div>
                                </p>

                                </img>
                                <strong v-if="li.type === 'subTitle'" class="sub-title">
                                    {{ li.text }}
                                </strong>
                            </div>
                        </template>
                    </div>
                    <div class="right-content-box"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import breadCrumb from '@/components/breadCrumb/index.vue';
import { data as productData } from './index';
import dataProductUser from '@/assets/img/dataProduct/product-icon-user.png'
import dataProductTime from '@/assets/img/dataProduct/product-icon-time.png'
const breadCrumbList = ref(['首页', '数据产品', '数据产品详情']);
const data = ref<any>([])
const route = useRoute();
onMounted(() => {
    data.value = productData[route.params.id as any]
    // 处理数据加载
});
</script>

<style lang="scss" scoped>
.page-content {
    max-width: 1200px;
    margin: 0 auto;
}

.product-content {
    width: 100%;
    position: relative;
    min-height: 70vh;

    .frame-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 40px;

        .frame-top-left {
            width: calc(55% - 20px);

            .top {
                display: flex;
                align-items: center;
                justify-content: left;
                gap: 24px;
            }

            .center {
                width: 100%;
                position: relative;
                margin-top: 20px;
                text-indent: 2em;
            }

            .bottom {
                margin-top: 24px;

                p {
                    display: flex;
                    width: 100%;
                    margin: 10px 0 15px;
                    gap: 0 20px;

                    span {
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        color: #999;
                        letter-spacing: 0;
                        text-align: justify;
                        line-height: 32px;
                    }
                }
            }

            .frame-btns {
                align-items: center;
                display: flex;
                flex-wrap: wrap;

                a, .router-link-active, .router-link-exact-active {
                    background: #1760C2;
                    border-radius: 8px;
                    color: #fff;
                    padding: 12px 24px;
                    cursor: pointer;
                    outline: none;
                    border: none;
                    font-size: 16px;
                    text-decoration: none;
                    display: inline-block;
                }
            }
        }

        .frame-top-right {
            width: calc(45% - 20px);

            img {
                max-width: 100%;
                vertical-align: top;
                display: inline-block;
            }
        }

    }

    .frame-bottom {
        .describe-box {
            width: 100%;
            display: flex;
            padding-top: 8px;
            justify-content: space-between;
            align-items: stretch;

            .describe-info {
                width: calc(100% - 240px);
                overflow: hidden;
            }

            .describe-item {
                margin: 24px 0;
                text-indent: 2em;

                .strong-red {
                    color: #C00000;
                }

                .img-box {
                    text-wrap-mode: wrap;
                    text-align: center;
                }

                .img-item {
                    max-width: 800px;
                    max-height: 400px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid rgb(165, 165, 165);
                }

                .img-desc {
                    color: rgb(165, 165, 165);
                    background-color: rgb(255, 255, 255);
                }
            }

            .right-content-box {
                width: 200px;
                position: relative;
            }
        }
    }

}

.title {
    font-family: "MicrosoftYaHei-Bold";
    font-size: 24px;
    color: #333333;
    font-weight: 700;
    display: flex;
    align-items: center;

    i {
        background: #1760c2;
        width: 5px;
        height: 24px;
        margin-right: 10px;
    }
}

.el-divider {
    margin: 12px 0px;
}
</style>
