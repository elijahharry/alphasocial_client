import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useStyles from "./styles";

const ImgZoom = ({ show, img, setShow }) => {
  const classes = useStyles();

  useEffect(() => {
    const exitOnEsc = (e) => {
      if (e.keyCode === 27) {
        setShow(false);
      }
    };
    const exit = () => {
      setShow(false);
    };
    document.addEventListener("keydown", exitOnEsc, false);
    document.addEventListener("scroll", exit, false);

    return () => {
      document.removeEventListener("keydown", exitOnEsc, false);
      document.removeEventListener("scroll", exit, false);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={classes.section}
          onClick={() => setShow(false)}
        >
          <div className={classes.img}>
            <img src={img} />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ImgZoom;
