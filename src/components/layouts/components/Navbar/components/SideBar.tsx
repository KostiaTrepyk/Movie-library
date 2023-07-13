import { useLocation, useNavigate } from "react-router-dom";
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import { Route } from "../../../../../core/Router/utils/routes";

/* Icons */
import LogoIcon from "@mui/icons-material/MovieFilter";
import CloseIcon from "@mui/icons-material/Close";

interface SideBarProps {
    routes: Route[];
    open: boolean;
    onOpen: (e?: React.SyntheticEvent<{}, Event>) => void;
    onClose: (e?: React.SyntheticEvent<{}, Event>) => void;
}

const SideBar: React.FC<SideBarProps> = ({ routes, open, onOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();

    function LinkClickHandler(path: string) {
        navigate(path);
        onClose();
    }

    return (
        <SwipeableDrawer
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            disableSwipeToOpen={false}
            swipeAreaWidth={30}
            disableScrollLock
        >
            {/* DrawerHead */}
            <Box
                sx={{
                    p: "16px 8px 16px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <LogoIcon />
                    <Typography
                        variant="body1"
                        sx={{ fontFamily: "monospace", fontWeight: 700, letterSpacing: ".3rem" }}
                    >
                        MLib
                    </Typography>
                </Box>

                {/* CloseBtn */}
                <IconButton onClick={onClose} color="inherit">
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider />

            {/* Links */}
            <List sx={{ width: "min(100vw, 220px)" }}>
                {routes.map((route) => (
                    <ListItem key={route.id}>
                        <ListItemButton
                            sx={{
                                borderRadius: 1,
                                bgcolor:
                                    location.pathname === route.path || location.pathname === route.path + "/"
                                        ? "#fff1"
                                        : "inherit",
                            }}
                            onClick={() => LinkClickHandler(route.path)}
                        >
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            {route.name}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
    );
};

export default SideBar;
