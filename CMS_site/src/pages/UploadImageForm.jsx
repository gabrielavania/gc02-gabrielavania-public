import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

export default function CMSHomePage() {
  const [cuisines, setCuisines] = useState({});
  const { id } = useParams();

  async function fetchProduct() {
    try {
      const { data } = await axios.get(`http://localhost:3000/cuisines/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCuisines(data.data);

      console.log(data);
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Cannot upload data",
      });
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  async function handleUpload(e, id) {
    try {
      const images = e.target.files[0];
      const formData = new FormData();
      formData.append("imgUrl", images);

      const { data } = await axios.patch(
        `http://localhost:3000/cuisines/imgUrl/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      console.log(data);
      fetchProduct();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Succeed upload image`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Cannot upload image",
      });
    }
  }

  return (
    <>
      {cuisines.id && (
        <div className="flex justify-center mt-24 mb-20">
          <div className="flex w-[900px] rounded-xl overflow-hidden shadow-lg">
            <img src={cuisines.imgUrl} className="w-1/2 object-cover" />
            <div className="w-1/2 p-6 bg-white">
              <h2 className="text-2xl font-bold mb-4">{cuisines.name}</h2>
              <p className="text-gray-700 text-base">{cuisines.description}</p>
              <p className="text-gray-700 text-lg font-semibold mt-4">
                Rp {cuisines.price.toLocaleString("id-ID")}
              </p>
              <label
                htmlFor={`uploadFile${cuisines.id}`}
                className="flex bg-orange-400 hover:bg-orange-500 text-white text-base font-medium px-3 py-2.5 outline-none rounded w-max cursor-pointer mt-4 mb-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 mr-2 fill-white"
                  viewBox="0 0 32 32">
                  <path
                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    data-original="#000000"
                  />
                  <path
                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                    data-original="#000000"
                  />
                </svg>
                Upload
                <input
                  type="file"
                  id={`uploadFile${cuisines.id}`}
                  className="hidden"
                  onChange={(e) => handleUpload(e, cuisines.id)}
                />
              </label>
              <Link
                to="/"
                className="inline-flex items-center rounded-3xl bg-amber-100 hover:bg-amber-200 px-5 py-2 text-black font-semibold transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
