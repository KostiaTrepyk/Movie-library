import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useAppDispatch } from "../../../core/hooks/useAppDispatch";
import { AuthActions } from "../../../redux/AuthSlice/AuthSlice";
import { HOMEROUTE } from "../../../core/Router/utils/routes";
import { AuthFormTabPanelValues } from "../models/AuthFormTabPanel";

import TabPanel from "../../../components/TabPanel/TabPanel";
import LoginForm, { LoginFormData } from "../../../components/Forms/LoginForm/LoginForm";
import RegistrationForm, { RegistrationFormData } from "../../../components/Forms/RegistrationForm/RegistrationForm";

interface TabPanelsProps {
    currentTab: AuthFormTabPanelValues;
}

const TabPanels: React.FC<TabPanelsProps> = ({ currentTab }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function loginFormSubmitHandler(e: React.FormEvent<HTMLFormElement>, data: LoginFormData) {
        e.preventDefault();

        dispatch(AuthActions.login(data));
        navigate(HOMEROUTE.path);
    }

    function registrationFormSubmitHandler(e: React.FormEvent<HTMLFormElement>, data: RegistrationFormData) {
        e.preventDefault();

        dispatch(AuthActions.registration(data));
        navigate(HOMEROUTE.path);
    }

    return (
        <Box
            sx={{
                marginInline: "auto",
            }}
        >
            <TabPanel value={currentTab} index={AuthFormTabPanelValues.LoginForm}>
                <LoginForm onSubmit={loginFormSubmitHandler} />
            </TabPanel>
            <TabPanel value={currentTab} index={AuthFormTabPanelValues.RegistrationForm}>
                <RegistrationForm onSubmit={registrationFormSubmitHandler} />
            </TabPanel>
        </Box>
    );
};

export default TabPanels;
