import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppSingleProject from "./pages/AppSingleProject.vue";
import AppTechnologies from "./pages/AppTechnologies.vue";
import AppTechnology from "./pages/AppTechnology.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects,
        },
        {
            path: '/project/:id/:slug',
            name: 'project',
            component: AppSingleProject,
        },
        {
            path: '/technologies',
            name: 'technologies',
            component: AppTechnologies,
        },
        {
            path: '/technology/:slug',
            name: 'technology',
            component: AppTechnology,
        },
    ]
});

export { router };