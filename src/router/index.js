import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/components/views/login/index'),
        },{
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('@/components/views/dashboard/index'),
            children: [
                {
                    path: '/dashboard/document',
                    name: 'Document',
                    component: () => import('@/components/views/document/edit/index'),
                },
                {
                    path: '/dashboard/document/list',
                    name: 'Document',
                    component: () => import('@/components/views/document/list/index'),
                },
            ]
        },
    ]
})
