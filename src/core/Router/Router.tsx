import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { privateRoutes, publicRoutes } from "./utils/routes";

import Layout from "../../components/layouts/Layout";
import Loader from "../../pages/Loader/Loader";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";

const Router: React.FC = () => {
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
