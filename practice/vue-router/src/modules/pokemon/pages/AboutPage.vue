<template>
    <h1>About Page</h1>
    <hr />
    <!-- <p>{{ name }}</p> -->
    <button @click="onChangeName">cambiar nombre</button>
</template>

<script lang="ts">
export default {
    name: "AboutPage",
    data() {
        return {
            name: "Fernando",
        };
    },
    methods: {
        onChangeName() {
            this.name = "Yonatan";
        },
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    activated() {
        console.log("activated");
    },
    deactivated() {
        console.log("deactivated");
    },
    unmounted() {
        console.log("unmounted");
    },
    renderTracked() {
        console.log("renderTracked");
    },
    renderTriggered() {
        console.log("renderTriggered");
    },
};
</script>
