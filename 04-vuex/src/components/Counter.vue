<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access {{ $store.state.counter.count }}</h2>
    <!-- <h2>Computed {{ countComputed }}</h2> -->
    <h1>mapState</h1>
    <h2>mapState:{{ count }}</h2>
    <div class="flex gap-2">
        <button class="bg-red-600 px-2 text-white" @click="increment">
            +1
        </button>
        <button class="bg-green-600 px-2 text-white" @click="incrementBy(5)">
            +5
        </button>
        <button
            :disabled="isLoading"
            class="bg-blue-600 px-2 text-white"
            @click="incrementRandomInt"
        >
            {{ isLoading ? "cargando" : "random" }}
        </button>
    </div>
    <!-- <h2>Direct getter: {{ $store.getters.getterquepusimos  }}</h2> -->
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
    // computed: mapState(["count"]),
    computed: {
        countComputed() {
            return this.$store.state.counter.count;
        },
        ...mapState("counter", ["count", "isLoading"]),
        ...mapGetters([""]),
        // ...mapState({count:state=>state.count)}) tambien asi se puede
        // ...mapState({count:"count"}) tambien asi se puede
    },
    methods: {
        increment() {
            this.$store.commit("counter/increment");
        },
        incrementBy(number) {
            this.$store.commit("counter/incrementBy", number);
        },
        // incrementRandomInt() {
        //     this.$store.dispatch("incrementRandomInt");
        // },
        // ...mapActions(["incrementRandomInt"]),
        ...mapActions("counter", ["incrementRandomInt"]),
    },
};
</script>
