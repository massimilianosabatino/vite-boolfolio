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
    <div class="row">
        <div class="col-md-3" v-for="project in store.projects">
            <CardSingle :project="project" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>