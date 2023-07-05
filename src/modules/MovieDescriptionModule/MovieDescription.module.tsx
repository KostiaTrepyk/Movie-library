import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { MovieApi1 } from "../../services/MovieApi1";
import Loader from "./components/Loader";
import { LocalstorageKeys } from "../../utils/localstorage_keys";
import { useLocalStorage } from "../../core/hooks/useLocalStorage";
import { detectMob } from "../../helpers/detectMobile";

/* Icons */
import ArrowBack from "@mui/icons-material/ArrowBackIosNew";

/* Framer motion animations */
const titleAnimation = {
    hidden: {
        scale: 0.95,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
    },
};
const imgAnimation = {
    hidden: {
        x: -30,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};
const tableAnimation = {
    hidden: {
        x: 30,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};
const plotAnimation = {
    hidden: {
        x: -30,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

/* Framer motion components */
const MBox = motion(Box);
const MTypography = motion(Typography);

interface MovieDescriptionModuleProps {
    movieId: string;
}

const MovieDescriptionModule: React.FC<MovieDescriptionModuleProps> = ({ movieId }) => {
    const [isMobile] = useLocalStorage(LocalstorageKeys.isMbile, detectMob());
    const { currentData, isError, isSuccess, isFetching } = MovieApi1.useGetByIdQuery(movieId, {});

    const navigate = useNavigate();

    const tableData = [
        { name: "Released:", value: currentData?.Released },
        { name: "Actors:", value: currentData?.Actors },
        { name: "Language", value: currentData?.Language },
        { name: "Genre", value: currentData?.Genre },
        { name: "Awards", value: currentData?.Awards },
        { name: "Rated", value: currentData?.Rated },
        {
            name: "Ratings",
            value: currentData?.Ratings.map(({ Source, Value }) => Source + ": " + Value).join(", "),
        },
        { name: "Director", value: currentData?.Director },
        { name: "Country", value: currentData?.Country },
        { name: "Total seasons", value: currentData?.totalSeasons },
        { name: "Writer", value: currentData?.Writer },
        { name: "Metascore", value: currentData?.Metascore },
    ];

    if (isFetching) {
        return <Loader />;
    }

    if (isError) {
        return (
            <Typography variant="h4" align="center">
                Network error! Try later.
            </Typography>
        );
    }

    if (isSuccess && currentData.Response === "False") {
        return (
            <Typography variant="h4" align="center">
                Movie date not found!
            </Typography>
        );
    }

    return (
        <>
            {currentData?.Response === "True" && (
                <Box>
                    {/* Title */}
                    <MBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={titleAnimation}
                        sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}
                    >
                        {!isMobile && (
                            <IconButton onClick={() => navigate(-1)} size={"large"}>
                                <ArrowBack />
                            </IconButton>
                        )}

                        <MTypography
                            variants={titleAnimation}
                            variant="h4"
                            sx={{
                                flexGrow: 1,
                                textAlign: "center",
                                fontSize: { md: "3rem", sm: "2rem", xs: "1.7rem" },
                                mb: 2,
                            }}
                        >
                            {currentData?.Title || "Title"} ({currentData?.Year || "year"})
                        </MTypography>
                    </MBox>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { md: "row", xs: "column" },
                            gap: 2,
                            mb: { sm: 2, xs: 0 },
                            flexGrow: 1,
                        }}
                    >
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imgAnimation}
                            style={{
                                width: "min(100%, 400px)",
                                height: "fit-content",
                                objectFit: "contain",
                                borderRadius: "8px",
                                margin: "0 auto",
                            }}
                            src={currentData?.Poster}
                            alt={currentData?.Title}
                            loading="lazy"
                        />

                        <MBox
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={tableAnimation}
                            sx={{ flexGrow: 1 }}
                        >
                            {/* About */}
                            <Typography
                                variant="h5"
                                sx={{ textAlign: { md: "start", xs: "center" }, ml: { md: 2, xs: 0 } }}
                            >
                                About Film
                            </Typography>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        {tableData.map((row, index) => (
                                            <Fragment key={index}>
                                                {row.value && row.value !== "N/A" && (
                                                    <TableRow
                                                        key={index}
                                                        sx={{
                                                            "&:last-child td, &:last-child th": { border: 0 },
                                                        }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell>{row.value}</TableCell>
                                                    </TableRow>
                                                )}
                                            </Fragment>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </MBox>
                    </Box>

                    {/* Plot */}
                    {currentData?.Plot && currentData.Plot !== "N/A" && (
                        <MBox
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={plotAnimation}
                        >
                            <Typography variant="body1">Storyline: {currentData.Plot}</Typography>
                        </MBox>
                    )}
                </Box>
            )}
        </>
    );
};

export default MovieDescriptionModule;
