import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Skeleton,
    Typography,
} from "@mui/material";
import { Variants, motion } from "framer-motion";
import { MovieApi1 } from "../../services/MovieApi1";
import { SERIESEPISODEROUTE } from "../../core/Router/utils/routes";

import Error from "./components/Error";

/* Framer componets */
const SeriesAnimation: Variants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
        },
    },
};

/* Framer componets */
const MPaper = motion(Paper);

interface SeasonsSectionProps {
    movieId: string;
}

const SeasonsSection: React.FC<SeasonsSectionProps> = ({ movieId }) => {
    const [choosedSeason, setChoosedSeason] = useState<number>(1);
    const { currentData, data, isLoading, isError, isFetching, isSuccess } =
        MovieApi1.useGetSeasonQuery({ movieId, season: choosedSeason }, {});

    const navigate = useNavigate();

    function changeSeasonHandler(e: SelectChangeEvent<number>) {
        setChoosedSeason(() => +e.target.value);
    }

    function navigateToEpisode(episodeId: string) {
        navigate(
            SERIESEPISODEROUTE.path
                .replace(":id", movieId)
                .replace(":episodeId", episodeId)
        );
    }

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Skeleton
                    variant="rounded"
                    sx={{ width: "70%", maxWidth: "490px", height: 56 }}
                />
            </Box>
        );
    }

    if (isError) {
        return <Error />;
    }

    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <FormControl
                    fullWidth
                    disabled={!currentData}
                    sx={{ width: "70%", maxWidth: "490px" }}
                >
                    <InputLabel>Season</InputLabel>
                    <Select
                        value={choosedSeason}
                        label="Season"
                        onChange={changeSeasonHandler}
                        MenuProps={{ disableScrollLock: true }}
                    >
                        {isSuccess &&
                        data.Episodes &&
                        data.Episodes.length > 0 ? (
                            createMenuItems(Number(data?.totalSeasons))
                        ) : (
                            <MenuItem value={1}>Seasons not found</MenuItem>
                        )}
                    </Select>
                </FormControl>

                {isFetching && (
                    <CircularProgress
                        size={24}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: "-12px",
                            marginLeft: "-12px",
                        }}
                    />
                )}
            </Box>

            {data?.Response === "True" && (
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 3,
                        py: 2,
                    }}
                >
                    {data?.Episodes.map((episode) => (
                        <MPaper
                            initial="initial"
                            whileHover="hover"
                            variants={SeriesAnimation}
                            key={episode.Episode}
                            sx={{
                                boxSizing: "border-box",
                                width: "40%",
                                minWidth: 130,
                                maxWidth: 200,
                                p: 2,
                                cursor: "pointer",
                            }}
                            onClick={() => navigateToEpisode(episode.imdbID)}
                            elevation={5}
                        >
                            <Typography
                                sx={{
                                    fontSize: { sm: "1rem", xs: "0.75rem" },
                                    textAlign: "center",
                                }}
                            >
                                {episode.Episode}. {episode.Title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { sm: "1rem", xs: "0.75rem" },
                                    textAlign: "center",
                                }}
                            >
                                Released: {episode.Released}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { sm: "1rem", xs: "0.75rem" },
                                    textAlign: "center",
                                }}
                            >
                                Rating: {episode.imdbRating}
                            </Typography>
                        </MPaper>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default SeasonsSection;

function createMenuItems(count: number): JSX.Element[] {
    const result: JSX.Element[] = [];

    for (let i = 1; i <= count; i++) {
        result.push(
            <MenuItem
                value={i}
                key={i}
            >
                {i}
            </MenuItem>
        );
    }

    return result;
}
