import React from "react";
import { GoLocation } from "react-icons/go";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { RiHotelLine } from "react-icons/ri";

import classes from "./SocialLinks.module.css";

const SocialLinks = ({ location, twitter, github, portfolio }) => {
  return (
    <div className={classes["user__social-links"]}>
      <div>
        <div className={classes["user__social-link"]}>
          <span className={classes.icon}>
            <GoLocation />
          </span>
          <span>{location === null ? "there is no location" : location}</span>
        </div>
        <div className={classes["user__social-link"]}>
          <span className={classes.icon}>
            <BsLink45Deg />
          </span>
          <a href={`${github}`} target={"_blank"} rel="noopener noreferrer">
            https://github.com
          </a>
        </div>
      </div>
      <div>
        <div className={classes["user__social-link"]}>
          <span className={classes.icon}>
            <BsTwitter />
          </span>
          <a
            href={`https://www.twitter.com/${twitter}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {twitter === null ? "Not Available" : "https://twitter.com"}
          </a>
        </div>
        <div className={classes["user__social-link"]}>
          <span className={classes.icon}>
            <RiHotelLine />
          </span>
          <a href={`${portfolio}`} target={"_blank"} rel="noopener noreferrer">
            {portfolio === "" ? "Not Available" : portfolio}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
