import { useLayoutEffect } from "react";

import LayoutContainer from "../../../../components/Containers/DefaultPageContainer";

const Loader: React.FC = () => {
    const scrollTop = document.documentElement.scrollTop;

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            window.scrollTo({ top: scrollTop });
        };
    }, [scrollTop]);

    return <LayoutContainer loading />;
};

export default Loader;