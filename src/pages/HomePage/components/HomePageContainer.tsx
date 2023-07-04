import { PropsWithChildren } from "react";
import { Box, LinearProgress } from "@mui/material";
import { grey } from "@mui/material/colors";

import bgImg from "../../../assets/homepage_gackground.webp";

interface LayoutContainerProps {
    loading?: boolean;
}

const HomePageContainer = ({ children, loading = false }: PropsWithChildren & LayoutContainerProps) => {
    return (
        <Box sx={{ bgcolor: grey[900] }}>
            <Box
                sx={{
                    boxSizing: "border-box",
                    minHeight: "100svh",
                    paddingTop: "64px",

                    bgcolor: "#0002",
                    backgroundImage: `url(${bgImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "35%",
                    backgroundPositionY: "0%",
                    backgroundAttachment: "fixed",
                    backgroundBlendMode: "darken",
                    objectFit: "cover",
                    printColorAdjust: "exact",
                }}
            >
                {loading && <LinearProgress />}
                {children}
            </Box>
        </Box>
    );
};

export default HomePageContainer;
