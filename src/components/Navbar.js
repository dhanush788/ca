
import React from "react";
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {signInWithGoogle} from "../functions/auth/signIn";
import logo from "../assets/dhishna_logo.png";
import {useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../functions/auth/firebase";
import {UserContext} from "../functions/auth/userContext";


const navLinks = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "Leaderboard",
        title: "Leaderboard",
    },
    {
        id: "rules",
        title: "Rules",
    },
    {
        id: "Contact",
        title: "Contact",
    },
];

const Navbar = () => {
    const {user, loading} = React.useContext(UserContext);
    const navigate = useNavigate();
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const signOutFn = () => {
        signOut(auth).then(() => navigate("/")).catch(e=>console.log(e))
    }
    const signInFn = signInWithGoogle(() => navigate("/register"))
    return (
        <nav
            className={`sm:px-10 px-6 w-full flex items-center ${
                toggle && "fixed z-[20]"
            } h-[100px] bg-[#0D0D0D]  border-b-2 border-gray-300`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex flex-row gap-4">
                    <div className="md:hidden flex flex-1  items-center">
                        {toggle ? (
                            <AiOutlineClose
                                style={{color: "#fff"}}
                                className="w-[28px] h-[28px] object-contain"
                                onClick={() => setToggle(!toggle)}
                            />
                        ) : (
                            <GiHamburgerMenu
                                style={{color: "#fff"}}
                                className="w-[28px] h-[28px] object-contain"
                                onClick={() => setToggle(!toggle)}
                            />
                        )}
                        <div
                            className={`${!toggle ? "hidden" : "flex"} black-gradient z-10
                                fixed left-0 top-[100px] z-[1035] bg-black h-screen w-screen -translate-x-full overflow-hidden bg-black shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 `}
                            data-te-sidenav-init
                            data-te-sidenav-hidden="false"
                            data-te-sidenav-mode="side"
                            data-te-sidenav-content="#content"
                        >
                            <ul className="list-none flex items-start flex-1 flex-col gap-10 px-10 py-10">
                                {navLinks.map((nav) => (
                                    <li
                                        key={nav.id}
                                        className={` font-medium cursor-pointer text-[16px]  tracking-[0.15rem] ${
                                            active === nav.title ? "text-gray-400" : "text-white"
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
                        <img src={logo} alt="logo" className="w-24 h-24 object-contain "/>
                        <div className="flex flex-col my-auto">
                            <p className="text-white text-lg font-extrabold cursor-pointer tracking-[0.45rem] ">
                                DHISHNA
                            </p>
                            <p className="text-white font-medium text-[10px]">SOE | CUSAT</p>
                        </div>
                    </div>
                </div>
                <ul className="list-none hidden md:flex flex-row gap-10 lg:gap-24">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className="text-white hover:text-gray-300 text-[12px] font-extrabold cursor-pointer uppercase tracking-[0.25rem] flex my-auto"
                            onClick={() => {
                                setActive(nav.title);
                            }}
                        >
                            <a href={`${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={user ? signOutFn : signInFn}
                    class="bg-white hidden sm:flex py-2.5 px-4 text-[12px] font-extrabold rounded uppercase tracking-[0.25rem]">
                    {user ? "Sign out" : "Sign in"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;