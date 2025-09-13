import React from "react";
import SearchBar from "./SearchBar";
import AddTaskButton from "./AddTaskButton";

function Header({ onSearch, onAddClick }) {
    return (
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <SearchBar onSearch={onSearch} />
        <AddTaskButton onAddClick={onAddClick} />
      </header>
    );
  }
    
export default Header;
