import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contact: {
    padding: "50px 0 50px 0",
    position: "relative",
  },
  paper: {
    position: "relative",
    width: "100%",
    padding: theme.spacing(4),
    height: "auto",
    margin: "10px 0 10px 0",
    overflow: "hidden",
    borderRadius: 20,
    color: theme.palette.text.primary,
    zIndex: 0,
    backgroundColor: "#0000001A",
    backdropFilter: "blur(20px)",
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    "& .MuiInputBase-root": {
      overflow: "hidden",
    },
    "& .MuiFilledInput-root, .MuiFilledInput-root": {
      backgroundColor: "#ffffff",
      borderRadius: 10,
      boxShadow: theme.shadows[3],
    },
    "& .MuiSelect-root": {
      width: 300,
    },
  },
  fields_row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  input: {
    margin: "0 0 20px 0",
  },
  left: {
    marginRight: 10,
  },
  right: {
    marginLeft: 10,
  },
  select: {
    "& .MuiFormLabel-root": {
      color: "#5b6c7b",
      zIndex: 10,
    },
    "& .MuiInputLabel-formControl": {
      transform: "translate(12px, 20px) scale(1)",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(11px, 8px) scale(.75)",
      transformOrigin: "top left",
    },
  },
  submit: {
    "& .MuiButton-label": {
      color: `#fff`,
    },
    "& svg": {
      marginRight: ".3rem",
    },
  },
  button: {
    boxShadow: theme.shadows[3],
    "&:hover": {
      boxShadow: theme.shadows[5],
    },
  },
  message: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    backgroundColor: "#0000001A",
    backdropFilter: "blur(20px)",
    boxShadow: theme.shadows[2],
    borderRadius: 20,
    color: "#fff",
    "& svg": {
      marginRight: theme.spacing(1),
    },
  },
}));
