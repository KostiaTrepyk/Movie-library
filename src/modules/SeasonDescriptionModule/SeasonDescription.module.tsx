import {
    Box,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Typography,
} from "@mui/material";
import { MovieApi1 } from "../../services/MovieApi1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERIESEPISODEROUTE } from "../../core/Router/utils/routes";
import Error from "./components/Error";

interface SeasonDescriptionModuleProps {
    movieId: string;
}

const SeasonDescriptionModule: React.FC<SeasonDescriptionModuleProps> = ({ movieId }) => {
    const [season, setSeason] = useState<number>(1);
    const { currentData, data, isError } = MovieApi1.useGetSeasonQuery({ movieId, season }, {});

    const navigate = useNavigate();

    function changeSeasonHandler(e: SelectChangeEvent<number>) {
        setSeason(() => +e.target.value);
    }

    function navigateToEpisode(episodeId: string) {
        navigate(SERIESEPISODEROUTE.path.replace(":id", movieId).replace(":episodeId", episodeId));
    }

    if (isError) {
        return <Error />;
    }

    return (
        <Box>
            <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <FormControl fullWidth disabled={!currentData} sx={{ width: "70%", maxWidth: "490px" }}>
                    <InputLabel>Season</InputLabel>
                    <Select value={season} label="Season" onChange={changeSeasonHandler}>
                        {data?.Episodes && data.Episodes.length > 0 ? (
                            createMenuItems(Number(data?.totalSeasons))
                        ) : (
                            <MenuItem value={1}>1</MenuItem>
                        )}
                    </Select>
                </FormControl>

                {!currentData && (
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
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3, py: 2 }}>
                    {data?.Episodes.map((episode) => (
                        <Paper
                            key={episode.Episode}
                            sx={{
                                boxSizing: "border-box",
                                width: "40%",
                                minWidth: 130,
                                maxWidth: 200,
                                p: 2,
                                transition: "0.3s transform",
                                ":hover": {
                                    transform: "scale(105%)",
                                },
                                cursor: "pointer",
                            }}
                            onClick={() => navigateToEpisode(episode.imdbID)}
                            elevation={5}
                        >
                            <Typography sx={{ fontSize: { sm: "1rem", xs: "0.75rem" }, textAlign: "center" }}>
                                {episode.Episode}. {episode.Title}
                            </Typography>
                            <Typography sx={{ fontSize: { sm: "1rem", xs: "0.75rem" }, textAlign: "center" }}>
                                Released: {episode.Released}
                            </Typography>
                            <Typography sx={{ fontSize: { sm: "1rem", xs: "0.75rem" }, textAlign: "center" }}>
                                Rating: {episode.imdbRating}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default SeasonDescriptionModule;

function createMenuItems(count: number): JSX.Element[] {
    const result: JSX.Element[] = [];

    for (let i = 1; i <= count; i++) {
        result.push(
            <MenuItem value={i} key={i}>
                {i}
            </MenuItem>
        );
    }

    return result;
}
