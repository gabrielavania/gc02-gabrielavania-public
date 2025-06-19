import foodImg from "../assets/frenchfries.jpg";

const UploadImageForm = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-[600px] font-Arial">
        {/* NAVBAR */}
        <nav className="px-4 h-20 bg-blue-950 flex flex-row gap-4 justify-between items-center shadow text-white">
          <div className="text-2xl font-semibold">CMS PAGE</div>
          <div className="flex gap-20 justify-center items-center flex-1">
            <div>DASHBOARD</div>
            <div>CATEGORY</div>
            <div>CREATE CUISINE</div>
            <div>ADD USER</div>
          </div>
          <div>
            <button
              type="button"
              className="rounded-full bg-orange-500 px-4 py-2 text-white">
              LOGOUT
            </button>
          </div>
        </nav>

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
                adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
              <p className="text-gray-700 text-base font-semibold mt-4">
                Rp 30.000
              </p>

              {/* UPLOAD FILE */}
              <div className="justify-start mt-8">
                <label
                  for="uploadFile"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base font-medium px-4 py-2.5 outline-none rounded w-max cursor-pointer mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 mr-2 fill-white inline"
                    viewBox="0 0 32 32">
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      data-original="#000000"
                    />
                  </svg>
                  Upload
                  <input type="file" id="uploadFile" class="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImageForm;
