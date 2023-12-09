import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../homepage/homepage";
import { PieChartPage } from "../pieChart/pieChart";
const router = createBrowserRouter( [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/piechart',
        element: <PieChartPage/>
    },

] );

export default function Router()
{
    return <RouterProvider router={router} />;
}