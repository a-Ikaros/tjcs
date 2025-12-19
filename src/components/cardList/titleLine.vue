<template>
  <div class="title-name">
    <i class="title-i">NOTICE ANNOUNCEMENT</i>
    <span class="name">{{ nameZh }}</span>
    <span class="english">{{ nameEn }}</span>
    <span class="more" v-if="showMore" @click="handleMore">+更多</span>
  </div>
</template>

<script lang="ts" setup>

import { TitleInfo } from "@/components/cardList/types";
import { jumpTo } from "@/utils";
import { useRouter } from "vue-router";

const props = defineProps<TitleInfo>();
const router = useRouter();
const handleMore = () => {
  if (props.moreLink.includes('http') || props.moreLink.includes('www')) {
    jumpTo(props.moreLink)
  } else {
    router.push(props.moreLink)
  }
}
</script>

<style scoped lang="scss">
.title-name {
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 14px;
  color: #cbcbcb;
  letter-spacing: 0;
  position: relative;

  .name {
    margin: 0 10px;
    font-size: 24px;
    color: #333;
    letter-spacing: 0;
    font-weight: 700;
  }

  .english {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  .title-i {
    display: block;
    width: 5px;
    height: 24px;
    background: #1760c2;
    color: #1760C2;
    font-size: 0;
  }

  .more {
    position: absolute;
    right: 12px;
    color: #1760c2;
    text-align: right;
    font-weight: 400;
    cursor: pointer;
    text-decoration: underline;
    font-size: 16px;
  }

  .more:hover {
    color: #2d8cf0;
  }
}
</style>
