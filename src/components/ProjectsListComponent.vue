<script>
import { store } from '../store';
import CardSingle from './partials/CardSingle.vue';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            projects: [],
        };
    },
    components: { CardSingle },
    methods: {
        //Get all project from API
        getProject() {
            axios.get(this.store.apiBaseUrl + this.store.projectsApi)
                .then((response) => {
                    this.projects = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        //Launch API call when the component is created
        this.getProject();
    }
}
</script>

<template>
    <div class="container" v-cloak>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <!-- Project card for each project. Passing single project prop to each card -->
            <div class="col" v-for="project in projects">
                <CardSingle :project="project" />
            </div>
            <!-- /Project card for each project -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>