import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGINROUTE, REGISTRATIONROUTE } from "../../core/Router/utils/routes";
import { AuthFormTabPanelValues } from "./models/AuthFormTabPanel";

import TabSwitcher from "./components/TabSwitcher";
import TabPanels from "./components/TabPanels";

const AuthFormModule: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLoginForm: boolean = location.pathname === LOGINROUTE.path;
    const tab = isLoginForm ? AuthFormTabPanelValues.LoginForm : AuthFormTabPanelValues.RegistrationForm;

    function toggleTabs(e: React.SyntheticEvent<Element, Event>, newTab: AuthFormTabPanelValues) {
        AuthFormTabPanelValues.LoginForm === newTab && navigate(LOGINROUTE.path);
        AuthFormTabPanelValues.RegistrationForm === newTab && navigate(REGISTRATIONROUTE.path);
    }

    return (
        <Box width={"100%"}>
            <TabSwitcher currentTab={tab} onTabChange={toggleTabs} />

            <TabPanels currentTab={tab} />
        </Box>
    );
};

export default AuthFormModule;
