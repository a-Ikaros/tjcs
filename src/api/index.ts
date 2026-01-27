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
