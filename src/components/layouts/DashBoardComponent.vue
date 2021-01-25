<template>
    <v-app>
        <template v-if="isLogged">
            <v-navigation-drawer
                v-model="drawer"
                app
            >
                <menu-component :routes="routes"></menu-component>
            </v-navigation-drawer>

            <v-app-bar app>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>Application Header</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu
                    left
                    bottom
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <v-list-item-title @click="logout">Logout</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>

            <v-main>
                <v-container fluid>
                    <router-view/>
                </v-container>
            </v-main>
        </template>
        <template v-else>
            <login-component/>
        </template>
    </v-app>
</template>

<script>

import MenuComponent from "@/components/layouts/MenuComponent";
import { routes } from "@/./routes";
import { mapGetters } from 'vuex';
import LoginComponent from "@/components/layouts/LoginComponent";
import { logoutMixin } from "@/mixins";

export default {
    components: {
        'menu-component': MenuComponent,
        'login-component': LoginComponent
    },
    data: () => {
        return {
            drawer: null,
            routes: routes.filter(route => route.menu)
        }
    },
    computed: {
        ...mapGetters(['isLogged'])
    },
    mounted() {
        console.log(this.$store.getters['isLogged'])
    },
    mixins: [logoutMixin]
}
</script>
<style>
#login-card {
    margin: 15% auto;
    padding: 100px;
}
</style>