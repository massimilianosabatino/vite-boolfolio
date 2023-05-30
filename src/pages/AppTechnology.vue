<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "SingleTecnology",
    data() {
        return {
            store,
            technology: {},
            slug: this.$route.params.slug
        }
    },
    methods: {
        getSingle(slug) {
            axios.get(this.store.apiBaseUrl + this.store.technologyApi + slug)
                .then((response) => {
                    this.technology = response.data.results;
                })
                .catch((error) => {
                    console.log('error',error);
                    console.log('route', this.$route)
                    if(error.response.status === 404)
                    this.$router.push({name: 'NotFound'});
                })
        }
    },
    created() {
        this.getSingle(this.slug);
    }
}
</script>
<template>
    <div class="container">
        <div class="row my-3">
            <div class="col">
                <h1>{{ technology.technology }}</h1>
                <ul>
                    <li v-for="project in technology.projects">
                        <router-link :to="{ name: 'project', params: { id: project.id, slug:project.slug } }"
                            class="">
                            {{ project.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-auto">
                <!-- Return button -->
                <router-link :to="{ name: 'technologies' }"
                    class="btn btn-primary btn-sm align-self-start mt-auto">
                    Return
                </router-link>
                <!-- /Return button -->
            </div>
        </div>
    </div>
    
    
</template>