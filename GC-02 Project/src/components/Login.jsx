const Login = () => {
  return (
    <form>
      <div class="min-h-screen bg-gray-100 text-gray-800 antialiased py-6 flex flex-col justify-center">
        <div class="relative py-3 sm:w-96 mx-auto text-center">
          <span class="text-3xl font-light font-Arial">Login</span>
          <div class="mt-4 bg-white shadow-md rounded-lg text-left">
            <div class="h-2 bg-blue-950 rounded-t-md"></div>
            <div class="px-8 py-6">
              <label class="block font-semibold">Email</label>
              <input
                type="text"
                placeholder="Email"
                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
              />
              <label class="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
              />
              <div class="flex justify-between items-baseline">
                <button
                  type="submit"
                  class="mt-5 bg-blue-950 text-white py-2 px-6 rounded-md hover:bg-zinc-800">
                  Login
                </button>
                <a href="#" class="text-sm hover:underline">
                  Forgot Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
