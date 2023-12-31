import { useLayoutEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { UserContext } from "../../../contexts/User/UserContext";

/* Icons */
import LogoIcon from "@mui/icons-material/MovieFilter";

/* Framer motion animations */
const logoAnimation = {
    hidden: {
        scale: 0,
    },
    visible: {
        rotate: 360,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
        },
    },
};
const logoProgressAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.6,
        },
    },
};

/* Framer motion components */
const MBox = motion(Box);
const MLogoIcon = motion(LogoIcon);
const MCircularProgress = motion(CircularProgress);

const Loader: React.FC = () => {
    const scrollTop = document.documentElement.scrollTop;

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            window.scrollTo({ top: scrollTop });
        };
    }, [scrollTop]);

    return (
        <UserContext.Consumer>
            {({ deviceType }) => (
                <MBox
                    initial="hidden"
                    whileInView="visible"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100svh",
                        background:
                            deviceType === "MOBILE"
                                ? "#212121"
                                : "radial-gradient(rgba(40,40,40,1) 0% ,rgba(30,30,30,1) 60%, rgba(25,25,25,1) 100%)",
                    }}
                >
                    <MLogoIcon
                        variants={logoAnimation}
                        sx={{
                            color: "#fffd",
                            fontSize: deviceType === "MOBILE" ? "45px" : "85px",
                            bgcolor: "fff1",
                        }}
                    />
                    <MCircularProgress
                        variants={logoProgressAnimation}
                        size={deviceType === "MOBILE" ? "65px" : "120px"}
                        sx={{ position: "absolute" }}
                    />
                </MBox>
            )}
        </UserContext.Consumer>
    );
};

export default Loader;
