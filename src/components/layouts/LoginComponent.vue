<template>
    <v-main>
        <v-container fluid>
            <v-card max-width="500" id="login-card">
                <v-form
                    ref="form"
                    lazy-validation
                    @submit.prevent="login"
                >
                    <v-text-field
                        v-model="usuario.email"
                        :rules="emailRules"
                        label="Email"
                        required
                    />

                    <v-text-field
                        v-model="usuario.senha"
                        :rules="passwordRules"
                        type="password"
                        label="Senha"
                        required
                    />

                    <v-btn
                        type="submit"
                        color="success"
                        class="mr-4"
                    >
                        Login
                    </v-btn>

                </v-form>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            usuario: {},
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be less than 6 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]
        }
    },
    methods: {
        login() {
            this.$store.dispatch('checkUser', this.usuario)
                .then(() => {
                    this.$router.push({name: 'home'})
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style scoped>

</style>