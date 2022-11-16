import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=8fa7dd7bd5f47a9e64b8736c3ca91492&query=ritorno+al+fut',
                            // nav
    // img netflix
    img: 'https://www.freepnglogos.com/uploads/netflix-logo-history-32.png',
    // lista nav 
    ulList:[
        {
            title: 'home',
            link: '#',
            metodo: 'home'
        },
        {
            title: 'tv show',
            link: '#',
            metodo: 'home'
        },
        {
            title: 'movies',
            link: '#',
            metodo: 'home'
        },
        {
            title: 'tv series',
            link: '#',
            metodo: 'home'
        },
        {
            title: 'new & popular',
            link: '#',
            metodo: 'home'
        },
        {
            title: 'my list',
            link: '#',
            metodo: 'home'
        }
    ],

})
