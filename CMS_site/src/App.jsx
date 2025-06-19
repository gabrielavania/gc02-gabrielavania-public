import { useState } from "react";

// Import the component Here
import CMSHomePage from "./components/CMSHomePage";
import Login from "./components/Login";
import AddUserForm from "./components/AddUserForm";
import Category from "./components/Category";
import AddCuisineForm from "./components/AddCuisineForm";
import EditCuisineForm from "./components/EditCuisineForm";
import UploadImageForm from "./components/UploadImageForm";

function App() {
  return (
    <>
      <Login />
      <CMSHomePage />
      <AddCuisineForm />
      <EditCuisineForm />
      <UploadImageForm />
      <Category />
      <AddUserForm />
    </>
  );
}

export default App;
