import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import FetchUser from "./api/FetchUser";
import UserCard from "./containers/UserCard";
import LoadingIndicator from "./components/LoadingIndicator";
import User from "./types/User";
import "./App.css";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentError, setCurrentError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Fetch your first user");

  function fetchUserClick() {
    setLoading(true);
    setCurrentUser(null);
    FetchUser()
      .then((user) => {
        setLoading(false);
        setCurrentUser(user);
        setButtonText("Fetch another");
      })
      .catch((reason) => {
        console.log(reason);
        setCurrentError("Something went wrong");
        setButtonText("Try again");
      });
  }

  if (currentError != null) {
    return (
      <div className="App-content">
        {currentError}
        <Button variant="contained" onClick={() => fetchUserClick()}>
          Try again!
        </Button>
      </div>
    );
  }

  return (
    <div className="App-content">
      {loading && <LoadingIndicator />}
      {currentError && <div>{currentError}</div>}
      {currentUser && <UserCard {...currentUser}></UserCard>}
      {!loading && (
        <Button
          id="fetchButton"
          variant="contained"
          color="primary"
          onClick={() => fetchUserClick()}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
