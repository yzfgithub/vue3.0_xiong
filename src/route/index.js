import {createRouter, createWebHashHistory} from "vue-router";

import Home from '../views/Home/index.vue'
import About from '../views/About/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to,from, next) => {
    console.log('gg');
    // if(to.meta.flag){
    //     let token = window.localStorage.getItem('token');
    //     console.log(token,'token')
    //     if(token){
    //         next();
    //     }else{
    //         location.href='/login'
    //     }
    // }else{
        next()
    // }
})


export default router;