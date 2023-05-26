<script>
import { store } from '../store';
import CardSingle from './partials/CardSingle.vue';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            list: true,
            single: false,
            singleProject: Object,
        };
    },
    components: { CardSingle },
    methods: {
        getSingle(id) {
            axios.get(this.store.apiBaseUrl + this.store.projectApi + id)
                .then((response) => {
                    console.log(response.data.results)
                    this.singleProject = response.data.results;
                    this.list = false;
                    this.single = true;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        switchList() {
            this.list = true;
            this.single = false;
        }, getProject() {
            axios.get(this.store.apiBaseUrl + this.store.projectsApi)
                .then((response) => {
                    this.store.projects = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProject();
    },
    computed: {
        switchState() {
            return this.single
        }

    }
}
</script>

<template>
    <div class="container" v-if="list" v-cloak>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="project in store.projects">
                <CardSingle :project="project" @singleCall="getSingle" />
            </div>
        </div>
    </div>
    <div class="container" v-if="single">
        <CardSingle :project="singleProject" @singleCall="switchList" :isSingle="switchState" />
    </div>
</template>

<style lang="scss" scoped></style>