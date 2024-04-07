import { Link } from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://www.tailwindcss.com/img/logo.svg"
                  alt="Tailwind CSS"
                />
              </Link>
              <div className="hidden sm:block ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/about"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex sm:hidden">
              <button
                type="button"
                onClick={handleMenuToggle}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
  
        {menuOpen && (
          <div className="absolute z-10 inset-x-0 top-0 sm:hidden">
            <div className="bg-white shadow-lg">
              <div className="pt-2 pb-3 px-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://www.tailwindcss.com/img/logo.svg"
                      alt="Tailwind CSS"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={handleMenuToggle}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <Link
                    to="/about"
                    className="block py-2 px-4 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="block py-2 px-4 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  };

  export default Navigation;