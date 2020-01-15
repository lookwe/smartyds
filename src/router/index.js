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
                    path: '/home',
                    redirect: '/'
                },
                {
                    path: '/',
                    component: resolve => require(['@/views/Home.vue'], resolve),
                    meta: { requireAuth: true}
                },
                {
                    path: '/about-us',
                    name: 'aboutUs',
                    component: () => import('@/views/About/index.vue')
                },
                {
                    path: '/targeting-solutions',
                    name: 'AdLocation',
                    component: () => import('@/views/bidder/AdLocation.vue')
                },
                {
                    path: '/video-ad-formats',
                    name: 'video',
                    component: () => import('@/views/bidder/AdVideo.vue')
                },
                {
                    path: '/native-ad-formats',
                    name: 'adNative',
                    component: () => import('@/views/bidder/AdNative.vue')
                },
            ]
        }
    ]
});


export default router;
