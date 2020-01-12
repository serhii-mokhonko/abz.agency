export default {
    state: {
        links: [
            { name: 'About me', route: '#aboutMe' },
            { name: 'Relationships', route: '#relationships' },
            { name: 'Requirements', route: '#requirements' },
            { name: 'User', route: '#user' },
            { name: 'Sign Up', route: '#signUp' }
        ]
    },
    getters: {
        getLinks (state) {
            return state.links
        }
    }
}