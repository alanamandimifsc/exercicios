import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/home/index.jsx';
import { LoginPage } from '../pages/login/index.jsx';
import { PrivateRoute } from "../template/PrivateRoute/index.jsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <LoginPage />
            },

            {
                path: '/home',
                element: <PrivateRoute element={<HomePage />} />
            },

        ],
    },
]);