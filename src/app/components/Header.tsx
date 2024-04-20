"use client"
import Logo from "../images/Logo.svg";
import Image from "next/image";
import Cross from '../images/cross.png'
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex justify-between max-w-6xl m-auto px-2">
      <Image src={Logo} height={62} className=" w-28 h-16 lg:ml-3 sm:w-20" alt={"Logo"} />
      <svg
      onClick={() => {setMenu(true)}}
      className=" hidden md:block md:self-center mr-4"
        width="27"
        height="23"
        viewBox="0 0 27 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5469 4.01562C25.8984 4.01562 26.25 3.72266 26.25 3.3125V1.4375C26.25 1.08594 25.8984 0.734375 25.5469 0.734375H0.703125C0.292969 0.734375 0 1.08594 0 1.4375V3.3125C0 3.72266 0.292969 4.01562 0.703125 4.01562H25.5469ZM25.5469 13.3906C25.8984 13.3906 26.25 13.0977 26.25 12.6875V10.8125C26.25 10.4609 25.8984 10.1094 25.5469 10.1094H0.703125C0.292969 10.1094 0 10.4609 0 10.8125V12.6875C0 13.0977 0.292969 13.3906 0.703125 13.3906H25.5469ZM25.5469 22.7656C25.8984 22.7656 26.25 22.4727 26.25 22.0625V20.1875C26.25 19.8359 25.8984 19.4844 25.5469 19.4844H0.703125C0.292969 19.4844 0 19.8359 0 20.1875V22.0625C0 22.4727 0.292969 22.7656 0.703125 22.7656H25.5469Z"
          fill="#323232"
        />
      </svg>
      {menu && (
        <div className=" fixed right-0 flex flex-col bg-white p-10 h-svh z-10 gap-8">
          <div className=" fixed right-4 top-4 mr-6"><Image src={Cross} width={20} onClick={() => { setMenu(false); } } alt={"Cross"}/></div>
          <a href="#">Почивки и екскурзии</a>
          <a href="#">Хотели</a>
          <a href="#">Блог</a>
          <a href="#">За нас</a>
          <a href="#">Контакти</a>
        </div>
      )}
      <div className="flex gap-10 mt-7 mb-7 font-bold md:hidden">
        <a href="#">Почивки и екскурзии</a>
        <a href="#">Хотели</a>
        <a href="#">Блог</a>
        <a href="#">За нас</a>
        <a href="#">Контакти</a>
      </div>
    </header>
  );
};
export default Header;
