import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Books from "../page/Books";
import BookDetails from "../page/BookDetails";
import Login from "../page/Login";

import NotFound from "../page/NotFound";
import Signup from "../page/Signup";

import AllBooksMain from "../page/AllBookMain";
import AllBook from "../page/AllBook";
import AddNewBook from "../page/AddNewBook";
import DeleteBook from "../components/ui/DeleteBook";
import EditBook from "../components/ui/EditBook";
import PrivateRoute from "./privateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: (
          <Books title={""} author={""} genre={""} pub_date={""} _id={""} />
        ),
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/all-books",
        element: <AllBooksMain />,
        children: [
          {
            index: true,
            element: <AllBook />,
          },
        ],
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/delete-book",
        element: <DeleteBook />,
      },
      //   {
      //     path: "/checkout",
      //     element: (
      //       <PrivateRoute>
      //         <Checkout />
      //       </PrivateRoute>
      //     ),
      //   },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
