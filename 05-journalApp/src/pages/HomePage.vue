<template>
    <h1 class="h1">Home</h1>
    <div class="d-flex gap-2">
        <button @click="goToDayBook" class="btn btn-primary">primary</button>
        <button class="btn btn-secondary">secondary</button>
        <button class="btn btn-success">success</button>
    </div>
</template>
<script>
export default {
    name: "HomePage",
    methods: {
        goToDayBook() {
            this.$router.push({ name: "no-entry" });
        },
    },
};
</script>
