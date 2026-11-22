import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SignInView from "./views/SignInView.vue";
import SignUpView from "./views/SignUpView.vue";
import ExitModal from "./views/ExitModal.vue";
import NewCardModal from "./views/NewCardModal.vue";
import TaskModal from "./views/TaskModal.vue";
import NotFoundView from "./views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
    children: [
      {
        path: "exit",
        name: "exit",
        component: ExitModal,
      },
      {
        path: "new-card",
        name: "new-card",
        component: NewCardModal,
      },
      {
        path: "card/:id",
        name: "card",
        component: TaskModal,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: SignInView,
  },
  {
    path: "/register",
    name: "register",
    component: SignUpView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("userInfo");

  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
