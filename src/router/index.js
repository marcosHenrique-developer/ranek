import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RProduct from "../views/r-product.vue";
import RLogin from "../views/r-login.vue";
import RUser from "../views/usuario/r-user.vue";
import UserProducts from "../views/usuario/user-products.vue";
import UserBuy from "../views/usuario/user-buy.vue";
import UserSells from "../views/usuario/user-sells.vue";
import UserEdit from "../views/usuario/user-edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: RProduct,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: RLogin,
  },
  {
    path: "/usuario",
    component: RUser,
    children: [
      {
        path: "",
        name: "usuario",
        component: UserProducts,
      },
      {
        path: "compras",
        name: "compras",
        component: UserBuy,
      },
      {
        path: "vendas",
        name: "vendas",
        component: UserSells,
      },
      {
        path: "edit",
        name: "edit",
        component: UserEdit,
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
