import { Link } from "react-router";

export default function Cards({ cards }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-30 py-10 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="h-max-w-sm rounded overflow-hidden shadow-lg">
            <div className="h-[300px] w-full overflow-hidden">
              <img
                src={card.imgUrl}
                alt="imgUrl"
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">{card.name}</div>
              <p className="text-gray-700 text-lg">{card.Category?.name}</p>
              <p className="mt-4 text-gray-700 text-lg font-semibold">
                Rp {card.price.toLocaleString("id-ID")}
              </p>
              <button className="mt-4 text-md bg-amber-100 hover:bg-amber-200 px-2 py-2 rounded-md">
                <Link to={`/detail/${card.id}`}>Show Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
