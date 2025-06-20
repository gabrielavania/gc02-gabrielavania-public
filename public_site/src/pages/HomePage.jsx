import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  // const [sort, setSort] = useState("");
  // const [totalPage, setTotalPage] = useState();
  // const [currentPage, setCurrentpage] = useState();
  // const pagination = handlePagination();

  async function fetchProducts() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/pub/cuisines?search=${search}`
      );

      console.log(data);

      setCards(data.data);

      // setCurrentpage(data.data.pagination.currentPage);
      // setTotalPage(data.data.pagination.totalPage);
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
  }, [search]);

  // function handlePagination() {
  //   let arr = [];

  //   for (let i = 1; i <= totalPage; i++) {
  //     arr.push(i);
  //   }

  //   return arr;
  // }

  function handleSearch(event) {
    event.preventDefault();
    fetchProducts();
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
          <select className="px-3 py-2 border rounded-md">
            <option>Filter by Category</option>
            <option>Western</option>
            <option>Italian</option>
            <option>Indonesian</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>

          {/* SORT */}
          <select
            className="px-3 py-2 border rounded-md"
            onChange={(event) => setSort(event.target.value)}>
            <option>Sort by</option>
            <option>Newest</option>
            <option>Oldest</option>
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
          {/* <button
            type="submit"
            className="px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 cursor-pointer">
            Search
          </button> */}
        </form>
      </div>

      {/* CARDS */}
      <Cards cards={cards} />

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
