import { useState } from "react";

// ROUTER
import { RouterProvider } from "react-router";
import { router } from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
