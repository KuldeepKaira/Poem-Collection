import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) {
    return false;
  }

  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTopHandler}
    >
      <BsFillArrowUpCircleFill className="icon" />
    </div>
  );
};

export default ScrollToTop;
