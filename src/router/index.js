import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '../views/Home'
import Contact from '../views/Contact'
import About from '../views/About'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: 'Home',
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
