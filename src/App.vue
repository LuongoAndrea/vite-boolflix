<template>
  <NavBar/>
  <main>
    <HeroComponent/>
    <CardFilm/>
  </main>
</template>

<script>

import CardFilm from './components/CardFilm.vue';
import HeroComponent from './components/HeroComponent.vue';
import NavBar from './components/NavBar.vue';
import { store } from './store'
  export default {
    components:{
    NavBar,
    CardFilm,
    HeroComponent
},
    data() {
      return {
        store,
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>