<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "SingleProject",
    data() {
        return {
            store,
            project: {},
            id: this.$route.params.id
        }
    },
    methods: {
        getSingle(id) {
            axios.get(this.store.apiBaseUrl + this.store.projectApi + id)
                .then((response) => {
                    this.project = response.data.results;
                })
                .catch((error) => {
                    console.log('error',error);
                })
        }
    },
    created() {
        this.getSingle(this.id);
    }
}
</script>

<template>
    <div class="container my-3">
        <div class="card h-100">
            <img :src="project.cover" class="card-img-top" :alt="`Cover ${project.title}`">
            <div class="card-body d-flex flex-column align-items-start">
                <h5 class="card-title flex-grow-1">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <div>Type: {{ project.type ? project.type.category : 'Nessuna categoria' }}</div>
                <div v-if="(project?.technologies || []).length">Technologies:
                    <template v-for="(technology, index) in project.technologies">
                        <span v-if="index < project.technologies.length - 1">{{ technology.technology }} - </span>
                        <span v-else>{{ technology.technology }}</span>
                    </template>
                </div>
                <button class="btn btn-primary align-self-start mt-auto" @click="this.$router.go(-1)">Go back</button>
                <!-- <router-link :to="{ name: 'projects' }"
                    class="btn btn-primary align-self-start mt-auto">
                    Go back
                </router-link> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>