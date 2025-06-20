import foodImg from "../assets/frenchfries.jpg";
import { Link } from "react-router";

const Cards = () => {
  return (
    <>
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
                <Link to="/:id">Show Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      ;
    </>
  );
};

export default Cards;
