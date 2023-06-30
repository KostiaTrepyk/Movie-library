import { Box } from "@mui/material";
import { BaseInfoResultEntity } from "../../../models/MovieApi2";

import MovieListItem from "./MovieListItem";

interface MovieListProps {
    movies: BaseInfoResultEntity[];
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
                <MovieListItem key={movie._id} movieData={movie} onClick={onMovieClick} />
            ))}
        </Box>
    );
};

export default MovieList;
