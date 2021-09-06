import { Container, Button } from "@material-ui/core";
import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.brand}>
          <img src="/img/logo.svg" className={classes.logo} />
        </div>
        <div className={classes.links}>
          {links.map((link, i) => (
            <Button
              className={`${classes.link} ${
                i % 2 === 0 ? classes.link_secondary : classes.link_primary
              }`}
            >
              {link.text}
            </Button>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Nav;

const links = [
  { text: "about", link: "/#about" },
  { text: "Case studies", link: "/#case-studies" },
  { text: "Services", link: "/#services" },
  { text: "Tweets", link: "/#Tweets" },
];
