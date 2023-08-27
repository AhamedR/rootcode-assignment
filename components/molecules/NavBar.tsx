function NavBar() {
  return (
    <nav className="border-gray-200 px-2 mb-10 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex">
          CarBid
        </a>
        <div
          className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                aria-current="page"
              >
                Biddings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
