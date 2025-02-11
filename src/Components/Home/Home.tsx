import React from "react";
import Navbar from "../Navbar/Navbar";
import Car from '../../assets/car.png'
import Modal from '../Modal/Login'
import Sell from "../Modal/Sell";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-auto w-full">
        <h1 className="text-2xl ml-10 mt-10 text-green-950 font-medium ">
          Fresh recommendations
        </h1>

        <div className=" ml-10 mt-3 h-auto w-300 flex flex-wrap gap-5">
          <div className="border border-black rounded-lg h-70 w-70">
            <div className="h-40 w-65 m-2 border border-black">
                <img className="w-full h-full" src={Car} alt="" />
            </div>
            <div className="m-2 h-20 w-65 border border-black">
            <p className="ml-1 font-bold text-2xl">₹19999</p>
            <p className="ml-3">name</p>
            <p className="ml-3">date</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal/> */}
      {/* <Sell/> */}
    </>
  );
};

export default Home;
