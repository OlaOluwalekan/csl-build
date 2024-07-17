import { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import clsx from "clsx";
import { slideData } from "../../data/slide-data";
import { useLocation } from "react-router-dom";

const HeroCarousel = () => {
  let [current, setCurrent] = useState(0); // current carousel slide index
  const location = useLocation();

  let previousSlide = () => {
    if (current === 0) setCurrent(slideData.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slideData.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="overflow-hidden relative aspect-[5/3] laptop:aspect-auto">
        {/* SLIDES */}
        <div
          className="flex transition ease-out duration-75 w-[400vw] h-full"
          style={{
            transform: `translateX(-${current * 25}%)`,
          }}
        >
          {slideData.map((slide) => {
            return (
              <div className="w-screen h-full" key={slide.id}>
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="h-full object-cover"
                />
                <article className="w-full h-full bg-[#00000021] absolute top-0"></article>
                <div className="w-screen h-full absolute top-0 flex justify-center items-center text-3xl text-white text-center">
                  {location.pathname === "/" && "Home"}
                  {location.pathname === "/register" && "Admin Registration"}
                  {location.pathname === "/login" && "Admin Login"}
                </div>
              </div>
            );
          })}
        </div>

        {/* SLIDE PREVIOUS AND NEXT ARROW */}
        <div className="w-full h-full flex justify-between items-center absolute top-0 text-white text-2xl px-2">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        {/* SLIDE INDICATOR */}
        <div className="flex w-full absolute bottom-3 justify-center gap-2">
          {slideData.map((_, i) => {
            return (
              <div
                key={i}
                className={clsx(
                  "w-3 aspect-square rounded-full cursor-pointer",
                  i === current ? "bg-white" : "bg-gray-500"
                )}
                onClick={() => setCurrent(i)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
