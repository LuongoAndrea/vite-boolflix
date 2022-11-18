<template>
  <NavBar/>
  <main>
  
    <CardFilm/>
  </main>
</template>

<script>
import axios from 'axios';
import CardFilm from './components/CardFilm.vue';
import NavBar from './components/NavBar.vue';
import { store } from './store'
  export default {
    components:{
    NavBar,
    CardFilm,
},
    data() {
      return {
        store
      }
    },
    watch:{
      'store.params.query'(newVal, oldVal){
        if(newVal !== oldVal){
          this.getMovie();
          this.getSeries();
        }
      }
    },
    methods:{
      getMovie(){
            const apiurl = store.baseUrl + store.endPoint.movies;
            const params = store.params;
            axios.get(apiurl, { params }).then((res) =>{
              console.log(res.data.results)
                store.movie = res.data.results
                console.log(store.movie[store.activeIndex].title)
            })
        },
        getSeries(){
            const apiurl = store.baseUrl + store.endPoint.tvs;
            const params = store.params;
            axios.get(apiurl, { params }).then((res) =>{
                store.tv = res.data.results
            })
        }
    },
    created(){
      this.getMovie();
      this.getSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>