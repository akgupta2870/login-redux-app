import { makeStyles, TextField } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  root: {
    minWidth: 250,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  container: {
    minWidth: 250,
  },
  helpertext: {
    color: "red",
  },
  usernamediv: {
    textAlign: "left",
  },
  TextFielddiv: {
    minWidth: 550,
  },
}));
