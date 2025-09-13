import React from "react";
import SearchBar from "./SearchBar";
import AddTaskButton from "./AddTaskButton";

function Header({ onAddClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
      <SearchBar />
      <AddTaskButton onClick={onAddClick} />
    </div>
  );
}

export default Header;
