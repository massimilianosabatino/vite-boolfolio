<script>

export default {
    data() {
        return {

        }
    },
    props: {
        project: Object,
        isSingle: Boolean,
    }
}
</script>

<template>
        <div class="card h-100">
            <img :src="project.cover" class="card-img-top" :alt="`Cover ${project.title}`">
            <div class="card-body d-flex flex-column align-items-start">
                <h5 class="card-title flex-grow-1">{{ project.title }}</h5>
                <p v-if="isSingle" class="card-text">{{ project.description}}</p>
                <p class="card-text">{{ `${project.description.substring(0, 100)} ...`}}</p>
                <div>Type: {{ project.type ? project.type.category : 'Nessuna categoria' }}</div>
                <div v-if="project.technologies.length">Technologies:
                    <template v-for="(technology, index) in project.technologies">
                        <span v-if="index < project.technologies.length - 1">{{ technology.technology }} - </span>
                        <span v-else>{{ technology.technology }}</span>
                    </template>
                </div>
                <a href="#" class="btn btn-primary align-self-start mt-auto" @click="$emit('singleCall', project.id)">{{isSingle ? 'Go back' : 'More info'}}</a>
            </div>
        </div>
</template>

<style lang="scss" scoped></style>