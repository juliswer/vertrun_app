import React from "react";
import {Link} from 'react-router-dom';

const Navbar = ({ user }) => {

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/activities">
        <a className="flex items-center">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQEg_blGyIqczw/company-logo_200_200/0/1625647229577?e=1654732800&v=beta&t=XR4Xo7if03rJn4p1KjH0CuRlEsugNE1i2hqmKipvWY8"
            className="mr-3 h-6 sm:h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            VertRun App
          </span>
        </a>
        </Link>
        <div className="flex items-center md:order-2">
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
            <Link to="/activities">
              <a
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Activities
              </a>
              </Link>
            </li>
            <li>
            <Link to="/stats">
              <a
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Stats
              </a>
            </Link>
            </li>
          </ul>
          <img
              className="w-9 h-9 rounded-full ml-6"
              src={user.image}
              alt="user"
            />
        </div>
      </div>
        </div>
    </nav>
  );
};

export default Navbar;
