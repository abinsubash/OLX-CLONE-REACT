import logo from "../../assets/symbol.png";
import search from "../../assets/search.svg";
import setll from "../../assets/addButton.png";
import arrowDown from "../../assets/arrow-down.svg";

const Navbar = () => {
  return (
    <div className="m-0 p-0">
      <div className="w-full h-18 shadow-md">
        <div className="fixed w-full h-17 bg-[rgb(241,245,249)] flex items-center px-4">
          <img src={logo} className="h-7 w-12" alt="Logo" />
          <input
            className="sticky w-67 h-13 border-3 px-8 border-r-2 border-black bg-white ml-5 rounded-lg focus:border-green-800 focus:outline-none"
            placeholder="Search city,area,or locality"
          />
          <input
            className="sticky w-130 h-13 border-3 px-8 border-black bg-white ml-5 rounded-l-md focus:border-green-800 focus:outline-none"
            placeholder="Find Cars, Mobile, Phones And More..."
          />
          <div className="w-12 h-13 border border-black rounded-r-md bg-[rgb(0,47,52)]">
            <img src={search} className="w-5 h-auto m-3.5" alt="" />
          </div>
          <div className="ml-3.5 w-25 h-10 flex items-center justify-center text-green-950 font-bold cursor-pointer">
            <p>English</p>
            <img className="w-5 ml-3 mt-1 " src={arrowDown} alt="" />
          </div>
          <div className="ml-5 w-12 h-10 text-green-950 flex items-center justify-center font-bold underline hover:text-green-800 cursor-pointer">
            Login
          </div>
          <div className="ml-4 w-23 h-15 items-center justify-center">
            <img className="mt-2 " src={setll} alt="" />
          </div>
        </div>
      </div>
      <div className="flex w-full h-10 shadow-md items-center">
        <div className="flex justify-center w-40 h-7">
          <p className="text-green-950 font-medium hover:text-green-800 cursor-pointer">
            All CATEGORIES
          </p>
          <img
            className="ml-2 w-5 h-aut cursor-pointer"
            src={arrowDown}
            alt=""
          />
        </div>
        <div className=" w-auto h-auto text-sm text-green-950 ml-7  hover:text-green-800 cursor-pointer">
          <p>Cars</p>
        </div>
        <div className=" w-auto h-auto text-sm text-green-950 ml-5 hover:text-green-800 cursor-pointer">
          <p>Motorcycles</p>
        </div>
        <div className=" w-auto h-auto text-sm text-green-950 ml-5 hover:text-green-800 cursor-pointer">
          <p>Mobile Phones</p>
        </div>
        <div className=" w-auto h-auto text-sm text-green-950 ml-5 hover:text-green-800 cursor-pointer">
          <p>For Sales:House & Apartments</p>
        </div>
        <div className=" w-auto h-auto text-sm text-green-950 ml-5 hover:text-green-800 cursor-pointer">
          <p>Scooters</p>
        </div>
        <div className=" w-auto h-auto text-sm text-green-950 ml-5 hover:text-green-800 cursor-pointer">
          <p>Commercial & Other Vehicles</p>
        </div>
        <div className=" w-auto h-auto text-sm text-green-950 ml-5 hover:text-green-800 cursor-pointer">
          <p>For Rent:House & Apartments</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
