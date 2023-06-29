import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { MovieApi } from "../../services/Movie";

import EpisodeDescriptionModule from "../../modules/EpisodeDescriptionModule/EpisodeDescription.module";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

/* Icons */
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";

const SeriesEpisodePage: React.FC = () => {
    const params = useParams<{ episodeId: string }>();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const { currentData, isError } = MovieApi.useGetEpisodeQuery(params.episodeId || "");

    if (isError) {
        return <Typography align="center">Error</Typography>;
    }

    if (!currentData) {
        return <DefaultPageContainer loading />;
    }

    return (
        <DefaultPageContainer>
            {currentData?.Response === "True" ? (
                <EpisodeDescriptionModule episodeId={params.episodeId || ""} />
            ) : (
                <Box>
                    {/* Fix me */}
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
