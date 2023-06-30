export interface FullMovieData {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Rated: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
    totalSeasons: string;
}

export interface SearchMovieData {
    Response: "True" | "False";
    Search?: ShortMovieData[];
    totalResults: string;
}

export interface ShortMovieData {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    imdbID: string;
}

export interface SeasonData {
    Title: string;
    Season: string;
    Response: "False" | "True";
    totalSeasons: string;
    Episodes: {
        Title: string;
        Episode: string;
        Released: string;
        imdbRating: string;
        imdbID: string;
    }[];
}

export interface EpisodeData {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Episode: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Rated: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Released: string;
    Response: "True" | "False";
    Runtime: string;
    Season: string;
    Title: string;
    Type: "episode";
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
    seriesID: string;
}
