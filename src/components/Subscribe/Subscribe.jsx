import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BackgroundImage = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundReapeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      style={BackgroundImage}
      className="bg-white dark:bg-gray-700 dark:text-white"
    >
      <div data-aos="fade-up" className="Container py-14 ">
        <h1 className="text-2xl font-bold text-center pb-4 text-white">
          Get Notified About New Products
        </h1>
        <input
          type="text"
          placeholder="Enter Your Mail"
          className="w-1/3 mx-auto block p-3"
        />
      </div>
    </div>
  );
};

export default Subscribe;
