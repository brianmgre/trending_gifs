import React from "react";
import { TextField } from "@material-ui/core";

const Search = props => {
  return (
    <div>
      <form onSubmit={props.searchForGif}>
        <TextField
          placeholder="Search..."
          name="searchTerm"
          type="text"
          value={props.searchTerm}
          onChange={props.handleSearch}
        />
        <i
          className="material-icons"
          type="submit"
          onClick={props.searchForGif}
        >
          search
        </i>
      </form>
    </div>
  );
};
export default Search;
