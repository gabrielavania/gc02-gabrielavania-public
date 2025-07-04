import { Outlet } from "react-router";
import NavBar from "../components/NavBar2";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
