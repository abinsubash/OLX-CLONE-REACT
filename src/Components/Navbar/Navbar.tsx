import logo from "../../assets/symbol.png";
import search from "../../assets/search.svg";
import setll from "../../assets/addButton.png";
import arrowDown from "../../assets/arrow-down.svg";
import { useModal } from "../Context/ModalContext";
import { useEffect } from "react";
import Cookies from 'js-cookie'
import {useAuth} from "../Context/UserexistContext"
import React from 'react';

const Navbar: React.FC = () => {
  const { setLoginModal, setSellModal } = useModal();
  const {setUser, user} = useAuth();

  // Check for userId in cookies when component mounts
  useEffect(() => {
    const userId = Cookies.get("userId");
    if (userId) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [setUser]);

  const handleLogout = () => {
    try {
      Cookies.remove("userId");
      setUser(false);
      // Optional: Clear localStorage data if needed
      // localStorage.removeItem('userData');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="m-0 p-0">
      <div className="w-full h-18 shadow-md">
        <div className="fixed w-full h-17 bg-[rgb(241,245,249)] flex items-center px-4">
          <img src={logo} className="h-7 w-12" alt="Logo" />
          <input
            className="sticky w-67 h-13 border-3 px-8 border-r-2 border-black bg-white ml-5 rounded-lg focus:border-green-800 focus:outline-none"
            placeholder="Search city, area, or locality"
          />
          <input
            className="sticky w-130 h-13 border-3 px-8 border-black bg-white ml-5 rounded-l-md focus:border-green-800 focus:outline-none"
            placeholder="Find Cars, Mobile, Phones And More..."
          />
          <div className="w-12 h-13 border border-black rounded-r-md bg-[rgb(0,47,52)]">
            <img src={search} className="w-5 h-auto m-3.5" alt="Search" />
          </div>
          <div className="ml-3.5 w-25 h-10 flex items-center justify-center text-green-950 font-bold cursor-pointer">
            <p>English</p>
            <img className="w-5 ml-3 mt-1" src={arrowDown} alt="Dropdown" />
          </div>

          {Cookies.get("userId") || user ? (
            <div
              className="ml-5 w-16 h-10 text-red-600 flex items-center justify-center font-bold underline hover:text-red-800 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          ) : (
            <div
              className="ml-5 w-12 h-10 text-green-950 flex items-center justify-center font-bold underline hover:text-green-800 cursor-pointer"
              onClick={() => setLoginModal(true)}
            >
              Login
            </div>
          )}

          <div
            className="ml-4 w-23 h-15 items-center justify-center cursor-pointer"
            onClick={Cookies.get("userId") ? () => setSellModal(true) : () => setLoginModal(true)}
            >
            <img className="mt-2" src={setll} alt="Sell" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-10  bg-gray-100">
        <p className="font-semibold cursor-pointer">ALL CATEGORIES</p>
        <ul className="flex space-x-6 text-sm">
          <li className="cursor-pointer">Cars</li>
          <li className="cursor-pointer">Motorcycles</li>
          <li className="cursor-pointer">Mobile Phones</li>
          <li className="cursor-pointer">For Sale: Houses & Apartments</li>
          <li className="cursor-pointer">Scooters</li>
          <li className="cursor-pointer">Commercial & Other Vehicles</li>
          <li className="cursor-pointer">For Rent: Houses & Apartments</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
