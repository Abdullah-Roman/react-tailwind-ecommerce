import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      {theme === "light" ? (
        <button
          className="text-3xl text-slate-400  drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] "
          onClick={handleChange}
        >
          <FaMoon className=" drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] " />
        </button>
      ) : (
        <button
          className="text-3xl text-white  drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] "
          onClick={handleChange}
        >
          <CiLight className=" drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] " />
        </button>
      )}
    </div>
  );
};

export default DarkMode;
