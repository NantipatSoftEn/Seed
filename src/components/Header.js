import React, { useState } from "react";
import MenuUserPanel from "./shared/MenuUserPanel";

const Header = (props) => {
  console.log(`propsHeader`, props);

  const [visible, setVisible] = useState(false);
  const style = {
    backgroundColor: `rgba(17, 21, 22, 0.14)`,
  };

  const handleLogout = () => {
    localStorage.clear();
    props.dispatchLogOut();
    props.history.push(`/login`);
  };

  return (
    <nav className="pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0" style={style}>
      <div className="flex flex-wrap items-center">
        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          <a href="#">
            <span className="text-xl pl-2">🌱🌱🌱</span>
          </a>
        </div>

        <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
          {/* <span className="relative w-full">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-800 text-sm text-white transition border border-transparent focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"
            />
            <div className="absolute search-icon" style={{ top: `.5rem`, left: `.8rem` }}>
              <svg
                className="fill-current pointer-events-none text-white w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </span> */}
        </div>

        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="flex-1 md:flex-none md:mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="#">
                ยังคิดไม่ออก
              </a>
            </li>

            <li className="flex-1 md:flex-none md:mr-3">
              <div className="relative inline-block">
                <button onClick={visible ? () => setVisible(false) : () => setVisible(true)} className="drop-button text-white focus:outline-none">
                  {" "}
                  <span className="pr-2">
                    <i className="em em-robot_face"></i>
                  </span>{" "}
                  Hi, {props.user.username}
                  {/* <loadingUser username={props.user} /> */}
                  <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <div className={"dropdownlist absolute bg-gray-900 text-white right-0 mt-3 p-3 overflow-auto z-30 " + (visible ? "" : "invisible")}>
                  {/* <MenuUserPanel href="/profile" name="Profile" icon="fas fa-user" />
                  <MenuUserPanel href="/settings" name="Settings" icon="fas fa-cogs" /> */}
                  <MenuUserPanel href="/login" onClick={handleLogout} name="Log Out" icon="fas fa-sign-out-alt" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
