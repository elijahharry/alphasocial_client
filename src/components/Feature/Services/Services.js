import Service from "./Service/Service";

import useStyles from "./styles";

const Services = () => {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      {services.map((s, i) => (
        <Service service={s} index={i} />
      ))}
    </div>
  );
};

export default Services;

const services = [
  {
    type: "Content creation",
    img: "eloise.jpg",
  },
  {
    type: "Customer acquisition strategy",
    img: "eloise.jpg",
  },
  {
    type: "Memes",
    img: "eloise.jpg",
  },
  {
    type: "Audience building",
    img: "eloise.jpg",
  },
];
