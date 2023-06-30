import { Box, Skeleton } from "@mui/material";

const Loader = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={30} />
        </Box>
    );
};

export default Loader;
