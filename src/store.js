import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=8fa7dd7bd5f47a9e64b8736c3ca91492&query=ritorno+al+fut',
    listFilm:[],

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
            link: '#'
        },
        {
            title: 'movies',
            link: '#'
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
    heroIndex:'1'
})
