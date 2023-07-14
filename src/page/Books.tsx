import React from "react";

type BooksProps = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
};

const Books: React.FC<BooksProps> = ({
  title,
  author,
  genre,
  publicationDate,
}) => {
  console.log(title);
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">Author: {author}</p>
      <p className="text-gray-600">Genre: {genre}</p>
      <p className="text-gray-600">Publication Date: {publicationDate}</p>
    </div>
  );
};

export default Books;
