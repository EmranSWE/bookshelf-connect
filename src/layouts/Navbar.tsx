import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/feature/user/userSlice";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    void signOut(auth);
    dispatch(setUser(null));
  };
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Book Catalog</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/all-books"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              All Books
            </Link>
          </li>
          {!user.email && (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Registration
                </Link>
              </li>
            </>
          )}
          {user.email && (
            <>
              <li>
                <Link
                  to="/add-new-book"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Add New Book
                </Link>
              </li>
              <Link
                to=""
                onClick={handleLogOut}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                {" "}
                Log Out
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
