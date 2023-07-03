import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { ShortMovieData } from "../../models/MovieApi1";

import MovieItem from "./components/MovieItem";

/* Framer motion animations */
const itemAnnimation = {
    hidden: { y: 70, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: {
        scale: 0.95,
        transition: { type: "spring" },
    },
};

/* Framer motion components */
const MMovieItem = motion(MovieItem);

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
                <MMovieItem
                    key={movie.imdbID}
                    onClick={onMovieClick}
                    movieData={movie}
                    initial="hidden"
                    whileInView={itemAnnimation.visible}
                    whileHover={itemAnnimation.hover}
                    variants={itemAnnimation}
                    viewport={{ once: true }}
                />
            ))}
        </Box>
    );
};

export default MovieList;
