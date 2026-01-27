<template>
  <div class="register-page">
    <!-- 顶部导航栏 -->
    <div class="top-header">
      <div class="header-content">
        <div class="logo-section">
          <img src="@/assets/img/new-material-logo.png" alt="新材料大数据中心" class="logo-img" />
          <span class="system-name">材料计算设计专用数据资源节点</span>
        </div>
        <div class="title-section">
          <h1 class="main-title">统一身份认证平台</h1>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="login-content">
      <div class="register-container">
        <div class="register-header">
          <div class="title-section">
            <h1 class="main-title">新材料大数据中心</h1>
            <p class="sub-title">欢迎注册账号</p>
          </div>
        </div>

        <el-form
          ref="registerFormRef"
          :model="registerForm"
          :rules="registerRules"
          class="register-form"
          size="medium"
        >
          <el-form-item prop="email">
            <el-input
              v-model="registerForm.email"
              placeholder="邮箱"
              prefix-icon="Message"
            />
          </el-form-item>

          <el-form-item prop="phone">
            <el-input
              v-model="registerForm.phone"
              placeholder="手机号码"
              prefix-icon="Iphone"
            />
          </el-form-item>

          <el-form-item prop="code">
            <div class="code-input-wrapper">
              <el-input
                v-model="registerForm.code"
                placeholder="验证码"
                prefix-icon="Key"
              />
              <el-button
                type="primary"
                :disabled="codeDisabled"
                @click="sendCode"
                class="code-btn"
              >
                {{ codeText }}
              </el-button>
            </div>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="registerForm.password"
              type="password"
              placeholder="登录密码"
              prefix-icon="Lock"
              show-password
            />
          </el-form-item>

          <el-form-item prop="confirmPassword">
            <el-input
              v-model="registerForm.confirmPassword"
              type="password"
              placeholder="确认密码"
              prefix-icon="Lock"
              show-password
            />
          </el-form-item>

          <el-form-item prop="agreement">
            <el-checkbox v-model="registerForm.agreement">
              阅读并同意
              <el-link type="primary" @click.stop="showAgreement">《新材料大数据中心注册协议》</el-link>
            </el-checkbox>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="register-btn" @click="handleRegister" :loading="loading">
              注册
            </el-button>
          </el-form-item>
        </el-form>

        <div class="login-link">
          <span>已有账号？</span>
          <el-link type="primary" @click="$router.push('/login')">账号登录</el-link>
        </div>
      </div>
    </div>

    <!-- 底部版权信息 -->
    <div class="login-footer">
      <div class="footer-content">
        <p class="copyright">京ICP备2024053208号-4</p>
        <p class="copyright">京公网安备100000000001号</p>
        <p class="copyright">版权所有：新材料大数据中心</p>
      </div>
    </div>

    <el-dialog
      v-model="agreementVisible"
      title="新材料大数据中心注册协议"
      width="600px"
      :close-on-click-modal="false"
    >
      <div class="agreement-content">
        <h3>一、服务条款的确认和接纳</h3>
        <p>欢迎使用新材料大数据中心服务。请您仔细阅读本协议，您的注册和使用行为将被视为对本协议的接受和同意。</p>
        
        <h3>二、用户注册</h3>
        <p>1. 用户注册时必须提供真实、准确、完整的个人资料。</p>
        <p>2. 用户注册成功后，将获得本平台账号和密码，用户应妥善保管。</p>
        <p>3. 用户对以其账号进行的所有活动和事件负法律责任。</p>
        
        <h3>三、用户隐私保护</h3>
        <p>1. 保护用户隐私是本平台的一项基本政策。</p>
        <p>2. 本平台不会向第三方透露用户的个人信息，除非：</p>
        <p>（1）事先获得用户的明确授权；</p>
        <p>（2）根据法律法规或政府主管部门的要求；</p>
        <p>（3）为维护社会公共利益或本平台的合法权益。</p>
        
        <h3>四、用户行为规范</h3>
        <p>用户在使用本平台服务时，必须遵守相关法律法规，不得利用本平台从事违法违规活动。</p>
        
        <h3>五、服务条款的修改</h3>
        <p>本平台有权在必要时修改本协议条款，用户应当定期查阅本协议。</p>
        
        <h3>六、免责条款</h3>
        <p>因不可抗力、网络故障等原因导致服务中断或数据丢失的，本平台不承担相应责任。</p>
        
        <h3>七、争议解决</h3>
        <p>因本协议引起的任何争议，双方应友好协商解决；协商不成的，可向本平台所在地人民法院提起诉讼。</p>
      </div>
      <template #footer>
        <el-button @click="agreementVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { register } from '@/api/index'

const router = useRouter()
const registerFormRef = ref<FormInstance>()
const loading = ref(false)
const codeDisabled = ref(false)
const codeText = ref('获取验证码')
const countdown = ref(0)
const agreementVisible = ref(false)

const registerForm = reactive({
  email: '',
  phone: '',
  code: '',
  password: '',
  confirmPassword: '',
  agreement: false
})

const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerForm.password) {
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}

const registerRules: FormRules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入登录密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, validator: validateConfirmPassword, trigger: 'blur' }
  ],
  agreement: [
    {
      type: 'enum',
      enum: [true],
      message: '请阅读并同意注册协议',
      trigger: 'change'
    }
  ]
}

const sendCode = () => {
  if (!registerForm.phone) {
    ElMessage.warning('请先输入手机号码')
    return
  }
  if (!/^1[3-9]\d{9}$/.test(registerForm.phone)) {
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

const showAgreement = () => {
  agreementVisible.value = true
}

const handleRegister = async () => {
  if (!registerFormRef.value) return

  await registerFormRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        const res = await register({
          phone: registerForm.phone,
          email: registerForm.email,
          password: registerForm.password,
          code: registerForm.code
        })
        console.log(res,'res')
        if (res.data.code === 200 || res.data.success) {
          ElMessage.success('注册成功，请登录')
          router.push('/login')
        } else {
          ElMessage.error(res.data.message || '注册失败')
        }
      } catch (error: any) {
        ElMessage.error(error.message || '注册失败，请稍后重试')
      } finally {
        loading.value = false
      }
    }
  })
}
</script>

<style scoped lang="scss">
.register-page {
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

.register-container {
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
}

.register-header {
  text-align: center;
  margin-bottom: 30px;

  .title-section {
    .main-title {
      font-size: 24px;
      color: #333;
      font-weight: 600;
      margin: 0 0 10px 0;
    }

    .sub-title {
      font-size: 16px;
      color: #666;
      margin: 0;
    }
  }
}

.register-form {
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
    flex-shrink: 0;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.register-btn {
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

.login-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;

  p {
    margin: 0;
  }

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

.agreement-content {
  max-height: 400px;
  overflow-y: auto;
  padding: 0 20px;

  h3 {
    font-size: 16px;
    color: #333;
    margin: 20px 0 10px 0;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
    margin: 0 0 10px 0;
  }
}

:deep(.el-dialog__body) {
  padding: 20px;
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

  .register-container {
    max-width: 100%;
    padding: 30px 20px;
  }
}
</style>
