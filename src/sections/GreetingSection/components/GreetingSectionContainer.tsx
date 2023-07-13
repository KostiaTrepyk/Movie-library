import { PropsWithChildren } from "react";
import { Box, LinearProgress } from "@mui/material";
import { grey } from "@mui/material/colors";

import bgImg from "../../../assets/homepage_bg.webp";

interface GreetingSectionContainerProps {
    loading?: boolean;
}

const GreetingSectionContainer = ({
    children,
    loading = false,
}: PropsWithChildren & GreetingSectionContainerProps) => {
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
                    backgroundSize: { md: "cover", xs: "auto 100lvh" },
                    backgroundPositionX: "35%",
                    backgroundPositionY: "0%",
                    backgroundAttachment: "fixed",
                    backgroundBlendMode: "darken",
                    printColorAdjust: "exact",
                }}
            >
                {loading && <LinearProgress />}
                {children}
            </Box>
        </Box>
    );
};

export default GreetingSectionContainer;
