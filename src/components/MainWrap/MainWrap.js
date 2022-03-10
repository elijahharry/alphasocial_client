import Head from "./Head/Head";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import { useScreenSize } from "@context/ScreenSize";
import { useState, useEffect } from "react";

const MainWrap = ({ head, children }) => {
  const screen = useScreenSize();
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const footer = document.getElementById("footer");
    if (nav && footer) {
      const navDim = nav.getBoundingClientRect();
      const footerDim = footer.getBoundingClientRect();
      setMinHeight(screen.height - navDim.height - footerDim.height);
    }
  }, [screen]);

  return (
    <>
      <Head title={head?.title} desc={head?.desc} />
      <Nav />
      <main
        style={{
          minHeight: minHeight,
          // height: minHeight < screen.height ? minHeight : "auto",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainWrap;
