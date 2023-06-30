import React from "react";
import { Button, Box } from "@mui/material";
import { MovieApi2 } from "../../services/MovieApi2";

import Loader from "./components/Loader";

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
        return <Loader />;
    }

    return (
        <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "space-between" }}
            onClick={genreClickHandler}
        >
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
