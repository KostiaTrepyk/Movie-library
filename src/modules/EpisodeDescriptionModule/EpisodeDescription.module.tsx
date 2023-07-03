import { Fragment } from "react";
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
import { LocalstorageKeys } from "../../utils/localstorage_keys";
import { MovieApi1 } from "../../services/MovieApi1";

import Loader from "./components/Loader";

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

const isMobile = JSON.parse(localStorage.getItem(LocalstorageKeys.isMbile) || "");

interface EpisodeDescriptionModuleProps {
    episodeId: string;
}

const EpisodeDescriptionModule: React.FC<EpisodeDescriptionModuleProps> = ({ episodeId }) => {
    const { currentData, isLoading } = MovieApi1.useGetEpisodeQuery(episodeId);

    const navigate = useNavigate();

    const tableData = [
        { name: "Released:", value: currentData?.Released },
        { name: "Country", value: currentData?.Country },
        { name: "Language", value: currentData?.Language },
        { name: "Genre", value: currentData?.Genre },
        { name: "Director", value: currentData?.Director },
        { name: "Writer", value: currentData?.Writer },
        { name: "Actors:", value: currentData?.Actors },
        { name: "Rated", value: currentData?.Rated },
        { name: "Awards", value: currentData?.Awards },
    ];

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Box>
            {/* Title */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                {!isMobile && (
                    <IconButton onClick={() => navigate(-1)} size={"large"}>
                        <ArrowBack />
                    </IconButton>
                )}

                <MTypography
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    overflowX: "hidden" /* !!! */,
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
    );
};

export default EpisodeDescriptionModule;
