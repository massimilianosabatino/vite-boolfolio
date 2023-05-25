<script>
import { store } from '../store';
import CardSingle from './partials/CardSingle.vue';
export default {
    data() {
        return {
            store,
        };
    },
    components: { CardSingle }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="project in store.projects">
                <CardSingle :project="project" :api="store.apiBaseUrl + store.projectApi"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>