import React, { useState, useEffect } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
};

const Worker = ({ title, description, image }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const isLargeScreen = windowWidth > 1060;

  return (
    <li className="relative inline-block h-[380px] w-full">
      <div
        style={{
          height: isLargeScreen ? "100%" : undefined,
          width: isLargeScreen ? "100%" : undefined,
        }}
        className={`p-5 absolute inset-0 flex flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 z-20`}
      >
        <p className="text-2xl">{title}</p>
        <p className="mt-5 text-lg">{description}</p>
      </div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </li>
  );
};

export default Worker;
