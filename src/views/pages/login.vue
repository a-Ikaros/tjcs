<template>
  <div class="login-page">
    <!-- 顶部导航栏 -->
    <div class="top-header">
      <div class="header-content">
        <div class="logo-section">
          <img src="@/assets/img/new-material-logo.png" alt="材料计算设计专用数据资源节点" class="logo-img" />
          <span class="system-name">材料计算设计专用数据资源节点</span>
        </div>
        <div class="title-section">
          <h1 class="main-title">统一身份认证平台</h1>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="login-content">
      <div class="login-container">
        <div class="login-tabs">
          <div class="tab-item" :class="{ active: loginType === 'account' }" @click="loginType = 'account'">
            账号登录
          </div>
          <div class="tab-item" :class="{ active: loginType === 'sms' }" @click="loginType = 'sms'">
            短信验证码登录
          </div>
        </div>

        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form" size="medium">
          <el-form-item prop="username" v-if="loginType === 'account'">
            <el-input v-model="loginForm.username" placeholder="请输入手机号/邮箱" prefix-icon="User" />
          </el-form-item>

          <el-form-item prop="password" v-if="loginType === 'account'">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" prefix-icon="Lock"
              show-password />
          </el-form-item>

          <el-form-item prop="captcha" v-if="loginType === 'account'">
            <div class="captcha-input-wrapper">
              <el-input v-model="loginForm.captcha" placeholder="请输入验证码" prefix-icon="Key" />
              <div class="captcha-img" @click="refreshCaptcha">
                <img v-if="captchaImg" :src="captchaImg" alt="验证码" />
                <span v-else>点击获取</span>
              </div>
            </div>
          </el-form-item>

          <el-form-item prop="phone" v-if="loginType === 'sms'">
            <el-input v-model="loginForm.phone" placeholder="请输入手机号码" prefix-icon="Iphone" />
          </el-form-item>

          <el-form-item prop="code" v-if="loginType === 'sms'">
            <div class="code-input-wrapper">
              <el-input v-model="loginForm.code" placeholder="请输入验证码" prefix-icon="Key" />
              <el-button type="primary" :disabled="codeDisabled" @click="sendCode" class="code-btn">
                {{ codeText }}
              </el-button>
            </div>
          </el-form-item>

          <div class="form-options" v-if="loginType === 'account'">
            <el-checkbox v-model="rememberAccount">记住账号</el-checkbox>
            <el-link type="primary" @click="$router.push('/reset-pwd')">忘记密码？</el-link>
          </div>

          <el-form-item>
            <el-button type="primary" class="login-btn" @click="handleLogin" :loading="loading">
              登录
            </el-button>
          </el-form-item>
        </el-form>

        <div class="register-link">
          <span>没有账号？</span>
          <el-link type="primary" @click="$router.push('/register')">立即注册</el-link>
        </div>
      </div>
    </div>

    <!-- 底部版权信息 -->
    <div class="login-footer">
      <div class="footer-content">
        <p class="copyright">京ICP备2024053208号-4</p>
        <p class="copyright">京公网安备100000000001号</p>
        <p class="copyright">材料计算设计专用数据资源节点</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { login, captcha } from '@/api/index'

const router = useRouter()
const loginFormRef = ref<FormInstance>()
const loginType = ref<'account' | 'sms'>('account')
const loading = ref(false)
const rememberAccount = ref(false)
const codeDisabled = ref(false)
const codeText = ref('获取验证码')
const countdown = ref(0)
const captchaImg = ref('')

const loginForm = reactive({
  username: '',
  password: '',
  phone: '',
  code: '',
  captcha: ''
})

const loginRules: FormRules = {
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  captcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ]
}

// 获取图形验证码
const getCaptcha = async () => {
  try {
    const res = await captcha()
    if (res.data) {
       const myBlob = new window.Blob([res.data], { type: 'image/png' })
      captchaImg.value =  window.URL.createObjectURL(myBlob)
    }
  } catch (error) {
    ElMessage.error('获取验证码失败')
  }
}

// 刷新验证码
const refreshCaptcha = () => {
  getCaptcha()
}

const sendCode = () => {
  if (!loginForm.phone) {
    ElMessage.warning('请先输入手机号码')
    return
  }
  if (!/^1[3-9]\d{9}$/.test(loginForm.phone)) {
    ElMessage.warning('请输入正确的手机号码')
    return
  }

  codeDisabled.value = true
  countdown.value = 60
  codeText.value = `${countdown.value}秒后重试`

  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      codeDisabled.value = false
      codeText.value = '获取验证码'
    } else {
      codeText.value = `${countdown.value}秒后重试`
    }
  }, 1000)

  ElMessage.success('验证码已发送')
}

