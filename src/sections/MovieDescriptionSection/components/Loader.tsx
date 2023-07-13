import { Box, Divider, Skeleton, Stack } from "@mui/material";

const Loader = () => {
    return (
        <Box sx={{ px: { md: 3, xs: 1 } }}>
            {/* Title */}
            <Skeleton variant="text" sx={{ mx: "auto", width: "min(95%, 300px)", height: 50, mb: 1 }} />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    gap: 3,
                    width: "100%",
                }}
            >
                {/* img */}
                <Box>
                    <Skeleton
                        variant="rounded"
                        sx={{
                            height: { md: "60vh", xs: "500px" },
                            width: { md: "min(35vw, 400px)", xs: "min(100%, 400px)" },
                            mx: "auto",
                        }}
                    />
                </Box>

                {/* table */}
                <Stack direction={"column"} spacing={1} flexGrow={1} divider={<Divider />}>
                    <Skeleton
                        variant="text"
                        sx={{
                            height: 35,
                            width: { md: "65%", xs: "80%" },
                            alignSelf: { md: "start", xs: "center" },
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            height: 35,
                            width: { md: "50%", xs: "85%" },
                            alignSelf: { md: "start", xs: "center" },
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            height: 35,
                            width: { md: "60%", xs: "90%" },
                            alignSelf: { md: "start", xs: "center" },
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            height: 35,
                            width: { md: "55%", xs: "70%" },
                            alignSelf: { md: "start", xs: "center" },
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            height: 35,
                            width: { md: "65%", xs: "80%" },
                            alignSelf: { md: "start", xs: "center" },
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            height: 35,
                            width: { md: "50%", xs: "90%" },
                            alignSelf: { md: "start", xs: "center" },
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            height: 35,
                            width: { md: "60%", xs: "60%" },
                            alignSelf: { md: "start", xs: "center" },
                        }}
                    />
                </Stack>
            </Box>

            {/* Storyline */}
            <Box mt={2}>
                <Skeleton variant="text" height={25} />
                <Skeleton variant="text" height={25} />
                <Skeleton variant="text" height={25} width={"60%"} />
            </Box>
        </Box>
    );
};

export default Loader;
