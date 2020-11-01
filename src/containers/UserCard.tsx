import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Card, CardContent, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import User from "../types/User";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    margin: theme.spacing(3, 5, 5, 5),
  },
  card: {
    margin: 15,
  },
  cardRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  picture: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    fontSize: 48,
    margin: theme.spacing(0, 0, 5, 0),
  },
  pictureContent: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const UserCard: React.FC<User> = (props) => {
  const [thumbnailLoaded, setThumbnailLoaded] = useState<boolean>(false);
  const [highResLoaded, setHighResLoaded] = useState<boolean>(false);

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.avatarContainer}>
          <Avatar className={classes.picture}>
            <LazyLoadImage
              className={classes.pictureContent}
              alt={props.picture.thumbnailUrl}
              effect="blur"
              src={props.picture.largeUrl}
            />
          </Avatar>
        </div>
        <div className={classes.cardRow}>
          {props.name}
          <ReactCountryFlag countryCode={props.nationality} svg />
        </div>
        <div>{props.age}</div>
        <div>{props.location}</div>
        <div>{props.email}</div>
        <div>{props.phone}</div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
