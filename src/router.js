import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppSingleProject from "./pages/AppSingleProject.vue";
import AppTechnologies from "./pages/AppTechnologies.vue";
import AppTechnology from "./pages/AppTechnology.vue";
import AppTypes from "./pages/AppTypes.vue";
import AppSingleType from "./pages/AppSingleType.vue";

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
        {
            path: '/types',
            name: 'types',
            component: AppTypes,
        },
        {
            path: '/type/:slug',
            name: 'type',
            component: AppSingleType,
        },
    ]
});

export { router };