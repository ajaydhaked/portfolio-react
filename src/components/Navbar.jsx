import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTypewriter,Cursor } from "react-simple-typewriter";
import "../css/navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [ text ] = useTypewriter({
    words: ["Programmer", "Developer", "Student"],
    loop: Infinity,
    cursorStyle: "_",
    deleteSpeed: 70,
    typeSpeed: 100,
    
  });
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto navb">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10  object-contain" />
          <div className="text-white font-bold ">
            <p className="static-txt">Ajay</p>
            <p className="static-txt text-red-400 text-[20px]" >|<span className="typingClass ml-2 text-red-400">{text}</span><Cursor className="text-black" /></p>
          </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-poppins font-medium cursor-pointer `}
            >
              <a
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <input
          type="checkbox"
          id="hamburgerinput"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <div className=" hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div
          className={`mobilemenu z-10 sm:hidden black-gradient absolute top-16 ${toggle?"right-0":"-right-40"} mx-2 flex justify-center my-2 py-4 min-w-[140px] z-10 rounded-xl transition-all ease-in-out delay-400`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white z-10 text-[18px]`}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    document.getElementById("hamburgerinput").checked = false;
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
