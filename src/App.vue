<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <menu-component :routes="routes"></menu-component>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Application Header</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

import MenuComponent from "@/components/layouts/MenuComponent";
import { routes } from "@/routes";

export default {
    components: {
        'menu-component': MenuComponent
    },
    data: () => {
        return {
            drawer: null,
            routes: routes.filter(route => route.menu)
        }
    }
}
</script>
<style>

</style>