import { Link } from "react-router-dom";
import { HOMEROUTE } from "../../core/Router/utils/routes";

const PageNotFound: React.FC = () => {
    return (
        <>
            <h1>PageNotFound!</h1>
            <Link to={HOMEROUTE.path}>Back to home page!</Link>
        </>
    );
};

export default PageNotFound;
