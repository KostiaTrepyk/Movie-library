import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;
