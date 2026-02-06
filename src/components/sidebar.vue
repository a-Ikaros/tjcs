<template>
  <el-menu :default-active="activeIndex" class="el-header-menu" background-color="#063e8b" text-color="#ffffff"
    mode="horizontal" @select="handleSelect">
    <template v-for="item in menuData">
      <template v-if="item.children">
        <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.id">
          <template #title>
            <span class="f16">{{ item.title }}</span>
          </template>
          <template v-for="subItem in item.children">
            <el-sub-menu v-if="subItem.children" :index="subItem.index" :key="subItem.index" v-permiss="item.id">
              <template #title>{{ subItem.title }}</template>
              <el-menu-item v-for="(threeItem, i) in subItem.children" :key="i" :index="threeItem.index">
                <span class="f16">{{ threeItem.title }}</span>
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="subItem.index" v-permiss="item.id">
              <span class="f16"> {{ subItem.title }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index" :key="item.index" v-permiss="item.id">
          <template #title><span class="f16"> {{ item.title }}</span></template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { nextTick, onBeforeMount, onMounted, ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { menuData } from '@/components/menu';

const router = useRouter()


const activeIndex = ref('/dashboard')
const handleSelect = (key: string, keyPath: string[]) => {
  router.push(key)
}

watch(() => router.currentRoute.value.path, () => {
  const currentPath = router.currentRoute.value.path
  nextTick(() => {
    if (currentPath) {
      activeIndex.value = currentPath
    }
  })

})
onBeforeMount(() => {
  activeIndex.value = location.hash.slice(1)
})
</script>

<style scoped lang="scss">
.el-menu {
  border-bottom: 0 !important;
}

.el-header-menu {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
}

.el-header-menu :deep(.el-sub-menu.is-active .el-sub-menu__title) {
  background-color: #1760c2;
  /* 自定义激活时的背景色 */
  border-bottom: none;
}

.f16 {
  font-size: 16px;
  font-weight: 600;
}

.el-menu--horizontal>.el-menu-item.is-active {
  background-color: #1760c2 !important;
  border-bottom: none;
  color: #ffffff !important;
}

.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title {
  background-color: #1760c2 !important;
  color: #ffffff !important;
  border-bottom: none;
}

.el-tooltip__trigger {
  background-color: #1760c2 !important;
  color: #ffffff !important;
}
</style>
