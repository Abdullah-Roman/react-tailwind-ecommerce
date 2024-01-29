import React from "react";
import { IoCloseOutline } from "react-icons/io5";
const Popup = ({ popup, setPopup }) => {
  return (
    <>
      {popup && (
        <div className=" bg-black/50 w-screen h-screen z-40 backdrop-blur-sm fixed top-0 left-0">
          <div className="bg-white absolute w-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center ">
              <div>
                <h2 className="text-2xl font-semibold">Order Now</h2>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setPopup(false)}
                />
              </div>
            </div>
            <form action="">
              <input
                type="text"
                placeholder="Name"
                className="border-2 border-green-700 px-4 w-full focus:outline-none py-2 mt-4 placeholder:font-semibold rounded-lg"
              />
              <input
                type="text"
                placeholder="Adress"
                className="border-2 border-green-700 px-4 w-full focus:outline-none py-2 mt-4 placeholder:font-semibold rounded-lg"
              />
              <input
                type="text"
                placeholder="Email"
                className="border-2 border-green-700 px-4 w-full focus:outline-none py-2 mt-4 placeholder:font-semibold rounded-lg"
              />
            </form>
            <button className="py-2 px-6 bg-green-700 rounded-full mt-4 w-full ">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
