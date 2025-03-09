import { Outlet } from "react-router-dom";
import Navbar from "./my-components/navbar/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Homepage;
