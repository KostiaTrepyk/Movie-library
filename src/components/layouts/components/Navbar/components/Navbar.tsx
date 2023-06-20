import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
import {
    HOMEROUTE,
    LOGINROUTE,
    MOVIEROUTE,
    PROFILEROUTE,
    REGISTRATIONROUTE,
    Route,
} from "../../../../../core/Router/utils/routes";
import { useToggle } from "../../../../../core/hooks/useToggle";
import Drawer from "./Drawer";
import Avatar from "./Avatar";

/* Icons */
import LogoIcon from "@mui/icons-material/MovieFilter";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { useTheme } from "@emotion/react";

/* NavbarRoutes. Max 5. Don't add private routes.*/
const navbarRoutes: Route[] = [HOMEROUTE, LOGINROUTE, REGISTRATIONROUTE, PROFILEROUTE];

const Navbar = () => {
    const [query, setQuery] = useState<string>("");
    const [isDrawerOpened, toggleDrawer] = useToggle();
    const [isSearchInpOpened, toggleSearchInp] = useToggle();

    const navigate = useNavigate();
    const theme = useTheme() as any;

    function navigateToHome() {
        navigate(HOMEROUTE.path);
    }

    function toggleSearchInpHandler() {
        const windowWidth = window.innerWidth;
        const mobileMaxWidth = theme?.breakpoints?.values?.sm;
        if (windowWidth >= mobileMaxWidth) {
        } else {
            toggleSearchInp();
        }
    }

    function SearchBtnClickHanlder() {
        if (Boolean(query)) {
            /* Search */
            SearchSubmitHanlder();
        } else {
            /* Open-Close */
            toggleSearchInpHandler();
        }
    }

    function SearchSubmitHanlder(e?: React.FormEvent<HTMLFormElement>) {
        e && e.preventDefault();
        const path = MOVIEROUTE.path.replace(":title", query);
        navigate(path);
        toggleSearchInpHandler();
        setQuery(() => "");
    }

    return (
        <AppBar position="fixed">
            <Box sx={{ padding: { md: "0 10vw", sm: "0 5vw", xs: "0 15px" } }}>
                <Toolbar sx={{ height: 64 /* Toolbar height */ }} disableGutters>
                    {/* Mobile MenuBtn */}
                    <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    {/* Logo PC or Tablet */}
                    <Box
                        sx={{
                            display: { sm: "flex", xs: "none" } /* !!! */,
                            alignItems: "center",
                            mr: 2,
                            flexGrow: { lg: 0, xs: 1 },
                        }}
                    >
                        <LogoIcon sx={{ mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            onClick={navigateToHome}
                            sx={{
                                display: "flex",
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                cursor: "pointer",
                            }}
                        >
                            YMovies
                        </Typography>
                    </Box>

                    {/* PC Links */}
                    <Box sx={{ flexGrow: 1, display: { lg: "flex", xs: "none" } }}>
                        {navbarRoutes.map((route) => (
                            <Button
                                key={route.id}
                                sx={{ color: "white", display: "block" }}
                                onClick={() => {
                                    navigate(route.path);
                                }}
                            >
                                {route.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Logo Mobile */}
                    <Box
                        sx={{
                            display: { sm: "none", xs: "flex" } /* !!! */,
                            alignItems: "center",
                            justifyContent: "center",
                            flexGrow: { lg: 0, xs: 1 },
                        }}
                    >
                        {!isSearchInpOpened && (
                            <>
                                <LogoIcon sx={{ mr: 1 }} />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    onClick={navigateToHome}
                                    sx={{
                                        display: "flex",
                                        fontFamily: "monospace",
                                        fontWeight: 700,
                                        letterSpacing: ".3rem",
                                        color: "inherit",
                                        cursor: "pointer",
                                    }}
                                >
                                    YMovies
                                </Typography>
                            </>
                        )}

                        {/* Serach input Mobile*/}
                        <Box
                            component={"form"}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                flexGrow: isSearchInpOpened ? 1 : 0,
                            }}
                            onSubmit={SearchSubmitHanlder}
                        >
                            <SearchInput
                                open={isSearchInpOpened}
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(() => e.target.value)}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: { sm: 2, xs: 1 }, justifyContent: "end" }}>
                        {/* Serach input PC*/}
                        <Box
                            component={"form"}
                            sx={{ display: { sm: "block", xs: "none" } }}
                            onSubmit={SearchSubmitHanlder}
                        >
                            <SearchInput
                                open={true}
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(() => e.target.value)}
                            />
                        </Box>

                        {/* SearchBtn */}
                        <IconButton onClick={SearchBtnClickHanlder}>
                            <SearchIcon />
                        </IconButton>

                        {/* Avatar */}
                        <Avatar />
                    </Box>
                </Toolbar>

                {/* Drawer */}
                <Drawer
                    routes={navbarRoutes}
                    open={isDrawerOpened}
                    onOpen={toggleDrawer}
                    onClose={toggleDrawer}
                />
            </Box>
        </AppBar>
    );
};

export default Navbar;
