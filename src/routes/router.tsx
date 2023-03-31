import { createBrowserRouter, RouterProviderProps } from "react-router-dom";
import Home from "../pages/Home/Index";
import App from "../app/App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/city/:city",
                element: <h2>City</h2>
            },
            {
                path: "/restaurants",
                element: <h2>Restaurants Called</h2>,
                children: [
                    {
                        path: "/restaurants/:id",
                        element: <h2>Restaurant id called</h2>
                    }
                ]
            }
        ]
    },
]);