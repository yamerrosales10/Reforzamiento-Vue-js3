<template>
    <p>Hola mundo</p>
    <!-- <Hello-World></Hello-World> -->
    <!-- <helloworld></helloworld> -->
    <!-- <Counter :number="3" /> -->
    <Indecision />
</template>
<script>
import Counter from "./components/Counter.vue";
import Indecision from "./components/Indecision.vue";

export default {
    name: "App",
    components: {
        // Counter,
        Indecision,
    },
};
</script>
