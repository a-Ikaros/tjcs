<template>
  <div class="periodic-table">
    <!-- 主表 -->
    <div class="periodic-table__grid">
      <div v-for="period in periods" :key="period" class="period-row">
        <div v-for="group in groups" :key="group" class="periodic-table__cell">
          <ElementCard v-if="cellElement(period, group)" :element="cellElement(period, group)" @handleSelElem="handleSelElem"/>
          <div v-else class="empty-cell"></div>
        </div>
      </div>
    </div>

    <!-- f-block 两行，已对齐显示（La/Ac 行） -->
    <div class="f-block">
      <div class="f-row-grid">
        <template v-for="col in 18" :key="'la-'+col">
          <div class="f-cell">
            <ElementCard
                v-if="isLanthanidePosition(col)"
                :element="lanthanides[laIndexByCol(col)]"
                @handleSelElem="handleSelElem"
            />
          </div>
        </template>
      </div>

      <div class="f-row-grid">
        <template v-for="col in 18" :key="'ac-'+col">
          <div class="f-cell">
            <ElementCard
                v-if="isActinidePosition(col)"
                :element="actinides[acIndexByCol(col)]"
                @handleSelElem="handleSelElem"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import ElementCard from './ElementCard.vue';
import {elementsData} from './elementData';

// 主表周期与族
const periods = [1, 2, 3, 4, 5, 6, 7];
const groups = Array.from({length: 18}, (_, i) => i + 1);

// 主表查找：排除 La(57) 与 Ac(89)（它们在 f-block 行展示）
const cellElement = (period, group) => {
  const el = elementsData.find(e => e.period === period && e.group === group);
  if (!el) return null;
  if (el.atomicNumber === 57) return {
    group: 3,
    name: "镧系",
    nameZh: "镧系",
    atomicMass: 138.905,
    atomicNumber: 57,
    period: 6,
    symbol: "La-Lu",
    types: ['actinide','metal','radioactive']
  };
  if(el.atomicNumber === 89) return {
    group: 3,
    name: "锕系",
    nameZh: "锕系",
    atomicMass: 227,
    atomicNumber: 89,
    period: 7,
    symbol: "Ac-Lr",
    types: ['actinide','metal','radioactive']
  }
  return el;
};

// f-block 数据包含 La(57)-Lu(71) / Ac(89)-Lr(103)
const lanthanides = computed(() => elementsData.filter(e => e.atomicNumber >= 57 && e.atomicNumber <= 71).sort((a, b) => a.atomicNumber - b.atomicNumber));
const actinides = computed(() => elementsData.filter(e => e.atomicNumber >= 89 && e.atomicNumber <= 103).sort((a, b) => a.atomicNumber - b.atomicNumber));

// 布局：f 行从第 3 列开始放 14 个（columns 3..16）
const F_START_COL = 3;
const F_END_COL = 16;

const isLanthanidePosition = (col) => {
  const idx = col - F_START_COL;
  return col >= F_START_COL && col <= F_END_COL && !!lanthanides.value[idx];
};
const laIndexByCol = (col) => col - F_START_COL;

const isActinidePosition = (col) => {
  const idx = col - F_START_COL;
  return col >= F_START_COL && col <= F_END_COL && !!actinides.value[idx];
};
const acIndexByCol = (col) => col - F_START_COL;

const emits =defineEmits(['handleSelElem'])
const handleSelElem=(elem)=>{
  emits('handleSelElem',elem)
}
</script>

<style scoped>
.periodic-table {
  max-width: 1200px;
  padding: 12px;
  font-family: "Segoe UI", Roboto, Arial, sans-serif;
}

/* legend */
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #444;
}

.swatch {
  width: 16px;
  height: 12px;
  border-radius: 3px;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.swatch.type-nonmetal {
  background: linear-gradient(180deg, #f7fffb, #e6fff3);
  border-color: #52c41a;
}

.swatch.type-metal {
  background: linear-gradient(180deg, #ffffff, #f0f5ff);
  border-color: #1890ff;
}

.swatch.type-noble-gas {
  background: linear-gradient(180deg, #fff0f6, #fff7f9);
  border-color: #ff85c0;
}

.swatch.type-metalloid-nonmetal {
  background: linear-gradient(180deg, #f7fffb, #e6fff3);
  border-color: #52c41a;
}

/* 主表 grid */
.periodic-table__grid {
  display: block;
  margin-bottom: 10px;
}

.period-row {
  display: grid;
  grid-template-columns: repeat(18, 44px);
  gap: 6px;
  margin-bottom: 6px;
}

.periodic-table__cell, .empty-cell {
  width: 52px;
  height: 50px;
}

.empty-cell {
  background: transparent;
  border: 1px dashed rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  opacity: 0.12;
}

/* f-block styles */
.f-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.f-row-grid {
  display: grid;
  grid-template-columns: 44px repeat(17, 44px);
  gap: 6px;
  align-items: center;
}

.f-row-label {
  width: 100px;
  text-align: right;
  color: #666;
  font-size: 13px;
  padding-right: 8px;
  box-sizing: border-box;
}

.f-cell {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box
}

/* responsive */
@media (max-width: 900px) {
  .period-row {
    grid-template-columns: repeat(18, 44px);
  }

  .periodic-table__cell, .empty-cell {
    width: 44px;
    height: 64px;
  }

  .f-row-grid {
    grid-template-columns: 80px repeat(17, 44px);
  }

  .f-cell {
    width: 44px;
    height: 64px;
  }
}
</style>
