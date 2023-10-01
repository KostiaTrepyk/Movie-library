import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

const MovieList: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { lg: 2, xs: 1 },
            }}
        >
            {children}
        </Box>
    );
};

export default MovieList;
