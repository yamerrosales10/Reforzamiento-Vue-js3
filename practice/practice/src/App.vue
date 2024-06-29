<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <p>{{ number }}</p>
        <button @click="increase" type="button">+</button>
        <button @click="decrease" type="button">-</button>
    </div>
</template>

<script>
import { ref, watch, onMounted, onUpdated,watchEffect } from "vue";

export default {
    setup() {
        const number = ref(0);

        watch(number, (value) => {
            if (value > 1) {
                alert("hasta aqui");
            }
        });
        onMounted(() => {
            console.log("ya existe el elemnto");
        });
        onUpdated(() => {
            console.log("se actualizo el elemento");
        });

        function increase() {
            number.value++;
        }
        function decrease() {
            number.value--;
        }
        return { number, increase, decrease };
    },
};
</script>
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
