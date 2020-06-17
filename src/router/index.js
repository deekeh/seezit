import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '../views/Home'
<<<<<<< HEAD
import Contact from '../views/Contact'
import About from '../views/About'
=======
import About from '../views/About'
import Contact from '../views/Contact'
>>>>>>> 2c35a3e22e53fd51118947f8b71cb33ace6d2cb2

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
