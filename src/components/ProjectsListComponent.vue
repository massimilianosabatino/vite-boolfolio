<script>
import { store } from '../store';
import CardSingle from './partials/CardSingle.vue';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            projects: [],
            types: null,
            categorySelected: null,
            technologies: null,
            technologySelected: null,
            loading: true,
            
        };
    },
    components: { CardSingle },
    methods: {
        //Get all project from API
        getProject() {
            axios.get(this.store.apiBaseUrl + this.store.projectsApi)
                .then((response) => {
                    this.projects = response.data.results;
                    this.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        //Get all categories
        getTypes(){
            axios.get(this.store.apiBaseUrl + this.store.typesApi)
                .then((response) => {
                    this.types = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        //Get all categories
        getTechnologies(){
            axios.get(this.store.apiBaseUrl + this.store.technologiesApi)
                .then((response) => {
                    this.technologies = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        //Launch API call when the component is created
        this.getProject();
        this.getTypes();
        this.getTechnologies();
    },
    computed: {
        projectList(){
            if(this.categorySelected){
                return this.projects.filter(project => project.type.category === this.categorySelected);
            }
            if(this.technologySelected){
                return this.projects.filter(project => project.technologies.find(({technology}) => technology === this.technologySelected));
            }
            return this.projects
        },
        
    }
}
</script>

<template>
    <div v-if="loading" class="container">
        <div class="row justify-content-center align-items-center">
            <div class="lds-ripple"><div></div><div></div></div>
        </div>
    </div>
    <div id="projects-list" class="container" v-cloak>
        <!-- Filter projects -->
        <div class="row justify-content-end align-items-center my-3">
            <div class="col text-end filter">
                <strong>Filters</strong>
            </div>
            <!-- Type filter menu -->
            <div class="col-auto">
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Types
                    </button>
                    <ul class="dropdown-menu" v-if="types">
                        <li :key="type.id" v-for="(type) in types">
                            <a class="dropdown-item" href="#" @click.prevent="categorySelected = type.category">{{ type.category }}</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#" @click.prevent="categorySelected = null">Reset</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /Type filter menu -->
            <div class="col-auto">
                <div class="dropdown">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Technologies
                    </button>
                    <ul class="dropdown-menu" v-if="technologies">
                        <li :key="technology.id" v-for="technology in technologies">
                        <a class="dropdown-item" href="#" @click.prevent="technologySelected = technology.technology">{{ technology.technology }}</a>
                        </li>
                        <li><a class="dropdown-item" href="#" @click.prevent="technologySelected = null">Reset</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /Filter projects -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <!-- Project card for each project. Passing single project prop to each card -->
            <div class="col projects" v-for="project in projectList">
                <CardSingle :project="project" />
            </div>
            <!-- /Project card for each project -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>