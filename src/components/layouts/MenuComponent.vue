<template>
    <v-card
        class="mx-auto"
        tile
    >
        <v-list dense>
            <v-subheader>MENU</v-subheader>
            <v-list-item-group
                color="primary"
            >
                <v-list-item
                    v-for="(item) in routes"
                    :key="item.path"
                    router
                    :to="item.path"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    props: {
        routes: {
            type: Array,
            required: true
        }
    },
    data: () => {
        return {}
    },
}
</script>

<style scoped>

</style>