import { PropsWithChildren, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, LinearProgress, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

interface LayoutContainerProps {
    loading?: boolean;
}

const DefaultPageContainer = ({ children, loading = false }: PropsWithChildren & LayoutContainerProps) => {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);

    return (
        <>
            {loading && <LinearProgress sx={{ position: "relative", top: "64px", left: "0px" }} />}
            <Paper
                elevation={1}
                sx={{
                    borderRadius: 0,
                    mt: `64px`,

                    bgcolor: grey[900],
                    backgroundImage:
                        "url(https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg)",

                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "50%",
                    backgroundPositionY: "55%",
                    backgroundAttachment: "fixed",
                    objectFit: "cover",
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
                        minHeight: `calc(100vh - 64px)`,
                        pt: { md: 4, xs: 2 },
                        paddingInline: { lg: 7, xs: "max(3%, 16px)" },
                        pb: { md: 5, xs: 3 },
                    }}
                >
                    {children}
                </Box>
            </Paper>
        </>
    );
};

export default DefaultPageContainer;
