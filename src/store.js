import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    baseUrl : 'https://api.themoviedb.org/3/',
    endPoint:{
        movies:'search/movie',
        tvs: 'search/tv',
    }, 
    params:{
        api_key: '8fa7dd7bd5f47a9e64b8736c3ca91492',
        query: 's',
        language: 'it-IT'
    },
    heroMovie:[],
    movie:[],
    tv:[],
    activeIndex: '0',
                            // nav
    // img netflix
    img: 'https://www.freepnglogos.com/uploads/netflix-logo-history-32.png',
    // lista nav 
    ulList:[
        {
            title: 'home',
            link: '#'
        },
        {
            title: 'tv show',
            link: '#tv'
        },
        {
            title: 'movies',
            link: '#movie'
        },
        {
            title: 'tv series',
            link: '#'
        },
        {
            title: 'new & popular',
            link: '#'
        },
        {
            title: 'my list',
            link: '#'
        }
    ],
    methods: {
        
    },
})
