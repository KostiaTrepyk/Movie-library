import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EpisodeData, FullMovieData, SearchMovieData, SeasonData } from "../models/MovieData";

const apiKey = "187968b";

export const MovieApi = createApi({
    reducerPath: "MovieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com" }),

    endpoints: (builder) => ({
        getMovieById: builder.query<FullMovieData, string>({
            query: (title) => `/?i=${title}&plot=full&apikey=${apiKey}`,
        }),

        searchFilmByTitle: builder.query<
            SearchMovieData,
            { title?: string; year?: string; page: string | number; type?: string }
        >({
            query: (data) => {
                const query = `/?s=${data.title || ""}&y=${data.year || ""}&type=${data?.type || ""}&page=${
                    data.page
                }&apikey=${apiKey}`;

                return query;
            },
        }),

        getSeason: builder.query<SeasonData, { movieId: string; season: number | string }>({
            query: ({ movieId, season }) => `/?i=${movieId}&Season=${season}&apikey=${apiKey}`,
        }),

        getEpisode: builder.query<EpisodeData, string>({
            query: (episodId) => `/?i=${episodId}&apikey=${apiKey}`,
        }),
    }),
});
