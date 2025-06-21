import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentpage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  async function fetchProducts() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/pub/cuisines?search=${search}&page=${currentPage}&sort=${sort}&categories=${filter}`
      );

      console.log(data);

      setCards(data.data);

      setCurrentpage(data.currentPage);
      setTotalPage(data.totalPage);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  }, [search, currentPage, sort, filter]);
  console.log(sort);

  function handlePagination() {
    let arr = [];

    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }

    return arr;
  }

  async function handleFilterCategory(categoryId) {
    setFilter(categoryId);
    setCurrentpage(1);
  }

  return (
    <>
      {/* BG IMAGE */}
      <div className="bg-[url('/BGnew1.jpg')] bg-cover bg-center h-[600px]"></div>

      {/* TEXT */}
      <div className="mt-20 font-semibold text-3xl text-center font-Arial">
        <h1>Hungry for adventure? Discover your go-to cuisine!</h1>
      </div>

      {/* FILTER */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex flex-col sm:flex-row gap-2 py-10 justify-center">
          <select
            className="px-3 py-2 border rounded-md"
            onChange={(e) => handleFilterCategory(e.target.value)}>
            <option value="" disabled selected>
              Filter by Category
            </option>
            <option value="">All Categories</option>
            <option value="1">Western</option>
            <option value="2">Italian</option>
            <option value="3">Indonesian</option>
            <option value="4">Dessert</option>
            <option value="5">Drinks</option>
          </select>

          {/* SORT */}
          <select
            className="px-3 py-2 border rounded-md"
            onChange={(event) => setSort(event.target.value)}>
            <option value disabled="">
              Sort by
            </option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        {/* SEARCH */}
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            value={search}
            placeholder="Search..."
            className="px-8 py-2 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400"
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </div>

      {/* CARDS */}
      <Cards cards={cards} />

      {/* PAGINATION */}
      <nav className="flex items-center justify-center my-8">
        <div className="flex gap-x-1">
          {/* Page Numbers */}
          {handlePagination().map((page) => (
            <button
              key={page}
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center rounded-lg border ${
                page === currentPage
                  ? "bg-zinc-700 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setCurrentpage(page)}>
              {page}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
export default App;
