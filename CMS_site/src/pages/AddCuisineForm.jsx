import axios from "axios";
import { useNavigate } from "react-router";
import CuisineForm from "../components/CuisineForm";

export default function AddCuisineForm() {
  const navigate = useNavigate();

  async function handleSubmit(e, form) {
    e.preventDefault();

    try {
      const authorId = +localStorage.getItem("authorId"); // 🧠 pastikan ini angka
      const formWithAuthor = { ...form, authorId };

      await axios.post("http://localhost:3000/cuisines", formWithAuthor, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Succeed add new data ${data.data.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log("ERROR submit:", err.response.data);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response.data.msg?.[0] || err.response.data.error,
      });
    }
  }

  return (
    <>
      <CuisineForm handleSubmit={handleSubmit} propName="Add Cuisine" />
    </>
  );
}
