import useInterval from "react-useinterval";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useScreenSize } from "@context/ScreenSize";

import useStyles from "./styles";

const StackedImgs = ({ imgs }) => {
  const classes = useStyles();
  const screen = useScreenSize();

  const [i, setI] = useState(0);
  const [next, setNext] = useState(1);
  const [prev, setPrev] = useState(imgs.length - 1);
  const togglI = () => {
    setPrev(i);
    if (i === imgs.length - 1) {
      setI(0);
      setNext(1);
    } else {
      if (i === imgs.length - 2) {
        setNext(0);
      } else {
        setNext(i + 2);
      }
      setI(i + 1);
    }
  };
  useInterval(togglI, 2000);

  const [imgElements, setImgElements] = useState();

  return (
    <div className={classes.stacked}>
      {imgs.map((img, index) => {
        let imgClass;
        let x = 0;
        let y = 0;
        let scale = 1;
        if (i === index) {
          {
            /* imgClass = classes.main;
          x = [80, 0, 0, 0];
          y = [20, 0, 0, 0];
          scale = [0.9, 1, 1, 1];
        } else if (index === next) {
          imgClass = classes.behind;
          x = [80, 80, 80, 80];
          y = [580, 20, 20, 20];
          scale = [0.9, 0.9, 0.9, 0.9];
        } else if (index === prev) {
          imgClass = classes.removing;
          x = [0, -40, -40, -40];
          y = [0, -20, 580, 580];
        } else {
          imgClass = classes.offpage;
          x = 80;
          y = 580; */
          }
          imgClass = classes.main;
          x = 0;
          y = [20, 0, 0];
          scale = 1;
        } else if (index === next) {
          imgClass = classes.behind;
          x = 80;
          y = 20;
          scale = [0.9, 0.9, 0.9, 0.9];
        } else if (index === prev) {
          imgClass = classes.removing;
          x = [0, -40, -40, -40];
          y = [0, -20, 580, 580];
        } else {
          imgClass = classes.offpage;
          x = 80;
          y = 580;
        }
        return (
          <motion.div
            className={`${classes.img} ${imgClass}`}
            animate={{ x: x, y: y, scale: scale }}
            transition={{ duration: 1.5, type: "spring" }}
            id={"stacked-img-" + img.src}
            key={"stacked-img-" + img.src}
          >
            <Image
              src={`/img/${img.src}`}
              width={548}
              height={588}
              placeholder={img?.blur ? "blur" : "empty"}
              blurDataURL={img?.blur ? img.blur : ""}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default StackedImgs;
