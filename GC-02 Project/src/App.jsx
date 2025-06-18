import { useState } from "react";

// Import the component Here
import Homepage from "./components/HomePage";
import NavBar from "./components/NavBar";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
import DetailCuisine from "./components/DetailCuisine";
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
      <Homepage />
      <DetailCuisine />
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
