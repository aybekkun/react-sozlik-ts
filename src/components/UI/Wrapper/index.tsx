import React, { useEffect, useRef } from "react";
import useAppDispatch from "../../../hooks/useAppDispatch.hook";
import { setX, setY } from "../../../redux/scroll/slice";
type WrapperProps = {
  children: React.ReactNode | React.ReactNode[] | JSX.Element;
};
const Wrapper = ({ children }: WrapperProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const getPosition = () => {
    if (boxRef.current) {
      const x = boxRef.current.offsetLeft;
      dispatch(setX(x));
      const y = boxRef.current.offsetTop;
      dispatch(setY(y));
    }
  };

  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);

    return () => {
      window.removeEventListener("resize", getPosition);
    };
  }, []);
  return (
    <div ref={boxRef} className="wrapper__page">
      {children}
    </div>
  );
};

export default Wrapper;
