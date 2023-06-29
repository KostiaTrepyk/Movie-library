import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Pagination, Typography } from "@mui/material";
import { DESCRIPTIONROUTE } from "../../core/Router/utils/routes";
import { MovieApi } from "../../services/Movie";
import { getObjFromSearchParams } from "../../helpers/getObjFromSearchParams";
import { LocalstorageKeys } from "../../utils/localstorage_keys";

import SearchModule from "../../modules/SearchModule/Search.module";

import MovieList from "../../components/MovieList/MovieList";
import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

type Query = {
    title?: string;
    year?: string;
    type?: string;
    page?: string;
};

const SearchPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query: Query = getObjFromSearchParams(location.search);

    const isMobile = JSON.parse(localStorage.getItem(LocalstorageKeys.isMbile) || "");

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
            <DefaultPageContainer>
                <Typography
                    variant="h3"
                    sx={{ fontSize: { md: "2.5rem", sm: "2rem", xs: "1.7rem" }, textAlign: "center", pt: 5 }}
                >
                    Network or server error! Try later.
                </Typography>
            </DefaultPageContainer>
        );
    }

    return (
        <DefaultPageContainer>
            {/* Search module */}
            <Box sx={{ mb: 2, width: "95%", marginInline: "auto" }}>
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
                    size={isMobile ? "small" : "large"}
                />
            )}
        </DefaultPageContainer>
    );
};

export default SearchPage;
