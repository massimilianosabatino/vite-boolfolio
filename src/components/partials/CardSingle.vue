<script>
import { store } from '../../store';

export default {
    data() {
        return {

        }
    },
    props: {
        project: Object,
        api: String,
    }
}
</script>

<template>
        <div class="card h-100">
            <img :src="project.cover" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column align-items-start">
                <h5 class="card-title flex-grow-1">{{ project.title }}</h5>
                <p class="card-text">{{ `${project.description.substring(0, 100)} ...`}}</p>
                <div>Type: {{ project.type ? project.type.category : 'Nessuna categoria' }}</div>
                <div v-if="project.technologies.length">Technologies:
                    <template v-for="(technology, index) in project.technologies">
                        <span v-if="index < project.technologies.length - 1">{{ technology.technology }} - </span>
                        <span v-else>{{ technology.technology }}</span>
                    </template>
                </div>
                <a :href="api+project.id" class="btn btn-primary align-self-start mt-auto">Go somewhere</a>
            </div>
        </div>
</template>

<style lang="scss" scoped></style>