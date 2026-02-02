import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ElMessage, ElMessageBox } from "element-plus";

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers || {};
    config.headers["Content-Type"] = "application/json";
    config.headers["ngrok-skip-browser-warning"] = "true";

    // 添加 token 到请求头
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["satoken"] = `${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data?.code === 401) {
      ElMessageBox.confirm("登录已过期，是否要重新登录？", "登录过期", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        window.location.href = "/#/login";
      });
    } else if (response.status === 200) {
      return response;
    } else {
      Promise.reject(response);
    }
  },
  (error: AxiosError) => {
    // 处理 401 未授权错误
    if (error.response?.status === 401) {
      ElMessageBox.confirm("登录已过期，是否要重新登录？", "登录过期", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        window.location.href = "/#/login";
      });
    } else if (error.message) {
      ElMessage.error(error.message);
    }
    console.log(error);
    return Promise.reject(error);
  },
);

export default service;
