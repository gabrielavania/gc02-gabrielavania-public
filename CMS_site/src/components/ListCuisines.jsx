const ListCuisines = ({ cuisines }) => {
  return (
    <div className="mt-20 mb-20 flex items-stretch justify-center min-h-100 px-4">
      <div className="overflow-x-auto w-full max-w-4xl shadow-lg rounded-lg bg-white ">
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
                <td className="py-3 px-6">{cuisine.imgUrl}</td>
                <td className="py-3 px-6">{cuisine.description}</td>
                <td className="py-3 px-6">
                  <div className="flex gap-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                      <Link to="/editCuisines">Edit</Link>
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCuisines;
