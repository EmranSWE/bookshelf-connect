/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useGetAllBooksQuery } from "../redux/feature/book/bookApi";
import Books from "./Books";

export default function Home() {
  const { isLoading, data } = useGetAllBooksQuery({
    allProducts: true,
  });
  if (isLoading) {
    return <div>Loading......</div>;
  }
  const book = data?.data?.data;

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Recently Added</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {book.map((book: any, index: number) => (
          <Books key={index} {...book}></Books>
        ))}
      </div>
    </div>
  );
}
