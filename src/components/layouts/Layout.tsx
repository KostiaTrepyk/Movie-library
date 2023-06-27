import { Outlet } from "react-router-dom";
import { Box, Paper } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { grey } from "@mui/material/colors";

const Layout = () => {
    return (
        <>
            <Navbar />

            <Paper
                elevation={1}
                sx={{
                    boxSizing: "border-box",
                    borderRadius: 0,
                    mt: `64px`,

                    bgcolor: "#0006",
                    backgroundImage: {
                        md: "url(https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg)",
                        xs: "none",
                    },
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "50%",
                    backgroundPositionY: "55%",
                    backgroundAttachment: "fixed",
                    backgroundBlendMode: "color-burn",
                }}
            >
                <Box
                    sx={{
                        bgcolor: grey[900],
                        width: { md: "82%" },
                        marginInline: "auto",
                        minHeight: `calc(100vh - 64px)`,
                    }}
                >
                    <Outlet />
                </Box>
            </Paper>

            <Footer />
        </>
    );
};

export default Layout;
