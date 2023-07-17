/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useForm, SubmitHandler } from "react-hook-form";
import { usePostABookMutation } from "../redux/feature/book/bookApi";
import { toast } from "react-toastify";
import { useEffect } from "react";

interface BookFormData {
  title: string;
  author: string;
  genre: string;
  pub_date: string;
}

export default function AddNewBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormData>();
  const [postBook, { isLoading, data, isError }] = usePostABookMutation();
  const onSubmit: SubmitHandler<BookFormData> = (data) => {
    void postBook(data);
    reset();
  };
  if (isLoading) {
    return <div>Wait.......</div>;
  }

  if (data) {
    toast.success("✅✅You added a book successfully");
  }

  if (isError) {
    toast.warning("⚠️Your Book Doesn't Added Successfully");
  }

  return (
    <>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}
          </div>

          <div>
            <label htmlFor="author" className="block font-medium">
              Author
            </label>
            <input
              type="text"
              id="author"
              {...register("author", { required: true })}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {errors.author && (
              <span className="text-red-500">Author is required</span>
            )}
          </div>

          <div>
            <label htmlFor="genre" className="block font-medium">
              Genre
            </label>
            <select
              id="genre"
              {...register("genre", { required: true })}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">Select Genre</option>
              <option value="fantasy">Fantasy</option>
              <option value="sci-fi">Science Fiction</option>
              <option value="classic">Classic</option>
              <option value="romance">Romance</option>
            </select>
            {errors.genre && (
              <span className="text-red-500">Genre is required</span>
            )}
          </div>

          <div>
            <label htmlFor="pub_date" className="block font-medium">
              Publication Date
            </label>
            <input
              type="text"
              id="pub_date"
              {...register("pub_date", { required: true })}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {errors.pub_date && (
              <span className="text-red-500">Publication Date is required</span>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Book
          </button>
        </form>
        <h1 className="text-red-500">{isError ? "Data doesn't added" : ""}</h1>
      </div>
    </>
  );
}
