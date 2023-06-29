import { Box, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../core/hooks/useAppSelector";
import { useAppDispatch } from "../../core/hooks/useAppDispatch";
import { AuthActions } from "../../redux/AuthSlice/AuthSlice";
import { HOMEROUTE } from "../../core/Router/utils/routes";

import DefaultPageContainer from "../../components/Containers/DefaultPageContainer";

/* Icons */
import LogoutIcon from "@mui/icons-material/Logout";

const ProfilePage: React.FC = () => {
    const userData = useAppSelector((state) => state.auth.userData);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function logoutBtnHandler() {
        dispatch(AuthActions.logout());
        navigate(HOMEROUTE.path);
    }

    return (
        <DefaultPageContainer>
            <Paper
                sx={{ boxSizing: "border-box", p: 3, marginInline: "auto", maxWidth: "600px", width: "90%" }}
                elevation={5}
            >
                <Typography variant="h4" align="center">
                    PROFILE
                </Typography>

                <Stack direction={"row"} spacing={5}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Typography variant="body1">ID:</Typography>
                        <Typography variant="body1">Username:</Typography>
                        <Typography variant="body1">Email:</Typography>
                        <Typography variant="body1">Passsword:</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Typography variant="body1">{userData?.id}</Typography>
                        <Typography variant="body1">{userData?.username}</Typography>
                        <Typography variant="body1">{userData?.email}</Typography>
                        <Typography variant="body1">******</Typography>
                    </Box>
                </Stack>

                <Divider sx={{ mt: 2, mb: 1 }} />

                <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
                    <IconButton onClick={logoutBtnHandler}>
                        <LogoutIcon />
                    </IconButton>
                </Box>
            </Paper>
        </DefaultPageContainer>
    );
};

export default ProfilePage;
