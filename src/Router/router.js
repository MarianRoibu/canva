import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../homepage/homepage";
const router = createBrowserRouter( [
    {
        path: '/',
        element: <HomePage />
    },

] );

export default function Router()
{
    return <RouterProvider router={router} />;
}