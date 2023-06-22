import { useLocation, useNavigate } from "react-router-dom";
import { MovieApi } from "../../services/Movie";
import { Box, CircularProgress, Container, LinearProgress, Pagination, Typography } from "@mui/material";
import { DESCRIPTIONROUTE } from "../../core/Router/utils/routes";
import SearchModule from "../../modules/SearchModule/SearchModule";
import { useLayoutEffect } from "react";

type Query = {
    title?: string;
    year?: string;
    type?: string;
    page?: string;
};

const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query: Query = getQueryFromStr(location.search);

    /* default page = 1 */
    const { currentData, isError } = MovieApi.useSearchFilmByTitleQuery(
        {
            page: 1,
            ...query,
        },
        { skip: !Boolean(query.title) }
    );

    const isLoading = !currentData && location.pathname !== "/search";

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    function changePageHandler(e: React.ChangeEvent<unknown>, newPage: number) {
        /* Query building */
        let search = location.search;
        if (search.includes("page")) {
            search = search.replace(`page=${query.page}`, `page=${newPage}`);
        } else {
            search = search + `&page=${newPage}`;
        }

        navigate(location.pathname + search);
    }

    function movieClickHandler(id: string) {
        navigate(DESCRIPTIONROUTE.path.replace(":id", id));
    }

    /* error */
    if (isError) {
        return (
            <Container maxWidth="xl" sx={{ pt: 2, pb: 3, textAlign: "center" }}>
                <Typography variant="h3" sx={{ fontSize: { md: "2.5rem", sm: "2rem", xs: "1.7rem" } }}>
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
            <Box sx={{ mb: 2, position: "relative" }}>
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
            {currentData?.Response === "True" && (
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: { lg: 2, xs: 1 },
                    }}
                >
                    {currentData.Search?.map((movie) => (
                        <Box
                            key={movie.imdbID}
                            sx={{
                                boxSizing: "border-box",
                                px: 3,
                                py: 2,
                                cursor: "pointer",
                                width: "min(100%, 340px)",
                                transition: "0.3s transform",
                                "&:hover": {
                                    transform: "scale(95%)",
                                },
                            }}
                            onClick={() => movieClickHandler(movie.imdbID)}
                        >
                            <img
                                src={
                                    movie.Poster !== "N/A"
                                        ? movie.Poster
                                        : "https://thumbs.dreamstime.com/b/ikona-paska-filmu-film-programu-word-wyizolowany-na-bia%C5%82ym-tle-proste-logo-wektorowe-230410953.jpg"
                                }
                                alt={movie.Title}
                                style={{
                                    width: "100%",
                                    borderRadius: "15px 15px 10px 10px",
                                    aspectRatio: 9 / 14,
                                    objectFit: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                                loading="lazy"
                            />

                            <Box sx={{ display: "flex", textAlign: "center", pt: 1, gap: 2 }}>
                                <Typography flexGrow={1}>
                                    {movie.Title} {movie.Year}
                                </Typography>
                                <Typography
                                    bgcolor="#fff2"
                                    color="orange"
                                    variant="body2"
                                    sx={{ py: 0.8, px: 1, height: "min-content", borderRadius: 2 }}
                                >
                                    {movie.Type.toUpperCase()}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
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

function getQueryFromStr(str: string): Record<string, string> {
    if (!str) return {};

    const result: Record<string, string> = {};

    const queryArray: string[][] = str
        .slice(1)
        .split("&")
        .map((r) => r.split("="));

    queryArray.forEach((queryProp) => {
        result[queryProp[0]] = queryProp[1];
    });

    return result;
}
