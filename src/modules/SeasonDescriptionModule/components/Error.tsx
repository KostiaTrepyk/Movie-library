import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

const Error = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 2 }}>
            <FormControl fullWidth disabled sx={{ width: "70%", maxWidth: "490px" }}>
                <InputLabel>Season</InputLabel>
                <Select value={1} label="Season">
                    <MenuItem value={1}>1</MenuItem>
                </Select>
            </FormControl>
            <Typography>Ops. Error !!!</Typography>
        </Box>
    );
};

export default Error;
