import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import { MovieApi1 } from "../../services/MovieApi1";

import MovieDescriptionModule from "../../modules/MovieDescriptionModule/MovieDescription.module";
import SeasonDescriptionModule from "../../modules/SeasonDescriptionModule/SeasonDescription.module";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

type Params = {
    id: string;
};

const FilmPage: React.FC = () => {
    const params = useParams<Params>();

    const { data } = MovieApi1.useGetByIdQuery(params.id || "", {});

    return (
        <DefaultPageContainer>
            <Stack spacing={8}>
                <MovieDescriptionModule movieId={params.id || ""} />

                {data?.Type === "series" && <SeasonDescriptionModule movieId={params.id || ""} />}
            </Stack>
        </DefaultPageContainer>
    );
};

export default FilmPage;
