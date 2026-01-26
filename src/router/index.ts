import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { usePermissStore } from "../store/permiss";
import Home from "../views/home.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "系统首页",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/mainPage/dashboard.vue"
          ),
      },
      {
        path: "/data-search",
        name: "data-search",
        meta: {
          title: "数据检索",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "data-search" */ "@/views/dataSearch/index.vue"
          ),
      },
      {
        path: "/data-detail/:dataType/:id",
        name: "data-detail",
        meta: {
          title: "数据详情",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "data-detail" */ "@/views/dataSearch/dataDetail/dataDetail.vue"
          ),
      },
      {
        path: "/data-product",
        name: "data-product",
        meta: {
          title: "数据产品",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "data-product" */ "@/views/dataProduct/index.vue"
          ),
      },
      {
        path: "/data-product/detail/:id",
        name: "data-product-detail",
        meta: {
          title: "数据产品详情",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "data-product-detail" */ "@/views/dataProduct/detail/index.vue"
          ),
      },
      {
        path: "/data-resources",
        name: "data-resources",
        meta: {
          title: "数据资源",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "data-resources" */ "@/views/dataResources/index.vue"
          ),
      },
      {
        path: "/data-sharing",
        name: "data-sharing",
        meta: {
          title: "数据共享",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "data-product" */ "@/views/dataProduct/index.vue"
          ),
      },
      {
        path: "/demand-service",
        name: "demand-service",
        meta: {
          title: "需求服务",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "demand-service" */ "@/views/demandService/index.vue"
          ),
      },
      {
        path: "/field-updates",
        name: "field-updates",
        meta: {
          title: "领域动态",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "field-updates" */ "@/views/domainDynamic/index.vue"
          ),
      },
      {
        path: "/updates-detail",
        name: "updates-detail",
        meta: {
          title: "动态详情",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "field-updates" */ "@/views/updatesDetail/index.vue"
          ),
      },
      {
        path: "/about",
        name: "about",
        meta: {
          title: "关于我们",
          noAuth: true,
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/about/index.vue"),
      },
      {
        path: "/comment",
        name: "comment",
        meta: {
          title: "意见留言板",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "comment" */ "@/views/messageBoard/index.vue"
          ),
      },
      {
        path: "/flow-manage",
        name: "flow-manage",
        meta: {
          title: "流程管理",
          noAuth: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "flow-manage" */ "../views/flowManage/index.vue"
          ),
      },
      {
        path: "/ucenter",
        name: "ucenter",
        meta: {
          title: "个人中心",
        },
        component: () =>
          import(
            /* webpackChunkName: "ucenter" */ "../views/pages/ucenter.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    meta: {
      title: "登录",
      noAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/pages/login.vue"),
  },
  {
    path: "/register",
    meta: {
      title: "注册",
      noAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/pages/register.vue"),
  },
  {
    path: "/reset-pwd",
    meta: {
      title: "重置密码",
      noAuth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "reset-pwd" */ "../views/pages/reset-pwd.vue"
      ),
  },
  {
    path: "/403",
    meta: {
      title: "没有权限",
      noAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "403" */ "../views/pages/403.vue"),
  },
  {
    path: "/404",
    meta: {
      title: "找不到页面",
      noAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/pages/404.vue"),
  },
  { path: "/:path(.*)", redirect: "/404" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // NProgress.start();
  // const role = localStorage.getItem('vuems_name');
  // const permiss = usePermissStore();
  next();
  // if (!role && to.meta.noAuth !== true) {
  //     next('/login');
  // } else if (typeof to.meta.permiss == 'string' && !permiss.key.includes(to.meta.permiss)) {
  //     // 如果没有权限，则进入403
  //     next('/403');
  // } else {
  //     next();
  // }
});

router.afterEach(() => {
  // 滚动主容器到顶部
  setTimeout(() => {
    const wrapper = document.querySelector('.wrapper');
    const content = document.querySelector('.content');
    if (wrapper) {
      wrapper.scrollTop = 0;
    }
    if (content) {
      content.scrollTop = 0;
    }
  }, 0);
});

export default router;
