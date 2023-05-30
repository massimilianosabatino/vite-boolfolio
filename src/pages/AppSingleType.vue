<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "SingleTecnology",
    data() {
        return {
            store,
            type: {},
            slug: this.$route.params.slug
        }
    },
    methods: {
        getSingle(slug) {
            axios.get(this.store.apiBaseUrl + this.store.typeApi + slug)
                .then((response) => {
                    this.type = response.data.results;
                })
                .catch((error) => {
                    console.log('error',error);
                    console.log('route', this.$route)
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
                <h1>{{ type.category }}</h1>
                <ul>
                    <li v-for="project in type.projects">
                        <router-link :to="{ name: 'project', params: { id: project.id, slug:project.slug } }"
                            class="btn btn-primary align-self-start mt-auto">
                            {{ project.title }}
                        </router-link>
                        
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-auto">
                <!-- Return button -->
                <router-link :to="{ name: 'types' }"
                    class="btn btn-primary btn-sm align-self-start mt-auto">
                    Return
                </router-link>
                <!-- /Return button -->
            </div>
        </div>
    </div>
    
    
</template>