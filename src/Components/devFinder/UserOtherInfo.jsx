import React from "react";

import classes from "./UserOtherInfo.module.css";

const UserOtherInfo = ({ public_repos, followers, following }) => {
  return (
    <div className={classes["user__others-info"]}>
      <div>
        <h3>Repos</h3>
        <p>{public_repos}</p>
      </div>
      <div>
        <h3>Flowers</h3>
        <p>{followers}</p>
      </div>
      <div>
        <h3>Flowing</h3>
        <p>{following}</p>
      </div>
    </div>
  );
};

export default UserOtherInfo;
