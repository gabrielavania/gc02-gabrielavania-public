export default function Button({ nameProp }) {
  return (
    <>
      <button
        type="submit"
        className="mt-4 w-full h-12 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition cursor-pointer">
        {nameProp || "Submit"}
      </button>
    </>
  );
}
