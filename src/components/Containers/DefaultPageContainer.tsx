import { PropsWithChildren, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

import bgImage from "../../assets/defContainer_bg-min.webp";

const DefaultPageContainer = ({ children }: PropsWithChildren) => {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);

    return (
        <Paper
            elevation={1}
            sx={{
                borderRadius: 0,
                mt: "64px",

                bgcolor: grey[900],
                backgroundImage: `url(${bgImage})`,

                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "50%",
                backgroundPositionY: "55%",
                backgroundAttachment: "fixed",
            }}
        >
            <Box
                sx={{
                    boxSizing: "border-box",
                    background: {
                        md: "linear-gradient(90deg, rgba(30,30,30,1) 0%, rgba(39,39,39,1) 50%, rgba(30,30,30,1) 100%)",
                        xs: "#212121f5",
                    },
                    width: { md: "83%" },
                    marginInline: "auto",
                    minHeight: `calc(100svh - 64px)`,
                    pt: { md: 4, xs: 2 },
                    paddingInline: { lg: 7, xs: "max(3%, 16px)" },
                    pb: { md: 5, xs: 3 },
                }}
            >
                {children}
            </Box>
        </Paper>
    );
};

export default DefaultPageContainer;
