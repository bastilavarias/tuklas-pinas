import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: () => import("../pages/Home"),
  },

  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../pages/SignIn"),
  },

  {
    path: "/signup",
    name: "signup",
    component: () => import("../pages/Signup"),
  },

  {
    path: "/main",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "feed",
        component: () => import("../pages/Feed"),
      },
      {
        path: "events-explorer",
        name: "events-explorer",
        component: () => import("../pages/EventsExplorer"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
