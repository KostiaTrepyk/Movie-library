import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton, Button, TextField, Fade } from "@mui/material";
import { SEARCHROUTE, HOMEROUTE, Route, GENRESROUTE } from "../../../../core/Router/utils/routes";
import { useToggle } from "../../../../core/hooks/useToggle";

import SideBar from "./components/SideBar";
import Avatar from "./components/Avatar";

/* Icons */
import LogoIcon from "@mui/icons-material/MovieFilter";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";

/** NavbarRoutes. Don't add private routes.*/
const navbarRoutes: Route[] = [SEARCHROUTE, GENRESROUTE];

const Navbar: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [isSearchInpOpened, setIsSearchInpOpened] = useState<boolean>(false);
    const [isDrawerOpened, toggleDrawer] = useToggle();

    const serachInpRef = useRef<HTMLInputElement>(null);
    const searchFromRef = useRef<HTMLFormElement>(null);

    const navigate = useNavigate();
    const location = useLocation();

    function navigateToHome() {
        navigate(HOMEROUTE.path);
    }

    function SearchBtnClickHanlder(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e?.stopPropagation();

        /* Submit */
        if (Boolean(query)) {
            /* Search */
            searchFromRef.current?.requestSubmit();
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

    function SearchSubmitHanlder(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const path = SEARCHROUTE.path + `/?title=${query.toLocaleLowerCase()}`;
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
                    <Box sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }}>
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
                            MLib
                        </Typography>
                    </Box>

                    {/* PC Links */}
                    <Box sx={{ display: { lg: "flex", xs: "none" }, gap: 0.5, ml: 2 }}>
                        {navbarRoutes.map((route) => (
                            <Button
                                key={route.id}
                                color="inherit"
                                sx={{
                                    color: "white",
                                    display: "block",
                                    bgcolor:
                                        location.pathname === route.path ||
                                        location.pathname === route.path + "/"
                                            ? "#fff1"
                                            : "inherit",
                                }}
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
                        {/* Search Form */}
                        <Box
                            sx={{ display: "flex", gap: "inherit", width: { sm: "auto", xs: "100%" } }}
                            component={"form"}
                            onSubmit={SearchSubmitHanlder}
                            ref={searchFromRef}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                {/* Search input */}
                                <Fade in={isSearchInpOpened}>
                                    <TextField
                                        sx={{
                                            display: isSearchInpOpened ? "inline" : "none",
                                        }}
                                        ref={serachInpRef}
                                        autoComplete="off"
                                        size="small"
                                        inputMode="search"
                                        value={query}
                                        onChange={(e) => setQuery(() => e.target.value)}
                                        fullWidth
                                        InputProps={{
                                            endAdornment: Boolean(query) && (
                                                <IconButton
                                                    size="small"
                                                    sx={{ m: 0, p: 0.1 }}
                                                    onClick={() => {
                                                        setQuery(() => "");
                                                    }}
                                                >
                                                    <ClearIcon />
                                                </IconButton>
                                            ),
                                        }}
                                        inputProps={{
                                            pattern: ".{3,}",
                                            title: "Three or more characters!",
                                        }}
                                    />
                                </Fade>
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

                {/* SideBar */}
                <SideBar
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
