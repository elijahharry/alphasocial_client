import Head from "./Head/Head";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const MainWrap = ({ head, children }) => {
  return (
    <>
      <Head title={head?.title} desc={head?.desc} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainWrap;
