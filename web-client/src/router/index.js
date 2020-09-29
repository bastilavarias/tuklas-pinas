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
      {
        path: "travel-story-post-editor/:action",
        name: "travel-story-post-editor",
        component: () => import("../pages/travel-story/Editor"),
      },
      {
        path: "travel-story-post/:postID",
        name: "travel-story-post",
        component: () => import("../pages/travel-story/Post"),
        children: [
          {
            path: "images/:imageID",
            name: "travel-story-post-images",
            component: () => import("../pages/travel-story/ImageGallery"),
          },
        ],
      },
      {
        path: "itinerary-post-editor/:action",
        name: "itinerary-post-editor",
        component: () => import("../pages/itinerary/Editor"),
      },
      {
        path: "itinerary-post/:postID",
        name: "itinerary-post",
        component: () => import("../pages/itinerary/Post"),
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
