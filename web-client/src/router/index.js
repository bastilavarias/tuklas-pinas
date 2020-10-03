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
    path: "/feed",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "feed",
        component: () => import("../pages/Feed"),
      },
    ],
  },
  {
    path: "/events-explorer",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "events-explorer",
        component: () => import("../pages/EventsExplorer"),
      },
    ],
  },
  {
    path: "/travel-story-post-editor",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: ":action",
        name: "travel-story-post-editor",
        component: () => import("../pages/travel-story/Editor"),
      },
    ],
  },
  {
    path: "/itinerary-post-editor",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: ":action",
        name: "itinerary-post-editor",
        component: () => import("../pages/itinerary/Editor"),
      },
    ],
  },
  {
    path: "/travel-story-post",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: ":postID",
        name: "travel-story-post",
        component: () => import("../pages/travel-story/Post"),
        children: [
          {
            path: "gallery/:imageID",
            name: "travel-story-post-gallery",
            component: () => import("../pages/travel-story/Gallery"),
          },
        ],
      },
    ],
  },
  {
    path: "/itinerary-post",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: ":postID",
        name: "itinerary-post",
        component: () => import("../pages/itinerary/Post"),
        children: [
          {
            path: "gallery/:imageID",
            name: "itinerary-post-gallery",
            component: () => import("../pages/itinerary/Gallery"),
          },
        ],
      },
    ],
  },
  {
    path: "/tour-guides",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "tour-guides",
        component: () => import("../pages/TourGuides"),
      },
    ],
  },
  {
    path: "/discover",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "discover",
        component: () => import("../pages/Discover"),
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
