import axios from "axios";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import CuisineForm from "../components/CuisineForm";

export default function AddUserForm() {
  const navigate = useNavigate();

  async function handleSubmit(e, form) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/cuisines",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Succeed add new data ${data.data.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }
  return (
    <>
      <div
        className="min-h-screen bg-gray-100 flex items-center justify-center
        font-Arial">
        {/* <!-- FORM CONTAINER --> */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-zinc-800">
            Add New User
          </h2>
          <form action="#" method="POST" className="space-y-4">
            {/* <!-- Username --> */}
            <div>
              <label
                className="block text-sm font-medium text-blue-950 mb-1"
                for="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Email --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Password --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="password">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Phone Number --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Address--> */}
            <div>
              <label
                className="block text-8 font-medium text-zinc-700 mb-1"
                for="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Submit --> */}
            <Button />
          </form>
        </div>
      </div>
    </>
  );
}
