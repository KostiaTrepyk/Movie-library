import { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import { orange, grey } from "@mui/material/colors";
import { ShortMovieData } from "../../../models/MovieApi1";

interface MovieItemProps {
    movieData: ShortMovieData;
    onClick: (moiveId: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = forwardRef(({ movieData, onClick }, ref) => {
    return (
        <Box
            ref={ref}
            sx={{
                boxSizing: "border-box",
                px: 3,
                py: 2,
                cursor: "pointer",
                width: "min(100%, 340px)",
            }}
            onClick={() => onClick(movieData.imdbID)}
        >
            <img
                src={
                    movieData.Poster !== "N/A"
                        ? movieData.Poster
                        : "https://thumbs.dreamstime.com/b/ikona-paska-filmu-film-programu-word-wyizolowany-na-bia%C5%82ym-tle-proste-logo-wektorowe-230410953.jpg"
                }
                alt={movieData.Title}
                style={{
                    backgroundColor: grey[800],
                    width: "100%",
                    borderRadius: "15px 15px 10px 10px",
                    aspectRatio: 9 / 14,
                    objectFit: "cover",
                    backgroundRepeat: "no-repeat",
                    imageRendering: "crisp-edges",
                }}
                decoding="async"
                loading="lazy"
            />

            <Box sx={{ display: "flex", textAlign: "center", pt: 1, gap: 2 }}>
                <Typography flexGrow={1}>
                    {movieData.Title} {movieData.Year}
                </Typography>
                <Typography
                    bgcolor={grey[800]}
                    color={orange[600]}
                    variant="body2"
                    sx={{ py: 0.8, px: 1, height: "min-content", borderRadius: 2 }}
                >
                    {movieData.Type.toUpperCase()}
                </Typography>
            </Box>
        </Box>
    );
});

export default MovieItem;
