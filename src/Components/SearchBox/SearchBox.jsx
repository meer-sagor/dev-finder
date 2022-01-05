import React from "react";
import { BsSearch } from "react-icons/bs";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./SearchBox.module.css";

const SearchBox = ({ changeHandler, submitHandler, value }) => {
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <div className={classes["form-group"]}>
            <span className={classes["search-icon"]}>
              <BsSearch />
            </span>
            <input
              type="search"
              value={value}
              onChange={changeHandler}
              placeholder="search github username..."
            />
          </div>
          <Button type="submit">Search</Button>
        </div>
      </form>
    </Card>
  );
};

export default SearchBox;
