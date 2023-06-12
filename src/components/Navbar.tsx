import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isLogedIn, setLogedIn] = useState(false);
  const [nav, setNav] = useState(false);

  const handleToggle = () => setNav(!nav);

  return (
    <div className="w-full h-[60px] flex justify-between items-center px-3 lg:px-[50px] text-black">
      <div>
        <NavLink to={"/"} className="text-2xl font-bold">
          FilEnd
        </NavLink>
      </div>
      <ul className="hidden md:flex text-base font-semibold">
        <li className="mx-4">
          <NavLink to={"/video-conferance"} className="hover:uppercase">
            Video Conferance
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to={"/chat"} className="hover:uppercase">
            Chat
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to={"/about"} className="hover:uppercase">
            About
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to={"/privacy"} className="hover:uppercase">
            Privacy
          </NavLink>
        </li>
      </ul>

      <div>
        {!isLogedIn ? (
          <div className="hidden md:flex">
            <NavLink
              to={"/register"}
              className="mx-3 p-3 text-base font-bold rounded-md bg-btn-primary hover:bg-btn-secondry text-white"
            >
              Register Here
            </NavLink>
          </div>
        ) : (
          <FaRegUserCircle size={30} className="md:items-end" />
        )}
      </div>

      <div
        onClick={handleToggle}
        className="md:hidden text-4xl z-10 hover:text-gray-400"
      >
        {!nav ? <HiOutlineMenuAlt3 /> : <HiOutlineX />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute left-0 top-[60px] w-full h-screen bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="my-4">
          <NavLink to={"/video-conferance"} className="text-xl hover:uppercase">
            Video Conferance
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink to={"/chat"} className="text-xl hover:uppercase">
            Chat
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink to={"/about"} className="text-xl hover:uppercase">
            About
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink to={"/privacy"} className="text-xl hover:uppercase">
            Privacy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
