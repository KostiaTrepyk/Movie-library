import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { MovieApi } from "../../services/Movie";

import MovieDescriptionModule from "../../modules/MovieDescriptionModule/MovieDescription.module";
import SeasonDescriptionModule from "../../modules/SeasonDescriptionModule/SeasonDescription.module";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

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
        return <DefaultPageContainer loading />;
    }

    return (
        <DefaultPageContainer>
            <Stack spacing={8}>
                <MovieDescriptionModule movieId={params.id || ""} />

                {MovieData.currentData?.Type === "series" && (
                    <SeasonDescriptionModule movieId={params.id || ""} />
                )}
            </Stack>
        </DefaultPageContainer>
    );
};

export default FilmPage;
