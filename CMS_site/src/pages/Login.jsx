import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("bella@mail.com");
  const [password, setPassword] = useState("12345");

  const formOnSubmitHandler = async (event) => {
    event.preventDefault();

    console.log(`email: ${email}, password: ${password}`);

    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(data);

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("authorId", data.user.id);
      navigate("/");
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "error",
        title: err.response.data.msg,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form onSubmit={formOnSubmitHandler}>
      <div className="min-h-screen bg-gray-100 text-gray-800 antialiased py-6 flex flex-col justify-center">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-3xl font-light font-Arial">Login</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-blue-950 rounded-t-md"></div>
            <div className="px-8 py-6">
              <label className="block font-semibold">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-5 bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 cursor-pointer"
                  onClick={() => {
                    localStorage.clear();
                  }}>
                  {" "}
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
