import { ThemeProvider, createTheme } from "@mui/material";
import { PropsWithChildren } from "react";

const Theme = ({ children }: PropsWithChildren) => {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
