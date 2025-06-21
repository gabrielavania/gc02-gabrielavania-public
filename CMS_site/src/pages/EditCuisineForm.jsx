import axios from "axios";
import { useNavigate, useParams } from "react-router";
import CuisineForm from "../components/CuisineForm";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function EditCuisineForm() {
  const [cuisines, setCuisines] = useState({});
  const { id } = useParams();
  console.log("🚀 EditCuisineForm ID:", id);
  console.log("📦 Fetched cuisine:", cuisines);
  const navigate = useNavigate();

  async function fetchCuisine() {
    try {
      const { data } = await axios.get(`http://localhost:3000/cuisines/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCuisines(data.data);

      console.log(data);
    } catch (err) {
      console.log("ERROR fetch:", err.response?.data);
      Swal.fire({
        icon: "error",
        title: "Data not found",
        text: "Something went wrong",
      });
    }
  }

  async function handleSubmit(e, form) {
    e.preventDefault();
    console.log("Form yang dikirim:", form);

    try {
      const authorId = +localStorage.getItem("authorId");
      const formWithAuthor = { ...form, authorId };

      await axios.put(`http://localhost:3000/cuisines/${id}`, formWithAuthor, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(
        "🪪 Kirim request edit dengan token:",
        localStorage.access_token
      );
      console.log("📦 Data form yang dikirim:", formWithAuthor);

      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Succeed edit data ${form.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log("🔥 ERROR submit:", err.response?.data);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
    }
  }

  useEffect(() => {
    fetchCuisine();
  }, []);

  return (
    <>
      <CuisineForm
        cuisines={cuisines}
        handleSubmit={handleSubmit}
        propName="Edit Cuisine"
      />
    </>
  );
}
