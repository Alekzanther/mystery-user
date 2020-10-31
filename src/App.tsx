import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import FetchUser from "./api/FetchUser";
import UserCard from "./containers/UserCard";
import User from "./types/User";
import "./App.css";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentError, setCurrentError] = useState<string | null>(null);

  function fetchUserClick() {
    setCurrentUser(null);
    FetchUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((reason) => {
        console.log(reason);
        setCurrentError("Something went wrong");
      });
  }

  if (currentError != null) {
    return (
      <Container maxWidth="sm">
        <header className="App-header">
          <p>:(</p>
          <Button variant="contained" onClick={() => fetchUserClick()}>
            Try again!
          </Button>
          {currentError}
        </header>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <div className="App-content">
        <p>Fetch your next mystery user</p>
        <Button variant="contained" onClick={() => fetchUserClick()}>
          Let's go!
        </Button>
        {currentUser && <UserCard {...currentUser}></UserCard>}
      </div>
    </Container>
  );
}
