import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface UserDetailProperties {
  content: string;
  description: string;
  icon: React.ReactNode;
}

const UserDetail: React.FC<UserDetailProperties> = (props) => {
  return (
    <ListItem>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText
        primaryTypographyProps={{ component: "h6" }}
        primary={props.description}
        secondaryTypographyProps={{ variant: "h5", color: "primary" }}
        secondary={props.content}
      />
    </ListItem>
  );
};

export default UserDetail;
