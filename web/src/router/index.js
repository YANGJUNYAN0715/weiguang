import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/wall?id=0",
    name: "index",
    component: () => import("../views/WeiGuang.vue"),
    children: [
      {
        path: "wall",
        component: () => import("../views/WallMessage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
