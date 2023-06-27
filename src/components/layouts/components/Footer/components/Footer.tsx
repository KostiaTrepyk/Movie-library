import { Box, Divider, Paper, Typography } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 0,
            }}
        >
            <Divider />

            <Box sx={{ padding: 3 }}>
                <Typography>Footer</Typography>
            </Box>
        </Paper>
    );
};

export default Footer;
