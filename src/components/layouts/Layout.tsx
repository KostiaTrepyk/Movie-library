import { Outlet } from "react-router-dom";
import { Paper } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Paper
                elevation={1}
                sx={{
                    boxSizing: "border-box",
                    borderRadius: 0,
                    minHeight: `calc(100vh - 64px)`,
                    mt: `64px`,
                }}
            >
                <Outlet />
            </Paper>
            <Paper
                elevation={0}
                sx={{
                    borderRadius: 0,
                }}
            >
                <Footer />
            </Paper>
        </>
    );
};

export default Layout;
