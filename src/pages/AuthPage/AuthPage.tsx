import { Box, Button, FormGroup, Tab, Tabs, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGINROUTE, REGISTRATIONROUTE } from "../../core/Router/utils/routes";

enum TabPanelValues {
    LoginForm = 0,
    RegistrationForm = 1,
}

const AuthPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLoginForm: boolean = location.pathname === LOGINROUTE.path;
    const tab = isLoginForm ? TabPanelValues.LoginForm : TabPanelValues.RegistrationForm;

    function toggleTabs(e: React.SyntheticEvent<Element, Event>, newTab: TabPanelValues) {
        TabPanelValues.LoginForm === newTab && navigate(LOGINROUTE.path);
        TabPanelValues.RegistrationForm === newTab && navigate(REGISTRATIONROUTE.path);
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { sm: "calc(100svh - 64px)", xs: "calc(100svh - 56px)" },
            }}
        >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={tab} onChange={toggleTabs} aria-label="basic tabs example">
                    <Tab label="Login" {...a11yProps(TabPanelValues.LoginForm)} />
                    <Tab label="Registration" {...a11yProps(TabPanelValues.RegistrationForm)} />
                </Tabs>
            </Box>
            <TabPanel value={tab} index={TabPanelValues.LoginForm}>
                <form>
                    <FormGroup
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 auto",
                            gap: { md: 3, xs: 2 },
                            width: "85%",
                            maxWidth: "450px",
                            minHeight: "300px" /* Error */,
                        }}
                    >
                        <TextField type="email" label="Email" autoComplete="email" required />
                        <TextField
                            type="password"
                            label="Password"
                            autoComplete="current-password"
                            required
                        />
                        <Button sx={{ alignSelf: "end" }} type="submit">
                            Login
                        </Button>
                    </FormGroup>
                </form>
            </TabPanel>
            <TabPanel value={tab} index={TabPanelValues.RegistrationForm}>
                <form>
                    <FormGroup
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 auto",
                            gap: { md: 3, xs: 2 },
                            width: "85%",
                            maxWidth: "450px",
                            minHeight: "300px" /* Error */,
                        }}
                    >
                        <TextField label="Login" autoComplete="username" required />
                        <TextField type="email" label="Email" autoComplete="email" required />
                        <TextField type="password" label="Password" autoComplete="new-password" required />
                        <Button sx={{ alignSelf: "end" }} type="submit">
                            Registration
                        </Button>
                    </FormGroup>
                </form>
            </TabPanel>
        </Box>
    );
};

export default AuthPage;

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            sx={{ width: "100%" }}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
