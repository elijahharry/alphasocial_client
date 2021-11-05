import Link from "next/link";
import { makeStyles } from "@material-ui/core";

const Crumbs = ({ dark, crumbs }) => {
  const classes = useStyles();
  return (
    <ul className={classes.crumbs}>
      {crumbs.map((c, i) => (
        <>
          <li
            className={`${classes.crumb} ${
              i + 1 === crumbs.length
                ? dark
                  ? classes.selected_dark
                  : classes.selected_light
                : classes.default
            }`}
          >
            <Link href={c.href} passHref>
              <a>{c.text}</a>
            </Link>
          </li>
          {i + 1 !== crumbs.length && (
            <li className={classes.seperator + " no-select"}>\</li>
          )}
        </>
      ))}
    </ul>
  );
};

export default Crumbs;

const useStyles = makeStyles((theme) => ({
  crumbs: {
    display: "flex",
    listStyle: "none",
    marginInline: 0,
    marginBlock: 0,
    paddingInline: 0,
    alignItems: "center",
    marginBottom: theme.spacing(0.5),
  },
  crumb: {
    cursor: "pointer",
    ...theme.typography.body1,
    fontWeight: 900,
    "&:hover": {
      textDecoration: "underline",
      textDecorationThickness: 2.5,
      opacity: 0.7,
    },
  },
  seperator: {
    ...theme.typography.body1,
    margin: `0 ${theme.spacing(2)}px`,
    marginTop: 2,
    fontWeight: 900,
    pointerEvents: "none",
    color: "inherit",
  },
  default: {
    color: "inherit",
  },
  selected_light: {
    color: theme.palette.primary.main,
  },
  selected_dark: {
    color: theme.palette.secondary.light,
  },
}));
