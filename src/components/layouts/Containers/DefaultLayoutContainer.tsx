import { Box, LinearProgress, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PropsWithChildren } from "react";

interface LayoutContainerProps {
    loading?: boolean;
}

const DefaultLayoutContainer = ({ children, loading = false }: PropsWithChildren & LayoutContainerProps) => {
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
                        bgcolor: { md: grey[900], xs: "#212121f5" },
                        width: { md: "82%" },
                        marginInline: "auto",
                        minHeight: `calc(100vh - 64px)`,
                    }}
                >
                    {children}
                </Box>
            </Paper>
        </>
    );
};

export default DefaultLayoutContainer;
