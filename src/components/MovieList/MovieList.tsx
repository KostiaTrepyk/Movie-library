import { Box } from "@mui/material";
import { ShortMovieData } from "../../models/MovieData";

import MovieItem from "./components/MovieItem";

interface MovieListProps {
    movies: ShortMovieData[];
    onMovieClick: (movieID: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { lg: 2, xs: 1 },
            }}
        >
            {movies.map((movie) => (
                <MovieItem movieData={movie} onClick={onMovieClick} key={movie.imdbID} />
            ))}
        </Box>
    );
};

export default MovieList;
