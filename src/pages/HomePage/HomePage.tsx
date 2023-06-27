import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";

/* Icons */
import SearchIcon from "@mui/icons-material/Search";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { objToSearchParams } from "../../helpers/objToSearchParams";
import { SEARCHROUTE } from "../../core/Router/utils/routes";

const HomePage: React.FC = () => {
    const [title, setTitle] = useState<string>("");

    const navigate = useNavigate();

    function SubmitHandler(e: FormEvent) {
        e.preventDefault();

        const query = objToSearchParams({ title });

        navigate(SEARCHROUTE.path + query);
    }

    return (
        <Box
            sx={{
                boxSizing: "border-box",
                height: "100svh",
                paddingTop: "64px",

                bgcolor: "#0002",
                backgroundImage:
                    "url(https://daily.kellogg.edu/wp-content/uploads/2018/08/film-interpretation.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "35%",
                backgroundPositionY: "0%",
                backgroundAttachment: "fixed",
                backgroundBlendMode: "color-burn",
            }}
        >
            <Box
                sx={{
                    boxSizing: "border-box",
                    mt: "15svh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { sm: "73%", xs: "100%" },
                    px: 1,
                }}
            >
                <Stack
                    direction={"column"}
                    sx={{
                        color: "#ddd",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{ fontSize: { lg: "5.5rem", md: "5rem", sm: "4rem", xs: "3rem" } }}
                    >
                        Movie Library
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { lg: "2.1rem", md: "1.9rem", sm: "1.6rem", xs: "1.2rem" } }}
                    >
                        Find new moives and series
                    </Typography>

                    {/* Form */}
                    <Stack
                        sx={{ mt: { sm: 2, xs: 1 } }}
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                        component={"form"}
                        onSubmit={SubmitHandler}
                    >
                        <TextField
                            label="Title of the movie"
                            sx={{ width: "55%" }}
                            autoComplete="off"
                            value={title}
                            onChange={(e) => setTitle(() => e.target.value)}
                            inputProps={{
                                pattern: ".{3,}",
                            }}
                        ></TextField>
                        <IconButton size="large" type="submit">
                            <SearchIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default HomePage;
