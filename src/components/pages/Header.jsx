import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../../stylesheet/header.css";
import {
  RiCloseLine,
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMenuLine,
} from "react-icons/ri";

const Header = () => {
  const [flag, setFlag] = useState(false);

  const openMenu = () => {
    if (!flag) {
      gsap.to(".menu", {
        duration: 0.5,
        transform: "translateY(0%) rotate(0deg)",
        opacity: 1,
        ease: "power2.inout",
      });
      setFlag(true);
    } else {
      gsap.to(".menu", {
        duration: 0.5,
        opacity: 0,
        transform: "translateY(-130%) rotate(-20deg)",
        ease: "power2.inout",
      });
      setFlag(false);
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="navcont">
            <div onClick={openMenu} className="navleft">
              <RiMenuLine />
            </div>
            <div className="navright">
              <i className="ri-github-line g">
                <RiGithubLine />
              </i>
              <i className="ri-facebook-line f">
                <RiFacebookLine />
              </i>
              <i className="ri-linkedin-line l">
                <RiLinkedinLine />
              </i>
              <i className="ri-instagram-line i">
                <RiInstagramLine />
              </i>
            </div>
          </div>
          <div className="menu">
            <div
              onClick={openMenu}
              className="close absolute right-0 top-0 p-2 bg-slate-400 m-2 rounded-full bg-[var(--main)] text-5xl"
            >
              <RiCloseLine />
            </div>
            <div className="left w-[40%] h-screen flex justify-center flex-col bg-slate-400 text-left">
              <p className="text-6xl px-2 py-10">home</p>
              <p className="text-6xl px-2 py-10">home</p>
              <p className="text-6xl px-2 py-10">home</p>
            </div>
            <div className="right"></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
