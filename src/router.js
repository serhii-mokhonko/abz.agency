import VueRouter from 'vue-router'

export default new VueRouter({
    mode: history,
    routes: [],
    scrollBehavior (to, from, savedPosition){
        if(to.hash){
            return {
                selector: to.hash
            }
        }else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});