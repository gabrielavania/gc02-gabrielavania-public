const NavBar = () => {
  return (
    <section>
      <div className="bg-white-50">
        <nav className="px-4 h-20 bg-white flex flex-row gap-4 justify-between items-center font-Arial">
          <div className="text-lg font-Arial font-semibold">
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
    </section>
  );
};

export default NavBar;
