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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCHROUTE } from "../../core/Router/utils/routes";
import { objToSearchParams } from "../../helpers/objToSearchParams";

/* Icons */
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchModuleProps {
    isLoading?: boolean;
    data?: { title?: string; year?: string; type?: string };
    disabled?: boolean;
}

const SearchModule: React.FC<SearchModuleProps> = ({
    isLoading,
    data,
    disabled,
}) => {
    const [title, setTitle] = useState<string>(data?.title || "");
    const [year, setYear] = useState<string>(data?.year || "");
    const [type, setType] = useState<string>(data?.type || "");

    const navigate = useNavigate();

    function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (title.length === 0) return;

        const query = objToSearchParams({
            title: title.trim().toLowerCase(),
            year,
            type,
        });
        navigate(SEARCHROUTE.path + "/" + query);
    }

    return (
        <Paper
            sx={{
                px: { sm: 6, xs: 3 },
                pt: { sm: 5, xs: 2 },
                pb: { sm: 6, xs: 3 },
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
                {/* Title */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: {
                            md: "2rem",
                            sm: "1.75rem",
                            xs: "1.5rem",
                            textAlign: "center",
                        },
                    }}
                >
                    Let's find some Movies
                </Typography>

                {/* Title input */}
                <TextField
                    label="Title"
                    InputProps={{
                        onChange: (e) => setTitle(() => e.target.value),
                        value: title,
                        autoComplete: "off",
                        disabled: isLoading || disabled,
                        inputMode: "search",
                        endAdornment: Boolean(title) && (
                            <IconButton
                                onClick={() => {
                                    setTitle(() => "");
                                }}
                            >
                                <ClearIcon />
                            </IconButton>
                        ),
                    }}
                    inputProps={{
                        pattern: ".{3,}",
                        title: "Three or more characters.",
                    }}
                ></TextField>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { sm: 3, xs: 2 },
                        justifyContent: "center",
                    }}
                >
                    {/* Year input */}
                    <TextField
                        label="Year"
                        type="text"
                        sx={{ width: 80, flexGrow: 1 }}
                        InputProps={{
                            inputMode: "numeric",
                            onChange: (e) => setYear(() => e.target.value),
                            value: year,
                            autoComplete: "off",
                            disabled: isLoading || disabled,
                        }}
                        inputProps={{
                            pattern: "[0-9]{4}",
                            title: "Check the year.",
                        }}
                    ></TextField>

                    {/* Type input */}
                    <FormControl
                        sx={{ flexGrow: 10, minWidth: 120 }}
                        disabled={isLoading || disabled}
                    >
                        <InputLabel>Type</InputLabel>
                        <Select
                            label="Type"
                            sx={{ px: 1 }}
                            value={type}
                            onChange={(e) => setType(() => e.target.value)}
                            MenuProps={{ disableScrollLock: true }}
                        >
                            <MenuItem value={""}>All</MenuItem>
                            <MenuItem value={"movie"}>Movie</MenuItem>
                            <MenuItem value={"series"}>Series</MenuItem>
                        </Select>
                    </FormControl>

                    {/* SubmitBtn */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <IconButton
                            size="large"
                            type="submit"
                            disabled={isLoading || disabled}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Loader */}
            {isLoading && (
                <CircularProgress
                    size={24}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        mt: "-12px",
                        ml: "-12px",
                    }}
                />
            )}
        </Paper>
    );
};

export default SearchModule;
