export const logoutMixin = {
    methods: {
        logout() {
            this.$store.commit('resetUserData')
            this.$router.push({name: 'login'})
        }
    }
}