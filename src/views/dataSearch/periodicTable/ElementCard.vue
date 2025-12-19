<template>
  <div
      class="element-card"
      :class="cardClasses"
      @mouseenter="mouseenterCard(element)"
      @mouseleave="hover = false"
      role="group"
      :aria-label="ariaLabel"
      @click="handleSelElem(element)"
  >
    <!-- symbol 放左上角 -->
    <div class="symbol" :class="{ 'symbol--heavy': isHeavy }">{{ element.symbol }}</div>

    <!-- 中文名 居中显示，右上角可能出现 * -->
    <div class="name-wrap">
      <div class="name">{{ element.nameZh || element.name }}</div>
      <div v-if="isMassGreaterThanEs" class="mass-star" aria-hidden="true">*</div>
    </div>

    <!-- 自定义 tooltip，风格与卡片保持一致，左侧有颜色条 -->
    <div
        class="card-tooltip"
        v-show="hover"
        role="tooltip"
        :style="{background: borderColor}"
    >
      <div class="tt-line1">
        <strong>{{ element.symbol }}</strong>
        <span>{{ element.atomicNumber }}</span>
      </div>
      <div class="tt-line2">{{ element.nameZh }}</div>
      <div class="tt-line2">{{ element.atomicMass }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {elementsData} from './elementData'

const props = defineProps({
  element: {type: Object, required: true}
})
const emits = defineEmits(['handleSelElem'])

const hover = ref(false)

// 忽略以前的 'radioactive' 分类（按需求已取消）
const types = computed(() => (props.element.types || []).filter(t => t !== 'radioactive'))

// 是否“重”元素：原子序数 > Bi(83)
const isHeavy = computed(() => Number(props.element.atomicNumber) > 83)

// 找到 Es 的原子质量作为阈值（fallback 252）
const ES_MASS = elementsData.find(e => e.symbol === 'Es')?.atomicMass ?? 252
const isMassGreaterThanEs = computed(() => Number(props.element.atomicMass) > ES_MASS)

// types 文本（用于 tooltip），排除 radioactive
const typesText = computed(() => types.value.join(', '))

// metalloid 偏旁判定与 primary type 决定卡片主类（沿用之前规则）
const metalloidMetalSet = new Set(['锗', '锑'])
const TYPE_PRIORITY = ['noble-gas', 'nonmetal', 'metal', 'metalloid', 'halogen', 'transition', 'post-transition', 'lanthanide', 'actinide', 'alkali-metal', 'alkaline-earth']

const primaryType = computed(() => {
  const ts = types.value
  for (const t of TYPE_PRIORITY) if (ts.includes(t)) return t
  return ts[0] || 'unknown'
})

// 如果是 metalloid，决定使用金属性还是非金属性样式（基于中文偏旁简易判定）
const metalloidVariant = computed(() => {
  if (!types.value.includes('metalloid')) return null
  const nameZh = props.element.nameZh || ''
  return metalloidMetalSet.has(nameZh) ? 'metal' : 'nonmetal'
})

const cardClasses = computed(() => {
  if (primaryType.value === 'metalloid') {
    return [`type-metalloid-${metalloidVariant.value || 'nonmetal'}`]
  }
  return [`type-${primaryType.value}`]
})

// tooltip 左边颜色条使用与类型相对应的边框色
const borderColorMap = {
  'noble-gas': '#f5b4cf',
  'nonmetal': '#59bdca',
  'metal': '#98ceea',
  'metalloid-metal': '#98ceea',
  'metalloid-nonmetal': '#59bdca',
  'halogen': '#ff4d4f',
  'transition': '#2f54eb',
  'post-transition': '#eb2f96',
  'lanthanide': '#389e0d',
  'actinide': '#d46b08',
  'unknown': 'rgba(0,0,0,0.12)'
}
const borderColor = computed(() => {
  if (primaryType.value === 'metalloid') return borderColorMap[`metalloid-${metalloidVariant.value || 'nonmetal'}`]
  return borderColorMap[primaryType.value] || borderColorMap.unknown
})

const ariaLabel = computed(() => {
  const el = props.element
  return `${el.nameZh || el.name} ${el.symbol}，原子序数 ${el.atomicNumber}`
})

const handleSelElem = (elem) => {
  emits('handleSelElem', elem)
}

const mouseenterCard = (elem) => {
  if (elem.symbol !== 'Ac-Lr' && elem.symbol !== 'La-Lu') {
    hover.value = true
  }
}
</script>

<style scoped lang="scss">
.element-card {
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  position: relative;
  transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
  overflow: visible;
  cursor: pointer;
}

.element-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

/* symbol 放左上角 */
.symbol {
  position: absolute;
  left: 4px;
  top: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  color: inherit;
}

.symbol--heavy {
  color: #cf1322;
}

/* 原子序数 > Bi 显示红色 */

/* 中文名 居中；右上角的 * */
.name-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
}

.name {
  font-size: 14px;
  color: #333;
  margin-top: 16px;
  text-align: center;
  padding: 0 8px;
  word-break: keep-all;
}

/* 星号：中文右上角 */
.mass-star {
  position: absolute;
  right: 0px;
  top: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
}

/* tooltip：与卡片风格一致，采用浅色背景并带左侧颜色条 */
.card-tooltip {
  position: absolute;
  top: calc(-220%);
  left: 50%;
  transform: translateX(-30%);
  width: 50px;
  background: #fff;
  color: #222;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  font-size: 13px;
  z-index: 9999 !important;
  white-space: normal;
}

/* tooltip 内行 */
.tt-line1 {
  margin: 4px 0;
  color: #333;
  display: flex;
  justify-content: space-between;
}

.tt-line2 {
  margin: 4px 0;
  display: flex;
  justify-content: center;
}

/* 类型样式：稀有气体为粉色（与之前保持） */
.type-noble-gas {
  background: #f5b4cf;
  border-color: #f5b4cf;
}

.type-nonmetal {
  background: #5cc2d0;
  border-color: #5cc2d0;
}

.type-metal {
  background: #a0d8f6;
  border-color: #a0d8f6;
}

.type-metalloid-metal {
  background: #a0d8f6;
  border-color: #a0d8f6;
}

.type-metalloid-nonmetal {
  background: #5cc2d0;
  border-color: #5cc2d0;
}

/* 其他类型保底 */
.type-halogen {
  background: linear-gradient(180deg, #fff1f0, #fff6f6);
  border-color: #ff4d4f;
}

.type-transition {
  background: linear-gradient(180deg, #f0f5ff, #e6f0ff);
  border-color: #2f54eb;
}

.type-post-transition {
  background: linear-gradient(180deg, #fff0f6, #fff5f8);
  border-color: #eb2f96;
}

.type-unknown {
  background: #fff;
  border-color: rgba(0, 0, 0, 0.06);
}
</style>
