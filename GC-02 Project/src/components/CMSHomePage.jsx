function CMSHomePage() {
  return (
    <>
      {/* NAVBAR */}
      <div className="bg-gray-100 min-h-screen">
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
        {/* <!-- END NAVBAR --> */}

        {/* <!-- TABLE --> */}
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
                <tr>
                  <td className="py-3 px-6">1</td>
                  <td className="py-3 px-6">Spaghetti Carbonara</td>
                  <td className="py-3 px-6">www.url.com</td>
                  <td className="py-3 px-6">Ini adalah spaghetti</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6">2</td>
                  <td className="py-3 px-6">Spaghetti Carbonara</td>
                  <td className="py-3 px-6">www.url.com</td>
                  <td className="py-3 px-6">Ini adalah spaghetti</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default CMSHomePage;
