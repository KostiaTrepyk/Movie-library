import { useState } from "react";
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Skeleton,
    CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList2";
import { DESCRIPTIONROUTE } from "../../core/Router/utils/routes";
import { MovieApi2 } from "../../services/MovieApi2";

/* Default */
const defaultGenre = "Drama";

const UpcomingSection = () => {
    const [page, setPage] = useState<number>(1);
    const [genre, setGenre] = useState<string>(defaultGenre);

    const upcomingMoviesRes = MovieApi2.useGetUpcomingQuery({ page, genre });
    const allGenresRes = MovieApi2.useGetAllGenresQuery(undefined);

    const navigate = useNavigate();

    function changeGenreHandler(e: SelectChangeEvent<string>) {
        setGenre(() => e.target.value);
    }

    function movieClickHandler(id: string) {
        navigate(DESCRIPTIONROUTE.path.replace(":id", id));
    }

    return (
        <Box
            sx={{
                color: "white",
                p: { md: 4, xs: 2 },
                background:
                    "linear-gradient(90deg, rgba(30,30,30,1) 0%, rgba(39,39,39,1) 50%, rgba(30,30,30,1) 100%)",
            }}
            component={"section"}
        >
            <Box display={"flex"} justifyContent={"center"} gap={2} alignItems={"center"}>
                <Typography align="center" variant="h4" sx={{ py: 2 }}>
                    Upcoming titles
                </Typography>

                {allGenresRes.isLoading && <Skeleton variant="rounded" width={100} />}
                {allGenresRes.isSuccess && (
                    <Box position={"relative"}>
                        <FormControl sx={{ minWidth: 150 }} disabled={upcomingMoviesRes.isFetching}>
                            <InputLabel>Genre</InputLabel>

                            <Select value={genre} label="Genre" onChange={changeGenreHandler}>
                                {allGenresRes.data?.results.map((genre) => (
                                    <MenuItem key={genre} value={genre}>
                                        {genre}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {upcomingMoviesRes.isFetching && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    mt: "-12px",
                                    ml: "-12px",
                                }}
                            />
                        )}
                    </Box>
                )}
            </Box>

            {upcomingMoviesRes.isLoading && <Box>Loading...</Box>}

            {upcomingMoviesRes.data && (
                <MovieList
                    movies={upcomingMoviesRes.data.results}
                    onMovieClick={movieClickHandler}
                ></MovieList>
            )}
        </Box>
    );
};

export default UpcomingSection;
