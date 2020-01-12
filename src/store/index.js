import Vue from 'vue'
import Vuex from 'vuex'

import users from './users'
import registration from './registration'
import links from './links'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users,
        registration,
        links
    }
})