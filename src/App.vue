<script>
import HeaderAppComponent from './components/HeaderAppComponent.vue';
import MainAppComponent from './components/MainAppComponent.vue';
import FooterAppComponent from './components/FooterAppComponent.vue';
import axios from 'axios';
import { store } from './store';

export default {
  components: {
    HeaderAppComponent,
    MainAppComponent,
    FooterAppComponent
  },
  data(){
    return {
      store,
    }
  },
  methods: {
    getProject(){
      axios.get(this.store.apiBaseUrl + this.store.projectsApi)
      .then((response) => {
          this.store.projects = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getProject();
  }
}
</script>

<template>
  <HeaderAppComponent />
  <router-view></router-view>
  <FooterAppComponent />
</template>

<style lang="scss" scoped></style>
