<template>
  <div class="header">
    <div class="header-padding">
      <div class="header-left">
        <img class="logo" src="../assets/img/logo.svg" alt=""/>
        <div class="web-title">材料计算设计专用数据资源节点</div>
      </div>
      <div class="header-right">
        <div class="header-user-con">

          <img :src="langImg" alt="语言" style="width: 20px;margin-right: 6px;"/>
          <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                              <span class="lang-switch cur-p">
                                  {{ '中文' }}
                                  <el-icon class="lang-switch">
                                      <arrow-down/>
                                  </el-icon>
                              </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>中文</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <!--          <div class="btn-icon" @click="setFullScreen">-->
          <!--            <el-tooltip effect="dark" content="全屏" placement="bottom">-->
          <!--              <i class="el-icon-lx-full"></i>-->
          <!--            </el-tooltip>-->
          <!--          </div>-->
          <!-- 用户头像 -->
          <img class="user-avator" style="width: 20px;margin-right: 6px;" :src="imgurl"/>
          <span class="user-operation cur-p" @click="handleCommand('login')">登录</span>
          <span class="user-operation">&nbsp;|&nbsp;</span>
          <span class="user-operation cur-p" @click="handleCommand('register')">注册</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';
import imgurl from '../assets/img/img.png';
import langImg from '../assets/img/lang-img.png';


onMounted(() => {
});

// 用户名下拉菜单选择事件
const router = useRouter();
const handleCommand = (command: string) => {
  if (command == 'login') {
    router.push('/login');
  } else if (command == 'register') {
    router.push('/register');
  }
};


</script>
<style scoped>

.header {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  color: var(--header-text-color);
  background-color: var(--header-bg-color);
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 9;
}

.header-padding {
  width: 1200px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 100%;
}

.logo {
  width: 35px;
}

.web-title {
  margin: 0 40px 0 10px;
  font-size: 22px;
  font-weight: 700;
}

.collapse-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
  opacity: 0.8;
  font-size: 22px;
}

.collapse-btn:hover {
  opacity: 1;
}

.header-right {
  float: right;
}

.header-user-con {
  display: flex;
  height: 52px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-icon {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #333333;
  margin: 0 5px;
  font-size: 20px;
}

.btn-bell-badge {
  position: absolute;
  right: 4px;
  top: 0px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: var(--header-text-color);
}

.user-avator {
  margin: 0 10px 0 20px;
}

.lang-switch {
  font-size: 12px;
  color: #333333;
}

.user-operation {
  font-size: 12px;
  color: #2d8cf0;
}

.cur-p {
  cursor: pointer;
}

.el-dropdown-link {
  color: var(--header-text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
