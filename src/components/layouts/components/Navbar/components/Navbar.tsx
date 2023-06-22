import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
import {
    HOMEROUTE,
    LOGINROUTE,
    PROFILEROUTE,
    REGISTRATIONROUTE,
    Route,
    SEARCHROUTE,
} from "../../../../../core/Router/utils/routes";
import { useToggle } from "../../../../../core/hooks/useToggle";

import Drawer from "./Drawer";
import Avatar from "./Avatar";
import SearchInput from "./SearchInput";

/* Icons */
import LogoIcon from "@mui/icons-material/MovieFilter";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

/* NavbarRoutes. Max 5. Don't add private routes.*/
const navbarRoutes: Route[] = [SEARCHROUTE, LOGINROUTE, REGISTRATIONROUTE, PROFILEROUTE];

const Navbar = () => {
    const [query, setQuery] = useState<string>("");
    const [isSearchInpOpened, setIsSearchInpOpened] = useState<boolean>(false);
    const [isDrawerOpened, toggleDrawer] = useToggle();

    const serachInpRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    function navigateToHome() {
        navigate(HOMEROUTE.path);
    }

    function SearchBtnClickHanlder(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e?.stopPropagation();

        /* Submit */
        if (Boolean(query)) {
            /* Search */
            SearchSubmitHanlder();
            return;
        }

        /* Open */
        if (!isSearchInpOpened) {
            setIsSearchInpOpened(() => true);
            serachInpRef.current?.focus();
            return;
        }

        /* Close */
        setIsSearchInpOpened(() => false);
    }

    function SearchSubmitHanlder(e?: React.FormEvent<HTMLFormElement>) {
        e && e.preventDefault();
        const path = SEARCHROUTE.path + `/?title=${query}`;
        navigate(path);

        /* Close input */
        setIsSearchInpOpened(false);
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

                    {/* Logo */}
                    <Box
                        sx={{
                            display: { sm: "flex", xs: isSearchInpOpened ? "none" : "flex" },
                            alignItems: "center",
                            justifyContent: "start",
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
                    <Box sx={{ display: { lg: "flex", xs: "none" }, ml: 2 }}>
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

                    {/* Controlls */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: { sm: 2, xs: 1 },
                            justifyContent: "end",
                            flexGrow: 1,
                        }}
                    >
                        {/* Serach input PC*/}
                        <Box
                            sx={{ display: "flex", gap: "inherit", width: { sm: "auto", xs: "100%" } }}
                            component={"form"}
                            onSubmit={SearchSubmitHanlder}
                        >
                            <Box
                                sx={{
                                    display: isSearchInpOpened ? "flex" : "hidden",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <SearchInput
                                    open={isSearchInpOpened}
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(() => e.target.value)}
                                    ref={serachInpRef}
                                />
                            </Box>

                            {/* SearchBtn */}
                            <IconButton onClick={SearchBtnClickHanlder}>
                                {Boolean(query) || !isSearchInpOpened ? <SearchIcon /> : <CloseIcon />}
                            </IconButton>
                        </Box>

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
