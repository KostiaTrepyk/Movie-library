import { PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const Theme: React.FC<PropsWithChildren> = ({ children }) => {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
