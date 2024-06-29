<template>
    <img :src="image" alt="bg" />
    <div class="bg-dark"></div>
    <div class="indecision-container">
        <input
            type="text"
            v-model="question"
            placeholder="Hasme una pregunta"
            name=""
            id=""
        />
        <p>Recuerda t, lerminar con un singo de interrogacion ?</p>
        <div class="">
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Indecision",
    data() {
        return {
            question: "",
            answer: null,
            image: "https://via.placeholder.com/250",
        };
    },
    methods: {
        async getAnswer() {
            this.answer = "Pensando";
            const response = await fetch("https://yesno.wtf/api");
            const result = await response.json();
            this.answer = result.answer;
            this.image = result.image;
        },
    },
    watch: {
        question(value, old) {
            if (!value.includes("?")) return;
            this.getAnswer();
            // TODO: Realizar peticion http
        },
    },
};
</script>

<style scoped>
img,
.bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 0px;
}

h1,
h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>
