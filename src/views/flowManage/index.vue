<template>
  <div class="flow-container">
    <!-- 工具栏 -->
    <div class="toolbar">
      <button @click="addRectNode">添加矩形</button>
      <button @click="addCircleNode">添加圆形</button>
      <button @click="zoomIn">放大</button>
      <button @click="zoomOut">缩小</button>
      <button @click="handleUndo" :disabled="!canUndo">撤销</button>
      <button @click="handleRedo" :disabled="!canRedo">重做</button>
    </div>

    <!-- 画布容器 -->
    <div ref="graphContainer" class="graph-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Graph } from '@antv/x6'
// import { Clipboard, History, Selection, Snapline } from '@antv/x6-plugin-graph'

// 使用 ref 引用画布容器
const graphContainer = ref(null)
const graph = ref(null)
const canUndo = ref(false)
const canRedo = ref(false)

// 初始化画布
const initGraph = () => {
  if (!graphContainer.value) return

  // 创建 Graph 实例
  graph.value = new Graph({
    container: graphContainer.value,
    width: 800,
    height: 600,
    grid: {
      size: 10,
      visible: true, // 显示网格
    },
    panning: true, // 开启画布拖拽
    mousewheel: true, // 开启鼠标滚轮缩放
    background: {
      color: '#f5f5f5', // 背景色
    },
  })

//   // 使用插件增强功能
//   // 1. 历史记录 (用于撤销/重做)
//   graph.value.use(new History({
//     enabled: true,
//   }))

//   // 2. 框选
//   graph.value.use(new Selection({
//     enabled: true,
//     rubberband: true, // 启用框选
//   }))

//   // 3. 对齐线
//   graph.value.use(new Snapline({
//     enabled: true,
//   }))

//   // 4. 剪切板
//   graph.value.use(new Clipboard({
//     enabled: true,
//   }))

  // 监听历史记录变化，更新按钮状态
  graph.value.on('history:change', () => {
    canUndo.value = graph.value.canUndo()
    canRedo.value = graph.value.canRedo()
  })

  // 监听节点点击事件
  graph.value.on('node:click', ({ node }) => {
    console.log('节点被点击:', node)
  })

  // 监听边点击事件
  graph.value.on('edge:click', ({ edge }) => {
    console.log('边被点击:', edge)
  })

  // 绑定键盘快捷键
  bindKeyboard()
}

// 绑定键盘快捷键
const bindKeyboard = () => {
  if (!graph.value) return

  // 复制 (Ctrl+C)
  graph.value.bindKey('ctrl+c', () => {
    const cells = graph.value.getSelectedCells()
    if (cells.length) {
      graph.value.copy(cells)
    }
  })

  // 粘贴 (Ctrl+V)
  graph.value.bindKey('ctrl+v', () => {
    if (!graph.value.isClipboardEmpty()) {
      const cells = graph.value.paste()
      graph.value.cleanSelection()
      graph.value.select(cells)
    }
  })

  // 撤销 (Ctrl+Z)
  graph.value.bindKey('ctrl+z', () => {
    if (graph.value.canUndo()) {
      graph.value.undo()
    }
  })

  // 重做 (Ctrl+Y)
  graph.value.bindKey('ctrl+y', () => {
    if (graph.value.canRedo()) {
      graph.value.redo()
    }
  })

  // 删除 (Delete 或 Backspace)
  graph.value.bindKey(['delete', 'backspace'], () => {
    const cells = graph.value.getSelectedCells()
    if (cells.length) {
      graph.value.removeCells(cells)
    }
  })

  // 全选 (Ctrl+A)
  graph.value.bindKey('ctrl+a', () => {
    const cells = graph.value.getCells()
    if (cells.length) {
      graph.value.select(cells)
    }
  })
}

// 添加矩形节点
const addRectNode = () => {
  if (!graph.value) return

  const rect = graph.value.addNode({
    x: Math.random() * 500,
    y: Math.random() * 400,
    width: 80,
    height: 40,
    label: '矩形节点',
    attrs: {
      body: {
        fill: '#efdbff',
        stroke: '#9254de',
        strokeWidth: 2,
      },
      label: {
        text: '矩形节点',
        fill: '#333',
        fontSize: 12,
      },
    },
  })

  // 自动选中新添加的节点
  graph.value.cleanSelection()
  graph.value.select(rect)
}

// 添加圆形节点
const addCircleNode = () => {
  if (!graph.value) return

  const circle = graph.value.addNode({
    shape: 'circle',
    x: Math.random() * 500,
    y: Math.random() * 400,
    width: 60,
    height: 60,
    label: '圆形节点',
    attrs: {
      body: {
        fill: '#d6e4ff',
        stroke: '#597ef7',
        strokeWidth: 2,
      },
      label: {
        text: '圆形节点',
        fill: '#333',
        fontSize: 12,
      },
    },
  })

  // 自动选中新添加的节点
  graph.value.cleanSelection()
  graph.value.select(circle)
}

// 添加一条连接线
const connectNodes = (source, target) => {
  if (!graph.value) return

  graph.value.addEdge({
    source: source,
    target: target,
    attrs: {
      line: {
        stroke: '#8c8c8c',
        strokeWidth: 2,
      },
    },
    tools: [
      {
        name: 'vertices', // 路径点工具
      },
      {
        name: 'segments', // 线段工具
      },
    ],
  })
}

// 放大
const zoomIn = () => {
  if (graph.value) {
    const zoom = graph.value.zoom()
    graph.value.zoom(zoom + 0.1)
  }
}

// 缩小
const zoomOut = () => {
  if (graph.value) {
    const zoom = graph.value.zoom()
    graph.value.zoom(zoom - 0.1)
  }
}

// 撤销
const handleUndo = () => {
  if (graph.value && graph.value.canUndo()) {
    graph.value.undo()
  }
}

// 重做
const handleRedo = () => {
  if (graph.value && graph.value.canRedo()) {
    graph.value.redo()
  }
}

// 组件挂载时初始化画布
onMounted(() => {
  initGraph()

  // 初始化时添加一些示例节点和连线
  setTimeout(() => {
    addRectNode()
    addCircleNode()

    // 获取所有节点并连接它们（这里只是示例，实际应用中可能需要更精确的逻辑）
    setTimeout(() => {
      const nodes = graph.value?.getNodes() || []
      if (nodes.length >= 2) {
        connectNodes(nodes[0], nodes[1])
      }
    }, 100)
  }, 100)
})

// 组件卸载时销毁画布
onUnmounted(() => {
  if (graph.value) {
    graph.value.dispose()
  }
})
</script>

<style scoped>
.flow-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
}

.toolbar {
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
}

.toolbar button {
  margin-right: 8px;
  padding: 6px 12px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
}

.toolbar button:hover:not(:disabled) {
  background: #f5f5f5;
}

.toolbar button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.graph-container {
  flex: 1;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
}
</style>
