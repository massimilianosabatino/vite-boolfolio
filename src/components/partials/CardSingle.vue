<script>
export default {
    name: "CardSingle",
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="card h-100">
        <!-- Project cover -->
        <img :src="project.cover" class="card-img-top" :alt="`Cover ${project.title}`">
        <!-- /Project cover -->
        <div class="card-body d-flex flex-column align-items-start">
            <!-- Project details -->
            <h5 class="card-title flex-grow-1">{{ project.title }}</h5>
            <p class="card-text">{{ `${project.description.substring(0, 100)} ...` }}</p>
            <!-- Project category - check if exist -->
            <div>Type: {{ project.type ? project.type.category : 'Nessuna categoria' }}</div>
            <!-- /Project category - check if exist -->
            <!-- Project technologies - check if exist, then print each element -->
            <div v-if="project.technologies.length">Technologies:
                <template v-for="(technology, index) in project.technologies">
                    <span v-if="index < project.technologies.length - 1">{{ technology.technology }} - </span>
                    <span v-else>{{ technology.technology }}</span>
                </template>
            </div>
            <!-- /Project technologies - check if exist, then print each element -->
            <!-- /Project details -->
            <!-- Return button -->
            <router-link :to="{ name: 'project', params: { id: project.id, slug:project.slug } }"
                class="btn btn-primary align-self-start mt-auto">
                More info
            </router-link>
            <!-- /Return button -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>