import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/dance',
    name: "MyDance",
    redirect:"/tuijian",
    component: () => import('../views/MyDance.vue'),
    children:[
      {
        path:"/tuijian",
        name:"TuiJian",
        component: () => import('../components/dance/TuiJian.vue'),
      },
      {
        path:"/zhaiwu",
        name:"ZhaiWu",
        component: () => import('../components/dance/ZhaiWu.vue'),
      },
      {
        path:"/JieWu",
        name:"JieWu",
        component: () => import('../components/dance/JieWu.vue'),
      },
      {
        path:"/mingxing",
        name:"MingXing",
        component: () => import('../components/dance/MingXing.vue'),
      },
      {
        path:"/zhongguo",
        name:"ZhongGuo",
        component: () => import('../components/dance/ZhongGuo.vue'),
      },
      {
        path:"/zonghe",
        name:"ZongHe",
        component: () => import('../components/dance/ZongHe.vue'),
      },
      {
        path:"/jiaocheng",
        name:"JiaoCheng",
        component: () => import('../components/dance/JiaoCheng.vue'),
      },
    ]

  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
