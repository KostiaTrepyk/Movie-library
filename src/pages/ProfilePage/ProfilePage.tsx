import { Stack, TableBody, TableCell, TableContainer, TableHead, Typography } from "@mui/material";
import { useAppSelector } from "../../core/hooks/useAppSelector";
import LayoutContainer from "../../components/layouts/Containers/LayoutContainer";

const ProfilePage: React.FC = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const userData = useAppSelector((state) => state.auth.userData);

    return (
        <LayoutContainer>
            <Stack sx={{ p: 3 }}>
                <Typography variant="h3" align="center">
                    PROFILE
                </Typography>
                <TableContainer>
                    <TableHead>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">USERNAME</TableCell>
                        <TableCell align="center">EMAIL</TableCell>
                        <TableCell align="center">PASSWORD</TableCell>
                    </TableHead>

                    <TableBody>
                        <TableCell align="center">{userData?.id}</TableCell>
                        <TableCell align="center">{userData?.username}</TableCell>
                        <TableCell align="center">{userData?.email}</TableCell>
                        <TableCell align="center" sx={{ cursor: "pointer" }}>
                            *********
                        </TableCell>
                    </TableBody>
                </TableContainer>
                <Typography variant="body1">ID: {userData?.id}</Typography>
                <Typography variant="body1">Username: {userData?.username}</Typography>
                <Typography variant="body1">Email: {userData?.email}</Typography>
                <Typography variant="body1">Passsword: ******</Typography>
            </Stack>
        </LayoutContainer>
    );
};

export default ProfilePage;
