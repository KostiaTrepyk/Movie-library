import { useLayoutEffect } from "react";
import PageLoader from "../../../../components/PageLoader/PageLoader";

const Loader: React.FC = () => {
    const scrollTop = document.documentElement.scrollTop;

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            window.scrollTo({ top: scrollTop });
        };
    }, [scrollTop]);

    return <PageLoader />;
};

export default Loader;
