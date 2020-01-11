import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        name: 'content',
        path: "/",
        component: () => import('./components/Content')
    }
];

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
});