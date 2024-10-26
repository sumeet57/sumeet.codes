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
        transform: "translateY(-0%) rotate(-0deg) scaleY(1)",
        borderBottomLeftRadius: 0,
        opacity: 1,
        scaleY: 1,
        duration: 0.5,
        ease: "sine.out",
      });
      setFlag(true);
    } else {
      gsap.to(".menu", {
        duration: 0.5,
        opacity: 0,
        scaleY: 0.5,
        borderBottomLeftRadius: "50%",
        transform: "translateY(-130%) rotate(-10deg) scaleY(0.5)",
        ease: "sine.out",
      });
      setFlag(false);
    }
  };

  return (
    <>
      <header>
        <nav className="fixed w-full h-fit py-2">
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
          <div className="menu overflow-hidden">
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
