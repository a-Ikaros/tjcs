<template>
  <div :class="['production-block', { 'dashboard-style': dashboardStyle }]" @click="handleClick">
    <slot name="icon">
      <img :src="item.img" :alt="item.title" style="width: 5.8vw;height: 5.8vw;background-color: #e9eff8" />
    </slot>
    <div class="block-content">
      <div class="block-title">
        <el-text line-clamp="1" class="block-title">
          {{ item.title }}
        </el-text>
      </div>
      <div v-if="item.desc" class="block-desc">
        <el-text line-clamp="2" class="title-text">
          {{ item.desc }}
        </el-text>
      </div>
      <div v-if="item.user && item.time" class="block-desc block-info">
        <img :src="userIcon" alt="用户" class="mr6"> 
        <span class="mr12 user-text">{{ item.user }}</span>
        <img :src="timeIcon" alt="时间" class="mr6"> 
        <span>{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userIcon from '@/assets/img/dataProduct/product-icon-user.png'
import timeIcon from '@/assets/img/dataProduct/product-icon-time.png'

interface ProductionItem {
  id?: string
  title: string
  desc?: string
  user?: string
  time?: string
  img?: string
  link?: string
}

const props = defineProps<{
  item: ProductionItem
  dashboardStyle?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

const handleClick = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
.production-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(50% - 60px);
  background-color: #f7f9fb;
  padding: 24px;
  margin: 0 0 24px 0;
  height: 10vh;
  cursor: pointer;
  transition: all 0.3s ease;

  .block-content {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

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
      
      .user-text {
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

.production-block:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.production-block.dashboard-style {
  width: auto;
  background-color: transparent;
  padding: 0;
  margin: 0 0 24px 0;
  height: auto;

  .block-content {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;

    .block-desc {
      font-size: 16px;
      color: #999999;
    }
  }

  &:hover {
    box-shadow: none;
    transform: none;
  }
}
</style>
