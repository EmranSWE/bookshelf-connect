/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useDeleteABookMutation,
  useSingleBookQuery,
} from "../redux/feature/book/bookApi";
import BookReviews from "../components/ui/BookReviews";

interface IBook {
  title: string;
  author: string;
  genre: string;
  pub_date: string;
}
export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookDelete, { data: deleteData, isSuccess }] =
    useDeleteABookMutation();

  const { data, isLoading } = useSingleBookQuery(id);
  if (isLoading) {
    return <div>Loading...........</div>;
  }
  const { title, author, genre, pub_date }: IBook = data?.data;

  const handleDeleteBook = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (shouldDelete) {
      void bookDelete(id);
      toast.success("⚡You Have successfully deleted");
    } else {
      toast.warning("⚡You Have cancel delete button");
    }
  };
  if (isSuccess) {
    navigate("/all-books");
  }
  console.log("deleteData", deleteData);
  return (
    <div className="grid grid-cols-2 bg-gray-200 shadow-md rounded-lg p-4">
      <div className=" w-full">
        <h2 className="text-5xl font-bold mb-2">{title}</h2>
      </div>
      <div>
        <p className="text-gray-600">Author: {author}</p>
        <p className="text-gray-600">Genre: {genre}</p>
        <p className="text-gray-600">Publication Date: {pub_date}</p>
        <div className="space-x-4">
          <Link to={`/edit-book/${id}`}>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white shadow-md">
              Edit Book
            </button>
          </Link>
          <button
            onClick={handleDeleteBook}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white shadow-md"
          >
            Delete Book
          </button>
        </div>
        <BookReviews id={id}></BookReviews>
      </div>
    </div>
  );
}
