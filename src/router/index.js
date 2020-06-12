import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: 'Home',
      component: import('../components/Content')
    },
    {
      path: "/about",
      name: "About",
      component: import("../views/About")
    },
    {
      path: "/contact",
      name: "Contact",
      component: import("../views/Contact")
    }
  ]
});
