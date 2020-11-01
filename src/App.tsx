import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FetchUserButtonIcon from "@material-ui/icons/Forward";
import FetchUser from "./api/FetchUser";
import UserCard from "./containers/UserCard";
import LoadingIndicator from "./components/LoadingIndicator";
import User from "./types/User";
import ErrorIndicator from "./components/ErrorIndicator";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  fetchButton: {
    margin: theme.spacing(15),
    padding: theme.spacing(2, 3, 2, 4),
  },
}));
export default function App() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentError, setCurrentError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Start exploring!");

  function fetchUserClick() {
    setLoading(true);
    setCurrentUser(null);

    FetchUser()
      .then((user) => {
        setLoading(false);
        setCurrentUser(user);
        setButtonText("Fetch another");
        setCurrentError(null);
      })
      .catch((reason) => {
        console.log(reason);
        setCurrentError("Something went wrong!");
        setButtonText("Try again");
        setLoading(false);
      });
  }

  return (
    <div className="App-content">
      {currentError && <ErrorIndicator errorText={currentError.toString()} />}
      {loading && <LoadingIndicator />}
      {currentUser && <UserCard {...currentUser}></UserCard>}
      {!loading && (
        <Button
          className={classes.fetchButton}
          id="fetchButton"
          variant="contained"
          color="primary"
          endIcon={<FetchUserButtonIcon />}
          onClick={() => fetchUserClick()}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
