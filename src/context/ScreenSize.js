import { createContext, useContext, useState, useEffect } from "react";

const ScreenSize = createContext();

export function useScreenSize() {
  return useContext(ScreenSize);
}

export function ScreenProvider({ children }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const grabSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    grabSize();
    window.addEventListener("resize", grabSize);
  }, []);

  return (
    <ScreenSize.Provider value={{ width: width, height: height }}>
      {children}
    </ScreenSize.Provider>
  );
}
