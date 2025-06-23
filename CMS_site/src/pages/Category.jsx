import axios from "axios";
import { useState, useEffect } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://vngbr.web.id/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCategories(data.data);

      console.log("ini categories", categories);
      console.log(data);
    })();
  }, []);

  return (
    <>
      <div className="mt-20 mb-20 flex justify-center">
        <div className="max-w-sm shadow-lg rounded-lg bg-white">
          <table className="mb-2 min-w-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">List Category</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700 divide-y divide-zinc-200">
              {categories.map((category, index) => (
                <tr key={index}>
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Category;
