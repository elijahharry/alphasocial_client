import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import useColors from "@styles/colors";
const Footer = () => {
  const classes = useStyles();
  const colors = useColors();
  const [date, setDate] = useState(new Date().getFullYear());

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        <img src="/img/logo.svg" className={classes.logo} />
        <Typography variant="body2">
          Alpha Social Group. © {date}, All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
