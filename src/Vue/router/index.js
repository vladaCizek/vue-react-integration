
import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Index from "../views/Index.vue";
import About from "../views/About.vue";

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
]

export default new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})