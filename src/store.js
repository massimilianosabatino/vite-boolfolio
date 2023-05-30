import { reactive } from "vue";

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    projectsApi: '/projects',
    projectApi: '/project/',
    technologiesApi: '/technologies',
    technologyApi: '/technology/',
    typesApi: '/types',
    typeApi: '/type/'
})