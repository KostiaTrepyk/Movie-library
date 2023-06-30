import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { MovieApi1 } from "../../services/MovieApi1";

import EpisodeDescriptionModule from "../../modules/EpisodeDescriptionModule/EpisodeDescription.module";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

/* Icons */
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";

const SeriesEpisodePage: React.FC = () => {
    const params = useParams<{ episodeId: string }>();

    const { currentData, isError } = MovieApi1.useGetEpisodeQuery(params.episodeId || "");

    return (
        <DefaultPageContainer>
            <EpisodeDescriptionModule episodeId={params.episodeId || ""} />
            {(currentData?.Response === "False" || isError) && (
                <Box>
                    {/* Fix me ? */}
                    <Button
                        size="small"
                        color="inherit"
                        onClick={() => {
                            console.log("Fix me");
                        }}
                    >
                        <ArrowBackIcon sx={{ mr: 1 }} />
                        <Typography variant="h6">Back</Typography>
                    </Button>
                    <Typography variant="h4" align="center">
                        Episode not found
                    </Typography>
                </Box>
            )}
        </DefaultPageContainer>
    );
};

export default SeriesEpisodePage;
