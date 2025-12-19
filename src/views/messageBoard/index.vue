<template>
  <div class="comment-box">
    <breadCrumb :breadCrumbList="breadCrumbList"></breadCrumb>
    <div class="comment-content">
      <el-alert
          title="如果您在浏览材料计算设计专用数据资源节点过程中，对网站的内容、功能、页面等方面有任何意见与建议，请通过本栏目提交，意见收集周期为3个月。我们将认真研究您的建议，努力提供更优质更便捷的服务，期待您的宝贵意见！"
          type="warning" show-icon :closable="false"/>
      <el-form :model="form" label-width="auto" class="comment-form" size="large">
        <el-form-item label="意见类别" required>
          <el-select v-model="form.name" placeholder="请选择意见类别"/>
        </el-form-item>
        <el-form-item label="需求描述" required>
          <el-input
              v-model="form.desc"
              :rows="5"
              type="textarea"
              placeholder="请输入您的需求"
          />
        </el-form-item>
        <el-form-item label="添加附件">
          <el-upload
              ref="uploadRef"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :auto-upload="false"
          >
            <template #trigger>
              <el-button type="primary">添加附件</el-button>
            </template>

            <template #tip>
              <div class="el-upload__tip">
                上传小于500k的jpg/png文件
              </div>
            </template>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="form-btn">
        <el-button>重置</el-button>
        <el-button type="primary" @click="submitUpload">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import breadCrumb from '@/components/breadCrumb/index.vue'

const breadCrumbList = ['首页', '意见留言']

const form = ref({
  type: '',
  desc: '',
  append: '',
  name:''
})
const submitUpload = () => {
}
</script>

<style lang="scss" scoped>
.comment-box {
  max-width: 1200px;
  margin: 0 auto;
}

.comment-content {
  margin-top: 24px;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  width: 100%;
  height: calc(100vh - 444px);
  min-height: 550px;
  margin-bottom: 48px;
  position: relative;

  .comment-form {
    padding: 32px 64px;
    width: calc(100% - 128px);
  }
}

.form-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 24px;
  position: absolute;
}

:deep(.el-form-item__label) {
  color: #333333;
  font-size: 18px;
}

.el-alert {
  background-color: #fff3dc;
  color: #ffb524;
  padding: 12px 24px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
}

:deep(.el-alert__title) {
  font-size: 18px;
}

:deep(.el-alert__icon) {
  width: 28px;
  font-size: 28px;
}
</style>
