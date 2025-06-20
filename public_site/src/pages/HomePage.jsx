import Cards from "../components/Cards";
// import RootLayout from "../RootLayout";

function App() {
  return (
    <>
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
      <Cards />

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
    </>
  );
}
export default App;
