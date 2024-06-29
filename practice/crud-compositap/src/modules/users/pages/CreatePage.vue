<template>
    <div class="container mx-auto">
        <form @submit="onSubmit" novalidate>
            <FormControl :value="nombre" />
            <FormControl :value="apellido" />
            <button
                type="submit"
                class="bg-green-600 px-2 py-1 rounded-md text-white text-xs"
            >
                Agregar
            </button>
        </form>
    </div>
    <template v-if="usuarios.length">
        <p class="text-center block">{{ usuarios.length }}</p>
        <div class="flex gap-2 flex-wrap justify-center">
            <Card
                v-for="usuario in usuarios"
                :key="usuario.id"
                :usuario="usuario"
                :onDeleteUser="onDeleteUser"
                :onActiveEditUser="onActiveEditUser"
            />
        </div>
    </template>
    <div class="" v-else="!usuarios.length">
        <p>No hay usuarios</p>
    </div>
</template>
<script>
import FormControl from "../components/FormControl.vue";
import Card from "../components/Card.vue";
import { useForm } from "vue-hooks-form";
import { ref } from "vue";
export default {
    components: {
        FormControl,
        Card,
    },
    setup() {
        const usuarios = ref(
            JSON.parse(localStorage.getItem("usuarios") ?? "[]")
        );
        const usuarioEdit = ref(null);
        const { useField, handleSubmit, set } = useForm({});
        const nombre = useField("nombre", {
            rule: { required: true },
        });
        const apellido = useField("apellido", {
            rule: {
                required: true,
            },
        });
        function onSubmit(data) {
            usuarios.value = [
                ...usuarios.value,
                { id: Date.now().toString(32), ...data },
            ];
            localStorage.setItem("usuarios", JSON.stringify(usuarios.value));
            set("nombre", "");
            set("apellido", "");
        }

        function onDeleteUser(id) {
            usuarios.value = usuarios.value.filter(
                (usuario) => usuario.id !== id
            );
            localStorage.setItem("usuarios", JSON.stringify(usuarios.value));
        }

        function onActiveEditUser({ id, ...user }) {
            usuarioEdit.value = user;
        }
        return {
            nombre,
            apellido,
            onSubmit: handleSubmit(onSubmit),
            usuarios,
            onDeleteUser,
            onActiveEditUser,
            usuarioEdit,
        };
    },
};
</script>
