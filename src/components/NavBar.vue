<template>
    <nav class="d-flex justify-content-between ">
        <div class="d-flex">
            <div class="img">
                <img :src="store.img" >
            </div>
            <div class="d-flex align-items-center">
                <ul class="d-flex ">
                    <li v-for="(item,index) in store.ulList" key="index"><a :href="item.link">{{item.title}}</a></li>
                </ul>
            </div>
        </div>
       <div>
        <div class="col-auto search">
            <label class="visually-hidden">search</label>
            <div class="input-group">
                <input type="text" class="form-control" id="search" placeholder="Search">
            </div>
        </div>
       </div>
    </nav>
</template>

<script>
    import {store} from '../store';
    export default {
        name:'NavBar',
        data() {
            return {
                store,
                
            }
        },
        methods: {
            home(){
                console.log('ciao')
            }
        },
    }
</script>

<style lang="scss" scoped>
nav{
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.6946488067883403) 18%, rgba(0,212,255,0) 100%);
    height: 80px;
    padding: 10px;
    img{
        
        height: 100%;
    }
    li{
        padding: 0 1rem ;
    }
    a{
        color: white;
    }
    div.search{
        margin: 10px 20px 0 0;
    }
}
</style>