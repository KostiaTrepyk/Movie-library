import { LinearProgress } from "@mui/material";
import { useLayoutEffect } from "react";

const Loader: React.FC = () => {
    const scrollTop = document.documentElement.scrollTop;

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            window.scrollTo({ top: scrollTop });
        };
    }, [scrollTop]);

    return <LinearProgress />;
};

export default Loader;
