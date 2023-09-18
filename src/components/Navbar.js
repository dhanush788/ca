import React from 'react'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/dhishna_logo_1.svg";

const navLinks = [
    {
        id: "Home",
        title: "Home",
    },
    {
        id: "Leaderboard",
        title: "Leaderboard",
    },
    {
        id: "Contact",
        title: "Contact",
    },
];

const Navbar = () => {

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);


    return (
        <nav className="sm:px-10 px-6 w-full flex items-center   bg-[#0D0D0D]  border-b-2 border-gray-300">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className='flex flex-row gap-4'>

                    <div className="md:hidden flex flex-1  items-center">
                        {toggle ?
                            <AiOutlineClose
                                style={{ color: "#fff" }}
                                className='w-[28px] h-[28px] object-contain'
                                onClick={() => setToggle(!toggle)} />
                            :
                            <GiHamburgerMenu
                                style={{ color: "#fff" }}
                                className='w-[28px] h-[28px] object-contain'
                                onClick={() => setToggle(!toggle)} />}
                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 black-gradient  absolute top-20  min-w-[140px] z-10 rounded-xl`}
                        >
                            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                                {navLinks.map((nav) => (
                                    <li
                                        key={nav.id}
                                        className={` font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                            }`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(nav.title);
                                        }}
                                    >
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-row  justify-center align-center my-auto">
                        <img src={logo} alt="logo" className="w-24 h-24 object-contain " />
                        <div className='flex flex-col my-auto'>
                            <p className="text-white text-lg font-extrabold cursor-pointer tracking-[0.45rem] ">DISHNA</p>
                            <p className='text-white font-medium text-[10px]'>SOE | CUSAT</p>
                        </div>
                    </div>
                </div>
                <ul className="list-none hidden md:flex flex-row gap-10 lg:gap-24">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className="text-white hover:text-gray-300 text-[12px] font-extrabold cursor-pointer uppercase tracking-[0.25rem] flex my-auto"
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <button class="bg-white hidden sm:flex py-2.5 px-4 text-[12px] font-extrabold rounded uppercase tracking-[0.25rem]">Sign in</button>

            </div>
        </nav>
    )
}

export default Navbar