import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import { MovieApi1 } from "../../services/MovieApi1";

import MovieDescriptionSection from "../../sections/MovieDescriptionSection/MovieDescriptionSection";
import SeasonsSection from "../../sections/SeasonsSection/SeasonsSection";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

type Params = {
    id: string;
};

const FilmPage: React.FC = () => {
    const params = useParams<Params>();

    const { currentData } = MovieApi1.useGetByIdQuery(params.id || "", {});

    return (
        <DefaultPageContainer>
            <Stack spacing={8}>
                <MovieDescriptionSection movieId={params.id || ""} />

                {currentData?.Type === "series" && <SeasonsSection movieId={params.id || ""} />}
            </Stack>
        </DefaultPageContainer>
    );
};

export default FilmPage;
