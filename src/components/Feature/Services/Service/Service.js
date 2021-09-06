import Image from "next/image";

import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import useGradients from "@styles/gradients";
import useColors from "@styles/colors";

const Service = ({ service, index }) => {
  const classes = useStyles();
  const gradients = useGradients();
  const colors = useColors();

  return (
    <div
      key={`service-${index}`}
      className={`${classes.service} ${classes[`service_${index + 1}`]}`}
    >
      <div className={classes.img}>
        <Image
          src={`/img/${service.img}`}
          width={140}
          height={140}
          objectFit="cover"
          objectPosition="center"
          placeholder={service?.blur ? "blur" : "empty"}
          blurDataURL={service?.blur ? service.blur : ""}
        />
      </div>
      <div className={classes.blob}>
        <div className={`backdrop ${gradients.both_flipped}`} />
      </div>
      <Typography variant="h6" className={`${classes.text}`}>
        <span>{service.type}</span>
      </Typography>
    </div>
  );
};

export default Service;
