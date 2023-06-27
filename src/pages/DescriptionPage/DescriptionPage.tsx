import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";
import { MovieApi } from "../../services/Movie";

import MovieDescriptionModule from "../../modules/MovieDescriptionModule/MovieDescription.module";
import SeasonDescriptionModule from "../../modules/SeasonDescriptionModule/SeasonDescription.module";
import PageLoader from "../../components/PageLoader/PageLoader";

type Params = {
    id: string;
};

const FilmPage: React.FC = () => {
    const params = useParams<Params>();

    const MovieData = MovieApi.useGetMovieByIdQuery(params.id || "", {});

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    if (MovieData.isError) {
        return <Typography align="center">Error!</Typography>;
    }

    if (!MovieData.currentData) {
        return <PageLoader />;
    }

    return (
        <Container maxWidth={"xl"} sx={{ px: { md: 2, sm: 1, xs: 2 }, pt: 2, pb: 3 }} disableGutters>
            <Stack spacing={8}>
                <MovieDescriptionModule movieId={params.id || ""} />

                {MovieData.currentData?.Type === "series" && (
                    <SeasonDescriptionModule movieId={params.id || ""} />
                )}
            </Stack>
        </Container>
    );
};

export default FilmPage;
