import { useParams } from "react-router-dom";
import { MovieApi } from "../../services/Movie";
import { Box, Button, Container, Typography } from "@mui/material";
import { useLayoutEffect } from "react";
import EpisodeDescriptionModule from "../../modules/EpisodeDescriptionModule/EpisodeDescription.module";

/* Icons */
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import LayoutContainer from "../../components/layouts/Containers/LayoutContainer";

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
        return <LayoutContainer loading />;
    }

    return (
        <LayoutContainer>
            <Container maxWidth="xl" sx={{ pt: 2, pb: 3 }}>
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
            </Container>
        </LayoutContainer>
    );
};

export default SeriesEpisodePage;
