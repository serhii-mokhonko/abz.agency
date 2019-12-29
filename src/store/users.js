export default {
    state: {
        users: [],
        loadedData: {},
    },

    mutations: {
        setUsers(state, user) {
            state.users.push(user);
        },

        setLoadedData(state, obj) {
            state.loadedData = obj;
        }
    },

    actions: {
        async loadUsers({ commit }, page) {
            fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        commit('setLoadedData', data);
                        data.users.forEach(el => {
                            commit('setUsers', el)
                        });
                    } else {
                        console.log(data.message);
                    }
                });
        }
    },

    getters: {
        getUsers(state) {
            return state.users;
        },

        getLoadedData(state) {
            return state.loadedData;
        }
    }
}