import { createBrowserRouter, redirect } from "react-router";

import CMSHomePage from "../pages/CMSHomePage";
import Category from "../pages/Category";
import AddUserForm from "../pages/AddUserForm";
import UploadImageForm from "../pages/UploadImageForm";
import RootLayout from "../layout/RootLayout";
import EditCuisineForm from "../pages/EditCuisineForm";
import Login from "../pages/Login";
import AddCuisineForm from "../pages/AddCuisineForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // loader: () => {
    //   if (!localStorage.access_token) {
    //     return redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/",
        element: <CMSHomePage />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/addCuisine",
        element: <AddCuisineForm />,
      },
      {
        path: "/editCuisine/:id",
        element: <EditCuisineForm />,
      },
      {
        path: "/addUser",
        element: <AddUserForm />,
      },
      {
        path: "/image/:id",
        element: <UploadImageForm />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
    element: <Login />,
  },
]);
