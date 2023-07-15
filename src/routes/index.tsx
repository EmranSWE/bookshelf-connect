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
        element: <Books title={""} author={""} genre={""} />,
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
        path: "/add-new-book",
        element: <AddNewBook />,
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
