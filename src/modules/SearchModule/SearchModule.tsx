import {
    Box,
    CircularProgress,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";

/* Icons */
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { objToQuery } from "./helpers/objToQuery";
import { SEARCHROUTE } from "../../core/Router/utils/routes";

type Props = {
    isLoading?: boolean;
};

const SearchModule = ({ isLoading }: Props) => {
    const [title, setTitle] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [type, setType] = useState<string>("");

    const navigate = useNavigate();

    function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (title.length === 0) return;

        const query = objToQuery({ title: title.trim(), year, type });
        navigate(SEARCHROUTE.path + "/" + query);
    }

    return (
        <Paper
            sx={{
                px: { sm: 6, xs: 3 },
                pt: { sm: 5, xs: 3 },
                pb: { sm: 6, xs: 4 },
                borderRadius: 2,
                width: "fit-content",
                mx: "auto",
                position: "relative",
            }}
            elevation={5}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "450px",
                    mx: "auto",
                    gap: { sm: 3, xs: 2 },
                }}
                component={"form"}
                onSubmit={formSubmitHandler}
            >
                <Typography
                    variant="body1"
                    sx={{ fontSize: { md: "2rem", sm: "1.75rem", xs: "1.5rem", textAlign: "center" } }}
                >
                    Let's find some Movies
                </Typography>

                <TextField
                    type="search"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(() => e.target.value)}
                    autoComplete="off"
                    disabled={isLoading}
                ></TextField>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { sm: 2, xs: 1 },
                        justifyContent: "center",
                    }}
                >
                    <TextField
                        label="Year"
                        type="number"
                        value={year}
                        onChange={(e) => setYear(() => e.target.value.toString())}
                        sx={{ flexGrow: 1 }}
                        autoComplete="off"
                        disabled={isLoading}
                    ></TextField>
                    <FormControl sx={{ flexGrow: 2, minWidth: "90px" }} disabled={isLoading}>
                        <InputLabel>Type</InputLabel>
                        <Select
                            label="Type"
                            sx={{ px: 1 }}
                            value={type}
                            onChange={(e) => setType(() => e.target.value)}
                        >
                            <MenuItem value={""}>Empty</MenuItem>
                            <MenuItem value={"movie"}>Movie</MenuItem>
                            <MenuItem value={"series"}>Series</MenuItem>
                            <MenuItem value={"episode"}>Episode</MenuItem>
                        </Select>
                    </FormControl>

                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <IconButton size="large" type="submit" disabled={isLoading}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Loader */}
            {isLoading && (
                <CircularProgress
                    size={24}
                    sx={{ position: "absolute", top: "50%", left: "50%", mt: "-12px", ml: "-12px" }}
                />
            )}
        </Paper>
    );
};

export default SearchModule;
