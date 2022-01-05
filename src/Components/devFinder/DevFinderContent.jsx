import React from "react";

import Avatar from "../UI/Avatar";

import UserInfo from "./UserInfo";
import UserOtherInfo from "./UserOtherInfo";
import SocialLinks from "./SocialLinks";

import classes from "./DevFinderContent.module.css";

const DevFinderContent = (props) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    location,
    public_repos,
    followers,
    following,
    created_at,
    twitter_username,
    html_url,
    blog,
  } = props.data;
  // if(Object.keys(props.data).length > 2){
  //   return <div>No user Found</div>
  // }
  // console.log(Object.keys(props.data).length);
  if(props.error){
    return <h1>No user found</h1>
  }
  return (
    <div className={classes.content}>
      <div>
        <Avatar src={avatar_url} alt={name} />
      </div>
      <div className={classes["content__info"]}>
        <UserInfo
          name={name}
          userId={login}
          bio={bio}
          created_at={created_at}
        />
        <UserOtherInfo
          public_repos={public_repos}
          followers={followers}
          following={following}
        />
        <SocialLinks
          location={location}
          twitter={twitter_username}
          github={html_url}
          portfolio={blog}
        />
      </div>
    </div>
  );
};

export default DevFinderContent;
