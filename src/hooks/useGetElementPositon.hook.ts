import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";

const useGetElementPositon = <T = unknown>() => {
  const positionRef = useRef<T>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const getPositionElem = useCallback(() => {
    if (positionRef.current) {
      //@ts-ignore
      const x = positionRef.current.offsetLeft;
      setX(x);
      //@ts-ignore
      const y = positionRef.current.offsetTop;
      setY(y);
    }
  }, []);

  useEffect(() => {
    getPositionElem();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", getPositionElem);

    return () => {
      window.removeEventListener("resize", getPositionElem);
    };
  }, []);

  return {positionRef, x, y};
};

export default useGetElementPositon;
