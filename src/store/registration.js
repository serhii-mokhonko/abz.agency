export default {
    state: {
        token: null,
        user: {}
    },
    mutations: {
        setToken (state, token) {
            state.token = token
        }
    },
    actions: {
        async getToken ({commit}) {
            const tkn = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token').then(res => res.json());
            if(tkn.success){
                commit('setToken', tkn.token);
                localStorage.setItem('user-token', tkn.token);
            }else{
                localStorage.removeItem('user-token');
                console.log("Can't get token from server!");
            }
        }

    },
    getters: {
        getUser: state => state.user
    }
}