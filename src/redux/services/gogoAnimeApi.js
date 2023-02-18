import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const key = import.meta.env.ANIME_API_KEY;

export const gogoAnimeApi = createApi({
    reducerPath: 'gogoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gogoanime2.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            
            headers.set('X-RapidAPI-Key',key);
            headers.set('X-RapidAPI-Host','gogoanime2.p.rapidapi.com');
            return headers;
        },
    }),
    // allows us to use it as a HOOK
    endpoints:(builder) =>({
        getAnimeBySearch: builder.query({query:(searchTerm)=>`search?keyw=${searchTerm}`}),
        getAnimeMovies: builder.query({query:(aphKey)=>`anime-movies?aph=${aphKey}`}),
        getAnimeDetails: builder.query({query:(animeTitle)=>`anime-details/${animeTitle}`}),
        getRecentEpisodes: builder.query({query:()=>`recent-release`}),
        getTopAiring: builder.query({query:()=>``}),
        getPopularAnime: builder.query({query:()=>`popular`}),
        getAnimeByGenre: builder.query({query:(genreTerm)=>`genre/${genreTerm}`}),
    })
});

export const{
    useGetAnimeByGenreQuery, useGetAnimeBySearchQuery,
    useGetAnimeDetailsQuery, useGetAnimeMoviesQuery,
    useGetPopularAnimeQuery, useGetRecentEpisodesQuery,
    useGetTopAiringQuery,
} = gogoAnimeApi;