<template>
    <section>
        <HeroComponent/>
        <h2 id="movie">Movie</h2>
        <div class="cardsFilm d-flex justify-content-around">
            <div v-for="(item,index) in store.movie" :key="item.id" class="cardFilm col-lg-3" @click="goHeroFilm(index)" >
                <img :src="'https://image.tmdb.org/t/p/original/'+item.backdrop_path" :alt="item.title">
                
                <div class="opacity"></div>
                <span class="title">{{item.title}}</span>
            </div>  
        </div>
    </section>
    <section>
        <h2 id="tv">Tv Show</h2>
        <div class="cardsFilm d-flex justify-content-around">
            <div v-for="(item,index) in store.tv" :key="item.id" class="cardFilm col-lg-3" @click="goHeroTv(index)" >
                <img :src="'https://image.tmdb.org/t/p/original/'+item.backdrop_path" :alt="item.title">
                
                <div class="opacity"></div>
                <span class="title">{{item.name}}</span>
            </div>
            
        </div>
    </section>
    
</template>

<script>
import {store} from '../store';
import axios from 'axios';
import HeroComponent from './HeroComponent.vue';
    export default {
    name: "CardFilm",
    data() {
        return {
            store,
        };
    },
    methods: {
        goHeroFilm(i){
            const apiurl = store.baseUrl + store.endPoint.movies;
            const params = store.params;
            axios.get(apiurl, { params }).then((res) =>{
                store.heroMovie = res.data.results[i]
            })
        }
    },
    created() {
    },
    components: { HeroComponent }
}
</script>

<style lang="scss" scoped>
.cardsFilm{
    overflow-x: scroll;
    .cardFilm{
        position: relative;
        color: white;
        border-radius: 10px;
        overflow: hidden;
        img{
            width: 100%;
        }
        .title{
            position: absolute;
            bottom: 10px;
            left: 0;
        }
        .opacity{
            height: 100%;
            width: 100%;
            position: absolute;
            bottom: 0px;
            left: 0;
            background: rgb(0,0,0);
            background: linear-gradient(0deg, rgba(0,0,0,0.6946488067883403) 12%, rgba(255,255,255,0) 100%);
        }
}
}

</style>