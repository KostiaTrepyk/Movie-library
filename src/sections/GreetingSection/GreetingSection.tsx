import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography, TextField, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { SEARCHROUTE } from "../../core/Router/utils/routes";
import { objToSearchParams } from "../../helpers/objToSearchParams";

import GreetingSectionContainer from "./components/GreetingSectionContainer";

/* Icons */
import SearchIcon from "@mui/icons-material/Search";

/* Framer motion animations */
const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

/* Framer motion components */
const MBox = motion(Box);
const MTypography = motion(Typography);

const GreetingSection = () => {
    const [title, setTitle] = useState<string>("");

    const navigate = useNavigate();

    function SubmitHandler(e: FormEvent) {
        e.preventDefault();

        const query = objToSearchParams({ title });
        navigate(SEARCHROUTE.path + query);
    }

    return (
        <GreetingSectionContainer>
            <MBox
                initial="hidden"
                whileInView="visible"
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
                    <MTypography
                        variants={textAnimation}
                        custom={1}
                        variant="h1"
                        sx={{ fontSize: { lg: "5.5rem", md: "5rem", sm: "4rem", xs: "3rem" } }}
                    >
                        Movie Library
                    </MTypography>
                    <MTypography
                        variants={textAnimation}
                        custom={2}
                        variant="h4"
                        sx={{ fontSize: { lg: "2.1rem", md: "1.9rem", sm: "1.6rem", xs: "1.2rem" } }}
                    >
                        Find new moives and series
                    </MTypography>

                    {/* Form */}
                    <MBox
                        sx={{ display: "flex", alignItems: "center", gap: 2, mt: { sm: 2, xs: 1 } }}
                        component={"form"}
                        onSubmit={SubmitHandler}
                        variants={textAnimation}
                        custom={3}
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
                    </MBox>
                </Stack>
            </MBox>
        </GreetingSectionContainer>
    );
};

export default GreetingSection;
