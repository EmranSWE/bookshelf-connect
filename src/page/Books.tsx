import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
type BooksProps = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  pub_date: string;
};

const Books: React.FC<BooksProps> = ({
  _id,
  title,
  author,
  genre,
  pub_date,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">Author: {author}</p>
      <p className="text-gray-600">Genre: {genre}</p>
      <p className="text-gray-600">Publication Date: {pub_date}</p>
      <div className="flex">
        <Link to={`/book-details/${_id}`} className="text-2xl">
          details
        </Link>
        <h2>
          <MdOutlineShoppingCartCheckout className="bg-black-500 w-44 h-8"></MdOutlineShoppingCartCheckout>
        </h2>
      </div>
    </div>
  );
};

export default Books;
