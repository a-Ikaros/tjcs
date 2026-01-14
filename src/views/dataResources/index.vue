<template>
  <div class="resources-box">
    <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
    <div class="resources-content">
      <div class="left-card">
        <div class="card-item" v-for="card in cardList" :key="card.path" @click="handleSelect(card)">
          <div class="card-first-level" :class="{selected:selectedCard===card.path}">
            <img :src="card.icon" :alt="card.name"/>
            <span class="title">{{ card.name }}</span>
            <span v-if="card?.children?.length" class="card-collapse" @click.stop="handleExpand(card)">
                <el-icon v-if="expandedCard!==card.path"><ArrowDown/></el-icon>
                  <el-icon v-else><ArrowUp/></el-icon>
            </span>
          </div>
          <div v-if="card?.children?.length && expandedCard===card.path" class="card-second-level">
            <div v-for="child in card.children" :key="child.path" class="child-item"
                 :class="{selected:selectedCard===child.path}"
                 @click.stop="handleSelect(card,child)">
              <el-text line-clamp="1" style="vertical-align: bottom">
                <span class="child-li"></span>{{ child.name }}
              </el-text>
            </div>
          </div>
        </div>
      </div>
      <div class="right-card">
        <component :is="componentMap[selectedCard] || overview" :selectedCard="selectedCard"></component>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref, watchEffect} from 'vue';
import breadCrumb from '@/components/breadCrumb/index.vue'
import {list} from './cardList'
import {ArrowDown} from "@element-plus/icons-vue";
import overview from './overview.vue'
import dataset from './dataset.vue'
import globalMaterial from './globalMaterial.vue';

const primaryBread = ['首页', '数据资源']
const breadCrumbList = ref([...primaryBread])
const cardList = list

const selectedCard = ref('overview')
const handleSelect = (card, child = null) => {
  selectedCard.value = child?.path || card.path
  const arr = Array.from(primaryBread)
  arr.push(card.name)
  child && arr.push(child.name)
  breadCrumbList.value = [...arr]
}

const expandedCard = ref('')
const handleExpand = (card) => {
  expandedCard.value = expandedCard.value === card.path ? '' : card.path
}

const componentMap = {
  'overview': overview,
  'public': dataset,
  'private': dataset,
  'private/zgyz': dataset,
  'private/battery': dataset,
  'private/optoelectronics': dataset,
  'private/composite': dataset,
  'special': dataset,
  'special/battery': dataset,
  'special/optoelectronics': dataset,
  'special/composite': dataset,
  'template': dataset,
  'template/two-dimensional': dataset,
  'template/optoelectronic': dataset,
  'perovskite': dataset,
  'template/catalytic': dataset,
  'template/metallic': dataset,
  'standard': dataset,
  'standard/manufacture': dataset,
  'standard/sim': dataset,
  'materialData': globalMaterial,
  'materialSoftware': dataset
}

onMounted(() => {
  handleSelect(cardList[0])
})
</script>

<style lang="scss" scoped>
.resources-box {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 344px);;
position: relative;
  .resources-content {
    display: flex;
    width: 1200px;
    .card-item {
      width: 220px;
      margin-bottom: 12px;
      border-radius: 12px;

      .card-first-level {
        height: 36px;
        padding: 12px 24px;
        color: white;
        display: flex;
        align-items: center;
        position: relative;
        font-size: 16px;
        background-color: #1760c2;
        border-radius: 12px;
        cursor: pointer;

        .title {
          margin-left: 12px;
        }

        .card-collapse {
          position: absolute;
          right: 24px;
          font-size: 20px;
        }

        .card-collapse:hover {
          color: #3498db;
        }
      }

      .card-second-level {
        background-color: #f7f9fb;
        font-size: 14px;
        color: #333333;
        transition: 2s;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        .child-item {
          padding: 12px 24px;
          cursor: pointer;
          line-height: 28px;
          font-weight: 400;
          font-size: 16px;
          .child-li {
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: #1760c2;
            margin-right: 12px;
            vertical-align: middle;
          }
        }
        .child-item:last-child{
          border-bottom-right-radius: 12px;
          border-bottom-left-radius: 12px;
        }
        .child-item:not(:last-child){
          border-bottom: 1px solid #e5e5e5;
        }
        .selected {
          background-color: #f6fafb;
          span{
            color: #1760c2;

          }
        }
      }
    }
  }

  .right-card {
    width: 1000px;
    box-sizing: border-box;
  }
}

</style>
