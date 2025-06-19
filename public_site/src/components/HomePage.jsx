import foodImg from "../assets/frenchfries.jpg";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="px-4 h-20 bg-white flex flex-row gap-4 justify-between items-center font-Arial shadow-md">
        <div className="text-lg font-Arial font-semibold">
          SAVORA RESTAURANT
        </div>
        <div className="flex text-right">
          <div>HOME</div>
        </div>
        <div>
          <button
            type="button"
            className="rounded-full bg-zinc-700 px-4 py-2 text-white">
            LOGIN
          </button>
        </div>
      </nav>

      {/* BG IMAGE */}
      <div className="bg-[url('/BGnew1.jpg')] bg-cover bg-center h-[600px]"></div>

      {/* TEXT */}
      <div className="mt-20 font-semibold text-3xl text-center font-Arial">
        <h1>Hungry for adventure? Discover your go-to cuisine!</h1>
      </div>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex flex-col sm:flex-row gap-2 py-10 justify-center">
          <select className="px-3 py-2 border rounded-md">
            <option>Filter by Category</option>
            <option>Western</option>
            <option>Italian</option>
            <option>Indonesian</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>

          <select className="px-3 py-2 border rounded-md">
            <option>Sort by</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="px-8 py-2 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
        <button className="px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600">
          Search
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-30 py-10 justify-center">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={foodImg}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Indonesian Cuisine</p>
              <p class=" mt-4 text-gray-700 text-base font-semibold">
                Rp 30.000
              </p>
              <button className="mt-4 text-md bg-amber-100 px-2 py-2 rounded-md">
                Show Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex flex-row items-center justify-center font-Arial min-h-40">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`min-w-9 rounded-md py-2 px-3 text-center text-sm ml-2 ${
              page === 1
                ? "bg-zinc-800 text-white border border-transparent"
                : "border border-zinc-300 text-zinc-600 hover:text-white hover:bg-zinc-800 hover:border-zinc-800"
            }`}>
            {page}
          </button>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="bg-stone-50 px-4 h-20 flex items-center justify-center font-Arial">
        <div>© 2025 - All Rights Reserved</div>
      </footer>
    </>
  );
}
export default App;
