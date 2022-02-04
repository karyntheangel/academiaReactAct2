import { useState } from "react";
import UserForm from "./UserForm";
const Header = (props) => {
  return (
    <div className="header">
      <div>
        <h1>Users Management ({props.userCounter})</h1>
        <button onClick={() => props.useFormHandler()}>
          Form to new users
        </button>
      </div>
    </div>
  );
};

export default Header;
