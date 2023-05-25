<script>
export default {
    data() {
        return {

        }
    },
    props: {
        project: Object,
    }
}
</script>

<template>
    <div>
        <div class="card">
            <img :src="project.cover" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <div>Type: {{ project.type ? project.type.category : 'Nessuna categoria' }}</div>
                <div v-if="project.technologies.length">Technologies:
                    <template v-for="(technology, index) in project.technologies">
                        <span v-if="index < project.technologies.length - 1">{{ technology.technology }} - </span>
                        <span v-else>{{ technology.technology }}</span>
                    </template>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>