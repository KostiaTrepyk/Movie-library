import { useLayoutEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { LocalstorageKeys } from "../../../../utils/localstorage_keys";

/* Icons */
import LogoIcon from "@mui/icons-material/MovieFilter";

const isMobile = JSON.parse(localStorage.getItem(LocalstorageKeys.isMbile) || "");

const Loader: React.FC = () => {
    const scrollTop = document.documentElement.scrollTop;

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            window.scrollTo({ top: scrollTop });
        };
    }, [scrollTop]);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100svh",
                background: isMobile
                    ? "#212121"
                    : "radial-gradient(rgba(40,40,40,1) 0% ,rgba(30,30,30,1) 60%, rgba(25,25,25,1) 100%)",
            }}
        >
            <LogoIcon sx={{ color: "#fffd", fontSize: isMobile ? "50px" : "90px", bgcolor: "fff1" }} />
            <CircularProgress size={isMobile ? "65px" : "120px"} sx={{ position: "absolute" }} />
        </Box>
    );
};

export default Loader;
