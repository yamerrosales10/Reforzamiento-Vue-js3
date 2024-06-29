<template>
    <div class="mx-auto container">
        <h1>Home Page</h1>
        <button>{{ value }}</button>
        <button
            type="button"
            @click="increment"
            class="px-2 bg-green-600 mx-2 rounded-md text-white"
        >
            +1
        </button>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        const value = ref(1);
        return {
            value,
            increment: () => value.value++,
        };
    },
};
</script>
