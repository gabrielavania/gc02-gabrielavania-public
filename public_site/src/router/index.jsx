import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage";
import DetailCuisine from "../pages/DetailCuisine";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail/:id",
        element: <DetailCuisine />,
      },
    ],
  },
]);
