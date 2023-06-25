import { FaHandHoldingMedical } from "react-icons/fa"; 
import React, { useState } from 'react';
import { AiFillFileAdd } from "react-icons/ai"; 
import { AiFillDashboard } from "react-icons/ai"; 
import { FaReadme } from "react-icons/fa"; 
import { RiHospitalFill } from "react-icons/ri"; 
import { GiNurseFemale } from "react-icons/gi"; 
import { GiStethoscope } from "react-icons/gi"; 
import Navbar from "../adminFiles/Navbar";
import AddStaffForm from "../../components/adminFiles/AddStaffForm";



function Adminsidebar() {

  const Menus = [
    { title: "Dashboard" , src: <AiFillDashboard size={30}/> },
    { title: "Doctors", src: <GiStethoscope size={30}/> },
    { title: "Nurses" , src: <GiNurseFemale size={30} />},
    { title: "Wards", src: <RiHospitalFill size={30} /> },
    { title: "Admission clerks", src: <FaReadme size={30} /> },
    { title: "Add to staff", src:<AiFillFileAdd size={30} />  },
    
  ];
  const [open, setOpen] = useState(true);
  return (
    <>
    <Navbar/>
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-gray h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="flex gap-x-7 items-center">
        <FaHandHoldingMedical size={55} color="#e0e7ff"/>
          <h1 className={`text-white origin-left font-large font-serif italic text-xl duration-200 ${!open && "scale-0"}`}
          >
            MEDNET
           
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}  `}
            >
              <span>{Menu.src}</span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                <a >{Menu.title}</a>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        
        <AddStaffForm/>
      </div>
    </div>
    </>
  );
};

export default Adminsidebar;