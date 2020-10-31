import React from "react";
import User from "../types/User";

const UserCard: React.FC<User> = (props) => {
  return <div>Hello there {props.name}</div>;
};

export default UserCard;
