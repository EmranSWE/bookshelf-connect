import { Link, useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/feature/book/bookApi";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  if (isLoading) {
    return <div>Loading...........</div>;
  }
  const { title, author, genre, pub_date } = data?.data;
  return (
    <div className="grid bg-gray-200 shadow-md rounded-lg p-4">
      <div className="grid-cols-1">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">Author: {author}</p>
        <p className="text-gray-600">Genre: {genre}</p>
        <p className="text-gray-600">Publication Date: {pub_date}</p>
        <Link to={`/edit-book/${id}`}>
          <button className="bg-green-200">Edit Book</button>
        </Link>
        <Link to="/delete-book">
          <button className="bg-green-200">Delete Book</button>
        </Link>
      </div>
      <p className="text-gray-600">Review: {pub_date}</p>
      <div></div>
    </div>
  );
}
