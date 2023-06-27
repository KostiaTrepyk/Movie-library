import { PropsWithChildren } from "react";
import { Box, LinearProgress } from "@mui/material";

interface LayoutContainerProps {
    loading?: boolean;
}

const LayoutContainer = ({ children, loading = false }: PropsWithChildren & LayoutContainerProps) => {
    return (
        <Box
            sx={{
                boxSizing: "border-box",
                minHeight: "100svh",
                paddingTop: "64px",

                bgcolor: "#0002",
                backgroundImage:
                    "url(https://daily.kellogg.edu/wp-content/uploads/2018/08/film-interpretation.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "35%",
                backgroundPositionY: "0%",
                backgroundAttachment: "fixed",
                backgroundBlendMode: "color-burn",
            }}
        >
            {loading && <LinearProgress />}
            {children}
        </Box>
    );
};

export default LayoutContainer;
