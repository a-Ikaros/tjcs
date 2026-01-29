<template>
  <div class="page-content">
    <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
    <div class="product-content">
      <div class="func-list" :style="{ height: menuList.length * 60 + 'px' }">
        <div class="list-line" :class="{ 'is-select': item.key === selectedLi, 'is-disabled': item.num === 0 || item.disabled }"
          v-for="item in menuList" :key="item.key" @click="onSelProduct(item)">
          <svg class="data-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" v-if="item.icon">
            <path
              d="M10.293 1.07159C11.3437 0.441183 12.6573 0.441183 13.708 1.07159L20.6426 5.06378C21.6933 5.69419 22.3232 6.79788 22.3232 8.00616V15.9915C22.3232 17.1996 21.6931 18.355 20.6426 18.9329L13.708 22.9261C13.2352 23.2413 12.6568 23.3987 12.0264 23.3987C11.4487 23.3987 10.8184 23.2412 10.3457 22.9261L3.3584 18.9857C2.30797 18.3553 1.67789 17.2523 1.67773 16.0443V8.00616C1.67773 6.79789 2.30773 5.64167 3.3584 5.06378L10.293 1.07159ZM12.9727 2.38507C12.3948 2.06986 11.6591 2.06986 11.1338 2.38507L4.14648 6.42999C3.56868 6.74522 3.2537 7.37579 3.20117 8.00616V16.0443C3.20134 16.6744 3.56891 17.3043 4.14648 17.6194L11.0811 21.6126C11.6589 21.9278 12.3421 21.9278 12.9199 21.6126L19.9072 17.5677C20.485 17.2525 20.7999 16.6218 20.8525 15.9915V8.00616C20.8525 7.37583 20.485 6.74524 19.9072 6.42999L12.9727 2.38507ZM16.2305 8.0589C16.5981 7.84884 17.0711 7.95327 17.2812 8.37335C17.4913 8.74096 17.386 9.21388 17.0186 9.42413L12.8154 11.8392V16.7269C12.8154 17.1471 12.4476 17.4622 12.0273 17.4622C11.6071 17.4621 11.2393 17.0944 11.2393 16.6741V11.8919L7.03613 9.47687C6.66839 9.26673 6.51057 8.79383 6.7207 8.42609C6.93082 8.05869 7.4032 7.90098 7.82324 8.11066L12.0234 10.5237L16.2305 8.0589Z"
              :fill="selectedLi === 'all' ? 'white' : '#333333'" />
            <path
              d="M10.293 1.07159L10.3429 1.15827L10.3444 1.15734L10.293 1.07159ZM13.708 1.07159L13.6565 1.15736L13.6581 1.15826L13.708 1.07159ZM20.6426 5.06378L20.694 4.97802L20.6925 4.97712L20.6426 5.06378ZM22.3232 15.9915L22.4232 15.9915V15.9915H22.3232ZM20.6426 18.9329L20.5944 18.8453L20.5927 18.8463L20.6426 18.9329ZM13.708 22.9261L13.658 22.8392L13.6525 22.8429L13.708 22.9261ZM12.0264 23.3987L12.0264 23.4987H12.0264V23.3987ZM10.3457 22.9261L10.4013 22.8426L10.3948 22.839L10.3457 22.9261ZM3.3584 18.9857L3.30692 19.0714L3.30928 19.0728L3.3584 18.9857ZM1.67773 16.0443L1.57773 16.0443L1.57773 16.0443L1.67773 16.0443ZM3.3584 5.06378L3.4066 5.15142L3.40829 5.15045L3.3584 5.06378ZM12.9727 2.38507L13.0231 2.29866L13.0205 2.29728L12.9727 2.38507ZM11.1338 2.38507L11.1839 2.47163L11.1852 2.47082L11.1338 2.38507ZM4.14648 6.42999L4.19439 6.51781L4.19658 6.51654L4.14648 6.42999ZM3.20117 8.00616L3.10117 7.99783V8.00616H3.20117ZM3.20117 16.0443L3.10117 16.0443L3.10117 16.0443L3.20117 16.0443ZM4.14648 17.6194L4.1964 17.5328L4.19439 17.5317L4.14648 17.6194ZM11.0811 21.6126L11.0311 21.6993L11.0332 21.7004L11.0811 21.6126ZM12.9199 21.6126L12.9678 21.7004L12.97 21.6992L12.9199 21.6126ZM19.9072 17.5677L19.8593 17.4799L19.8571 17.4811L19.9072 17.5677ZM20.8525 15.9915L20.9525 15.9999V15.9915H20.8525ZM19.9072 6.42999L19.8568 6.51641L19.8593 6.51778L19.9072 6.42999ZM16.2305 8.0589L16.1809 7.97207L16.1799 7.97262L16.2305 8.0589ZM17.2812 8.37335L17.1917 8.41817L17.1944 8.42297L17.2812 8.37335ZM17.0186 9.42413L16.9689 9.33734L16.9687 9.33743L17.0186 9.42413ZM12.8154 11.8392L12.7656 11.7525L12.7154 11.7813V11.8392H12.8154ZM12.8154 16.7269L12.9154 16.7269V16.7269H12.8154ZM12.0273 17.4622L12.0273 17.5622H12.0273V17.4622ZM11.2393 11.8919H11.3393V11.834L11.2891 11.8052L11.2393 11.8919ZM7.03613 9.47687L7.08595 9.39016L7.08575 9.39004L7.03613 9.47687ZM6.7207 8.42609L6.6339 8.37644L6.63388 8.37647L6.7207 8.42609ZM7.82324 8.11066L7.87314 8.0238L7.8679 8.02118L7.82324 8.11066ZM12.0234 10.5237L11.9736 10.6105L12.0239 10.6394L12.074 10.61L12.0234 10.5237ZM10.293 1.07159L10.3444 1.15734C11.3634 0.545933 12.6375 0.545933 13.6566 1.15734L13.708 1.07159L13.7595 0.985845C12.6771 0.336432 11.3239 0.336432 10.2415 0.985845L10.293 1.07159ZM13.708 1.07159L13.6581 1.15826L20.5927 5.15045L20.6426 5.06378L20.6925 4.97712L13.7579 0.98493L13.708 1.07159ZM20.6426 5.06378L20.5911 5.14953C21.6122 5.76216 22.2232 6.83357 22.2232 8.00616H22.3232H22.4232C22.4232 6.76218 21.7743 5.62622 20.694 4.97803L20.6426 5.06378ZM22.3232 8.00616H22.2232V15.9915H22.3232H22.4232V8.00616H22.3232ZM22.3232 15.9915L22.2232 15.9915C22.2232 17.1664 21.6102 18.2865 20.5944 18.8453L20.6426 18.9329L20.6908 19.0205C21.7759 18.4236 22.4232 17.2329 22.4232 15.9915L22.3232 15.9915ZM20.6426 18.9329L20.5927 18.8463L13.6581 22.8394L13.708 22.9261L13.7579 23.0127L20.6925 19.0196L20.6426 18.9329ZM13.708 22.9261L13.6525 22.8429C13.1986 23.1455 12.6402 23.2987 12.0264 23.2987V23.3987V23.4987C12.6733 23.4987 13.2718 23.3371 13.7635 23.0093L13.708 22.9261ZM12.0264 23.3987L12.0264 23.2987C11.4644 23.2987 10.8543 23.1449 10.4012 22.8429L10.3457 22.9261L10.2902 23.0093C10.7824 23.3374 11.433 23.4987 12.0264 23.4987L12.0264 23.3987ZM10.3457 22.9261L10.3948 22.839L3.40752 18.8986L3.3584 18.9857L3.30928 19.0728L10.2966 23.0132L10.3457 22.9261ZM3.3584 18.9857L3.40985 18.8999C2.38902 18.2873 1.77788 17.2166 1.77773 16.0442L1.67773 16.0443L1.57773 16.0443C1.57789 17.288 2.22691 18.4233 3.30694 19.0714L3.3584 18.9857ZM1.67773 16.0443H1.77773V8.00616H1.67773H1.57773V16.0443H1.67773ZM1.67773 8.00616H1.77773C1.77773 6.83111 2.39063 5.7102 3.40659 5.1514L3.3584 5.06378L3.31021 4.97616C2.22484 5.57313 1.57773 6.76467 1.57773 8.00616H1.67773ZM3.3584 5.06378L3.40829 5.15045L10.3429 1.15826L10.293 1.07159L10.2431 0.98493L3.30851 4.97712L3.3584 5.06378ZM12.9727 2.38507L13.0205 2.29728C12.4144 1.96663 11.6407 1.96428 11.0823 2.29932L11.1338 2.38507L11.1852 2.47082C11.6775 2.17545 12.3752 2.1731 12.9248 2.47286L12.9727 2.38507ZM11.1338 2.38507L11.0837 2.29853L4.09638 6.34345L4.14648 6.42999L4.19658 6.51654L11.1839 2.47162L11.1338 2.38507ZM4.14648 6.42999L4.09859 6.34221C3.48393 6.67754 3.15607 7.34326 3.10152 7.99786L3.20117 8.00616L3.30083 8.01447C3.35134 7.40833 3.65343 6.8129 4.19438 6.51778L4.14648 6.42999ZM3.20117 8.00616H3.10117V16.0443H3.20117H3.30117V8.00616H3.20117ZM3.20117 16.0443L3.10117 16.0443C3.10135 16.7112 3.48907 17.3746 4.09858 17.7072L4.14648 17.6194L4.19439 17.5317C3.64875 17.2339 3.30133 16.6376 3.30117 16.0442L3.20117 16.0443ZM4.14648 17.6194L4.09658 17.7061L11.0312 21.6993L11.0811 21.6126L11.131 21.526L4.19639 17.5328L4.14648 17.6194ZM11.0811 21.6126L11.0332 21.7004C11.6409 22.0319 12.3601 22.0319 12.9678 21.7004L12.9199 21.6126L12.872 21.5248C12.324 21.8237 11.677 21.8237 11.1289 21.5248L11.0811 21.6126ZM12.9199 21.6126L12.97 21.6992L19.9573 17.6542L19.9072 17.5677L19.8571 17.4811L12.8698 21.5261L12.9199 21.6126ZM19.9072 17.5677L19.9551 17.6555C20.5697 17.3202 20.8976 16.6544 20.9522 15.9998L20.8525 15.9915L20.7529 15.9832C20.7023 16.5893 20.4002 17.1848 19.8593 17.4799L19.9072 17.5677ZM20.8525 15.9915H20.9525V8.00616H20.8525H20.7525V15.9915H20.8525ZM20.8525 8.00616H20.9525C20.9525 7.33908 20.5649 6.6749 19.9551 6.34221L19.9072 6.42999L19.8593 6.51778C20.4051 6.81557 20.7525 7.41257 20.7525 8.00616H20.8525ZM19.9072 6.42999L19.9576 6.34361L13.023 2.29869L12.9727 2.38507L12.9223 2.47145L19.8568 6.51637L19.9072 6.42999ZM16.2305 8.0589L16.2801 8.14573C16.6023 7.96164 17.0095 8.05374 17.1918 8.4181L17.2812 8.37335L17.3707 8.32861C17.1326 7.85281 16.594 7.73604 16.1809 7.97207L16.2305 8.0589ZM17.2812 8.37335L17.1944 8.42297C17.3798 8.74745 17.2837 9.15718 16.9689 9.33734L17.0186 9.42413L17.0682 9.51093C17.4882 9.27059 17.6028 8.73447 17.3681 8.32374L17.2812 8.37335ZM17.0186 9.42413L16.9687 9.33743L12.7656 11.7525L12.8154 11.8392L12.8652 11.9259L17.0684 9.51084L17.0186 9.42413ZM12.8154 11.8392H12.7154V16.7269H12.8154H12.9154V11.8392H12.8154ZM12.8154 16.7269L12.7154 16.7269C12.7154 17.0831 12.4016 17.3622 12.0273 17.3622V17.4622V17.5622C12.4936 17.5622 12.9154 17.2111 12.9154 16.7269L12.8154 16.7269ZM12.0273 17.4622L12.0274 17.3622C11.6623 17.3622 11.3393 17.0391 11.3393 16.6741H11.2393H11.1393C11.1393 17.1496 11.5519 17.5621 12.0273 17.5622L12.0273 17.4622ZM11.2393 16.6741H11.3393V11.8919H11.2393H11.1393V16.6741H11.2393ZM11.2393 11.8919L11.2891 11.8052L7.08595 9.39016L7.03613 9.47687L6.98631 9.56357L11.1894 11.9786L11.2393 11.8919ZM7.03613 9.47687L7.08575 9.39004C6.76015 9.20399 6.628 8.78988 6.80753 8.4757L6.7207 8.42609L6.63388 8.37647C6.39313 8.79778 6.57664 9.32948 6.98652 9.56369L7.03613 9.47687ZM6.7207 8.42609L6.80751 8.47573C6.99109 8.15474 7.40561 8.01395 7.77858 8.20013L7.82324 8.11066L7.8679 8.02118C7.40079 7.78801 6.87055 7.96264 6.6339 8.37644L6.7207 8.42609ZM7.82324 8.11066L7.77343 8.19737L11.9736 10.6105L12.0234 10.5237L12.0733 10.437L7.87306 8.02395L7.82324 8.11066ZM12.0234 10.5237L12.074 10.61L16.281 8.14518L16.2305 8.0589L16.1799 7.97262L11.9729 10.4375L12.0234 10.5237Z"
              fill="white" />
          </svg>
          <span class="li-icon" :class="{ 'selected-li-icon': item.key === selectedLi }" v-else></span>
          <span>{{ `${item.title}${item.num !== null ? `（${item.num}）` : ''}` }}</span>
        </div>
      </div>
      <div v-if="selectedLi === 'all'" class="func-content">
        <el-collapse v-model="activeNames" @change="">
          <el-collapse-item name="1">
            <template #title>
              <div class="col-online-title">
                <div><span class="col-online-icon"></span>{{ `已上线产品数据（${4}）` }}</div>
                <div class="col-tip">{{ activeNames.includes('1') ? '查看全部' : '收起隐藏' }}</div>
              </div>
            </template>
            <div class="col-content mt12">
              <div class="production-block" v-for="(item, index) in onlineProduct" :key="index"
                @click="jumpToDetail(item.id || (index + 1).toString())">
                <img :src="item.img" alt="数据库交互工具" style="width: 5.8vw;height: 5.8vw;background-color: #e9eff8" />
                <div class="block-content">
                  <div class="block-title">
                    <el-text line-clamp="1" class="block-title">
                      {{ item.title }}
                    </el-text>
                  </div>
                  <div class="block-desc">
                    <el-text line-clamp="2" class="title-text">
                      {{ item.desc }}
                    </el-text>
                  </div>
                  <div class="block-desc block-info">
                    <img :src="dataProductUser" alt="用户" class="mr6"> <span class="mr12">{{ item.user }}</span>
                    <img :src="dataProductTime" alt="时间" class="mr6"> <span>{{ item.time }}</span>
                  </div>
                </div>
              </div>
            </div>

          </el-collapse-item>
          <el-collapse-item title="Feedback" name="2">
            <template #title>
              <div class="col-offline-title">
                <div><span class="col-offline-icon"></span>{{ `待上线产品数据（${12}）` }}</div>
                <div class="col-tip">{{ activeNames.includes('2') ? '查看全部' : '收起隐藏' }}</div>
              </div>
            </template>
            <div class="col-content mt12">
              <div class="production-block" v-for="(item, index) in offlineProduct" :key="index"
                @click="jumpToDetail(item.id || (index + 4).toString())">
                <img :src="item.img" alt="数据库交互工具" style="width: 5.8vw;height: 5.8vw;background-color: #e9eff8" />
                <div class="block-content">
                  <div class="block-title">
                    <el-text line-clamp="1" class="block-title">
                      {{ item.title }}
                    </el-text>
                  </div>
                  <div class="block-desc">
                    <el-text line-clamp="2" class="title-text">
                      {{ item.desc }}
                    </el-text>
                  </div>
                  <div class="block-desc block-info">
                    <img :src="dataProductUser" alt="用户" class="mr6"> <span class="mr12">{{ item.user }}</span>
                    <img :src="dataProductTime" alt="时间" class="mr6"> <span>{{ item.time }}</span>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-item>

        </el-collapse>
      </div>
      <div v-else-if="selectedLi === 'materialSoftware'" class="func-content">
        <div class="software-list">
          <div class="list-header-box">全球材料计算软件库（87个）</div>
          <div class="header-nav-box">
            <div class="name">按中英文<span>首字母</span>快速检索</div>
            <div class="header-nav">
              <span v-for="header in softwareHeaderList" :key="header" 
                :class="['header-item', { active: currentSoftwareHeader === header }]"
                @click="selectSoftwareHeader(header)">
                {{ header }}
              </span>
            </div>
          </div>
          <div class="material-list-box">
            <template v-if="filteredSoftwareList.length > 0">
              <a v-for="(item, index) in filteredSoftwareList" :key="index" :href="item.url" target="_blank"
                rel="noopener noreferrer">
                <dl>
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
                          <p><el-text truncated :tooltip="{ effect: 'dark', placement: 'top' }">计算尺度: {{ item.calculationScale
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
                          <el-text truncated :tooltip="{ effect: 'dark', placement: 'top' }" class="bg-text">{{ item.type }}</el-text>
                        </div>
                        <div class="right"><img src="@/assets/img/dataResources/databaseImgs/icon001.png"
                            title="" class="img-size"><el-text truncated
                            :tooltip="{ effect: 'dark', placement: 'top' }" class="hot-text">访问官网</el-text></div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </a>
            </template>
            <div v-else class="null-data-box">
              <div class="null-data-text">暂无数据</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="func-content">
        <div class="col-content ">
          <div class="col-content">
            <div class="production-block" v-for="(item, index) in curProductList" :key="index"
              @click="jumpToDetail(item.id || (index + 4).toString())">
              <img :src="item.img" alt="数据库交互工具" style="width: 5.8vw;height: 5.8vw;background-color: #e9eff8" />
              <div class="block-content">
                <div class="block-title">
                  <el-text line-clamp="1" class="block-title">
                    {{ item.title }}
                  </el-text>
                </div>
                <div class="block-desc">
                  <el-text line-clamp="2" class="title-text">
                    {{ item.desc }}
                  </el-text>
                </div>
                <div class="block-desc block-info">
                  <img :src="dataProductUser" alt="用户" class="mr6"> <span class="mr12">{{ item.user }}</span>
                  <img :src="dataProductTime" alt="时间" class="mr6"> <span>{{ item.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, watchEffect, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import breadCrumb from '@/components/breadCrumb/index.vue'
import dataProductUser from '@/assets/img/dataProduct/product-icon-user.png'
import dataProductTime from '@/assets/img/dataProduct/product-icon-time.png'
import productBlockImg from '@/assets/img/dataProduct/product-block-img.png'
import ReaxFFLogo from '@/assets/img/dataProduct/detail/ReaXFF/logo.jpg'
import { softwareList } from '@/views/dataResources/softwareList'
import DatabaseQueryToolLogo from '@/assets/img/dataProduct/detail/DatabaseQueryTool/head.png'
import { jumpTo } from '@/utils';

const router = useRouter();
const route = useRoute()

const breadCrumbList = ['首页', '数据产品']
const menuList = ref([])

const selectedLi = ref('all')
const onSelProduct = (item) => {
  if (item.num === 0 || item.disabled) {
    return
  }
  selectedLi.value = item.key
}

const jumpToDetail = (productId) => {
  const url = router.resolve({ name: 'data-product-detail', params: { id: productId } }).href;
  window.open(url, '_blank', 'noreferrer');
}
const activeNames = ref(['1', '2'])
const onlineProduct = ref([])
const offlineProduct = ref([])

const currentSoftwareHeader = ref('全部')

const softwareHeaderList = computed(() => {
  return ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
});

const filteredSoftwareList = computed(() => {
  if (currentSoftwareHeader.value === '全部') {
    return softwareList;
  }
  return softwareList.filter(item => item.header === currentSoftwareHeader.value || item.pinyinHeader === currentSoftwareHeader.value);
});

const selectSoftwareHeader = (header: string) => {
  currentSoftwareHeader.value = header;
};

const getProductList = () => {
  onlineProduct.value = [
    {
      id: 'ReaxFFData',
      title: '反应力场数据采集软件ReaxFFCollector',
      desc: '反应力场数据采集软件ReaxFFCollector面向文献中ReaXFF参数主要以PDF形式发布、难以直接复用的问题，提供从PDF自动提取、清洗与格式修复的一体化解决方案。该软件可将分散目易出错的反应力场文本标准化为可被LAMMPS等主流分子动力学软件直接读取的力场文件，并通过自动化验证快速评估参数可用性，显著降低人工整理成本，提高反应力场参数复用的可靠性与分子动力学研究效率。',
      img: ReaxFFLogo,
      user: '材料计算设计专用数据资源节点',
      time: '2025.10.17',
      link: ''
    },
    {
      id: 'LiteratureData',
      title: '材料文献数据挖掘系统',
      desc: '支撑新材料计算设计数据资源节点--文献数据挖掘工具。面向PDF、markdown等材料文献文件类型，自动识别并挖掘材料成分、工艺、性能等要素，抽取结构化性质数据，同时构建材料结构化知识图谱，具有图谱可视化功能，同时支持根据抽取的性质数据知识库开展智能知识问答。',
      img: productBlockImg,
      user: '材料计算设计专用数据资源节点',
      time: '2025.10.17',
    },
    {
      id: 'FirstPrinciplesData',
      title: '第一性原理计算数据采集软件',
      desc: '第一性原理计算数据采集软件是一款专为科研人员开发的自动化Web端采集工具，实现Quantum-ESPRESSO网站UPF赝势数据和Turbomole网站基组数据的自动化高效采集，结合实时监控、自定义采集范围及输出目录和全局重置实用功能，为量子化学与材料科学研究提供稳定可靠的数据获取解决方案。',
      img: productBlockImg,
      user: '材料计算设计专用数据资源节点',
      time: '2025.12.25'
    },
    {
      id: 'PhaseFieldData',
      title: '相场模拟数据采集软件',
      desc: '相场模拟数据采集软件是一款专为材料科学研究人员设计的专业数据采集工具。该软件采用自动化技术，通过Web界面实现NIST相场数据库的高效采集，支持批量数据下载和智能断点续传功能。系统提供实时任务监控、日志查看和统计分析等功能，帮助科研人员快速获取高质量的相场模拟数据集，提升科研效率和数据处理精度。',
      img: productBlockImg,
      user: '材料计算设计专用数据资源节点',
      time: '2025.12.25'
    },
    {
      id: 'DatabaseQueryToolData',
      title: '数据库统一查询工具',
      desc: '标准的材料数据库查询软件，专为材料科学研究人员设计。通过本工具可以统一查询全球多个材料数据库，提供可视化元素选择、智能结果管理和数据导出功能，无需逐个访问不同数据库，大幅提升材料数据检索效率。',
      img: ReaxFFLogo,
      user: '材料计算设计专用数据资源节点',
      time: '2025.10.17',
      link: ''
    },
  ]
  offlineProduct.value = [
    {
      id: '4',
      title: '多尺度模拟数据集',
      desc: '包含从原子到宏观的仿真结果样本（能带、应力-应变曲线、相图等），计划支持按体系类型下载完整数据包。',
      img: productBlockImg,
      user: '模拟中心',
      time: '2025.11.05',
      link: ''
    },
    {
      id: '5',
      title: '晶体结构数据库升级',
      desc: '对现有晶体数据库进行结构清洗、重标注与索引优化，支持更精准的相似结构检索与批量导出。',
      img: productBlockImg,
      user: '结构解析组',
      time: '2025.10.01',
      link: ''
    },
    {
      id: '6',
      title: '分子动力学分析模块',
      desc: '提供 MD 轨迹分析、配位数统计、能量分布与可视化报告生成功能，便于离线批量处理大规模轨迹数据。',
      img: productBlockImg,
      user: '计算材料平台',
      time: '2025.09.12',
      link: ''
    },
    {
      id: '7',
      title: '材料合成路线推荐',
      desc: '基于文献与专利数据的合成路线挖掘模块，输出可行实验步骤与关键试剂/条件建议（待内测）。',
      img: productBlockImg,
      user: '化学数据组',
      time: '2025.08.28',
      link: ''
    },
    {
      id: '8',
      title: '材料性能预测API',
      desc: '离线训练的机器学习模型服务化接口，预测弹性模量、带隙等指标，支持批量预测与模型版本管理。',
      img: productBlockImg,
      user: '模型团队',
      time: '2025.08.10',
      link: ''
    },
    {
      id: '9',
      title: '设备数据接入器',
      desc: '用于将实验表征设备（XRD、SEM、CV 等）数据接入平台并标准化保存，支持批量上传与元数据标注功能。',
      img: productBlockImg,
      user: '数据工程部',
      time: '2025.07.22',
      link: ''
    },
    {
      id: '10',
      title: '用户行为分析仪表盘',
      desc: '离线分析用户行为与访问日志，生成热力图、使用频次与功能偏好，辅助产品决策与资源规划。',
      img: productBlockImg,
      user: '平台运营',
      time: '2025.06.30',
      link: ''
    },
    {
      id: '11',
      title: '定制模型训练服务',
      desc: '提供数据标注、特征工程与模型训练一站式离线服务，交付可部署模型或 API 接入包。',
      img: productBlockImg,
      user: '模型团队',
      time: '2025.06.10',
      link: ''
    }
    ,
    {
      id: '12',
      title: '材料数据标准化工具包',
      desc: '一套离线工具用于字段映射、单位换算与元数据模板生成，便于批量标准化历史数据并输出可入库格式。',
      img: productBlockImg,
      user: '数据治理组',
      time: '2025.05.01',
      link: ''
    },
    {
      id: '13',
      title: '实验室信息管理系统（LIMS）集成',
      desc: '离线集成包，支持将 LIMS 导出的实验记录批量转换并同步到平台，保留原始附件与制样信息。',
      img: productBlockImg,
      user: '平台工程',
      time: '2025.04.15',
      link: ''
    },
    {
      id: '14',
      title: '知识图谱构建服务（离线）',
      desc: '提供基于实体抽取与关系抽取的离线知识图谱构建服务，可从文献与数据库中抽取材料-性能-制备等关系。',
      img: productBlockImg,
      user: '知识图谱组',
      time: '2025.03.01',
      link: ''
    }
    ,
    {
      id: '15',
      title: '离线数据脱敏与合规审计工具',
      desc: '为敏感科研数据提供批量脱敏、访问审计与合规性检查功能，输出可审计的脱敏报告，便于数据共享与合规发布。',
      img: productBlockImg,
      user: '合规与安全组',
      time: '2025.02.20',
      link: ''
    }
  ]
}

watch(() => selectedLi.value, () => {
  if (selectedLi.value === 'all') {
    getProductList()
  } else {
    getCurProductList()
  }
})
const curProductList = ref([])
const getCurProductList = () => {
  const toolProducts = [
    {
      id: 'ReaxFFData',
      title: '反应力场数据采集软件ReaxFFCollector',
      desc: '反应力场数据采集软件ReaxFFCollector面向文献中ReaXFF参数主要以PDF形式发布、难以直接复用的问题，提供从PDF自动提取、清洗与格式修复的一体化解决方案。该软件可将分散目易出错的反应力场文本标准化为可被LAMMPS等主流分子动力学软件直接读取的力场文件，并通过自动化验证快速评估参数可用性，显著降低人工整理成本，提高反应力场参数复用的可靠性与分子动力学研究效率。',
      img: ReaxFFLogo,
      user: '材料计算设计专用数据资源节点',
      time: '2025.10.17',
      link: ''
    },
    {
      id: 'LiteratureData',
      title: '材料文献数据挖掘系统',
      desc: '支撑新材料计算设计数据资源节点--文献数据挖掘工具。面向PDF、markdown等材料文献文件类型，自动识别并挖掘材料成分、工艺、性能等要素，抽取结构化性质数据，同时构建材料结构化知识图谱，具有图谱可视化功能，同时支持根据抽取的性质数据知识库开展智能知识问答。',
      img: productBlockImg,
      user: '材料计算设计专用数据资源节点',
      time: '2025.10.17',
    },
    {
      id: 'FirstPrinciplesData',
      title: '第一性原理计算数据采集软件',
      desc: '第一性原理计算数据采集软件是一款专为科研人员开发的自动化Web端采集工具，实现Quantum-ESPRESSO网站UPF赝势数据和Turbomole网站基组数据的自动化高效采集，结合实时监控、自定义采集范围及输出目录和全局重置实用功能，为量子化学与材料科学研究提供稳定可靠的数据获取解决方案。',
      img: productBlockImg,
      user: '材料计算设计专用数据资源节点',
      time: '2025.12.25'
    },
    {
      id: 'PhaseFieldData',
      title: '相场模拟数据采集软件',
      desc: '相场模拟数据采集软件是一款专为材料科学研究人员设计的专业数据采集工具。该软件采用自动化技术，通过Web界面实现NIST相场数据库的高效采集，支持批量数据下载和智能断点续传功能。系统提供实时任务监控、日志查看和统计分析等功能，帮助科研人员快速获取高质量的相场模拟数据集，提升科研效率和数据处理精度。',
      img: productBlockImg,
      user: '材料计算设计专用数据资源节点',
      time: '2025.12.25'
    },
    {
      title: '批量数据清洗工具',
      desc: '针对表格和实验数据提供缺失值填充、单位统一和字段映射功能，输出清洗过的可入库数据包。',
      img: productBlockImg,
      user: '数据工程部',
      time: '2025.07.15'
    }
  ]

  const engineProducts = [
    {
      title: '连贯性计算引擎',
      desc: '任务调度、结果收集与错误重试一体化管理，支持常见 DFT 软件（VASP、Quantum ESPRESSO）接入。',
      img: productBlockImg,
      user: '计算材料平台',
      time: '2025.08.12'
    },
    {
      title: '分子动力学批处理引擎',
      desc: '支持 LAMMPS/GPUMD 作业批量提交、监控与后处理（轨迹切分、配位分析、能量统计）。',
      img: productBlockImg,
      user: '计算材料平台',
      time: '2025.08.01'
    },
    {
      title: '材料性能预测引擎',
      desc: '集成多模型的离线预测系统，可批量预测带隙、弹性模量、热导等指标并输出可信度评估。',
      img: productBlockImg,
      user: '模型团队',
      time: '2025.07.10'
    },
    {
      title: '晶体相图计算模块',
      desc: '基于热力学数据库的相图计算服务，支持多组分体系并导出相稳定性报告。',
      img: productBlockImg,
      user: '模拟中心',
      time: '2025.06.28'
    },
    {
      title: '自动化工作流编排器',
      desc: '拖拽式工作流设计器，支持串行/并行任务编排，可将常用计算流程封装为可复用模板。',
      img: productBlockImg,
      user: '平台工程',
      time: '2025.06.15'
    },
    {
      title: '催化位点筛选引擎',
      desc: '用于高通量筛选催化活性位点的自动化分析模块，结合能量计算与表面吸附能评价。',
      img: productBlockImg,
      user: '催化研究组',
      time: '2025.05.30'
    },
    {
      title: '材料组合优化器',
      desc: '基于贝叶斯优化与多目标搜索的材料组合优化工具，旨在寻找满足多性能约束的最优候选。',
      img: productBlockImg,
      user: '模型团队',
      time: '2025.05.10'
    },
    {
      title: '微结构表征自动化',
      desc: '对 SEM/EBSD/AFM 等表征结果的自动化特征提取与统计分析，输出标准化报告。',
      img: productBlockImg,
      user: '表征中心',
      time: '2025.04.20'
    },
    {
      title: '应力应变仿真引擎',
      desc: '面向材料力学的有限元/谱方法仿真平台，支持批量参数扫描与收敛性分析。',
      img: productBlockImg,
      user: '力学研究组',
      time: '2025.04.05'
    },
    {
      title: '多尺度耦合平台',
      desc: '连通从原子尺度到宏观尺度的仿真链路，支持结果传递与误差控制策略。',
      img: productBlockImg,
      user: '模拟中心',
      time: '2025.03.18'
    },
    {
      title: '模型训练与部署管线',
      desc: '完整的离线模型训练、验证与部署流程，包含数据预处理、自动超参搜索和模型版本管理。',
      img: productBlockImg,
      user: '模型团队',
      time: '2025.02.28'
    }
  ]

  const materialDataProducts = [
    {
      title: '无机材料晶体结构数据库',
      desc: '收录超过 50 万条无机材料晶体结构数据，包含晶格参数、原子坐标、空间群等完整信息，支持 CIF 格式导出。',
      img: productBlockImg,
      user: '新材料大数据中心',
      time: '2025.10.20'
    },
    {
      title: '材料热力学性能数据库',
      desc: '整合相图、热容、熵等热力学数据，覆盖 2000+ 材料体系，提供相稳定性分析与热力学计算支持。',
      img: productBlockImg,
      user: '热力学数据组',
      time: '2025.09.15'
    },
    {
      title: '材料力学性能数据库',
      desc: '收集各类材料的拉伸、压缩、疲劳等力学性能数据，包含应力-应变曲线与失效模式分析。',
      img: productBlockImg,
      user: '力学性能组',
      time: '2025.08.25'
    }
  ]

  const privateDataProducts = [
    {
      title: '企业私域数据管理平台',
      desc: '为企业提供私域数据存储、管理与交易服务，支持数据确权、定价与安全共享，保障数据资产价值。',
      img: productBlockImg,
      user: '数据交易部',
      time: '2025.11.01'
    },
    {
      title: '科研数据交易市场',
      desc: '连接科研机构与企业的数据交易平台，支持材料数据、实验结果等科研资产的合规交易与溯源。',
      img: productBlockImg,
      user: '数据交易部',
      time: '2025.10.10'
    },
    {
      title: '数据价值评估系统',
      desc: '基于多维度指标对材料数据进行价值评估，提供智能定价建议与市场行情分析。',
      img: productBlockImg,
      user: '数据交易部',
      time: '2025.09.20'
    }
  ]

  const materialSoftwareProducts = [
    {
      title: 'VASP 计算软件集成包',
      desc: '提供 VASP 软件的安装配置、参数优化与结果分析工具，支持高通量计算与自动化工作流。',
      img: productBlockImg,
      user: '计算软件组',
      time: '2025.10.15'
    },
    {
      title: 'LAMMPS 分子动力学软件库',
      desc: '集成 LAMMPS 分子动力学模拟软件，提供常用势函数库、参数模板与后处理工具。',
      img: productBlockImg,
      user: '计算软件组',
      time: '2025.09.28'
    },
    {
      title: 'Materials Studio 工具集',
      desc: '提供 Materials Studio 软件的使用教程、脚本模板与常用模块配置指南，加速材料模拟研究。',
      img: productBlockImg,
      user: '计算软件组',
      time: '2025.08.18'
    }
  ]

  const serviceProducts = [
    {
      title: '材料数据定制化采集服务',
      desc: '根据客户需求定制化采集特定领域的材料数据，包括文献、专利、实验数据等多源数据整合。',
      img: productBlockImg,
      user: '定制服务部',
      time: '2025.11.05'
    },
    {
      title: '材料计算仿真服务',
      desc: '提供专业的材料计算仿真服务，包括第一性原理计算、分子动力学模拟、相图计算等。',
      img: productBlockImg,
      user: '定制服务部',
      time: '2025.10.25'
    },
    {
      title: '材料数据分析与建模服务',
      desc: '提供材料数据分析、机器学习建模与预测服务，帮助客户挖掘数据价值与优化材料设计。',
      img: productBlockImg,
      user: '定制服务部',
      time: '2025.09.30'
    },
    {
      title: '材料数据库搭建服务',
      desc: '为企业或科研机构提供材料数据库搭建服务，包括数据标准化、系统开发与运维支持。',
      img: productBlockImg,
      user: '定制服务部',
      time: '2025.09.10'
    },
    {
      title: '材料咨询与培训服务',
      desc: '提供材料领域的专业咨询与技术培训，包括材料设计、数据分析、软件使用等方面的指导。',
      img: productBlockImg,
      user: '定制服务部',
      time: '2025.08.20'
    }
  ]

  const dataConnectorProducts = [
    {
      title: '数据融通器',
      desc: '连接不同数据源的数据集成工具，支持跨系统数据交换与共享，实现数据价值最大化。',
      img: productBlockImg,
      user: '数据融通部',
      time: '2025.10.28'
    },
    {
      title: '数据标准连接器',
      desc: '基于国家标准的数据格式转换工具，确保不同系统间数据交换的一致性与准确性。',
      img: productBlockImg,
      user: '数据融通部',
      time: '2025.09.18'
    }
  ]

  if (selectedLi.value === 'tool') {
    curProductList.value = toolProducts
  } else if (selectedLi.value === 'engine') {
    curProductList.value = engineProducts
  } else if (selectedLi.value === 'materialData') {
    curProductList.value = materialDataProducts
  } else if (selectedLi.value === 'privateData') {
    curProductList.value = privateDataProducts
  } else if (selectedLi.value === 'materialSoftware') {
    curProductList.value = materialSoftwareProducts
  } else if (selectedLi.value === 'service') {
    curProductList.value = serviceProducts
  } else if (selectedLi.value === 'dataConnector') {
    curProductList.value = dataConnectorProducts
  } else {
    curProductList.value = []
  }
}

watchEffect(() => {
  const currentPath = route.path

  if (currentPath === '/data-sharing') {
    selectedLi.value = 'privateData'
    // data-sharing 只展示私域数据交易系统和数据融通器
    menuList.value = [
      {
        title: '私域数据交易系统',
        key: 'privateData',
        num: 3,
      },
      {
        title: '数据融通器',
        key: 'dataConnector',
        num: 2,
        disabled: true,
      }
    ]
  } else {
    selectedLi.value = 'all'
    // data-product 展示原本的数据，去掉私域数据交易系统
    menuList.value = [
      {
        title: '数据产品',
        icon: 'svg',
        key: 'all',
        num: null
      },
      {
        title: '采集工具',
        key: 'tool',
        num: 5,
      },
      {
        title: '生产引擎',
        key: 'engine',
        num: 11,
      },
      {
        title: '材料数据库系统',
        key: 'materialData',
        num: 3,
      },
      {
        title: '全球材料计算软件库',
        key: 'materialSoftware',
        num: 87,
      },
      {
        title: '定制服务',
        key: 'service',
        num: 5,
      },
    ]
  }
  getProductList()
})
</script>

<style lang="scss" scoped>
.page-content {
  max-width: 1200px;
  margin: 0 auto;
}

.mt12 {
  margin-top: 12px;
}

.product-content {
  display: flex;
  width: 100%;
  position: relative;
  min-height: 70vh;

  .func-list {
    background-color: #f7f9fb;
    border-radius: 12px;
    color: #333333;
    width: 250px;
    height: auto;
    margin: 0 0 24px 0;
    font-weight: 500;
    position: relative;

    .list-line {
      padding: 12px;
      display: flex;
      align-items: center;
      width: 200px;
      height: 36px;
      cursor: pointer;
      font-weight: 600;
    }

    .is-select {
      background-color: #1760c2;
      color: white;
    }

    .is-disabled {
      color: #d0d1d3;
      cursor: not-allowed;
    }

    .data-icon {
      margin: 6px;
    }

    .li-icon {
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: #1760c2;
      margin: 12px 16px;
    }

    .list-line:first-child {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    .list-line:last-child {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    .selected-li-icon {
      background-color: white;
    }
  }

  .func-content {
    width: 100%;
    margin: 0 24px 24px;

    .col-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .col-online-title {
      color: #1760c2;
      font-size: 24px;
      width: 100%;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
    }

    .col-offline-title {
      color: #666666;
      font-size: 24px;
      width: 100%;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
    }

    .col-online-icon {
      display: inline-block;
      background-color: #1760c2;
      width: 6px;
      height: 18px;
      margin-right: 12px;
    }

    .col-offline-icon {
      display: inline-block;
      background-color: #666666;
      width: 6px;
      height: 18px;
      margin-right: 12px;
    }

    .col-tip {
      font-size: 18px;
      font-weight: 400;
      margin-right: 12px;
    }
  }
}

.production-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(50% - 60px);
  background-color: #f7f9fb;
  padding: 24px;
  margin: 0 0 24px 0;
  height: 10vh;

  .block-content {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .block-title {
      width: 100%;
      font-size: 16px;
      font-weight: 700;
      color: #333333;
    }

    .block-desc {
      font-size: 12px;
      color: #999999;
    }

    .block-info {
      display: flex;
      align-items: center;
    }
  }
}

.production-block:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  transition: box-shadow;
  cursor: pointer;
}

.el-collapse {
  border-top: none;
  border-bottom: none;
}

.el-collapse-item__content {
  border-bottom: none;
}

.software-list {
  width: 100%;

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
    font-size: 32px;
    font-weight: 700;
    border-radius: 12px;
    margin-bottom: 24px;
  }

  .header-nav-box {
    margin: 20px 0 24px 0;
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
      justify-content: space-around;
      width: 100%;
      gap: 20px 6px;
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
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .null-data-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 0;

      .null-data-text {
        font-size: 16px;
        color: #999;
        text-align: center;
      }
    }

    a {
      display: block;
      box-sizing: border-box;
      width: calc(50% - 10px);
      background-color: #f7f9fb;
      border-radius: 12px;
      padding: 24px;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }

      dl {
        margin: 0;
        padding: 0;

        dd {
          margin: 0;
          padding: 0;

          .name {
            font-size: 18px;
            font-weight: 700;
            color: #333333;
            margin-bottom: 16px;

            p {
              margin: 0;
            }
          }

          .summary {
            .summary-subname {
              margin-bottom: 12px;

              p {
                margin: 0;
                font-size: 14px;
                color: #666666;
              }
            }

            .unit-time {
              display: flex;
              justify-content: space-between;
              align-items: center;

              .left {
                display: flex;
                align-items: center;

                .img-size {
                  width: 16px;
                  height: 16px;
                  margin-right: 6px;
                }

                .country-text,
                .bg-text {
                  font-size: 14px;
                  color: #666666;
                }

                .ml12 {
                  margin-left: 12px;
                }
              }

              .right {
                display: flex;
                align-items: center;

                .img-size {
                  width: 16px;
                  height: 16px;
                  margin-right: 6px;
                }

                .hot-text {
                  font-size: 14px;
                  color: #1760c2;
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
