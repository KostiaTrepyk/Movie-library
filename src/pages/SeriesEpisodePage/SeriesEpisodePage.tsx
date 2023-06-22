import { useParams } from "react-router-dom";
import { MovieApi } from "../../services/Movie";
import {
    Box,
    Container,
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import { Fragment, useLayoutEffect } from "react";

/* is not used */
const SeriesEpisodePage = () => {
    const params = useParams<{ episodeId: string }>();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const { currentData, isError } = MovieApi.useGetEpisodeQuery(params.episodeId || "");

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

    if (isError) {
        return <Typography align="center">Error</Typography>;
    }

    if (!currentData) {
        return <LinearProgress />;
    }

    return (
        <Container maxWidth="xl" sx={{ pt: 2, pb: 3 }}>
            {currentData?.Response === "True" && (
                <Box>
                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            fontSize: { md: "3rem", sm: "2rem", xs: "1.7rem" },
                            mb: 2,
                        }}
                    >
                        {currentData?.Title || "Title"} ({currentData?.Year || "year"})
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { md: "row", xs: "column" },
                            gap: 2,
                            mb: { sm: 2, xs: 0 },
                            flexGrow: 1,
                        }}
                    >
                        <img
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

                        <Box sx={{ flexGrow: 1 }}>
                            {/* About */}
                            <Typography
                                variant="h5"
                                sx={{ textAlign: { sm: "start", xs: "center" }, ml: { sm: 2, xs: 0 } }}
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
                        </Box>
                    </Box>

                    {/* Plot */}
                    {currentData?.Plot && currentData.Plot !== "N/A" && (
                        <Box>
                            <Typography variant="body1">Storyline: {currentData.Plot}</Typography>
                        </Box>
                    )}
                </Box>
            )}
        </Container>
    );
};

export default SeriesEpisodePage;
