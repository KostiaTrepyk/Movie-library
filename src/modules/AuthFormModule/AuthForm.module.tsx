import { Paper } from "@mui/material";
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
        <Paper
            sx={{
                boxSizing: "border-box",
                width: "min(100%, 450px)",
                p: { sm: 2, xs: 1 },
                borderRadius: 2,
            }}
            elevation={4}
        >
            <TabSwitcher currentTab={tab} onTabChange={toggleTabs} />

            <TabPanels currentTab={tab} />
        </Paper>
    );
};

export default AuthFormModule;
