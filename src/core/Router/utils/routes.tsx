import { lazy } from "react";

/* Icons */
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";

/* Pages lazy import */
const HomePage = lazy(() => import("../../../pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("../../../pages/AuthPage/AuthPage"));
const DescriptionPage = lazy(() => import("../../../pages/DescriptionPage/DescriptionPage"));
const ProfilePage = lazy(() => import("../../../pages/ProfilePage/ProfilePage"));
const SearchPage = lazy(() => import("../../../pages/SearchPage/SearchPage"));
const SeriesEpisodePage = lazy(() => import("../../../pages/EpisodePage/EpisodePage"));

/* Pathes */
type PublicPathes =
    | "/"
    | "/login"
    | "/registration"
    | "/search"
    | "/description/:id"
    | "/description/:id/:episodeId";
type PrivatePathes = "/profile";

/* Routes */
type PublicRoute = {
    id: number;
    name: string;
    path: PublicPathes;
    element: React.LazyExoticComponent<() => JSX.Element>;
    icon: JSX.Element;
};
type PrivateRoute = {
    id: number;
    name: string;
    path: PrivatePathes;
    element: React.LazyExoticComponent<() => JSX.Element>;
    icon: JSX.Element;
};

export const HOMEROUTE: PublicRoute = {
    id: 1,
    name: "Home",
    path: "/",
    element: HomePage,
    icon: <HomeIcon />,
};
export const LOGINROUTE: PublicRoute = {
    id: 2,
    name: "Login",
    path: "/login",
    element: AuthPage,
    icon: <LoginIcon />,
};
export const REGISTRATIONROUTE: PublicRoute = {
    id: 3,
    name: "Registration",
    path: "/registration",
    element: AuthPage,
    icon: <ShieldIcon />,
};
export const DESCRIPTIONROUTE: PublicRoute = {
    id: 4,
    name: "Description",
    path: "/description/:id",
    element: DescriptionPage,
    icon: <DescriptionIcon />,
};
export const PROFILEROUTE: PrivateRoute = {
    id: 5,
    name: "Profile",
    path: "/profile",
    element: ProfilePage,
    icon: <PersonIcon />,
};
export const SEARCHROUTE: PublicRoute = {
    id: 6,
    name: "Search",
    path: "/search",
    element: SearchPage,
    icon: <SearchIcon />,
};
export const SERIESEPISODEROUTE: PublicRoute = {
    id: 7,
    name: "Episode",
    path: "/description/:id/:episodeId",
    element: SeriesEpisodePage,
    icon: <SearchIcon />,
};

export const publicRoutes: PublicRoute[] = [
    HOMEROUTE,
    LOGINROUTE,
    REGISTRATIONROUTE,
    DESCRIPTIONROUTE,
    SEARCHROUTE,
    SERIESEPISODEROUTE,
];
export const privateRoutes: PrivateRoute[] = [PROFILEROUTE];

/** export only */
export type Route = PublicRoute | PrivateRoute;
