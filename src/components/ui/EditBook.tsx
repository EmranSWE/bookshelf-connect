import React from "react";
import { useParams } from "react-router-dom";
import {
  useSingleBookQuery,
  useUpdateABookMutation,
} from "../../redux/feature/book/bookApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function EditBook() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { data: book, isLoading: isLoadingData } = useSingleBookQuery(id);
  const [postBook, { isLoading, isError, data, error }] =
    useUpdateABookMutation();

  const onSubmit = (data) => {
    const options = {
      id: id,
      data: data,
    };
    console.log(options);
    void postBook(data);
  };

  React.useEffect(() => {
    if (book) {
      const { title, author, genre, pub_date } = book.data;
      setValue("title", title);
      setValue("author", author);
      setValue("genre", genre);
      setValue("pub_date", pub_date);
    }
  }, [book, setValue]);

  React.useEffect(() => {
    if (data) {
      toast.success("✅✅You added a book successfully");
    }
    if (error?.data?.message) {
      toast.warning("⚠️Your Book Didn't Add Successfully");
    }
  }, [data, error]);

  if (isLoadingData) {
    return <div>Loading...........</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold mb-2">
          <input
            {...register("title")}
            type="text"
            defaultValue={book?.data.title}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </h2>
        <p className="text-gray-600">
          Author:{" "}
          <input
            {...register("author")}
            type="text"
            defaultValue={book?.data.author}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </p>
        <p className="text-gray-600">
          Genre:{" "}
          <input
            {...register("genre")}
            type="text"
            defaultValue={book?.data.genre}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </p>
        <p className="text-gray-600">
          Publication Date:{" "}
          <input
            {...register("pub_date")}
            type="text"
            defaultValue={book?.data.pub_date}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
