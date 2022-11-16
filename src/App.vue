<template>
  <NavBar/>
</template>

<script>
import axios from 'axios';
import NavBar from './components/NavBar.vue';
import { store } from './store'
  export default {
    components:{
      NavBar,
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