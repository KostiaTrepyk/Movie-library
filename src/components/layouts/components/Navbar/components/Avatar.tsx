import { useNavigate } from "react-router-dom";
import { LOGINROUTE, PROFILEROUTE, REGISTRATIONROUTE } from "../../../../../core/Router/utils/routes";
import { useAppSelector } from "../../../../../core/hooks/useAppSelector";
import { useAppDispatch } from "../../../../../core/hooks/useAppDispatch";
import { AuthActions } from "../../../../../redux/AuthSlice/AuthSlice";
import { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography, Avatar as AvatarMUI } from "@mui/material";

/* Icons */
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ShieldIcon from "@mui/icons-material/Shield";

/* Settings */
type Setting = {
    id: number;
    show: boolean;
    text: string;
    onClick: () => void;
    icon: JSX.Element;
};

const Avatar = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const userData = useAppSelector((state) => state.auth.userData);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const settings: Setting[] = [
        {
            id: 0,
            show: isAuth,
            text: "Profile",
            onClick: onProfileSettingClick,
            icon: <PersonIcon />,
        },
        {
            id: 1,
            show: isAuth,
            text: "Log out",
            onClick: onLogoutSettingClick,
            icon: <LogoutIcon />,
        },
        {
            id: 2,
            show: !isAuth,
            text: "Login",
            onClick: onLoginSettingClick,
            icon: <LoginIcon />,
        },
        {
            id: 3,
            show: !isAuth,
            text: "Registration",
            onClick: onRegistrationSettingClick,
            icon: <ShieldIcon />,
        },
    ];

    function onProfileSettingClick() {
        handleCloseUserMenu();
        navigate(PROFILEROUTE.path);
    }
    function onLogoutSettingClick() {
        dispatch(AuthActions.logout);
        handleCloseUserMenu();
        navigate(LOGINROUTE.path);
    }
    function onLoginSettingClick() {
        handleCloseUserMenu();
        navigate(LOGINROUTE.path);
    }
    function onRegistrationSettingClick() {
        handleCloseUserMenu();
        navigate(REGISTRATIONROUTE.path);
    }

    return (
        <Box>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AvatarMUI
                    src="/static/images/avatar/2.jpg"
                    alt={userData?.username.charAt(0).toUpperCase()}
                />
                {/* add img */}
            </IconButton>

            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => {
                    return (
                        setting.show && (
                            <MenuItem key={setting.id} onClick={setting.onClick} sx={{ gap: 1 }}>
                                {setting.icon}
                                <Typography textAlign="center">{setting.text}</Typography>
                            </MenuItem>
                        )
                    );
                })}
            </Menu>
        </Box>
    );
};

export default Avatar;
