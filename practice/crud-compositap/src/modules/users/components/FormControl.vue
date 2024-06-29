<template>
    <div class="mb-2">
        <label for="" class="text-xs uppercase">nombre:</label>
        <input
            type="text"
            class="py-1 px-2 rounded-md w-full border-2"
            placeholder="tu nombre"
            v-model="value.value"
            :ref="value.ref"
        />
        <p class="text-red-600 text-xs" v-if="value.error">
            {{ value.error.message }}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Object,
            required: true,
        },
    },
};
</script>
