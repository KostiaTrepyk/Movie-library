import { Box, Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGINROUTE, REGISTRATIONROUTE } from "../../core/Router/utils/routes";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import TabPanel from "../../components/TabPanel/TabPanel";

enum TabPanelValues {
    LoginForm = 0,
    RegistrationForm = 1,
}

const AuthFormModule = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLoginForm: boolean = location.pathname === LOGINROUTE.path;
    const tab = isLoginForm ? TabPanelValues.LoginForm : TabPanelValues.RegistrationForm;

    function toggleTabs(e: React.SyntheticEvent<Element, Event>, newTab: TabPanelValues) {
        TabPanelValues.LoginForm === newTab && navigate(LOGINROUTE.path);
        TabPanelValues.RegistrationForm === newTab && navigate(REGISTRATIONROUTE.path);
    }

    return (
        <Box width={"100%"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", width: "fit-content", marginInline: "auto" }}>
                <Tabs value={tab} onChange={toggleTabs}>
                    <Tab label="Login" {...a11yProps(TabPanelValues.LoginForm)} />
                    <Tab label="Registration" {...a11yProps(TabPanelValues.RegistrationForm)} />
                </Tabs>
            </Box>

            <Box
                sx={{
                    maxWidth: 500,
                    minHeight: 330,
                    marginInline: "auto",
                }}
            >
                <TabPanel value={tab} index={TabPanelValues.LoginForm}>
                    <LoginForm />
                </TabPanel>
                <TabPanel value={tab} index={TabPanelValues.RegistrationForm}>
                    <RegistrationForm />
                </TabPanel>
            </Box>
        </Box>
    );
};

export default AuthFormModule;

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}
