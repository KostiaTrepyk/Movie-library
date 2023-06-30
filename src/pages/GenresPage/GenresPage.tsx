import { useLocation, useNavigate } from "react-router-dom";
import { Box, IconButton, Stack, Typography } from "@mui/material";
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

/* Default */
const defaultGenre = "Drama";

const GenresPage = () => {
    const params = getObjFromSearchParams(useLocation().search);

    const { data, isError, isFetching, isSuccess } = MovieApi2.useGetByGenreQuery({
        genre: params.genre || defaultGenre,
        page: params.page || 1,
    });

    const navigate = useNavigate();

    function genreClickHandler(genre: string | undefined) {
        if (!genre) return;
        navigate(GENRESROUTE.path + "/?genre=" + genre + "&page=" + 1);
    }

    function movieClickHandler(id: string) {
        console.log(id);

        navigate(DESCRIPTIONROUTE.path.replace(":id", id));
    }

    /* Pagination */
    function changePage(value: number) {
        const searchParams = objToSearchParams({
            genre: params.genre || defaultGenre,
            page: +params.page + value || 2,
        });

        navigate(GENRESROUTE.path + "/" + searchParams);
    }

    return (
        <DefaultPageContainer loading={isFetching}>
            <Box mb={2}>
                <GenresModule activeGenre={params.genre || defaultGenre} onChange={genreClickHandler} />
            </Box>

            {isSuccess && <MovieList movies={data.results} onMovieClick={movieClickHandler} />}

            {isError && (
                <Typography variant="h4" align="center" sx={{ mt: 3 }}>
                    Notwork error! Try later.
                </Typography>
            )}

            {/*  Pagination ? */}
            {data && !isError && (
                <Stack direction="row" spacing={2} justifyContent={"center"} mt={2}>
                    <IconButton
                        disabled={isFetching || isError || +params.page <= 1 || !params.page}
                        onClick={() => changePage(-1)}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton disabled={isFetching || isError || !data?.next} onClick={() => changePage(1)}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Stack>
            )}
        </DefaultPageContainer>
    );
};

export default GenresPage;
