import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CMSHomePage() {
  const [cuisines, setCuisines] = useState([]);

  async function fetchProduct() {
    try {
      const { data } = await axios.get("http://localhost:3000/cuisines", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCuisines(data.data);

      console.log(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  async function handleDelete(id) {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/cuisines/${id}`,
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
        title: `Succeed Delete Data`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Cannot Delete Data",
      });
    }
  }

  return (
    <>
      <div className="mt-20 mb-20 flex flex-auto justify-center min-h-100 px-4">
        <div className="overflow-x-auto w-full max-w-4xl min-w-[1300px] shadow-lg rounded-lg bg-white ">
          <table className="min-w-full rounded-lg overflow-hidden">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Image Url</th>
                <th className="py-3 px-6 text-left">Description</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700 divide-y divide-zinc-200">
              {cuisines.map((cuisine) => (
                <tr key={cuisine.id}>
                  <td className="py-3 px-6">{cuisine.id}</td>
                  <td className="py-3 px-6">{cuisine.name}</td>
                  <td className="py-3 px-6 max-w-[250px] truncate">
                    {cuisine.imgUrl}
                  </td>
                  <td className="py-3 px-6">{cuisine.description}</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-2">
                      <Link to={`/editCuisine/${cuisine.id}`}>
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                      </Link>

                      <label
                        htmlFor={`uploadFile${cuisine.id}`}
                        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 text-sm cursor-pointer inline-flex items-center gap-1">
                        <Link to={`/image/${cuisine.id}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                            />
                          </svg>
                        </Link>
                      </label>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm cursor-pointer"
                        onClick={() => handleDelete(cuisine.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.0"
                          stroke="currentColor"
                          className="size-4">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
