import { Link } from "react-router";
import axios from "axios";

const NavBar = () => {
  const handleLogin = async (login, password) => {
    try {
      const response = await axios.post("http://localhost:5173/login", {
        email,
        password,
      });

      console.log("Login berhasil", response.data);
    } catch (err) {
      console.error("Login gagal:", err.response.data.msg || err.message);
    }
  };
  return (
    <>
      <div className="bg-white shadow-sm">
        <nav className="px-4 h-20 bg-white flex flex-row justify-between items-center font-Arial">
          <div className="flex items-center gap-8">
            <div className="text-xl font-Arial font-semibold">
              SAVORA RESTAURANT
            </div>
            <div>
              <Link to="/">HOME</Link>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="rounded-full bg-zinc-700 px-4 py-2 text-white hover:bg-amber-400">
              <Link to="http://localhost:5173/login">LOGIN</Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
