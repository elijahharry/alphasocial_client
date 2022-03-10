import Image from "next/image";
import { FaLinkedinIn, AiOutlineTwitter } from "react-icons/all";

import { makeStyles, ThemeProvider, Typography } from "@material-ui/core";

const Author = ({ author }) => {
  console.log(author);
  const classes = useStyles();
  const { firstName, lastName, description, seo, avatar } = author;
  const socials = seo?.social || {};

  return (
    <div className={classes.ctn}>
      {avatar?.url && (
        <div className={classes.avatar}>
          <Image
            src={avatar.url}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </div>
      )}
      <div className={classes.details}>
        <div className={classes.title}>
          <Typography variant="h6">
            {firstName} {lastName}
          </Typography>
          {socials?.linkedIn && (
            <Link url={socials.linkedIn} icon={<FaLinkedinIn />} />
          )}
          {socials?.twitter && (
            <Link url={socials.twitter} icon={<AiOutlineTwitter />} />
          )}
        </div>
        {description && (
          <Typography
            variant="body2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  );
};

export default Author;

const Link = ({ icon, url }) => {
  const classes = useStyles();
  return (
    <a href={url} target="_blank" className={classes.link}>
      {icon && icon}
    </a>
  );
};

const useStyles = makeStyles((theme) => ({
  ctn: {
    display: "flex",
    padding: `${theme.spacing(4)}px ${theme.spacing(1)}px`,
    // paddingTop: theme.spacing(4),
    // marginTop: theme.spacing(4),
    // position: "relative",
    // "&:after": {
    //   content: "''",
    //   top: 0,
    //   left: 0,
    //   position: "absolute",
    //   width: 300,
    //   height: 1,
    //   backgroundColor: "rgba(0,0,0,.1)",
    // },
  },
  avatar: {
    position: "relative",
    width: "6.5rem",
    height: "6.5rem",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: theme.shadows[2],
  },
  details: {
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& p": {
      maxWidth: 450,
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    "& h6": {
      fontWeight: 900,
    },
  },
  link: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.8),
    // color: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}));
