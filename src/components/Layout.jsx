import Filter from './Filters'

export function Layout({ children }) {
  return (
    <>
      <div className="relative flex w-full flex-col">
        <header className="bg-[#F8FAFE]">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex items-center lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-6 w-auto"
                  src="https://www.trademarkia.com/_next/image?url=%2Fassets%2Fimages%2Flogo_trademarkia.png&w=384&q=75"
                  alt="Your Company Logo"
                />
              </a>

              <div className="flex items-center space-x-4 px-5"> {/* Flex container for input and button */}
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Trademark Here"
                  className="block w-full rounded-lg border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  style={{ height: '42px' }} // Set height
                />

                <button
                  type="button"
                  className="px-4 py-2 bg-[#4380EC] text-white rounded-lg"
                  style={{ height: '42px' }} // Set height to match input
                >
                  Search
                </button>
              </div>
            </div>
          </nav>
        </header>

        <div className="p-3">
          <p className="block py-5 text-sm font-medium leading-6 text-gray-900">
            About 159 Trademarks found for “nike”
          </p>
          <hr />
        </div>

        <Filter/>
        
        <main className="flex-auto">{children}</main>
      </div>
    </>
  );
}