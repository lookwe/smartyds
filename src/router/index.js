import Vue from 'vue'
import VueRouter from  'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: resolve => require(['@/views/Index.vue'], resolve),
            meta: {
                title: '参数',requireAuth: true
            },
            children: [
                {
                    path: '/a',
                    redirect: '/'
                },
                {
                    path: '/',
                    component: resolve => require(['@/views/Home.vue'], resolve),
                    meta: { requireAuth: true}
                }
            ]
        }
    ]
});


export default router;
