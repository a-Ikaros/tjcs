<script lang="ts" setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { microDataTypes, mesoDataTypes, macroDataTypes } from '@/views/dataSearch/dataRules'

const visible = defineModel<boolean>()

const formData = ref({
  scale: '',
  type: '',
  file: null as File | null
})

const fileList = ref([])

const scaleOptions = [
  { label: '微观尺度', value: 'micro' },
  { label: '介观尺度', value: 'meso' },
  { label: '宏观尺度', value: 'macro' }
]

const typeOptions = computed(() => {
  if (!formData.value.scale) return []
  
  const scaleMap = {
    micro: microDataTypes,
    meso: mesoDataTypes,
    macro: macroDataTypes
  }
  
  const types = scaleMap[formData.value.scale] || []
  const result = []
  
  types.forEach(item => {
    if (item.children && item.children.length > 0) {
      item.children.forEach(child => {
        if (!child.disabled) {
          result.push({
            label: child.name,
            value: child.key
          })
        }
      })
    } else if (!item.disabled) {
      result.push({
        label: item.name,
        value: item.key
      })
    }
  })
  
  return result
})
const handleClose=()=>{
  visible.value = false
}
const handleScaleChange = () => {
  formData.value.type = ''
}

const beforeUpload = (file) => {
  const fileName = file.name.toLowerCase()
  const isExcel = fileName.endsWith('.xlsx') || fileName.endsWith('.xls')
  const isJson = fileName.endsWith('.json')
  
  if (!isExcel && !isJson) {
    ElMessage.error('仅支持上传 Excel (.xlsx, .xls) 或 JSON (.json) 格式的文件')
    return false
  }
  
  const maxSize = 10 * 1024 * 1024
  if (file.size > maxSize) {
    ElMessage.error('文件大小不能超过 10MB')
    return false
  }
  
  formData.value.file = file
  fileList.value = [file]
  return false
}

const handleRemove = () => {
  formData.value.file = null
  fileList.value = []
}

const handleUpload = () => {
  if (!formData.value.scale) {
    ElMessage.warning('请选择数据尺度')
    return
  }
  
  if (!formData.value.type) {
    ElMessage.warning('请选择数据类型')
    return
  }
  
  if (!formData.value.file) {
    ElMessage.warning('请选择要上传的文件')
    return
  }
  
  ElMessage.success('文件上传成功')
  visible.value = false
}
</script>

<template>
  <el-dialog
    v-model="visible"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="600px"
    title="数据上传"
  >
    <div class="data-upload-dialog">
      <div class="dialog-content">
        <div class="form-item">
          <div class="form-label">
            <span class="required">*</span>
            数据尺度
          </div>
          <el-select 
            v-model="formData.scale" 
            placeholder="请选择数据尺度"
            class="form-select"
            @change="handleScaleChange"
          >
            <el-option
              v-for="option in scaleOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </div>
        
        <div class="form-item">
          <div class="form-label">
            <span class="required">*</span>
            数据类型
          </div>
          <el-select 
            v-model="formData.type" 
            placeholder="请先选择数据尺度"
            class="form-select"
            :disabled="!formData.scale"
          >
            <el-option
              v-for="option in typeOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </div>
        
        <div class="form-item">
          <div class="form-label">
            <span class="required">*</span>
            上传文件
          </div>
          <el-upload
            class="upload-area"
            :auto-upload="false"
            :before-upload="beforeUpload"
            :on-remove="handleRemove"
            :file-list="fileList"
            :limit="1"
            drag
          >
            <div class="upload-content">
              <el-icon class="upload-icon" :size="48">
                <UploadFilled />
              </el-icon>
              <div class="upload-text">
                <div class="upload-tip">点击或拖拽文件到此处上传</div>
                <div class="upload-hint">支持 Excel (.xlsx, .xls) 或 JSON (.json) 格式，文件大小不超过 10MB</div>
              </div>
            </div>
          </el-upload>
        </div>
      </div>
      
      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleUpload">上传</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.data-upload-dialog {
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e5e5e5;
  
  .header-title {
    font-size: 18px;
    font-weight: 600;
    color: #333333;
  }
  
  .header-close {
    cursor: pointer;
    color: #999999;
    
    &:hover {
      color: #333333;
    }
  }
}

.dialog-content {
  padding: 24px;
}

.form-item {
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.form-label {
  font-size: 14px;
  color: #333333;
  margin-bottom: 8px;
  
  .required {
    color: #ff4d4f;
    margin-right: 4px;
  }
}

.form-select {
  width: 100%;
  
  :deep(.el-input__wrapper) {
    height: 40px;
  }
}

.upload-area {
  width: 100%;
  
  :deep(.el-upload-dragger) {
    width: 100%;
    height: 160px;
    padding: 20px;
    border: 2px dashed #d9d9d9;
    border-radius: 8px;
    background-color: #fafafa;
    
    &:hover {
      border-color: #1760c2;
    }
  }
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.upload-icon {
  color: #1760c2;
  margin-bottom: 12px;
}

.upload-text {
  text-align: center;
}

.upload-tip {
  font-size: 14px;
  color: #333333;
  margin-bottom: 8px;
}

.upload-hint {
  font-size: 12px;
  color: #999999;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 24px;
  border-top: 1px solid #e5e5e5;
}
:deep(.el-dialog__title){
  margin-left: 24px !important;
}
</style>
