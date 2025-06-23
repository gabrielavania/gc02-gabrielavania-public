import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

export default function CuisineForm({ cuisines, handleSubmit, propName }) {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: 0,
    imgUrl: "",
    description: "",
    categoryId: 0,
  });

  function handleInput(fieldName, e) {
    let value = e.target.value;
    if (fieldName === "price" || fieldName === "categoryId") {
      const numeric = Number(e.target.value);
      value = isNaN(numeric) ? 0 : numeric;
    }

    setForm((oldValue) => {
      return {
        ...oldValue,
        [fieldName]: value,
      };
    });
  }
  async function fetchCategories() {
    try {
      const { data } = await axios.get("https://vngbr.web.id/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setCategories(data.data);
    } catch (err) {
      Swal.fire({
        icon: err.response.data.error,
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (cuisines) {
      delete cuisines?.id;
      delete cuisines?.authorId;
      delete cuisines?.createdAt;
      delete cuisines?.updatedAt;
      delete cuisines?.Category;
      delete cuisines?.User;

      setForm((oldValue) => {
        return {
          ...oldValue,
          ...cuisines,
        };
      });
    }
  }, [cuisines]);

  return (
    <>
      <div
        className="min-h-screen bg-gray-100 flex items-center justify-center
        font-Arial py-20">
        {/* <!-- FORM CONTAINER --> */}
        <form
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
          onSubmit={(e) => handleSubmit(e, form)}>
          <h2 className="text-2xl font-semibold mb-6 text-center text-zinc-800">
            {propName || "Form Title"}
          </h2>
          {/* <!-- Name --> */}
          <div className="mb-4">
            <label className="block text-md text-zinc-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border rounded-md"
              onChange={(e) => handleInput("name", e)}
              value={form?.name}
            />
          </div>
          {/* <!-- Price --> */}
          <div className="mb-4">
            <label className="block text-md text-zinc-700 mb-1" htmlFor="price">
              Price (Rp)
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter Price"
              className="w-full px-4 py-2 border rounded-md"
              onChange={(e) => handleInput("price", e)}
              value={form?.price}
            />
          </div>
          {/* <!-- Image Url --> */}
          <div className="mb-4">
            <label
              className="block text-md text-zinc-700 mb-1"
              htmlFor="imgUrl">
              Image Url
            </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              placeholder="Enter Image Url"
              className="w-full px-4 py-2 border rounded-md"
              onChange={(e) => handleInput("imgUrl", e)}
              value={form?.imgUrl}></input>
          </div>
          {/* <!-- Description --> */}
          <div className="mb-4">
            <label
              className="block text-md text-zinc-700 mb-1"
              htmlFor="description">
              Description
            </label>
            <textarea
              type="textarea"
              id="description"
              name="description"
              placeholder="Enter Description"
              className="w-full min-h-[150px] px-4 py-2 border rounded-md"
              onChange={(e) => handleInput("description", e)}
              value={form?.description}
            />
          </div>
          {/* Category */}
          <div className="mb-4">
            <label className="block text-md text-zinc-700 mb-1">Category</label>
            <select
              className="w-full px-3 py-2 border-1 rounded-md"
              name="category"
              onChange={(e) => handleInput("categoryId", e)}
              value={form.categoryId || ""}>
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          {/* <!-- Submit --> */}
          <Button nameProp={propName} />
        </form>
      </div>
    </>
  );
}
