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
<ul>
    <li v-for="technology in technologies">
        {{ technology.slug }}
        <router-link :to="{name: 'technology', params: {slug: technology.slug} }">
        {{ technology.technology }}
    </router-link>
    </li>
</ul>
</template>
<style>
</style>