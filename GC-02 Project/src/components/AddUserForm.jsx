const AddUserForm = () => {
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
      {/* <!-- END NAVBAR --> */}
      <div
        className="min-h-screen bg-gray-100 flex items-center justify-center
        font-Arial">
        {/* <!-- FORM CONTAINER --> */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-zinc-800">
            Add New User
          </h2>
          <form action="#" method="POST" className="space-y-4">
            {/* <!-- Username --> */}
            <div>
              <label
                className="block text-sm font-medium text-blue-950 mb-1"
                for="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Email --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Password --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="password">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Phone Number --> */}
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 mb-1"
                for="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* <!-- Address--> */}
            <div>
              <label
                className="block text-8 font-medium text-zinc-700 mb-1"
                for="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
                className="w-full px-4 py-2 border rounded-md"
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

export default AddUserForm;
