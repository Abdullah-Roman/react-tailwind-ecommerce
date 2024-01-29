import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ({ popupHandler }) => {
  return (
    <div className="dark:bg-gray-700 dark:text-white pt-10">
      <div className="container">
        <p className="text-primary text-base">Top Rated Products for you</p>
        <h2 className="text-4xl font-bold">Best Products</h2>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      <div className="container dark:bg-gray-700 dark:text-white pt-10 ">
        <div
          data-aos="zoom-in"
          className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5  place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="hover:bg-black/80 hover:text-white max-w-[500px] shadow-lg rounded-3xl px-10 mt-14 flex-col justify-center items-center"
            >
              <img
                src={data.img}
                alt=""
                className="transform -translate-y-1/2 max-w-[140px] block mx-auto hover:scale-125"
              />
              <div className="flex justify-center w-full gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <h2 className="text-center text-3xl font-bold py-4">
                {data.title}
              </h2>
              <div className=" flex justify-center text-gray-500 text-sm line-clamp-2 ">
                {data.description}
              </div>
              <button
                className="bg-primary block w-3/4 mx-auto mb-5  hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={popupHandler}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
