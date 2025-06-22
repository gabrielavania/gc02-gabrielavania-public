import { Link, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const handlerLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <>
      <nav className="px-4 h-20 bg-blue-950 flex flex-row gap-4 justify-between items-center shadow font-Arial text-white">
        <div className="text-2xl font-semibold">CMS PAGE</div>
        <div className="flex gap-20 justify-center items-center flex-1">
          <div>
            <Link to="/">DASHBOARD</Link>
          </div>
          <div>
            <Link to="/categories">CATEGORY</Link>
          </div>
          <div>
            <Link to="/addCuisine">ADD CUISINE</Link>
          </div>
          <div>
            <Link to="/addUser">ADD USER</Link>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="rounded-full bg-orange-500 px-4 py-2 text-white cursor-pointer"
            onClick={handlerLogout}>
            LOGOUT
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
