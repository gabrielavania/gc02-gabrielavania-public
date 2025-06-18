const EditCuisineForm = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="px-4 h-20 bg-blue-950 flex flex-row gap-4 justify-between items-center shadow font-Arial text-white">
        <div className="text-2xl font-semibold">CMS PAGE</div>
        <div className="flex gap-20 justify-center items-center flex-1">
          <div>DASHBOARD</div>
          <div>CATEGORY</div>
          <div>CREATE CUISINE</div>
          <div>ADD USER</div>
        </div>
        <div>
          <button
            type="button"
            className="rounded-full bg-orange-500 px-4 py-2 text-white">
            LOGOUT
          </button>
        </div>
      </nav>

      <div
        className="min-h-screen bg-gray-100 flex items-center justify-center
        font-Arial">
        {/* <!-- FORM CONTAINER --> */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-zinc-800">
            Edit Cuisine
          </h2>
          <form action="#" method="POST" className="space-y-4">
            {/* <!-- Name --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Price --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="price">
                Price (Rp)
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Enter Price"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Image Url --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="imgUrl">
                Image Url
              </label>
              <input
                type="text"
                id="imgUrl"
                name="imgUrl"
                placeholder="Enter Image Url"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Description --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="description">
                Description
              </label>
              <textarea
                type="textarea"
                id="description"
                name="description"
                placeholder="Enter Description"
                className="w-full min-h-[150px] px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Submit --> */}
            <button
              type="submit"
              className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCuisineForm;
