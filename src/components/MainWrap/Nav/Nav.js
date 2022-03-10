import Link from "next/link";
import { useState } from "react";
import { useScreenSize } from "@context/ScreenSize";
import { AnimatePresence, motion } from "framer-motion";

import { Container, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();
  const screen = useScreenSize();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav id="nav" className={classes.nav}>
        <Container maxWidth="lg" className={classes.container}>
          <Link href="/" passHref>
            <a className={classes.brand}>
              <img src="/img/logo.svg" className={classes.logo} />
            </a>
          </Link>
          {screen.width > 1100 ? (
            <div className={classes.links}>
              {links.map((link, i) => (
                <Link href={link.link} passHref>
                  <Button
                    className={`${classes.link} ${
                      i % 2 === 0
                        ? classes.link_secondary
                        : classes.link_primary
                    }`}
                  >
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
          ) : (
            <IconButton
              color="primary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Container>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.5 }}
            className={classes.mobile}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className={classes.mobile_container}>
              <Link href="/" passHref>
                <a className={classes.brand}>
                  <img src="/img/logo.svg" className={classes.logo} />
                </a>
              </Link>
              <div className={classes.mobile_links}>
                {links.map((link, i) => (
                  <Link href={link.link} passHref>
                    <Button
                      className={`${classes.mobile_link} ${
                        i % 2 === 0
                          ? classes.link_secondary
                          : classes.link_primary
                      }`}
                    >
                      {link.text}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

const links = [
  { text: "About", link: "/#about" },
  { text: "Work", link: "/#case-studies" },
  { text: "Services", link: "/#services" },
  { text: "Tweets", link: "/#tweets" },
  { text: "Contact", link: "/contact" },
];
