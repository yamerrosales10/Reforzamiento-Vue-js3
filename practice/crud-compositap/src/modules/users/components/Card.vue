<template>
    <div class="bg-slate-800 text-white rounded-md flex w-[300px] p-2">
        <div class="">
            <p>
                Nombre: <b>{{ usuario.nombre }}</b>
            </p>
            <p>
                Apellido: <b>{{ usuario.apellido }}</b>
            </p>
        </div>
        <div class="">
            <p class="text-center font-semibold">Acciones</p>
            <div class="flex items-center gap-1">
                <button
                    @click="onActiveEditUser(usuario)"
                    type="button"
                    class="bg-orange-600 px-2 rounded-md"
                >
                    Editar
                </button>
                <button
                    type="button"
                    @click="onDeleteUser(usuario.id)"
                    class="bg-red-600 px-2 rounded-md"
                >
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        usuario: {
            type: Object,
            required: true,
        },
        onDeleteUser: {
            type: Function,
            required: true,
        },
        onActiveEditUser: {
            type: Function,
            required: true,
        },
    },
};
</script>
