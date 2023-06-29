import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { HOMEROUTE } from "../../core/Router/utils/routes";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

const PageNotFound: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <DefaultPageContainer>
            <h1>PageNotFound!</h1>
            <Link to={HOMEROUTE.path}>Back to home page!</Link>
        </DefaultPageContainer>
    );
};

export default PageNotFound;
