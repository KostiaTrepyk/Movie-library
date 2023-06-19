import { lazy } from "react";

/* Icons */
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonIcon from "@mui/icons-material/Person";

/* Pages lazy import */
const HomePage = lazy(() => import("../../../pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("../../../pages/AuthPage/AuthPage"));
const MoviePage = lazy(() => import("../../../pages/MoviePage/MoviePage"));
const ProfilePage = lazy(() => import("../../../pages/ProfilePage/ProfilePage"));

/* Pathes */
type PublicPathes = "/" | "/login" | "/registration" | "/movie/:title" | "/movie/id/:id";
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
export const MOVIEROUTE: PublicRoute = {
    id: 4,
    name: "Movie",
    path: "/movie/:title",
    element: MoviePage,
    icon: <>Icon</>,
};
export const PROFILEROUTE: PrivateRoute = {
    id: 5,
    name: "Profile",
    path: "/profile",
    element: ProfilePage,
    icon: <PersonIcon />,
};

export const publicRoutes: PublicRoute[] = [HOMEROUTE, LOGINROUTE, REGISTRATIONROUTE, MOVIEROUTE];
export const privateRoutes: PrivateRoute[] = [PROFILEROUTE];

/** export only */
export type Route = PublicRoute | PrivateRoute;
