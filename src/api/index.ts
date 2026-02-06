import request from "../utils/request";

export const login = (data: { account: string; password: string; code: string; }) => {
  return request({
    url: "/potdata/auth/login",
    method: "post",
    data: {
      ...data,
      type: 0,
    },
  });
};

export const register = (data: { phone: string;email: string; password: string; code: string; }) => {
  return request({
    url: "/potdata/auth/register",
    method: "post",
    data: {
      ...data,
    },
  });
};

export const logout = () => {
  return request({
    url: "/potdata/auth/logout",
    method: "post",
  });
};

export const captcha = () => {
  return request({
    url: "/potdata/auth/captcha",
    method: "get",
    responseType: 'blob',
  });
};

// 获取对势的Potential Types
export const getPairPotentialTypes = () => {
  return request({
    url: "/potdata/pairPotential/getPotentialTypes",
    method: "get",
  });
};

// 获取反应力场的Potential Types
export const getReaxffPotentialTypes = () => {
  return request({
    url: "/potdata/reaxffPotential/getPotentialTypes",
    method: "get",
  });
};

// 获取神经网络势的Potential Types
export const getMachineLearningPotentialTypes = () => {
  return request({
    url: "/potdata/machineLearningPotential/getPotentialTypes",
    method: "get",
  });
};

// 获取默认的Potential Types
export const getDefaultPotentialTypes = () => {
  return request({
    url: "/potdata/default/getPotentialTypes",
    method: "get",
  });
};

// 统计数据
export const getStatistics = () => {
  return request({
    url: "/potdata/statistics/statisticsCount",
    method: "get",
  });
};

// 统计分类数据
export const getStatisticsSetCount = () => {
  return request({
    url: "/potdata/statistics/statisticsDataSetCount",
    method: "get",
  });
};