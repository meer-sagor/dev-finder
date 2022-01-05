import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";

import classes from "./DevFinder.module.css";
import DevFinderContent from "./DevFinderContent";

const DevFinder = () => {
  const [search, setSearch] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [data, setData] = useState({});
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // remove all whitespace to using RegExp;
    const userName = search.replace(/\s/g, "");

    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((result) => setData(result));
    setShowContent(true)
    setSearch("");
  };

  return (
    <div className={classes.container}>
      <h1>DevFinder</h1>
      <SearchBox
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        value={search}
      />
      {showContent && <DevFinderContent data={data} />}
    </div>
  );
};

export default DevFinder;
