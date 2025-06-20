import { Link, useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";

function Detail() {
  const [detailCuisine, setDetailCuisine] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/cuisines/${id}`);
      setDetailCuisine(data.data);

      console.log(data);
    })();
  }, []);

  if (!detailCuisine) {
    return <p className="text-center mt-20">Loading detail makanan</p>;
  }

  return (
    <>
      {/* DETAIL CUISINE */}
      <div className="flex justify-center mt-20 mb-20">
        <div className="flex w-[900px] rounded-xl overflow-hidden shadow-lg bg-white">
          {/* <!-- Gambar --> */}
          <img
            className="w-1/2 h-auto object-cover"
            src={detailCuisine.imgUrl}
            alt="image"
          />

          {/* <!-- CARD --> */}
          <div className="p-6 w-1/2 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{detailCuisine.name}</h2>
            <p className="text-gray-700 text-base">
              {detailCuisine.description}
            </p>
            <p className="text-gray-700 text-lg font-semibold mt-4">
              Rp {detailCuisine.price.toLocaleString("id-ID")}
            </p>
            <div className="mt-6 font-Arial font-semibold">
              <button
                type="button"
                className="rounded-3xl bg-amber-100 hover:bg-amber-200 px-4 py-2 text-black">
                <Link to="/">Back</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
