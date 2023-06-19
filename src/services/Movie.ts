import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieData } from "../models/MovieData";

const apiKey = "187968b";

export const MovieApi = createApi({
    reducerPath: "MovieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com/" }),

    endpoints: (builder) => ({
        getMovieByTitle: builder.query<MovieData, string>({
            query: (title) => `/?t=${title}&apikey=${apiKey}&plot=full`,
        }),
    }),
});
