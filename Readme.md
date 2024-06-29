# VUE JS

<img src="https://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png" width="200"/>

## GETTING STARTED

```html
<body>
    <div id="app">
        <p>{{ nombre }}</p>
        <p>{{ nombre === "yonatan":"yes":"no" }}</p>
    </div>
</body>
```

```ts
import vue from "vue";

const app = vue
    .createApp({
        template: `<h1>Hola mundo</h1>`,
        data() {
            return {
                nombre: "yonatan",
            };
        },
        methods: {
            uppercaseNombre() {
                return this.nombre.toUpperCase();
            },
        },
    })
    .mount("#app");
```

### IMPORTANTES

```html
<!--  Pasar paramentros si hay events -->
<div>
    <input type="text" @input="changeNombre('hola',$event)" name="nombre" />
</div>

<script>
    Vue.createApp({
        data() {
            return {
                nombre: "";
            }
        },
        methods:{
            changeNombre(msg,e){
                console.log(msg)
                console.log(e.target.value);
            }
        }
    });
</script>
```

### Events

```ts
v-on:click="fn" @click="fn"

@click // Click
@input //  para inputs
@submit // para submit formulario


//----------- Events MODIFIERS
// https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
.stop // stoppropagation
.prevent //preventdefault
.self, .capture, .once, .passive
<a @click.stop="doThis"></a>
<form @submit.prevent="onSubmit"></form>
<a @click.stop.prevent="doThat"></a>
```

## BIND

```ts
v-bind:value="variable" :value="variable"

:value // en los inputs el value
:href // href
```

### LOGICA

```html
<!-- //! For -- RECORRER -->
<!-- v-for="(value,key,index) in alumnos" -->
<div v-for="alumno in alumnos" :key="alumno.id">
    <div>{{alumno.nombre}}</div>
</div>

<!-- Condicional
https://vuejs.org/guide/essentials/conditional.html#conditional-rendering
-->
<!-- If -->
<div v-if="true">
    <p>mostrar</p>
</div>
<!-- else-if -->
<div v-else-if="true">
    <p>mostrar aca</p>
</div>
<!-- else -->
<div v-else="true">
    <p>mostrar aca</p>
</div>
<!-- show -->
<!-- // Display: none  -->
<!-- NO TRABAKA CON v-else, no trabajar con template, -->
<div v-show="true">
    <p>mostrar aca</p>
</div>
```

### Key Modifiers && System Modifier Keys

Solo en inputs

```html
<!-- https://vuejs.org/guide/essentials/event-handling.html#key-modifiers -->

<!-- Si presionas enter hara -->
<input @keyup.enter="submit" />

.enter, .tab, .delete, .esc, .space

<!-- System modifyer key -->
<!-- Alt + Enter -->
<div @click.ctrl="doSomething">Do something</div>
.ctrl,.alt,.shift,.meta
```

## V MODEL

v-model can be used on a component to implement a two-way binding.

```html
<!-- v-model.number -->

<input v-model="searchText" />

<!-- convierte en numer -->
<input type="number" v-model.number="age" />
<!-- lazy cuando sacas el cursor edl imput hace cambios y trim limpia espacios en blanco -->
<input type="number" v-model.lazy.trim="age" />
```

### PROPIEDADES COMPUTADAS

Para mejorar performas . solo methodos que return un nuevo valor
https://vuejs.org/guide/essentials/computed.html#computed-properties

```ts
{
 computed: {
    fullName() {
        console.log("full name cimputed property was called");
        this.age;

        return `${this.message} Vigilio`;
    },
    }
}
```

### Watch

Es como el watch de react hook form

```ts
{
    watch: {
        age(newVal, oldVal) {
            // console.log({ newVal, oldVal });
            setTimeout(() => {
                this.age = 20; // dentro de 3 seg se convierte 20
            }, 3000);
        },
    },
}
```

### tiempo de vida en vue js OPTIONS API

https://vuejs.org/api/options-lifecycle.html#options-lifecycle

```ts
{
    data() {
        return {
            message: `Hola mundo desde  aca `,
        };
    },
    beforeCreate() {
        // antes de que se cree. this message es null
        console.log("Beforecreate() call", this.message);
    },
    created() {
        // cuando se creo. this.message ya existe
        console.log("created() call", this.message);
    },
    beforeMount() {
        // antes de que se monte. el elemento montado null
        console.log("beforeMount() call", this.$el);
    },
    mounted() {
        // cuando se monto . ya existe el elemento
        console.log("mounted() call", this.$el);
    },
    beforeUpdate() {
        // antes de que cambie el dom
        console.log("beforeupdate() call");
    },
    updated() {
        // cuando se cambio el dom
        console.log("updated() call");
    },
    beforeUnmount() {
        // antes de desmontar osea el contrario de mount se ejecuta
        console.log("beforeUnmount() call");
    },
    unmounted() {
        // cuando ya se desmonto se ejecuta
        console.log("unmounted() call");
    },
    methods: {
        onIncrement() {
            this.age++;
        },
                },}
```

### VUE ROUTER

https://router.vuejs.org/installation.html

-   Install

```bash
yarn add vue-router@4
```

### COMPOSITION API

```html
<template>
    <h1>Counter</h1>
    <h2>{{ counter }}</h2>
    <button @click="increase">+1</button>
    <button>-1</button>
</template>
<script>
    import { ref } from "vue";
    export default {
        name: "Counter",
        props: {},
        emits: {},
        setup() {
            const counter = ref(5);
            const users = ref([]);
            function increase() {
                counter.value++;
            }

            async function getUsers() {
                const { data } = axios.get("fetch.com");
                users.value = data.users;
            }
            // aca nomas
            getUsers();
            return {
                counter,
                increase,
                // ó
                decrease: () => counter.value--,
                users,
            };
        },
    };
</script>
```

### COMPOSABLE - hook como react

<!-- composables/useCounter.js -->

```js
import { ref, reactive } from "vue";

export function useCounter() {
    const counter = ref(5); // para numeros, booleanos
    const counter = reactive(5); // para objetos

    function increase() {
        counter.value++;
    }

    return {
        counter,
        increase,
        decrease: () => counter.value--,
    };
}
```

<!-- component -->

```html
<template><h1>{{counter}}</h1></template>
<script>
    export default {
        setup() {
            const props = useCounter();
            return { ...props }; //counter,increase,decrease
        },
    };
</script>
```

-   watch

```js
export default {
    setup() {
        const number = ref(0);
        const number2 = ref(0);
        // watch es como useEffect
        watch(number, (value, oldValue) => value > 1);
        watch([number, number2], (value) => value > 1);
    },
};
```

### ROUTER KEEP ALIVE

```html
<router-view v-slot="{ Component,route }">
    <keep-alive>
        <component :is="Component" :key="route.name" />
    </keep-alive>
</router-view>
```
