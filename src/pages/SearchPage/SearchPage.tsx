import { useLocation, useNavigate } from "react-router-dom";
import { MovieApi } from "../../services/Movie";
import { Box, Container, Pagination, Typography } from "@mui/material";
import { DESCRIPTIONROUTE } from "../../core/Router/utils/routes";
import SearchModule from "../../modules/SearchModule/Search.module";
import { useLayoutEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getObjFromSearchParams } from "../../helpers/getObjFromSearchParams";

type Query = {
    title?: string;
    year?: string;
    type?: string;
    page?: string;
};

const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query: Query = getObjFromSearchParams(location.search);

    /* default page = 1 */
    const { currentData, isError } = MovieApi.useSearchFilmByTitleQuery(
        {
            page: 1,
            ...query,
        },
        { skip: !Boolean(query.title) }
    );

    const isLoading = Boolean(query.title) && !currentData;

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    function changePageHandler(e: React.ChangeEvent<unknown>, newPage: number) {
        /* Query building */
        let search = location.search;
        search = search.replace(`page=${query.page}`, `page=${newPage}`);
        if (!search.includes("page")) search += `&page=${newPage}`;

        window.scrollTo({ top: 0 });
        navigate(location.pathname + search);
    }

    function movieClickHandler(id: string) {
        navigate(DESCRIPTIONROUTE.path.replace(":id", id));
    }

    /* error */
    if (isError) {
        return (
            <Container maxWidth="xl" sx={{ pt: 2, pb: 3 }}>
                <Typography
                    variant="h3"
                    sx={{ fontSize: { md: "2.5rem", sm: "2rem", xs: "1.7rem" }, textAlign: "center" }}
                >
                    Error!
                </Typography>
            </Container>
        );
    }

    return (
        <Container
            maxWidth="xl"
            sx={{
                pt: 2,
                pb: 3,
            }}
        >
            {/* Search module */}
            <Box sx={{ mb: 2 }}>
                <SearchModule isLoading={isLoading} />
            </Box>

            {/* Films not found */}
            {currentData?.Response === "False" && (
                <Typography
                    variant="h3"
                    sx={{ fontSize: { md: "2.5rem", sm: "2rem", xs: "1.7rem" }, textAlign: "center" }}
                >
                    Films not found!
                </Typography>
            )}

            {/* MovieList */}
            {currentData?.Response === "True" && currentData.Search && (
                <MovieList movies={currentData.Search} onMovieClick={movieClickHandler} />
            )}

            {currentData?.Search && (
                <Pagination
                    count={Math.ceil(Number(currentData?.totalResults) / 10 || 0)}
                    page={query?.page ? +query.page : 1}
                    onChange={changePageHandler}
                    sx={{ display: "flex", justifyContent: "center" }}
                    size="medium" /* Fix me */
                />
            )}
        </Container>
    );
};

export default SearchPage;
