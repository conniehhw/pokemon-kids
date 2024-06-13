"use client";

import { useEffect, useState } from "react";
// import { BiSolidChevronUpSquare } from "react-icons/bi";
import { FaChevronUp } from "react-icons/fa";
import styles from "./components.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      // className={`bottom-4 right-4 rounded-full p-2 outline-none}
      className={`transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${styles.scrollbutton}`}
      onClick={scrollToTop}
    >
      <FaChevronUp />
      <br></br>
      Back
      <br></br>to Top
    </button>
  );
};

export default ScrollToTopButton;
