import { lazy } from "react";

/* Icons */
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import TheatersIcon from "@mui/icons-material/Theaters";

/* Pages */
import SearchPage from "../../../pages/SearchPage/SearchPage";

/* Pages lazy import */
const HomePage = lazy(() => import("../../../pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("../../../pages/AuthPage/AuthPage"));
const DescriptionPage = lazy(() => import("../../../pages/DescriptionPage/DescriptionPage"));
const ProfilePage = lazy(() => import("../../../pages/ProfilePage/ProfilePage"));
const SeriesEpisodePage = lazy(() => import("../../../pages/EpisodePage/EpisodePage"));
const GenresPage = lazy(() => import("../../../pages/GenresPage/GenresPage"));

/* Pathes */
type PublicPathes =
    | "/"
    | "/login"
    | "/registration"
    | "/search"
    | "/description/:id"
    | "/description/:id/:episodeId"
    | "/genres";
type PrivatePathes = "/profile";

/* Routes */
type PublicRoute =
    | {
          id: number;
          name: string;
          path: PublicPathes;
          isLazy: true;
          element: React.LazyExoticComponent<React.FC>;
          icon: JSX.Element;
      }
    | {
          id: number;
          name: string;
          path: PublicPathes;
          isLazy: false;
          element: JSX.Element;
          icon: JSX.Element;
      };

type PrivateRoute =
    | {
          id: number;
          name: string;
          path: PrivatePathes;
          isLazy: true;
          element: React.LazyExoticComponent<React.FC>;
          icon: JSX.Element;
      }
    | {
          id: number;
          name: string;
          path: PrivatePathes;
          isLazy: false;
          element: JSX.Element;
          icon: JSX.Element;
      };

export const HOMEROUTE: PublicRoute = {
    id: 1,
    name: "Home",
    path: "/",
    isLazy: true,
    element: HomePage,
    icon: <HomeIcon />,
};
export const LOGINROUTE: PublicRoute = {
    id: 2,
    name: "Login",
    path: "/login",
    isLazy: true,
    element: AuthPage,
    icon: <LoginIcon />,
};
export const REGISTRATIONROUTE: PublicRoute = {
    id: 3,
    name: "Registration",
    path: "/registration",
    isLazy: true,
    element: AuthPage,
    icon: <ShieldIcon />,
};
export const DESCRIPTIONROUTE: PublicRoute = {
    id: 4,
    name: "Description",
    path: "/description/:id",
    isLazy: true,
    element: DescriptionPage,
    icon: <DescriptionIcon />,
};
export const PROFILEROUTE: PrivateRoute = {
    id: 5,
    name: "Profile",
    path: "/profile",
    isLazy: true,
    element: ProfilePage,
    icon: <PersonIcon />,
};
export const SEARCHROUTE: PublicRoute = {
    id: 6,
    name: "Search",
    path: "/search",
    isLazy: false,
    element: <SearchPage />,
    icon: <SearchIcon />,
};
export const SERIESEPISODEROUTE: PublicRoute = {
    id: 7,
    name: "Episode",
    path: "/description/:id/:episodeId",
    isLazy: true,
    element: SeriesEpisodePage,
    icon: <SearchIcon />,
};
export const GENRESROUTE: PublicRoute = {
    id: 8,
    name: "Genres",
    path: "/genres",
    isLazy: true,
    element: GenresPage,
    icon: <TheatersIcon />,
};

export const publicRoutes: PublicRoute[] = [
    HOMEROUTE,
    LOGINROUTE,
    REGISTRATIONROUTE,
    DESCRIPTIONROUTE,
    SEARCHROUTE,
    SERIESEPISODEROUTE,
    GENRESROUTE,
];
export const privateRoutes: PrivateRoute[] = [PROFILEROUTE];

/** export only */
export type Route = PublicRoute | PrivateRoute;
