import { PropsWithChildren, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

import bgImage from "../../assets/defContainer_bg-min.webp";

const DefaultPageContainer = ({ children }: PropsWithChildren) => {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);

    return (
        <Box
            sx={{
                borderRadius: 0,
                mt: "64px",

                bgcolor: grey[900],
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: { md: "cover", xs: "auto 100lvh" },
                backgroundPositionX: "50%",
                backgroundPositionY: "0%",
                backgroundAttachment: "fixed",
                color: "white",
            }}
        >
            <Box
                sx={{
                    boxSizing: "border-box",
                    minHeight: `calc(100svh - 64px)`,
                    width: { md: "83%" },
                    pt: { md: 4, xs: 2 },
                    paddingInline: { lg: 7, xs: "max(3%, 16px)" },
                    pb: { md: 5, xs: 3 },
                    marginInline: "auto",
                    background: {
                        md: "linear-gradient(90deg, rgba(30,30,30,1) 0%, rgba(39,39,39,1) 50%, rgba(30,30,30,1) 100%)",
                        xs: "#212121f5",
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default DefaultPageContainer;
