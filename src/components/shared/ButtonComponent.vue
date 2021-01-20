<template>
    <v-btn
        :color="bgColor"
        :type="type"
        :href="hrefLink"
        :to="toLink"
        :style="{ 'color': fontColor}"
    >
        <v-icon class="v-icon" :color="iconColor" v-if="icon" v-text="icon"></v-icon>
        {{ title }}
    </v-btn>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        },
        type: {
            required: true,
            type: String
        },
        bgColor: String,
        fontColor: String,
        hrefLink: String,
        toLink: String,
        icon: String,
        iconColor: String
    }
}
</script>
<style>
.v-icon {
    margin-right: 5px;
}
</style>