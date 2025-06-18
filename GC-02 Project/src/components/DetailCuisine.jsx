import foodImg from "../assets/frenchfries.jpg";

const Detail = () => {
  return (
    <>
      {/* NAVBAR */}
      <div className="bg-white shadow-sm">
        <nav className="px-4 h-20 bg-white flex flex-row gap-4 justify-between items-center font-Arial">
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
      </div>

      {/* DETAIL CUISINE */}
      <div className="flex justify-center mt-20 mb-20">
        <div className="flex w-[900px] rounded-xl overflow-hidden shadow-lg bg-white">
          {/* <!-- Gambar --> */}
          <img
            className="w-1/2 h-auto object-cover"
            src={foodImg}
            alt="Gambar makanan"
          />

          {/* <!-- Card --> */}
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
                Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-stone-50 px-4 h-20 flex items-center justify-center font-Arial">
        <div>© 2025 - All Rights Reserved</div>
      </footer>
    </>
  );
};

export default Detail;
