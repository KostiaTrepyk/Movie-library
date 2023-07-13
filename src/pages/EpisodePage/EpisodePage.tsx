import { useParams } from "react-router-dom";

import EpisodeDescriptionSection from "../../sections/EpisodeDescriptionSection/EpisodeDescriptionSection";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

const SeriesEpisodePage: React.FC = () => {
    const params = useParams<{ episodeId: string }>();

    return (
        <DefaultPageContainer>
            <EpisodeDescriptionSection episodeId={params.episodeId || ""} />
        </DefaultPageContainer>
    );
};

export default SeriesEpisodePage;
