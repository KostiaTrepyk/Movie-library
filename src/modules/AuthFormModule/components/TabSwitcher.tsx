import { Box, Tabs, Tab, SxProps } from "@mui/material";
import { AuthFormTabPanelValues } from "../models/AuthFormTabPanel";

interface TabSwitcherProps {
    currentTab: AuthFormTabPanelValues;
    onTabChange?: (e: React.SyntheticEvent<Element, Event>, newTab: AuthFormTabPanelValues) => void;
    sx?: SxProps;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ currentTab, onTabChange, sx }) => {
    return (
        <Box
            sx={{
                borderBottom: 1,
                borderColor: "divider",
                width: "fit-content",
                marginInline: "auto",
                ...sx,
            }}
        >
            <Tabs value={currentTab} onChange={onTabChange}>
                <Tab label="Login" />
                <Tab label="Registration" />
            </Tabs>
        </Box>
    );
};

export default TabSwitcher;
