import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="pt-14 pb-12 dark:bg-gray-800 dark:text-white">
      {/* Heading  */}
      <div className="heading max-w-[600px] mx-auto mb-10 text-center">
        <p data-aos="fade-up" className="text-sm sm:text-xl text-primary">
          {" "}
          Top Selling Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Products
        </h1>
        <p data-aos="fade-up" className="text-xs sm:text-base text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      {/* Body  */}
      <div className="container mt-14 grid place-items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {ProductsData.map((data) => (
          <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id}>
            <img
              src={data.img}
              alt=""
              className="w-[250px] h-[150px] rounded-md object-cover"
            />
            <div>
              <h3 className="font-semibold">{data.title}</h3>
              <p className="text-sm text-gray-600">{data.color}</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{data.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
          View All Button
        </button>
      </div>
    </div>
  );
};

export default Products;
