<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div class="">
            <span class="text-success fs-2 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">15</span>
        </div>
        <div class="">
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
        <textarea
            class="form-control"
            placeholder="¿Que sucedio Hoy?"
            v-model="entry.text"
        ></textarea>
    </div>
    <Fab />
    <img
        src="https://www.monstercat.com/api/file/b2708fff-d31f-4531-80c3-134a3881afa2/open"
        alt=""
    />
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            entry: null,
        };
    },
    props: {
        id: { type: String, required: true },
    },
    components: {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
    },
    computed: {
        ...mapGetters("journal", ["getEntriesByID"]),
    },
    methods: {
        loadEntry() {
            const entry = this.getEntriesByID(this.id);
            if (!entry) {
                this.$router.push({ name: "no-entry" });
                return;
            }
            this.entry = entry;
        },
    },
    created() {
        this.loadEntry();
    },
    watch: {
        id(value, oldValue) {
            this.loadEntry();
        },
    },
    // updated() {
    //     this.loadEntry();
    // },
};
</script>
<style lang="scss" scoped>
textarea {
    border: none;
    height: 100%;
    font-size: 20px;
    &:focus {
        outline: none;
    }
}
img {
    width: 200px;
    position: fixed;
    bottom: 85px;
    height: 100px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>
