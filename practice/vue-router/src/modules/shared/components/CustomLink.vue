<template>
    <a v-if="isExternalLink" class="" :href="link.to"> {{ link.name }}</a>
    <router-link
        v-else
        active-class="text-red-600"
        :to="link.to"
        v-slot="{ href, isActive }"
    >
        <a :href="href" :class="isActive ? 'text-red-600' : ''">{{
            link.name
        }}</a></router-link
    >
</template>

<script lang="ts">
export default {
    name: "CustomLink",
    props: {
        link: {
            type: Object,
            required: true,
        },
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith("http");
        },
    },
};
</script>

<style></style>
