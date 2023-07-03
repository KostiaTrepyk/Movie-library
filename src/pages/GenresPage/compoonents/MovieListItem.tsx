import { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { BaseInfoResultEntity } from "../../../models/MovieApi2";

interface MovieItemProps {
    movieData: BaseInfoResultEntity;
    onClick: (moiveId: string) => void;
}

const MovieListItem: React.FC<MovieItemProps> = forwardRef(({ movieData, onClick }, ref) => {
    return (
        <Box
            key={movieData._id}
            sx={{
                boxSizing: "border-box",
                px: 3,
                py: 2,
                cursor: "pointer",
                width: "min(100%, 340px)",
            }}
            onClick={() => onClick(movieData.id)}
            ref={ref}
        >
            <img
                src={
                    movieData.primaryImage &&
                    movieData.primaryImage?.url &&
                    movieData.primaryImage?.width < 2000 /* ??? */
                        ? movieData.primaryImage?.url
                        : "https://thumbs.dreamstime.com/b/ikona-paska-filmu-film-programu-word-wyizolowany-na-bia%C5%82ym-tle-proste-logo-wektorowe-230410953.jpg"
                }
                alt={movieData.primaryImage?.caption.plainText}
                style={{
                    width: "100%",
                    borderRadius: "15px 15px 10px 10px",
                    aspectRatio: 9 / 14,
                    objectFit: "cover",
                }}
                loading="lazy"
            />

            <Box sx={{ display: "flex", textAlign: "center", pt: 1, gap: 2 }}>
                <Typography flexGrow={1}>
                    {movieData.titleText.text} {movieData.releaseYear?.year}
                </Typography>
                <Typography
                    bgcolor={grey[800]}
                    color={orange[600]}
                    variant="body2"
                    sx={{
                        py: 0.8,
                        px: 1,
                        height: "min-content",
                        borderRadius: 2,
                    }}
                >
                    {movieData.titleType.text.toUpperCase()}
                </Typography>
            </Box>
        </Box>
    );
});

export default MovieListItem;
