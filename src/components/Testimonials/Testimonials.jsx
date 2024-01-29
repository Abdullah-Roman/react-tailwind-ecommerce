import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Masrafhi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Tamim",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sakib",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Miraz",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white">
      <div className="container py-10 relative">
        <div>
          <p className="text-center text-primary text-xl">
            What our customers are saying
          </p>
          <h2 className="text-center font-bold text-2xl py-2">Testimonials</h2>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Slider  */}
        <div className="pt-10">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id}>
                <div className="flex flex-col gap-6 mx-4  bg-primary/10 relative dark:bg-gray-600 dark:text-white justify-center px-6 py-6 shadow-lg rounded-xl">
                  <img
                    src={data.img}
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                  <p className="text-gray-500">{data.text}</p>
                  <h2 className="text-right font-bold text-3xl">{data.name}</h2>
                  <div className="text-5xl absolute top-1/4 right-0">,,</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
