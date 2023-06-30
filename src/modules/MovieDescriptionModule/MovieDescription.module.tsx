import { MovieApi1 } from "../../services/MovieApi1";
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Loader from "./components/Loader";

interface MovieDescriptionModuleProps {
    movieId: string;
}

const MovieDescriptionModule: React.FC<MovieDescriptionModuleProps> = ({ movieId }) => {
    const { data, isError, isSuccess, isFetching } = MovieApi1.useGetByIdQuery(movieId, {});

    const tableData = [
        { name: "Released:", value: data?.Released },
        { name: "Actors:", value: data?.Actors },
        { name: "Language", value: data?.Language },
        { name: "Genre", value: data?.Genre },
        { name: "Awards", value: data?.Awards },
        { name: "Rated", value: data?.Rated },
        { name: "Director", value: data?.Director },
        { name: "Country", value: data?.Country },
        { name: "Total seasons", value: data?.totalSeasons },
        { name: "Writer", value: data?.Writer },
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

    if (isSuccess && data.Response === "False") {
        return (
            <Typography variant="h4" align="center">
                Movie date not found!
            </Typography>
        );
    }

    return (
        <>
            {data?.Response === "True" && (
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
                        {data?.Title || "Title"} ({data?.Year || "year"})
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
                            src={data?.Poster}
                            alt={data?.Title}
                            loading="lazy"
                        />

                        <Box sx={{ flexGrow: 1 }}>
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
                        </Box>
                    </Box>

                    {/* Plot */}
                    {data?.Plot && data.Plot !== "N/A" && (
                        <Box>
                            <Typography variant="body1">Storyline: {data.Plot}</Typography>
                        </Box>
                    )}
                </Box>
            )}
        </>
    );
};

export default MovieDescriptionModule;
