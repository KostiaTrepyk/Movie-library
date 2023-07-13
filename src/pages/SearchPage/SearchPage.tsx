import { useLocation, useNavigate } from "react-router-dom";
import { Box, Pagination, Typography } from "@mui/material";
import { DESCRIPTIONROUTE } from "../../core/Router/utils/routes";
import { MovieApi1 } from "../../services/MovieApi1";
import { getObjFromSearchParams } from "../../helpers/getObjFromSearchParams";
import { objToSearchParams } from "../../helpers/objToSearchParams";
import { UserContext } from "../../core/contexts/User/UserContext";

import SearchModule from "../../modules/SearchModule/Search.module";

import MovieList from "../../components/MovieList/MovieList1";
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

    const { data, isError, isFetching } = MovieApi1.useSearchByTitleQuery(
        {
            page: 1,
            ...query,
        },
        { skip: !Boolean(query.title) }
    );

    function changePageHandler(e: React.ChangeEvent<unknown>, newPage: number) {
        /* Query building */
        let searchParams = objToSearchParams({ ...query, page: newPage });

        navigate(location.pathname + searchParams);
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
                {/* # FIX ME !key! */}
                <SearchModule
                    isLoading={isFetching}
                    data={query}
                    key={objToSearchParams({ ...query, page: 0 })}
                />
            </Box>

            {/* Films not found */}
            {data?.Response === "False" && (
                <Typography
                    variant="h3"
                    sx={{ fontSize: { md: "2.5rem", sm: "2rem", xs: "1.7rem" }, textAlign: "center" }}
                >
                    Films not found!
                </Typography>
            )}

            {/* MovieList */}
            {data?.Response === "True" && data.Search && (
                <MovieList movies={data.Search} onMovieClick={movieClickHandler} />
            )}

            {data?.Search && (
                <UserContext.Consumer>
                    {({ deviceType }) => (
                        <Pagination
                            count={Math.ceil(Number(data?.totalResults) / 10 || 0)}
                            page={query?.page ? +query.page : 1}
                            onChange={changePageHandler}
                            sx={{ display: "flex", justifyContent: "center" }}
                            size={deviceType === "PC" ? "large" : "small"}
                        />
                    )}
                </UserContext.Consumer>
            )}
        </DefaultPageContainer>
    );
};

export default SearchPage;
