
import { useState } from "react";
import logo from "../assets/logo.png";

import {
  FaHome,
  FaBible,
  FaSeedling,
  FaFlag,
  FaMusic,
  FaBusinessTime,
  FaStackExchange,
} from "react-icons/fa";

import {
  MdMoreHoriz,
  MdSportsBasketball,
} from "react-icons/md";

import LoginForm from "../components/loginForm";
import Button from "../components/button";

function Header() {
  const toDayDate = new Date();

  const [isActive, setIsActive] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      label: "All",
      icon: (
        <FaHome color={isActive === "All" ? "blue" : "gray"} />
      ),
    },
    {
      label: "Sports",
      icon: (
        <MdSportsBasketball
          color={isActive === "Sports" ? "blue" : "gray"}
        />
      ),
    },
    {
      label: "Religion",
      icon: (
        <FaBible
          color={isActive === "Religion" ? "blue" : "brown"}
        />
      ),
    },
    {
      label: "Agriculture",
      icon: (
        <FaSeedling
          color={isActive === "Agriculture" ? "blue" : "gray"}
        />
      ),
    },
    {
      label: "Politics",
      icon: (
        <FaFlag
          color={isActive === "Politics" ? "blue" : "green"}
        />
      ),
    },
    {
      label: "Entertainment",
      icon: (
        <FaMusic
          color={isActive === "Entertainment" ? "blue" : "orange"}
        />
      ),
    },
    {
      label: "Business",
      icon: (
        <FaBusinessTime
          color={isActive === "Business" ? "blue" : "pink"}
        />
      ),
    },
    {
      label: "Technology",
      icon: (
        <FaStackExchange
          color={isActive === "Technology" ? "blue" : "gray"}
        />
      ),
    },
  ];

  return (
    <>
   
      <div className="flex justify-between items-center py-5 px-10 lg:px-30 border-b-2 border-gray-600">

        <div className="flex items-center gap-5">
          <img className="w-32 h-24 object-contain" src={logo} alt="The Daily Brief logo" />

          <h1 className="font-bold text-3xl text-blue-900">
            THE DAILY BRIEF
          </h1>
        </div>

        <p>{toDayDate.toDateString()}</p>

        <Button name="Subscribe" onClick={() => setIsOpen(true)} background="bg-blue-900" />
      </div>


      <div className="flex flex-wrap gap-10 py-5 px-10 lg:px-30">

        {items.map((item) => {
          const isCurrentActive = isActive === item.label;

          return (
            <div
              key={item.label}
              onClick={() => setIsActive(item.label)}
              className={`flex items-center gap-2 cursor-pointer pb-3 ${ isCurrentActive? "border-b-2 border-blue-700"  : ""}`}
            >
              {item.icon}

              <span
                className={`font-medium ${ isCurrentActive? "text-blue-700": "" }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}

      
        <div className="flex items-center gap-1 cursor-pointer pb-3">
          <span>More</span>
          <MdMoreHoriz />
        </div>
      </div>

  
      {isOpen && ( <LoginForm isClosed={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default Header;

