import { Link } from "react-router-dom";
import { HOMEROUTE } from "../../core/Router/utils/routes";

import DefaultLayoutContainer from "../../components/layouts/Containers/DefaultLayoutContainer";

const PageNotFound: React.FC = () => {
    return (
        <DefaultLayoutContainer>
            <h1>PageNotFound!</h1>
            <Link to={HOMEROUTE.path}>Back to home page!</Link>
        </DefaultLayoutContainer>
    );
};

export default PageNotFound;
