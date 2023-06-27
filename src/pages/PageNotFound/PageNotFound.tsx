import { Link } from "react-router-dom";
import { HOMEROUTE } from "../../core/Router/utils/routes";
import LayoutContainer from "../../components/layouts/Containers/LayoutContainer";

const PageNotFound: React.FC = () => {
    return (
        <LayoutContainer>
            <h1>PageNotFound!</h1>
            <Link to={HOMEROUTE.path}>Back to home page!</Link>
        </LayoutContainer>
    );
};

export default PageNotFound;
