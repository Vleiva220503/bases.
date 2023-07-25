import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { effect } from "@chakra-ui/react";

export const useCounter = ({ maxcoun = 10 }) => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => {
      if (prev >= maxcoun) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  useLayoutEffect(() => {
    if (!counterElement.current) return;
    tl.current
      .to(counterElement.current, { y: -10, duration: 1, ease: "ease.out" })
      .to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, []);

  useEffect(() => {
    if(counter < maxcoun) return;
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    counterElement,
    handleClick,
  };
};
