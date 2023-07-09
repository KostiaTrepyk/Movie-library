import Router from "./Router/Router";
import Theme from "./Theme/Theme";
import Contexts from "./contexts/Contexts";

const InitApp: React.FC = () => {
    return (
        <Theme>
            <Contexts>
                <Router />
            </Contexts>
        </Theme>
    );
};

export default InitApp;
