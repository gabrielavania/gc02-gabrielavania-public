const HomeContent = () => {
  return (
    <>
      {/* HERO SECTION with BG */}
      <section className="bg-[url('/BGnew.jpg')] bg-cover bg-center min-h-[600px] flex items-center justify-center"></section>

      {/* FILTER & SEARCH */}
      <h1 className="mt-20 text-3xl sm:text-4xl font-semibold text-center">
        Hungry for adventure? Discover your go-to cuisine!
      </h1>
      <section className="bg-white py-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md"
          />
          <button className="px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600">
            Search
          </button>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-10 px-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full" src="/img/card-top.jpg" alt="Sunset" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGINATION */}
      <section className="flex justify-center pb-20 mt-5">
        <div className="flex gap-2">
          <button className="px-3 py-2 border rounded hover:bg-zinc-800 hover:text-white">
            Prev
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-3 py-2 border rounded ${
                page === 1
                  ? "bg-zinc-800 text-white"
                  : "hover:bg-zinc-800 hover:text-white"
              }`}>
              {page}
            </button>
          ))}
          <button className="px-3 py-2 border rounded hover:bg-zinc-800 hover:text-white">
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
