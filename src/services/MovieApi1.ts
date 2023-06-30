import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EpisodeData, FullMovieData, SearchMovieData, SeasonData } from "../models/MovieApi1";

const apikey = process.env.REACT_APP_APIKEY1;

export const MovieApi1 = createApi({
    reducerPath: "MovieApi1",
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com" }),

    endpoints: (builder) => ({
        getById: builder.query<FullMovieData, string>({
            query: (title) => ({
                url: "/",
                params: {
                    i: title,
                    plot: "full",
                    apikey,
                },
            }),
        }),

        searchByTitle: builder.query<
            SearchMovieData,
            { title?: string; year?: string; page: string | number; type?: string }
        >({
            query: ({ title, year, type, page }) => ({
                url: "/",
                params: { s: title, y: year, type: type, page: page, apikey },
            }),
        }),

        getSeason: builder.query<SeasonData, { movieId: string; season: number | string }>({
            query: ({ movieId, season }) => ({
                url: "/",
                params: {
                    i: movieId,
                    Season: season,
                    apikey,
                },
            }),
        }),

        getEpisode: builder.query<EpisodeData, string>({
            query: (episodId) => ({
                url: "/",
                params: {
                    i: episodId,
                    apikey,
                },
            }),
        }),
    }),
});
