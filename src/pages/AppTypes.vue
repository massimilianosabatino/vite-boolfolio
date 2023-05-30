<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: "AppTypes",
    data() {
        return {
            store,
            types: Array,
        }
    },
    methods: {
        //Get all project from API
        getTypes() {
            axios.get(this.store.apiBaseUrl + this.store.typesApi)
                .then((response) => {
                    this.types = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        //Launch API call when the component is created
        this.getTypes();
    }
}
</script>
<template>
    <div class="container">
        <div class="row my-3">
            <h1>Types</h1>
            <ul>
                <li v-for="singleType in types">

                    <router-link :to="{name: 'type', params: {slug: singleType.slug} }" class="fw-semibold">
                    {{ singleType.category }}
                </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
</style>