// import Navbar from "./Components/NavigationBar/Navbar.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <>
        {/* <Navbar /> */}
        <Outlet />
        <h1 className="font-black">
          Hello
        </h1>
        {/* <Footer /> */}
    </>
  )
}