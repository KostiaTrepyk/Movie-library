import { useLayoutEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { LocalstorageKeys } from "../../../../utils/localstorage_keys";
import { motion } from "framer-motion";
import { detectMob } from "../../../../helpers/detectMobile";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

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
    const [isMobile] = useLocalStorage(LocalstorageKeys.isMbile, detectMob());

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
        return () => {
            window.scrollTo({ top: scrollTop });
        };
    }, [scrollTop]);

    return (
        <MBox
            initial="hidden"
            whileInView="visible"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100svh",
                background: isMobile
                    ? "#212121"
                    : "radial-gradient(rgba(40,40,40,1) 0% ,rgba(30,30,30,1) 60%, rgba(25,25,25,1) 100%)",
            }}
        >
            <MLogoIcon
                variants={logoAnimation}
                sx={{ color: "#fffd", fontSize: isMobile ? "45px" : "85px", bgcolor: "fff1" }}
            />
            <MCircularProgress
                variants={logoProgressAnimation}
                size={isMobile ? "65px" : "120px"}
                sx={{ position: "absolute" }}
            />
        </MBox>
    );
};

export default Loader;

// import { useLayoutEffect } from "react";
// import { Box, CircularProgress } from "@mui/material";
// import { motion } from "framer-motion";

// /* Icons */
// import LogoIcon from "@mui/icons-material/MovieFilter";

// /* Framer motion animations */
// const logoAnimation = {
//     hidden: {
//         scale: 0,
//     },
//     visible: {
//         rotate: 360,
//         scale: 1,
//         transition: {
//             type: "spring",
//             stiffness: 260,
//             damping: 20,
//             delay: 0.2,
//         },
//     },
// };
// const logoProgressAnimation = {
//     hidden: {
//         opacity: 0,
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 1.5,
//             delay: 0.6,
//         },
//     },
// };

// /* Framer motion components */
// const MBox = motion(Box);
// const MLogoIcon = motion(LogoIcon);
// const MCircularProgress = motion(CircularProgress);

// const Loader: React.FC = () => {
//     const scrollTop = document.documentElement.scrollTop;

//     useLayoutEffect(() => {
//         window.scrollTo({ top: 0 });
//         return () => {
//             window.scrollTo({ top: scrollTop });
//         };
//     }, [scrollTop]);

//     return (
//         <MBox
//             initial="hidden"
//             whileInView="visible"
//             sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100svh",
//                 background: {
//                     md: "radial-gradient(rgba(40,40,40,1) 0% ,rgba(30,30,30,1) 60%, rgba(25,25,25,1) 100%)",
//                     xs: "#212121",
//                 },
//             }}
//         >
//             <MLogoIcon
//                 variants={logoAnimation}
//                 sx={{ color: "#fffd", fontSize: { md: "85px", xs: "45px" }, bgcolor: "fff1" }}
//             />
//             <MCircularProgress
//                 variants={logoProgressAnimation}
//                 sx={{ position: "absolute", fontSize: { md: "120px", xs: "65px" } }}
//             />
//         </MBox>
//     );
// };

// export default Loader;
