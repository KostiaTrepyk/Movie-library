import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import { SEARCHROUTE } from "../../core/Router/utils/routes";
import { objToSearchParams } from "../../helpers/objToSearchParams";

import HomePageContainer from "./components/HomePageContainer";

/* Icons */
import SearchIcon from "@mui/icons-material/Search";

const HomePage: React.FC = () => {
    const [title, setTitle] = useState<string>("");

    const navigate = useNavigate();

    function SubmitHandler(e: FormEvent) {
        e.preventDefault();

        const query = objToSearchParams({ title });

        navigate(SEARCHROUTE.path + query);
    }

    return (
        <HomePageContainer>
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
        </HomePageContainer>
    );
};

export default HomePage;
