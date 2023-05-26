<script>
import HeaderAppComponent from './components/HeaderAppComponent.vue';
import FooterAppComponent from './components/FooterAppComponent.vue';

export default {
  name: "App",
  components: {
    HeaderAppComponent,
    FooterAppComponent
  }
}
</script>

<template>
  <HeaderAppComponent />
  <router-view></router-view>
  <FooterAppComponent />
</template>

<style lang="scss" scoped></style>
