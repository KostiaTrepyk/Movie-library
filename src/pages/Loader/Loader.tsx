import { CircularProgress } from "@mui/material";

const Loader = () => {
    return (
        <>
            <CircularProgress
                size={40}
                sx={{ position: "absolute", top: "50%", left: "50%", mt: "-20px", ml: "-20px" }}
            ></CircularProgress>
        </>
    );
};

export default Loader;
