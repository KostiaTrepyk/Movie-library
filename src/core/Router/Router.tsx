import { Routes, Route, BrowserRouter, ScrollRestoration } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./utils/routes";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import Layout from "../../components/layouts/Layout";
import { Suspense } from "react";
import Loader from "../../pages/Loader/Loader";
import { useAppSelector } from "../hooks/useAppSelector";

const Router = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {publicRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={
                                <Suspense fallback={<Loader />}>
                                    <route.element />
                                </Suspense>
                            }
                            key={route.id}
                        />
                    ))}

                    {isAuth &&
                        privateRoutes.map((route) => (
                            <Route
                                path={route.path}
                                element={
                                    <Suspense fallback={<Loader />}>
                                        <route.element />
                                    </Suspense>
                                }
                                key={route.id}
                            />
                        ))}

                    {/* 404 */}
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
