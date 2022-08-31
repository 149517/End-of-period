import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Find from '../components/Find.vue'
import Season from '../components/Season.vue'
import Atlas from '../components/Atlas.vue'

// Season-z
import spring from '../components/season-s/spring.vue'
import summer from "../components/season-s/summer.vue";
import autumn from "../components/season-s/autumn.vue";
import winter from "../components/season-s/winter.vue";

import tradition from "../components/home-s/tradition.vue";
import custom from "../components/home-s/custom.vue";
import poetry from "../components/home-s/poetry.vue";
import health from "../components/home-s/health.vue";

import Login from "../components/Login.vue"


// 创建路由实例对象
const routes = [
    { path: '/', name: "home", component: Home},
    { path: '/find', name: "find", component: Find },
    {path:'/season',name:'season',component:Season,
        // redirect:'/season/spring',
        children:[
            {path:'',component:spring},
            {path:'summer',component: summer},
            {path:'autumn',component: autumn},
            {path: 'winter',component: winter}
        ]
    },
    {path:'/atlas',name:'atlas',component: Atlas},
    {path:'/login',component: Login},

    {path:'/tradition',component: tradition},
    {path:"/custom",component: custom},
    {path:'/poetry',component: poetry},
    {path:'/health',component: health}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 向外共享路由实例对象
export default router