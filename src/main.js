import { createApp } from 'vue'

import App from './App.vue'
import 'lib-flexible/flexible.js'
import './comme/fonts.css'




// 路由模块
import router from './route'



createApp(App).use(router).mount('#app')