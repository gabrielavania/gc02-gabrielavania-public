import foodImg from "../assets/frenchfries.jpg";
import { Link } from "react-router";

function Detail() {
  return (
    <>
      {/* DETAIL CUISINE */}
      <div className="flex justify-center mt-20 mb-20">
        <div className="flex w-[900px] rounded-xl overflow-hidden shadow-lg bg-white">
          {/* <!-- Gambar --> */}
          <img
            className="w-1/2 h-auto object-cover"
            src={foodImg}
            alt="Gambar makanan"
          />

          {/* <!-- CARD --> */}
          <div className="p-6 w-1/2 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">French Fries</h2>
            <p className="text-gray-700 text-base">
              Ini adalah deskripsi makanan yang enak banget, cocok buat kamu
              yang lapar tengah malam. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
            </p>
            <p className="text-gray-700 text-base font-semibold mt-4">
              Rp 30.000
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
