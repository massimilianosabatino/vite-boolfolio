<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: "Technologies",
    data() {
        return {
            store,
            technologies: Array,
        }
    },
    methods: {
        //Get all project from API
        getProject() {
            axios.get(this.store.apiBaseUrl + this.store.technologiesApi)
                .then((response) => {
                    this.technologies = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                    if(error.response.status === 404)
                    this.$router.push({name: 'NotFound'});
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
    <div class="container">
        <div class="row my-3">
            <div class="col">
                <h1>Technologies</h1>
                <ul class="my-4">
                    <li v-for="technology in technologies">
                        <router-link :to="{name: 'technology', params: {slug: technology.slug} }" class="fw-semibold">
                        {{ technology.technology }}
                    </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
h1{
    text-transform: capitalize;
}
</style>