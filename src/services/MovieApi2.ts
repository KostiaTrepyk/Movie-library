import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllGenresResponse, BaseInfoResponse } from "../models/MovieApi2";

const apiKey2 = process.env.REACT_APP_APIKEY2;

export const MovieApi2 = createApi({
    reducerPath: "MovieApi2",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://moviesdatabase.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", apiKey2 || "");
            headers.set("X-RapidAPI-Host", "moviesdatabase.p.rapidapi.com");
        },
    }),
    endpoints: (builder) => ({
        getUpcoming: builder.query<BaseInfoResponse, { page: string | number; genre: string }>({
            query: ({ page, genre }) => ({
                url: "/titles/x/upcoming",
                params: {
                    page,
                    info: "base_info",
                    titleType: "movie",
                    genre,
                },
            }),
        }),

        getByGenre: builder.query<
            BaseInfoResponse,
            { genre?: string; year?: string | number; page: string | number; type?: string }
        >({
            query: ({ genre, year, page, type }) => ({
                url: "/titles",
                params: {
                    year,
                    page,
                    titleType: type || "movie",
                    genre,
                    info: "base_info",
                    /*  sort: "year.decr", */
                    startYear: new Date().getFullYear() - 30,
                    endYear: new Date().getFullYear(),
                },
            }),
        }),

        getAllGenres: builder.query<AllGenresResponse, undefined>({
            query: () => ({
                url: "/titles/utils/genres",
            }),
        }),
    }),
});
