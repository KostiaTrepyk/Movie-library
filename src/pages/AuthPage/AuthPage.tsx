import {  Container } from "@mui/material";

import AuthFormModule from "../../modules/AuthFormModule/AuthForm.module";

const AuthPage: React.FC = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "calc(100svh - 64px)",
            }}
        >
            <AuthFormModule />
        </Container>
    );
};

export default AuthPage;
