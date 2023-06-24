import { MovieApi } from "../../services/Movie";
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React, { Fragment } from "react";

interface MovieDescriptionModuleProps {
    movieId: string;
}

const MovieDescriptionModule: React.FC<MovieDescriptionModuleProps> = ({ movieId }) => {
    const { data, isError } = MovieApi.useGetMovieByIdQuery(movieId, {});

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
                    {data?.Plot && data.Plot !== "N/A" && (
                        <Box>
                            <Typography variant="body1">Storyline: {data.Plot}</Typography>
                        </Box>
                    )}
                </Box>
            )}
            {isError && <>Error</>}
        </>
    );
};

export default MovieDescriptionModule;
