<template>
    <section>
        <h2 id="movie">{{store.ulList[2].title}}</h2>
        <HeroComponent/>
        <div class="cardsFilm d-flex justify-content-around">
            <div v-for="(item,index) in store.movie" :key="item.id" class="cardFilm col-lg-3" @click="goHeroFilm(index)" >
                <img :src="'https://image.tmdb.org/t/p/original/'+item.backdrop_path" :alt="item.title">
                
                <div class="opacity"></div>
                <span class="title">{{item.title}}</span>
            </div>  
        </div>
    </section>
    <section>
        <h2 id="tv">{{store.ulList[3].title}}</h2>
        <HeroTv/>
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
import HeroTv from './HeroTv.vue';
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
                this.getDescrizioneMovie()
            })
            
        },
        goHeroTv(i){
            const apiurl = store.baseUrl + store.endPoint.tvs;
            const params = store.params;
            axios.get(apiurl, { params }).then((res) =>{
                store.heroTv = res.data.results[i]
                this.getDescrizioneTv();
            })
        },
        getDescrizioneMovie(){
            store.descrizioneTagliataMovie = store.heroMovie.overview.slice(0, 200) + ' ...';
            store.countMovie = 0;
        },
        getDescrizioneTv(){
            store.descrizioneTagliataTv = store.heroTv.overview.slice(0, 200) + ' ...';
            store.countTv = 0;
        }
    },
    created() {
        this.goHeroTv(1),
        this.goHeroFilm(4)
    },
    components: { 
        HeroComponent,
        HeroTv }
}
</script>

<style lang="scss" scoped>
section{
    padding: 2rem 0 0 0;
}
h2{
    color: white;
    text-transform: uppercase;
}
.cardsFilm{
    cursor: pointer;
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
            background: linear-gradient(0deg, rgba(0,0,0,0.6946488067883403) 50%, rgba(255,255,255,0) 100%);
        }
}
}

</style>