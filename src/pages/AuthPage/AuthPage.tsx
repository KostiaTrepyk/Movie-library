import { Container } from "@mui/material";

import AuthFormModule from "../../modules/AuthFormModule/AuthForm.module";
import LayoutContainer from "../../components/layouts/Containers/LayoutContainer";

const AuthPage: React.FC = () => {
    return (
        <LayoutContainer>
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
        </LayoutContainer>
    );
};

export default AuthPage;
