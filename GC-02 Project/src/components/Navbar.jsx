const NavBar = () => {
  return (
    <section>
      <div className="bg-white-50 min-h-screen">
        <nav className="px-4 h-20 bg-white flex flex-row gap-4 justify-between items-center font-[Poppins]">
          <div className="text-lg font-[Poppins] font-semibold">
            SAVORA RESTAURANT
          </div>
          <div className="flex gap-20 justify-center items-center flex-1">
            <div>HOME</div>
            <div>CUISINES</div>
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
      <div class="bg-[url('/BGnew.jpg')] bg-cover bg-center h-[600px]"></div>
    </section>
  );
};

export default NavBar;
