import React from "react";
import moment from "moment";

import classes from "./UserInfo.module.css";
const UserInfo = ({ name, userId, bio, created_at }) => {
  return (
    <div className={classes.user}>
      <div className={classes["user__info"]}>
        <h1 className={classes["user__name"]}>{name === null ? 'display name' : name}</h1>
        <span className={classes["user__joined-info"]}>{moment(created_at).format(`LL`)}</span>
      
      </div>
      <p className={classes["user__id"]}>{userId}</p>
      <p className={classes["user__bio"]}>{bio === null ? "bio..." : bio}</p>
    </div>
  );
};

export default UserInfo;
