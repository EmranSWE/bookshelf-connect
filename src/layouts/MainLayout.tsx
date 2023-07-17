import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles.css";
export default function MainLayout() {
  return (
    <div className="background">
      <Navbar />
      <div className="pt-2">
        <div>
          <Outlet />
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
