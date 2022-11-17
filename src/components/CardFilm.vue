<template>
    <div class="cardsFilm d-flex justify-content-around">
        <div v-for="(item,index) in store.listFilm.results" :key="item.id" class="cardFilm" @click="goHero(index)">
            <img :src="'https://image.tmdb.org/t/p/original/'+item.backdrop_path" :alt="item.title">
            
            <div class="opacity"></div>
            <span class="title">{{item.title}}</span>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
import axios from 'axios';
    export default {
        name:'CardFilm',
        data() {
            return {
                indexhero: store.heroIndex,
                store,
                str: String(store.listFilm.results[store.indexhero].vote_average),
                splitedStr: "",
            }
        },
        methods:{
            getCharacters() {
                axios.get(this.store.apiUrl).then(
                    (res)=>{
                        this.store.listFilm= res.data;
                        console.log(this.store.listFilm.results);
                        console.log(this.store.listFilm.results[0].title)
                    }
                );
            },
            goHero(id){
                // this.splitedStr.splice(0, this.splitedStr.length);
                store.indexhero= id;
                console.log(store.indexhero);

                this.splitedStr = this.str.split(".");
                if(this.splitedStr.length == 1){
                    for (let i = 0; i < parseInt(this.splitedStr[0]); i++) {
                        store.voto.push('<i class="fa-solid fa-star"></i>');
                    }
                }
                else{
                    for (let i = 0; i < parseInt(this.splitedStr[0]); i++) {
                        store.voto.push('<i class="fa-solid fa-star"></i>');
                    }
                    if(parseInt(this.splitedStr[1])>=5){
                        store.voto.push('<i class="fa-solid fa-star-half"></i>');
                    }
                }
                console.log('array stelle: '+store.voto);
                console.log('voto: '+this.str);
                console.log('array voto: '+this.splitedStr)
                console.log(this.splitedStr)
            }
        },
        created(){
            this.getCharacters();
        }
    }
</script>

<style lang="scss" scoped>
.cardsFilm{
    
    .cardFilm{
        position: relative;
        color: white;
        border-radius: 10px;
        overflow: hidden;
        width: calc((100% / 4) - 80px);
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