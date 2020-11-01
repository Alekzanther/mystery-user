import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Card, CardContent, Avatar, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import User from "../types/User";
import UserDetail from "../components/UserDetail";
import CakeIcon from "@material-ui/icons/Cake";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

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
    padding: 15,
  },
  picture: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    fontSize: 48,
  },
  pictureContent: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
  flag: {
    marginLeft: 20,
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const UserCard: React.FC<User> = (props) => {
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
          <div className={classes.cardRow}>
            {props.name}
            <ReactCountryFlag className={classes.flag} countryCode={props.nationality} svg />
          </div>
        </div>
        <List>
          <UserDetail description="Age" content={props.age.toString()} icon={<CakeIcon />} />
          <UserDetail
            description="Currently lives in"
            content={props.location}
            icon={<LocationCityIcon />}
          />
          <UserDetail description="Email" content={props.email} icon={<EmailIcon />} />
          <UserDetail description="Phone" content={props.phone} icon={<PhoneIcon />} />
        </List>
      </CardContent>
    </Card>
  );
};

export default UserCard;
