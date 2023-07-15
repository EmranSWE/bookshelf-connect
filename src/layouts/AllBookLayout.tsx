import { Outlet } from "react-router-dom";

export default function AllBookLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
