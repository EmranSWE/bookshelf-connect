import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Book Catalog</div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/all-books"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              All Books
            </a>
          </li>
          <li>
            <a
              href="/sign-in"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="/sign-up"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