const handleLogin = async () => {
  if (!loginFormRef.value) return

  await loginFormRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        const res = await login({
          account: loginForm.username,
          password: loginForm.password,
          code: loginForm.captcha
        })

        if (res.data?.code === 200 || res.data?.success) {
          // 保存 token 到 localStorage
          if (res.data?.data) {
            localStorage.setItem('token', res.data.data)
          }
          // 保存用户信息
          if (loginForm.username) {
            localStorage.setItem('userInfo', JSON.stringify(loginForm.username))
          }

          // 如果勾选了记住账号，保存账号和密码
          if (rememberAccount.value) {
            localStorage.setItem('rememberedAccount', loginForm.username)
            localStorage.setItem('rememberedPassword', loginForm.password)
          } else {
            localStorage.removeItem('rememberedAccount')
            localStorage.removeItem('rememberedPassword')
          }

          ElMessage.success('登录成功')
          router.push('/dashboard')
        } else {
          ElMessage.error(res.data?.message || '登录失败')
          // 登录失败后刷新验证码
          refreshCaptcha()
        }
      } catch (error: any) {
        ElMessage.error(error.message || '登录失败，请稍后重试')
        // 登录失败后刷新验证码
        refreshCaptcha()
      } finally {
        loading.value = false
      }
    }
  })
}

// 页面加载时获取验证码和记住的账号密码
onMounted(() => {
  getCaptcha()
  const rememberedAccount = localStorage.getItem('rememberedAccount')
  const rememberedPassword = localStorage.getItem('rememberedPassword')
  if (rememberedAccount) {
    loginForm.username = rememberedAccount
    rememberAccount.value = true
  }
  if (rememberedPassword) {
    loginForm.password = rememberedPassword
  }
})
</script>

<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background: url('@/assets/img/login-bg.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 顶部导航栏 */
.top-header {
  width: 100%;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  background-color: #f5fbfe;

  .header-content {
    width: 100%;
    max-width: 1200px;
    margin-left: 24px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 40px;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 15px;

    .logo-img {
      height: 40px;
      object-fit: contain;
    }

    .system-name {
      font-size: 18px;
      color: #222;
      font-weight: 500;
      margin-right: 10px;
    }
  }

  .title-section {
    .main-title {
      font-size: 24px;
      color: #222;
      font-weight: 600;
      margin: 0;
    }
  }
}

/* 主要内容区域 */
.login-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
}

.login-container {
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
}

.login-tabs {
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 15px 0;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  &.active {
    color: #1760c2;
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: #1760c2;
    }
  }
}

.login-form {
  .el-form-item {
    margin-bottom: 24px;
  }

  :deep(.el-input__wrapper) {
    border-radius: 4px;
    padding: 12px 15px;
  }
}

.code-input-wrapper {
  display: flex;
  gap: 10px;
  width: 100%;

  .el-input {
    flex: 1;
  }

  .code-btn {
    width: 120px;
    height: 52px;
    flex-shrink: 0;
  }
}

.captcha-input-wrapper {
  display: flex;
  gap: 10px;
  width: 100%;

  .el-input {
    flex: 1;
  }

  .captcha-img {
    width: 120px;
    height: 52px;
    flex-shrink: 0;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f7fa;
    transition: all 0.3s;

    &:hover {
      border-color: #1760c2;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 4px;
    }

    span {
      font-size: 14px;
      color: #909399;
    }
  }
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 14px;
}

.login-btn {
  width: 100%;
  height: 48px;
  font-size: 16px;
  border-radius: 4px;
  background: #1760c2;
  border: none;

  &:hover {
    opacity: 0.9;
  }
}

.register-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;

  .el-link {
    margin-left: 5px;
    font-size: 14px;
  }
}

/* 底部版权信息 */
.login-footer {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.1);

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .copyright {
    margin: 0;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .top-header {
    .header-content {
      flex-direction: column;
      gap: 10px;
      padding: 0 20px;
    }

    .system-name {
      font-size: 16px;
    }

    .main-title {
      font-size: 20px !important;
    }
  }

  .login-content {
    justify-content: center;
    padding: 0 20px;
  }

  .login-container {
    max-width: 100%;
    padding: 30px 20px;
  }
}
</style>
