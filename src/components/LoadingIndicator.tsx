import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  indicator: {
    margin: theme.spacing(15),
    padding: theme.spacing(2, 3, 2, 4),
  },
}));
const LoadingIndicator: React.FC = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.indicator} color="primary" />;
};

export default LoadingIndicator;
