import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const UploadImageForm = () => {
  const { id } = useParams();
  const [cuisine, setCuisine] = useState(null);

  useEffect(() => {
    const fetchCuisine = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/cuisines/${id}`
        );
        setCuisine(data?.data);
        console.log(data);
      } catch (err) {
        console.log("Failed to fetch cuisine:", err);
      }
    };

    fetchCuisine();
  }, [id]);

  if (!cuisine) return <p className="text-center mt-20">Loading...</p>;

  async function handleUpload(e, id) {
    try {
      const images = e.target.files[0];
      const formData = new FormData();
      formData.append("file", images);

      const { data } = await axios.patch(
        `http://localhost:3000/cuisines/imgUrl/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="bg-gray-100 min-h-[600px] font-Arial">
        <div className="flex justify-center mb-20">
          <div className="flex w-[900px] mt-20 rounded-xl overflow-hidden shadow-lg">
            {/* <!-- Gambar --> */}
            <img
              className="w-1/2 h-auto object-cover"
              src={cuisine.imgUrl}
              alt="cuisine photo"
            />

            {/* <!-- Card --> */}
            <div className="p-6 w-1/2 flex flex-col bg-white">
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
                {/* <label
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
                </label> */}

                <label
                  htmlFor={`uploadFile${cuisine.id}`}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 text-sm cursor-pointer inline-flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  Upload
                </label>
                <input
                  type="file"
                  id={`uploadFile${cuisine.id}`}
                  className="hidden"
                  onChange={(e) => handleUpload(e, cuisine.id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImageForm;
