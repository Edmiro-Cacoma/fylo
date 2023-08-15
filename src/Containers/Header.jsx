import * as data from "../data";
import { useState } from "react";


const Header = () => {
  const [count] = useState(1);
  return (
    <header className="flex flex-wrap items-center justify-center gap-8 max-w-[84rem] px-8 pt-8 text-base font-raleway mx-auto md:justify-between lg:pt-[4.5625rem]">
      <a
        href="/"
        className="absolute left-0 m-3 z-50 border-2 border-white bg-dark-blue-intro p-3 transition focus:translate-x-0 -translate-x-[150%] "
      >
        skip to main content
      </a>
      <img src={data.menus[0]} alt={data.altText[0]} />
      {count % 2 === 0 ? "": data.navMenu}
    </header>
  );
};
export default Header;
