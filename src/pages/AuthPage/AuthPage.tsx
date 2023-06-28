import { Container } from "@mui/material";

import AuthFormModule from "../../modules/AuthFormModule/AuthForm.module";
import DefaultLayoutContainer from "../../components/layouts/Containers/DefaultLayoutContainer";

const AuthPage: React.FC = () => {
    return (
        <DefaultLayoutContainer>
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
        </DefaultLayoutContainer>
    );
};

export default AuthPage;
