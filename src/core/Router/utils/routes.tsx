import AuthPage from "../../../pages/AuthPage/AuthPage";
import HomePage from "../../../pages/HomePage/HomePage";
import MoviePage from "../../../pages/MoviePage/MoviePage";

/* Icons */
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonIcon from "@mui/icons-material/Person";

type PublicPathes = "/" | "/login" | "/registration" | "/movie/:title" | "/movie/id/:id";
type PrivatePathes = "/profile";

type PublicRoute = {
    id: number;
    name: string;
    path: PublicPathes;
    element: JSX.Element;
    icon: JSX.Element;
};
type PrivateRoute = {
    id: number;
    name: string;
    path: PrivatePathes;
    element: JSX.Element;
    icon: JSX.Element;
};

export const HOMEROUTE: PublicRoute = {
    id: 1,
    name: "Home",
    path: "/",
    element: <HomePage />,
    icon: <HomeIcon />,
};
export const LOGINROUTE: PublicRoute = {
    id: 2,
    name: "Login",
    path: "/login",
    element: <AuthPage />,
    icon: <LoginIcon />,
};
export const REGISTRATIONROUTE: PublicRoute = {
    id: 3,
    name: "Registration",
    path: "/registration",
    element: <AuthPage />,
    icon: <ShieldIcon />,
};
export const MOVIEROUTE: PublicRoute = {
    id: 4,
    name: "Movie",
    path: "/movie/:title",
    element: <MoviePage />,
    icon: <>Icon</>,
};
export const PROFILEROUTE: PrivateRoute = {
    id: 5,
    name: "Profile",
    path: "/profile",
    element: <>ProfilePage</>,
    icon: <PersonIcon />,
};

export const publicRoutes: PublicRoute[] = [HOMEROUTE, LOGINROUTE, REGISTRATIONROUTE, MOVIEROUTE];
export const privateRoutes: PrivateRoute[] = [PROFILEROUTE];

/** export only */
export type Route = PublicRoute | PrivateRoute;
