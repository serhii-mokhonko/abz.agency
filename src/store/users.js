export default {
    state: {
        page: 1,
        users: [],
        loadedData: {},
    },

    mutations: {
        setPage (state, num) {
            state.page = num;
        },
        setUsers(state, user) {
            state.users.push(user);
        },
        resetUsers (state) {
            state.users = [];
        },
        setLoadedData(state, obj) {
            state.loadedData = obj;
        }
    },

    actions: {
        async loadUsers({ commit }, pageNum) {
            fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pageNum}&count=6`)
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
            commit('setPage', pageNum+1);
        },

        updateUsersPage ({commit, dispatch}) {
            commit('resetUsers');
            dispatch('loadUsers', 1);
        }
    },

    getters: {
        getPage (state) {
            return state.page;
        },
        getUsers(state) {
            return state.users;
        },
        getLoadedData(state) {
            return state.loadedData;
        }
    }
}