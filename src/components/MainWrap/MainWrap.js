import Head from "@component/Head/Head";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const MainWrap = ({ children }) => {
  return (
    <>
      <Head />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainWrap;
