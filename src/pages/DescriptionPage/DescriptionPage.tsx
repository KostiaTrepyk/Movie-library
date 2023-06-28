import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";
import { MovieApi } from "../../services/Movie";

import MovieDescriptionModule from "../../modules/MovieDescriptionModule/MovieDescription.module";
import SeasonDescriptionModule from "../../modules/SeasonDescriptionModule/SeasonDescription.module";
import DefaultLayoutContainer from "../../components/layouts/Containers/DefaultLayoutContainer";

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
        return <DefaultLayoutContainer loading />;
    }

    return (
        <DefaultLayoutContainer>
            <Container maxWidth={"xl"} sx={{ px: { md: 2, sm: 1, xs: 2 }, pt: 2, pb: 3 }} disableGutters>
                <Stack spacing={8}>
                    <MovieDescriptionModule movieId={params.id || ""} />

                    {MovieData.currentData?.Type === "series" && (
                        <SeasonDescriptionModule movieId={params.id || ""} />
                    )}
                </Stack>
            </Container>
        </DefaultLayoutContainer>
    );
};

export default FilmPage;
