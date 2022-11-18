<template>
    <div class="hero">
        <div class="img">
            <img :src="'https://image.tmdb.org/t/p/original/'+store.heroMovie.backdrop_path" :alt="store.heroMovie.title">
        </div>
        <div class="opacity"></div>
        <div class="title">
            <h1>{{store.heroMovie.title}}</h1>
            <h4>{{store.heroMovie.original_title}}</h4>
            <div v-for="(stella,index) in store.voto" :key="index" class="d-flex">
                <span>{{stella}}</span>
            </div>
            <div @click="descrizione()">
                <span >{{store.descrizioneTagliataMovie}}</span>
            </div>
            
        </div>
            
        
    </div>
</template>

<script>
    import {store} from '../store';

    export default {
        name:'HeroComponent',
        data() {
            return {
                store,
            }
        },
        methods:{
            descrizione(){
                store.countMovie++;
                if(store.countMovie == 1){
                    store.descrizioneTagliataMovie = store.heroMovie.overview;
                }
                else{
                    store.countMovie = 0;
                    store.descrizioneTagliataMovie = store.heroMovie.overview.slice(0, 150) + ' ...';
                }
                

            }
        }
    }
</script>

<style lang="scss" scoped>
    .hero{
        position: relative;
        margin-bottom: 10px;
        overflow: hidden;
        height: 60vh;
        .opacity{
            height: 100%;
            width: 100%;
            position: absolute;
            bottom: 0px;
            left: 0;
            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,0.6946488067883403) 50%, rgba(255,255,255,0) 100%);
        }
        img{
            position: relative;
            bottom: 20px;
            width: 100%;
        }
        .title{
            padding: 20px 40px;
            width: 50%;
            color: white;
            position: absolute;
            bottom: 0;
            left: 0;
            
        }
        span{
            cursor: pointer;
        }
    }
</style>