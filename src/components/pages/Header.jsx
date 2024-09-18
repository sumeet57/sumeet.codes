import React from 'react'
import '../../stylesheet/header.css';
import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMenuLine } from "react-icons/ri";


const Header = () => {
  return (
    <>
    <header>
      <nav>
        <div className="navcont">
          <div className="navleft">
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
          <div className="menuicon">
            <i className="ri-close-line close"></i>
          </div>
          <div className="menubody">
            <h1>home</h1>
            <h1>work</h1>
            <h1>project</h1>
            <h1>resume</h1>
            <h1>contact</h1>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header