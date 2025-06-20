import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
// import RootLayout from "../layout/RootLayout";
// import ListCuisines from "../components/ListCuisines";

const CMSHomePage = () => {
  const [cuisines, setCuisines] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/cuisines");
      setCuisines(data.data);

      console.log(data);
    })();
  }, []);

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
              {cuisines.map((cuisine, index) => (
                <tr key={index}>
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{cuisine.name}</td>
                  <td className="py-3 px-6 max-w-[250px] truncate">
                    {cuisine.imgUrl}
                  </td>
                  <td className="py-3 px-6">{cuisine.description}</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-2">
                      <button
                        // onClick={() => setIsModalOpen(true)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm cursor-pointer">
                        <Link to="/editCuisines/:id">Edit</Link>
                      </button>

                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                        <Link to="/deleteCuisine">Delete</Link>
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
};
export default CMSHomePage;
