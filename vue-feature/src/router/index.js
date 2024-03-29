import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VuexView from '../views/VuexView.vue'
import VuexView2 from '../views/VuexView2.vue'
import SpreadView from '../views/SpreadView.vue'
import PropsView from "@/views/PropsView.vue";
import VmodelView from "@/views/VmodelView.vue";
import VmodelView2 from "@/views/VmodelView2.vue";
import ForceUpdateView from "@/views/ForceUpdateView.vue";
import ParelellView from "@/views/ParelellView.vue";
import ComputedVmodelView from "@/views/ComputedVmodelView.vue";
import ParentComponentView from "@/views/slot/ParentComponent.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vmodel',
    name: 'vmodel',
    component: VmodelView
  },
  {
    path: '/vmodel2',
    name: 'vmodel2',
    component: VmodelView2
  },
  {
    path: '/parelell',
    name: 'parelell',
    component: ParelellView
  },
  {
    path: '/force-update',
    name: 'force-update',
    component: ForceUpdateView
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: VuexView
  },
  {
    path: '/vuex2',
    name: 'vuex2',
    component: VuexView2
  },
  {
    path: '/computeandvmodel',
    name: 'computeandvmodel',
    component: ComputedVmodelView
  },
  {
    path: '/props',
    name: 'props',
    component: PropsView
  },
  {
    path: '/spread',
    name: 'spread',
    component: SpreadView
  },
  {
    path: '/parent',
    name: 'parent',
    component: ParentComponentView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
