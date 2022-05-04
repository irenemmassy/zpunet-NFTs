import React, { useState } from "react";

const menuClass =
  "text-whites font-semibold tracking-widest text-sm my-6 lg:my-0 lg:mx-6 hover:text-blue transitione";

function Header() {
  const [show, setShow] = useState(true);
  return (
    <div className="grid grid-cols-4 justify-center items-center relative">
      <a href="/" className="lg:col-span-1 col-span-2">
        <img src="logo.png" alt="Logo" className="w-32" />
      </a>
      <div className="col-span-2 flex lg:hidden justify-end">
        <button
          onClick={() => setShow(!show)}
          className={` bt-linear font-semibold text-whites text-md py-3 px-5 rounded`}
        >
          <i className={`${show ? "far fa-bars" : "far fa-times"}`}></i>
        </button>
      </div>

      <div
        className={`${
          show ? "hidden" : "block"
        } bgSmall left-0 px-4 right-0 absolute top-12 lg:px-0 lg:relative lg:top-0 lg:col-span-3 lg:flex gap-10 justify-end items-center`}
      >
        <ul className="lg:flex">
          <li className={menuClass}>
            <a href="#">HOME</a>
          </li>
          <li className={menuClass}>
            <a href="#">ABOUT US</a>
          </li>
          <li className={menuClass}>
            <a href="#">EXPLORE</a>
          </li>
        </ul>
        <button className="lg:border-0 border border-whites hover:skew-x-12 transitione bt-linear font-semibold text-whites text-sm py-3 px-8 rounded">
          CONNECT
        </button>
      </div>
    </div>
  );
}

export default Header;
