<template>
  <div class="overview">
    <div v-for="item in datasetList" :key="item.title" class="overview-item" @click="jumpTo(item.link)">
      <div class="item-num">{{ `-共${item.num}条 样例${item.example}条` }}</div>
      <div class="item-title">{{ item.title }}</div>
      <div class="item-desc">
        <el-tooltip :content="item.desc" placement="top" effect="light" width="300">
          <el-text line-clamp="2">
            {{ item.desc }}
          </el-text>
        </el-tooltip>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { generatedDatasets, privateDatasets, specialDatasets, standardDatasets, templateDatasets, computationalDatasets } from "@/mock/generatedDatasets";
import { jumpTo } from "@/utils";
import { ref, watchEffect } from "vue";

const datasetList = ref([])
const props = defineProps<{ selectedCard: string }>()
const dataMap = {
  public: generatedDatasets,
  special: specialDatasets,
  standard: standardDatasets,
  template: templateDatasets,
  private: privateDatasets,
  materialSoftware: computationalDatasets
}

watchEffect(() => {
  datasetList.value = dataMap[props.selectedCard.includes('/') ? props.selectedCard.split('/')[0] : props.selectedCard] || []
})

</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-wrap: wrap;
}

.overview-item {
  width: calc(33% - 24px);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f7f9fb;
  padding: 24px;
  margin-bottom: 24px;
  margin-left: 24px;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 600;

  .item-title {
    color: #333333;
    margin-bottom: 12px;
  }

  .item-num {
    color: #1760c2;
    margin-bottom: 12px;
  }

  .item-desc {}

}

.overview-item:hover {
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(23, 96, 194, 0.2);
  transform: translateY(-4px);
  transition: all 0.3s ease;
}

.el-popper {
  max-width: 300px !important;
}
</style>
