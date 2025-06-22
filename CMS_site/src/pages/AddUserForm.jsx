import axios from "axios";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddUserForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/add-user",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: `Succeed add new user`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response?.data?.message || "Something went wrong!",
      });
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center font-Arial">
        <form
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-center text-zinc-800">
            Add New User
          </h2>
          <div>
            {/* Username */}
            <div className="mb-4">
              <label
                className="block text-md font-medium text-blue-950 mb-1"
                htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-md font-medium text-zinc-700 mb-1"
                htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                className="block text-md font-medium text-zinc-700 mb-1"
                htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                className="block text-md font-medium text-zinc-700 mb-1"
                htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label
                className="block text-md font-medium text-zinc-700 mb-1"
                htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter Address"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Submit Button */}
            <Button />
          </div>
        </form>
      </div>
    </>
  );
}
