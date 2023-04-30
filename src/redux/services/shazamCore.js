import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
           baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
           prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','4ab1ff87a4msh56c89c03f9237d6p1d6a9ejsn4d8fe5bdc62b');

            return headers;

           },
        }),
        endpoints: (builder) =>({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
            getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
            getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
            getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),

        

   
        }),
    });

    export const{
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetArtistDetailsQuery,
        useGetSongRelatedQuery,
        useGetSongsBySearchQuery,
        useGetSongsByCountryQuery,
        useGetSongsByGenreQuery,
      

        
    }= shazamCoreApi;