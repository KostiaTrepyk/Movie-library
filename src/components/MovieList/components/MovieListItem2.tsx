import { forwardRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { BaseInfoResultEntity } from "../../../models/MovieApi2";
import { Link } from "react-router-dom";
import { DESCRIPTIONROUTE } from "../../../core/Router/utils/routes";
import { motion } from "framer-motion";

const itemAnnimation = {
    hidden: { y: 70, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: {
        scale: 0.95,
        transition: { type: "spring" },
    },
};

const MLink = motion(Link);
interface MovieItemProps {
    movieData: BaseInfoResultEntity;
}

const MovieListItem = forwardRef<any, MovieItemProps>(({ movieData }, ref) => {
    const [isImgError, setIsImgError] = useState<boolean>(false);

    return (
        <MLink
            to={DESCRIPTIONROUTE.path.replace(":id", movieData.id)}
            ref={ref}
            style={{
                boxSizing: "border-box",
                padding: "20px 24px",
                cursor: "pointer",
                width: "min(100%, 340px)",
                color: "inherit",
                textDecoration: "inherit",
            }}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={itemAnnimation}
            viewport={{ once: true }}
        >
            <img
                src={
                    (movieData.primaryImage &&
                        movieData.primaryImage?.url &&
                        movieData.primaryImage?.width <
                            1500) /* ??? 8000:11000 img ??? */ ||
                    !isImgError
                        ? movieData.primaryImage?.url
                        : "https://thumbs.dreamstime.com/b/ikona-paska-filmu-film-programu-word-wyizolowany-na-bia%C5%82ym-tle-proste-logo-wektorowe-230410953.jpg"
                }
                alt={movieData.primaryImage?.caption.plainText}
                style={{
                    backgroundColor: grey[800],
                    width: "100%",
                    borderRadius: "15px 15px 10px 10px",
                    aspectRatio: 9 / 14,
                    objectFit: "cover",
                    imageRendering: "crisp-edges",
                }}
                onError={() => {
                    setIsImgError(true);
                }}
                decoding="async"
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
        </MLink>
    );
});

export default MovieListItem;
