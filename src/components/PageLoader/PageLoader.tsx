import { LinearProgress } from "@mui/material";

const PageLoader = () => {
    return <LinearProgress sx={{ position: "absolute", width: "100%", left: 0, boxSizing: "border-box" }} />;
};

export default PageLoader;
