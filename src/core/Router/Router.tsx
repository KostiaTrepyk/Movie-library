import { Routes, Route, BrowserRouter } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./utils/routes";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import Layout from "../../components/layouts/Layout";
import { Suspense } from "react";
import Loader from "../../pages/Loader/Loader";

const Router = () => {
    const isAuth = false;

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
                            <Route path={route.path} element={<></>} key={route.id} />
                        ))}

                    {/* 404 */}
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
