import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider as RouterRouter} from "react-router-dom";
import {App} from "../../app";
const AuthPageLazy = React.lazy(() => import('~pages/AuthPage'));

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route path="/auth" element={<AuthPageLazy />} />
            </Route>
        )
    );
    return (
        <RouterRouter router={router} />
    );
};

export const RouterProvider = React.memo(Router);