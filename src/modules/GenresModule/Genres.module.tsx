import React from "react";
import { Button, Box, Skeleton } from "@mui/material";
import { MovieApi2 } from "../../services/MovieApi2";

interface GenresModuleProps {
    activeGenre?: string;
    onChange?: (genre: string | undefined) => void;
}

/**  fix me */
const GenresModule: React.FC<GenresModuleProps> = ({ activeGenre, onChange }) => {
    const { data, isFetching } = MovieApi2.useGetAllGenresQuery(undefined);

    /* fix me */
    function genreClickHandler(e: any) {
        onChange && onChange(e.target.value);
    }

    if (isFetching) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
            </Box>
        );
    }

    return (
        <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "space-between" }}
            onClick={genreClickHandler}
        >
            <Button
                value={"all"}
                color={activeGenre === "all" ? "primary" : "inherit"}
                variant={activeGenre === "all" ? "contained" : "text"}
            >
                All
            </Button>

            {data?.results.map((genre) => (
                <React.Fragment key={genre}>
                    {genre && (
                        <Button
                            value={genre}
                            color={activeGenre === genre ? "primary" : "inherit"}
                            variant={activeGenre === genre ? "contained" : "text"}
                        >
                            {genre}
                        </Button>
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};

export default GenresModule;
