<template>
  <div class="overview">
    <div v-for="item in datasetList" :key="item.title" class="overview-item" @click="handleClick(item)">
      <div class="item-num">{{ `-共${item.num}条` }}</div>
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
import { ref, watchEffect, onMounted } from "vue";
import { useRouter } from "vue-router";
import { jumpTo } from "@/utils";
import { useStatisticsStore } from "@/store/statistics";
import { capitalizeFirstLetter, getLeafDataTypes, buildCountMap } from "@/utils/common";
import { privateDatasets, standardDatasets, templateDatasets, computationalDatasets } from "@/mock/generatedDatasets";

const router = useRouter()
const statisticsStore = useStatisticsStore()
const datasetList = ref([])
const props = defineProps<{ selectedCard: string }>()

const loadPublicDataCount = async () => {
  try {
    const res = await statisticsStore.fetchDataSetCount()
    const countMap = buildCountMap(res)
    const leafTypes = getLeafDataTypes()
    
    datasetList.value = leafTypes.map(item => {
      const key = capitalizeFirstLetter(item.key)
      const count = countMap[key] || 0
      
      let scale = ''
      if (['crystals', 'molecule', 'basisSetPotential', 'trackBasisSet', 'gsBasisSet', 'pawPseudopotential', 'ncppPseudopotential', 'usppPseudopotential', 'pairPotential', 'nist', 'reaxffPotential', 'machineLearningPotential', 'machineLearnGap', 'cdMachineLearn'].includes(item.key)) {
        scale = 'micro'
      } else if (['cgp', 'mtd', 'dynamics', 'carbon', 'metalMaterial', 'tccl', 'ltcl', 'jhwcl', 'mccl', 'qtgccl'].includes(item.key)) {
        scale = 'meso'
      } else {
        scale = 'macro'
      }
      
      return {
        title: item.label,
        desc: `${item.label}数据集合，适用于材料科学研究。`,
        key: item.key,
        scale: scale,
        example: '1',
        link: `/data-search?scale=${scale}&type=${item.key}`,
        num: count
      }
    })
  } catch (err) {
    console.error('Failed to load public data count:', err)
    datasetList.value = []
  }
}

const loadPrivateDataCount = async () => {
  try {
    await statisticsStore.fetchDataSetCount()
    const countMap = statisticsStore.countMap
    
    datasetList.value = privateDatasets.map(item => {
      let count = 0
      
      if (item.title === '电池有机正极材料数据') {
        count = countMap['oc'] || 0
      } else if (item.title === '有机光电材料数据') {
        count = countMap['op'] || 0
      } else if (item.title === '三维编织复合材料数据') {
        count = countMap['3dWeaving'] || 0
      } else if (item.title === '磁性材料电子结构性质计算数据库') {
        count = countMap['magneticMaterial'] || 0
      }
      
      return {
        ...item,
        num: count.toLocaleString()
      }
    })
  } catch (err) {
    console.error('Failed to load private data count:', err)
    datasetList.value = privateDatasets.map(item => ({
      ...item,
      num: '0'
    }))
  }
}

const dataMap = {
  public: null,
  standard: standardDatasets,
  template: templateDatasets,
  private: privateDatasets,
  materialSoftware: computationalDatasets
}

watchEffect(() => {
  const cardType = props.selectedCard.includes('/') ? props.selectedCard.split('/')[0] : props.selectedCard
  
  if (cardType === 'public') {
    loadPublicDataCount()
  } else if (cardType === 'private') {
    loadPrivateDataCount()
  } else {
    datasetList.value = dataMap[cardType] || []
  }
})

onMounted(() => {
  const cardType = props.selectedCard.includes('/') ? props.selectedCard.split('/')[0] : props.selectedCard
  
  if (cardType === 'public') {
    loadPublicDataCount()
  } else if (cardType === 'private') {
    loadPrivateDataCount()
  }
})

const handleClick = (item: any) => {
  if (item.link) {
    if (item.link.startsWith('/data-search')) {
      const urlParams = new URLSearchParams(item.link.split('?')[1])
      const scale = urlParams.get('scale')
      const type = urlParams.get('type')
      
      if (scale && type) {
        router.push({ path: '/data-search', query: { scale, type } })
      } else {
        router.push(item.link)
      }
    } else {
      jumpTo(item.link)
    }
  }
}
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
