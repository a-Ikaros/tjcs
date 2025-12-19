<script setup lang="ts">
import {ArrowRight} from '@element-plus/icons-vue'

interface Props {
  breadCrumbList: Array<string>
}

defineProps<Props>()
</script>
<template>
  <div class="d-flex">
    <span class="bread-content">当前位置：</span>
    <el-breadcrumb :separator-icon="ArrowRight" style="color: #333333">
      <el-breadcrumb-item v-for="(item,index) in breadCrumbList" :key="item">
      <span :class="{
        'bread-content':true,
      'cur-local':index===(breadCrumbList.length - 1)
    }">{{ item }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>
<style lang="scss" scoped>
.d-flex {
  display: flex;
  align-items: center;
  margin: 12px  0;
}

:deep(.el-breadcrumb__separator) {
  svg {
    color: #333333;
  }
}

.bread-content {
  font-size: 16px;
  color: #333333;
}

.cur-local {
  color: #1760c2;
}

</style>

