import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MovieApi1 } from "../../services/MovieApi1";
import { getObjFromSearchParams } from "../../helpers/getObjFromSearchParams";
import { objToSearchParams } from "../../helpers/objToSearchParams";
import { ShortMovieData } from "../../models/MovieApi1";

import SearchModule from "../../modules/SearchModule/Search.module";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";
import MovieListItem1 from "../../components/MovieList/components/MovieListItem1";
import MovieList from "../../components/MovieList/MovieList";

type Query = {
    title?: string;
    year?: string;
    type?: string;
};

const SearchPage: React.FC = () => {
    const location = useLocation();
    const query: Query = useMemo(
        () => getObjFromSearchParams(location.search),
        [location.search]
    );

    const [page, setPage] = useState<number>(1);
    const [items, setItems] = useState<ShortMovieData[]>([]);

    const { data, isError, isFetching } = MovieApi1.useSearchByTitleQuery(
        {
            ...query,
            page,
        },
        { skip: !Boolean(query.title) }
    );
    const isLastpage = page * 10 + 10 >= Number(data?.totalResults);

    const observer = useRef<HTMLDivElement>(null);
    const isEndOfList = useInView(observer, { margin: "0px 0px 600px 0px" });

    useEffect(() => {
        setItems([]);
        setPage(1);
    }, [query]);

    /* FIX */
    useEffect(() => {
        if (isEndOfList && !isFetching && !isError && !isLastpage) {
            setPage((prev) => prev + 1);
        }
    }, [isEndOfList]);

    useEffect(() => {
        setItems((prev) => [...prev, ...(data?.Search || [])]);
    }, [data]);

    /* error */
    if (isError) {
        return (
            <DefaultPageContainer>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { md: "2.5rem", sm: "2rem", xs: "1.7rem" },
                        textAlign: "center",
                        pt: 5,
                    }}
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
                {/* FIX !key! */}
                <SearchModule
                    key={objToSearchParams({ ...query, page: 0 })}
                    data={query}
                    disabled={isFetching}
                />
            </Box>

            {/* Films not found */}
            {!items && (
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { md: "2.5rem", sm: "2rem", xs: "1.7rem" },
                        textAlign: "center",
                    }}
                >
                    Films not found!
                </Typography>
            )}

            {/* MovieList */}
            <MovieList>
                {items.map((item, index) => {
                    if (items.length === index + 1) {
                        return (
                            <MovieListItem1
                                key={item.imdbID}
                                movieData={item}
                            ></MovieListItem1>
                        );
                    }
                    return (
                        <MovieListItem1
                            key={item.imdbID}
                            movieData={item}
                        ></MovieListItem1>
                    );
                })}
            </MovieList>

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

export default SearchPage;
