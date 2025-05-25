import React from "react";
import profImg from "../assets/image.png";
import { FaCamera } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-100  flex flex-col">
      <div className="bg-white text-black p-2  ">
        <h1 className=" text-xl p-2 ">Account Settings </h1>
      </div>

      <div className="flex py-4 px-4 p-2 ">
        <div className="w-28 h-28 rounded-full overflow-hidden relative">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={profImg}
            alt=""
          />

          <div className="absolute bottom-3 right-4 bg-purple-500 text-white rounded-full p-2 shadow-md">
            <FaCamera />
          </div>
        </div>
        <div className=" ">
          <h2 className="font-semibold">Marry Doe</h2>
          <p>marrydoe@gmail.com</p>
        </div>
      </div>

      <p className="text-sm px-4 pb-4 shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        tempore doloribus magnam illum debitis
      </p>
    </div>
  );
};

export default Home;
