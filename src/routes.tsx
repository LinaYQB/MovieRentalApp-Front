import { RouteObject } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { SearchResultsPage } from "./pages/Search/SearchResultsPage";
import { MoviePage } from "./pages/Movie/MoviePage";
import { MoviesPage } from "./pages/Movies/MoviesPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SingupPage";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { RentalsPage } from "./pages/Rentals/RentalsPage";


export const routes: Array<RouteObject> = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/search",
        element: <SearchResultsPage />,
    },
    {
        path: "/movies",
        children: [
            {
                index: true,
                element: <MoviesPage />
            },
            {
                path: ":movie",
                element: <MoviePage />
            }
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/search",
        element: <SearchResultsPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/rentals",
        element: <RentalsPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];

