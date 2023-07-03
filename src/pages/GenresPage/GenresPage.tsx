import { useLocation, useNavigate } from "react-router-dom";
import { Box, IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import { getObjFromSearchParams } from "../../helpers/getObjFromSearchParams";
import { MovieApi2 } from "../../services/MovieApi2";
import { objToSearchParams } from "../../helpers/objToSearchParams";
import { DESCRIPTIONROUTE, GENRESROUTE } from "../../core/Router/utils/routes";

import GenresModule from "../../modules/GenresModule/Genres.module";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";
import MovieList from "./compoonents/MovieList";

// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const GenresPage = () => {
    const params = getObjFromSearchParams(useLocation().search);

    const { currentData, isError, isFetching } = MovieApi2.useGetByGenreQuery({
        genre: params.genre,
        page: params.page || 1,
    });

    const navigate = useNavigate();

    function genreClickHandler(genre: string | undefined) {
        if (!genre) return;

        if (genre === "all") {
            navigate(GENRESROUTE.path + objToSearchParams({ page: 1 }));
            return;
        }
        navigate(GENRESROUTE.path + objToSearchParams({ genre, page: 1 }));
    }

    function movieClickHandler(id: string) {
        navigate(DESCRIPTIONROUTE.path.replace(":id", id));
    }

    /* Pagination */
    function changePage(value: number) {
        const searchParams = objToSearchParams({
            genre: params.genre,
            page: +params.page + value || 2,
        });

        navigate(GENRESROUTE.path + "/" + searchParams);
    }

    return (
        <DefaultPageContainer>
            <Box mb={2}>
                <GenresModule activeGenre={params.genre || "all"} onChange={genreClickHandler} />
            </Box>

            {isFetching && <LinearProgress />}

            {currentData && <MovieList movies={currentData.results} onMovieClick={movieClickHandler} />}

            {isError && (
                <Typography variant="h4" align="center" sx={{ mt: 3 }}>
                    Notwork error! Try later.
                </Typography>
            )}

            {/*  Pagination ? */}
            {currentData && !isError && (
                <Stack direction="row" spacing={2} justifyContent={"center"} mt={2}>
                    <IconButton
                        disabled={isFetching || isError || +params.page <= 1 || !params.page}
                        onClick={() => changePage(-1)}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton
                        disabled={isFetching || isError || !currentData?.next}
                        onClick={() => changePage(1)}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Stack>
            )}
        </DefaultPageContainer>
    );
};

export default GenresPage;
