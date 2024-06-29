<template>
    <h2>Counter2</h2>
    <p>{{ numero }} <sup>2</sup> = {{ mult() }}</p>
    <p data-testid="counter">{{ numero }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</template>

<script>
export default {
    name: "Counter",
    props: {
        // number: Number,
        number: {
            type: Number,
            required: true,
            default: 3, //default(){return{a:"s"}}

            validator(value) {
                return value > 100;
            },
        },
    },
    data() {
        return {
            numero: this.number,
        };
    },
    methods: {
        mult() {
            console.log("xd");
            return this.numero * this.numero;
        },
        increment() {
            this.numero++;
        },
        decrement() {
            this.numero--;
        },
    },
    computed: {
        mult2() {
            console.log("xdcomputed");
            return this.numero * this.numero;
        },
    },
    // setup: {
    //     mult() {
    //         return this.numero * this.numero;
    //     },
    // },
};
</script>

<style></style>
