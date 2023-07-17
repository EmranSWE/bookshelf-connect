/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useGetAllBooksQuery } from "../redux/feature/book/bookApi";
import Books from "./Books";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Book = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  pub_date: string;
};
export default function AllBook() {
  const { register, handleSubmit } = useForm();

  const [searchQuery, setSearchQuery] = useState("");
  const [genreQuery, setGenreQuery] = useState("");
  const [pubDateQuery, setPubDateQuery] = useState("");

  const handleSearchSubmit: SubmitHandler<FieldValues> = (data) => {
    setSearchQuery(data.searchTerm);
  };
  const handleFilterSubmit: SubmitHandler<FieldValues> = (data) => {
    setGenreQuery(data.genre);
    setPubDateQuery(data.publicationYear);
  };

  const { isLoading, data, refetch } = useGetAllBooksQuery({
    limit: 10,
    page: 1,
    searchTerm: searchQuery,
    genre: genreQuery,
    pubDateQuery: pubDateQuery,
  });

  useEffect(() => {
    void refetch();
  }, [searchQuery, genreQuery, pubDateQuery, refetch]);

  if (isLoading) {
    return <div>Loading......</div>;
  }
  const books: Book[] | undefined = data?.data?.data;
  return (
    <div>
      <div className="grid grid-cols-3">
        <div>
          <div className="grid justify-center mt-4">
            <form
              onSubmit={handleSubmit(handleSearchSubmit)}
              className="flex items-center space-x-4"
            >
              <input
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search books"
                {...register("searchTerm")}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </form>

            <form
              onSubmit={handleSubmit(handleFilterSubmit)}
              className="flex items-center space-x-4"
            >
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("genre")}
              >
                <option value="">All Genres</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Science Fiction</option>
                <option value="Classic">Classic</option>
                <option value="romance">Romance</option>
              </select>
              <input
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="string"
                placeholder="Publication Year"
                {...register("publicationYear")}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Filter
              </button>
            </form>
            <Link to="/add-new-book">
              <button>Add New</button>
            </Link>
          </div>
        </div>
        <div className="grid  lg:col-span-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books?.map((book, index) => (
            <Books key={index} {...book}></Books>
          ))}
        </div>
      </div>
    </div>
  );
}
