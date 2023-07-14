import React from "react";
import Books from "./Books";

export default function Home() {
  const dummyData = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      publicationDate: "April 10, 1925",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      publicationDate: "July 11, 1960",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationDate: "June 8, 1949",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publicationDate: "January 28, 1813",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Coming-of-age",
      publicationDate: "July 16, 1951",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publicationDate: "June 26, 1997",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: "September 21, 1937",
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: "July 29, 1954",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Young Adult",
      publicationDate: "September 14, 2008",
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: "Thriller",
      publicationDate: "March 18, 2003",
    },
  ];
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Recently Added</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyData.map((book, index) => (
          <Books key={index} {...book}></Books>
        ))}
      </div>
    </div>
  );
}
