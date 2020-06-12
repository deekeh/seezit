import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: import('../components/Content')
    },
    {
      path: "/about",
      component: import("../views/About")
    },
    {
      path: "/contact",
      component: import("../views/Contact")
    }
  ]
});
