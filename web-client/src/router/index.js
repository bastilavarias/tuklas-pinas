import Vue from "vue";
import VueRouter from "vue-router";
import { REFRESH_AUTHENTICATION_SERVICE } from "@/store/types/authentication";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home-page",
    component: () => import("../pages/Home"),
  },
  {
    path: "/sign-in",
    name: "sign-in-page",
    component: () => import("../pages/SignIn"),
  },
  {
    path: "/signup",
    name: "signup-page",
    component: () => import("../pages/Signup"),
  },
  {
    path: "/feed",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: ":t?",
        name: "feed-page",
        component: () => import("../pages/Feed"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/events-explorer",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "events-explorer-page",
        component: () => import("../pages/EventsExplorer"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/travel-story-post-editor",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: ":action",
        name: "travel-story-post-editor-page",
        component: () => import("../pages/travel-story/Editor"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/itinerary-post-editor",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: ":action",
        name: "itinerary-post-editor-page",
        component: () => import("../pages/itinerary/Editor"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/post-details",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: ":postID/:type",
        name: "post-details-page",
        component: () => import("../pages/PostDetails"),
      },
    ],
  },
  {
    path: "/tour-guides",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "tour-guides-page",
        component: () => import("../pages/TourGuides"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/discover",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        component: () => import("@/pages/discover/map/Index"),
        children: [
          {
            path: "",
            name: "discover-map-dashboard-page",
            component: () => import("@/pages/discover/map/Dashboard"),
          },
          {
            path: "place-details",
            name: "discover-map-post-details-page",
            component: () => import("@/pages/discover/map/PlaceDetails"),
          },
        ],
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/search",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "search-page",
        component: () => import("../pages/Search"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/notification",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        name: "notification-page",
        component: () => import("../pages/Notification"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    component: () => import("../layouts/Main"),
    children: [
      {
        path: "",
        component: () => import("../pages/profile/Index"),
        children: [
          {
            path: "",
            name: "profile-general-page",
            component: () => import("../pages/profile/Wall"),
          },
          {
            path: "travel-history",
            name: "profile-travel-history-page",
            component: () => import("../pages/profile/TravelHistory"),
          },
        ],
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  await store.dispatch(REFRESH_AUTHENTICATION_SERVICE);
  const authentication = store.state.authentication;
  const isAuthenticated = authentication.isAuthenticated;
  const isProtectedRoute = to.matched.some(
    (record) => record.meta.requiresAuth
  );
  const publicRoutes = ["home-page", "sign-in-page", "signup-page"];
  if (isProtectedRoute && !isAuthenticated)
    return next({ name: "sign-in-page" });
  if (publicRoutes.includes(to.name) && isAuthenticated)
    return next({ name: "feed-page" });
  next();
});

export default router;
