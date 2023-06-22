import { LinearProgress } from "@mui/material";
import { useLayoutEffect } from "react";

const Loader = () => {
    const scrollTop = document.documentElement.scrollTop;

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            window.scrollTo({ top: scrollTop });
        };
    }, []);

    return <LinearProgress />;
};

export default Loader;
