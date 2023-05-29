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
                    console.log(response.data)
                    this.technology = response.data.results;
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
    
    {{ technology.technology }}
</template>