import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Box, CircularProgress, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { getObjFromSearchParams } from "../../helpers/getObjFromSearchParams";
import { MovieApi2 } from "../../services/MovieApi2";
import { objToSearchParams } from "../../helpers/objToSearchParams";
import { GENRESROUTE } from "../../core/Router/utils/routes";
import { BaseInfoResultEntity } from "../../models/MovieApi2";

import GenresModule from "../../modules/GenresModule/Genres.module";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";
import MovieList from "../../components/MovieList/MovieList";
import MovieListItem from "../../components/MovieList/components/MovieListItem2";

interface SearchParams {
    genre?: string;
}

const GenresPage = () => {
    const location = useLocation();
    const params: SearchParams = useMemo(() => {
        return getObjFromSearchParams(location.search);
    }, [location.search]);
    const [page, setPage] = useState<number>(1);
    const [films, setFilms] = useState<BaseInfoResultEntity[]>([]);

    const { data, isError, isFetching } = MovieApi2.useGetByGenreQuery({
        genre: params.genre,
        page,
    });

    const navigate = useNavigate();

    const observer = useRef<HTMLDivElement>(null);
    const isEndOfList = useInView(observer, { margin: "0px 0px 600px 0px" });

    useEffect(() => {
        setPage(1);
        setFilms([]);
    }, [params]);

    /* FIX */
    useEffect(() => {
        if (isEndOfList && !isFetching && !isError) {
            setPage((prev) => prev + 1);
        }
    }, [isEndOfList]);

    useEffect(() => {
        setFilms((prev) => [...prev, ...(data?.results || [])]);
    }, [data]);

    function genreClickHandler(genre: string | undefined) {
        if (!genre) return;

        if (genre === "all") {
            navigate(GENRESROUTE.path);
            return;
        }
        navigate(GENRESROUTE.path + objToSearchParams({ genre }));
    }

    return (
        <DefaultPageContainer>
            <Box mb={2}>
                <GenresModule
                    activeGenre={params.genre || "all"}
                    onChange={genreClickHandler}
                />
            </Box>

            <MovieList>
                {films.map((movie) => (
                    <MovieListItem
                        key={movie.id}
                        movieData={movie}
                    />
                ))}
            </MovieList>

            {isError && (
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ mt: 3 }}
                >
                    Notwork error! Try later.
                </Typography>
            )}

            {/* Loader */}
            <motion.div
                initial={{ height: 35 }}
                animate={!isFetching && { height: 0 }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "32px",
                }}
                ref={observer}
                layout="size"
            >
                {isFetching && (
                    <CircularProgress
                        sx={{ color: grey[600] }}
                        size={35}
                    />
                )}
            </motion.div>
        </DefaultPageContainer>
    );
};

export default GenresPage;
