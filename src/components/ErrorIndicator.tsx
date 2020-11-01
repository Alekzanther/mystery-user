import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";

interface ErrorProps {
  errorText?: string;
}
const useStyles = makeStyles((theme) => ({
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ErrorIndicator: React.FC<ErrorProps> = ({ errorText }: ErrorProps) => {
  const classes = useStyles();
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../assets/5528-alert-notification-character.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classes.errorContainer}>
      <Lottie
        options={animationOptions}
        isStopped={false}
        isPaused={false}
        height={400}
        width={400}
      />
      {errorText}
    </div>
  );
};

export default ErrorIndicator;
