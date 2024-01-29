import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ popupHandler }) => {
  return (
    <div className="bg-white dark:text-white  dark:bg-gray-900 shadow-md relative z-40">
      <div className=" bg-primary/40 ">
        {/* upper navbar  */}
        <div className="container py-6 flex justify-between items-center">
          <div className="logo   flex gap-x-2 items-center dark:text-white text-2xl sm:text-3xl font-bold ">
            <img src={Logo} alt="logo" className="w-10" />
            Roman
          </div>
          <div className="flex gap-x-2 items-center">
            {/* SearchBar  */}
            <div className="input relative hidden sm:block">
              {" "}
              <input
                type="text"
                placeholder="Search"
                className="px-4 rounded-full py-2 w-52 sm:w-72 placeholder:font-semibold"
              />
              <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-2xl text-gray-500" />
            </div>
            <div
              className="group cursor-pointer bg-orange-500  flex items-center justify-center gap-x-1 py-1 px-4 rounded-full text-xl text-white font-medium "
              onClick={popupHandler}
            >
              <span className="hidden group-hover:block transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-2xl  cursor-pointer " />
            </div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower navbar  */}
      <div data-aos="zoom-in" className="container py-4 hidden sm:block">
        <ul className="flex justify-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href=""
                className="inline-block px-4 font-semibold text-xl hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href=""
              className="flex items-center px-4 font-semibold text-xl "
            >
              Trending Products
              <span className="group-hover:rotate-180">
                <FaCaretDown />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul className="">
                {DropdownLinks.map((data) => (
                  <li key={data.id} className="">
                    <a
                      href=""
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
