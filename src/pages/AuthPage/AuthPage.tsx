import { Box } from "@mui/material";

import AuthFormModule from "../../modules/AuthFormModule/AuthForm.module";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

const AuthPage: React.FC = () => {
    return (
        <DefaultPageContainer>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "calc(100svh - 128px)" /* ??? 128px (2 * navbarHeight) */,
                }}
            >
                <AuthFormModule />
            </Box>
        </DefaultPageContainer>
    );
};

export default AuthPage;
