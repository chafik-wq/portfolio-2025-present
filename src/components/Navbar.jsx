import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleToggle = useCallback(() => {
    setToggle((prevToggle) => !prevToggle);
  }, [setToggle]);
  
  const handleScrollToTop = useCallback(() => {
    setActive("");
    window.scrollTo(0, 0);
  }, [setActive]);

  const memoizedNavLinks = useMemo(
    () =>
      navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`${
            active === nav.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(nav.title)}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      )),
    [navLinks,active]
  );

  const memoizedMobileNavLinks = useMemo(
    () =>
      navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
          onClick={() => {
            setToggle((prevToggle) => !prevToggle);
            setActive(nav.title);
          }}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      )),
    [navLinks, active]
  );

  const memorizedIfScrolledBgPrimaryOrBgTransparent = useMemo(
    () => scrolled ? "bg-primary" : "bg-transparent",
    [scrolled]
  );

  const memorizedIfToggleCloseOrMenuIcons = useMemo(
    () => toggle ? close : menu,
    [toggle, close, menu]
  );

  const memorizedIfToggleFlexOrHidden = useMemo(
    () => !toggle ? "hidden" : "flex",
    [toggle]
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${memorizedIfScrolledBgPrimaryOrBgTransparent}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleScrollToTop}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Chafik &nbsp;
            <span className="sm:block hidden">
              {" "}
              | copyrights JavaScript Mastery
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {memoizedNavLinks}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={memorizedIfToggleCloseOrMenuIcons}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={handleToggle}
          />

          <div
            className={`${memorizedIfToggleFlexOrHidden} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {memoizedMobileNavLinks}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
