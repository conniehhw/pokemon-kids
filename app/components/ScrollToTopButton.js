"use client";

import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";
import styles from "./components.module.css";

// Component function: Render a scroll button to enable user to scroll screen back up to the top,
// Arrow scroll to move back up to top of page

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
      className={`transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${styles.scrollbutton}`}
      onClick={scrollToTop}
    >
      <GoMoveToTop />
    </button>
  );
};

export default ScrollToTopButton;
