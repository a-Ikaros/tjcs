<template>
  <div class="mtb30">
    <titleLine :nameZh="cardTabInfo.titleInfo?.nameZh" :nameEn="cardTabInfo.titleInfo?.nameEn"></titleLine>
    <div :class="cardTabInfo.type==='tools'?'tools':'engines'">
      <div :class="cardMap[cardTabInfo.type]" v-for=" (item,index) in cardTabInfo.cardList" :key="index">
        <div :class="imgMap[cardTabInfo.type]">
          <div v-if="item.icon">{{ item.icon }}</div>
          <img v-else :src="item.imgSrc" :alt="item.alt" :class="'engine-img'">
        </div>
        <div :class="contentMap[cardTabInfo.type]">
          <h3>{{ item.cardTitle }}</h3>
          <p>{{ item.cardDesc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import titleLine from './titleLine.vue'
import {CardTabInfo} from "./types";

interface Props {
  cardTabInfo: CardTabInfo
}

const props = defineProps<Props>()
const cardMap = {
  tools: 'tool-card',
  card: 'engine-card',
  card2: 'engine-card-2'
}
const imgMap = {
  tools: 'tool-icon',
  card: 'engine-img-container',
  card2: 'engine-img-container-2'
}
const contentMap = {
  tools: '',
  card: 'engine-content',
  card2: 'engine-content-2'
}
</script>

<style scoped>
.mtb30 {
  margin: 30px 0;
}

.engines {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin: 40px 0;
}

.tools {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.tool-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 5%);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.engine-card {
  width: 350px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tool-icon {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 20px;
}

.engine-card:hover {
  transform: translateY(-10px);
}

.engine-img-container {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px;
  position: relative;
  overflow: hidden;
}
.engine-img {
  height: 200px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.engine-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.engine-card:hover .engine-img {
  transform: scale(1.05);
}

.engine-content {
  padding: 20px;
  text-align: center;
}

.engine-content p {
  margin: 0;
  color: #7f8c8d;
  font-size: 14px;
  line-height: 1.5;
}
.engine-card-2 {
  width: 280px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.engine-card-2:hover {
  transform: translateY(-10px);
}

.engine-img-container-2 {
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px 0px;
  position: relative;
  overflow: hidden;
}

.engine-img-2 {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.engine-card-2:hover .engine-img {
  transform: scale(1.05);
}

.engine-content-2 {
  padding: 20px;
  text-align: center;
}

h3 {
  margin: 0 0 10px;
  color: #2c3e50;
  font-size: 18px;
}

p {
  margin: 0;
  color: #7f8c8d;
  font-size: 14px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .engines {
    flex-direction: column;
    align-items: center;
  }

  .engine-card {
    width: 100%;
    max-width: 350px;
  }

  .engine-card-2 {
    width: 100%;
    max-width: 350px;
  }
}
</style>
