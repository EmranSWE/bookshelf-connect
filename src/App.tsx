import { onAuthStateChanged } from "firebase/auth";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { setLoading, setUser } from "./redux/feature/user/userSlice";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);
  return (
    <div>
      <MainLayout />
      <ToastContainer />
    </div>
  );
}

export default App;
