import { useState } from "react";
import UserForm from "./UserForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UserOptions = (props) => {
  const icon = props.user.isActive ? <FontAwesomeIcon icon='check-double' className="setActivebtn" /> : <FontAwesomeIcon icon='times' className="setInactivebtn" />;
  return (
    <div>
      <div>
        <button
          
          onClick={() => props.changeStatus(props.user.id)}
        >
         {icon}
        </button>
        <button onClick={() => props.deleteUser(props.user.id)} >
          <FontAwesomeIcon icon="trash"/>
        </button>
        <button onClick={() => props.setEditUser(props.user.id)}> Edit Data  </button>
      </div>
      
    </div>
  );
};

export default UserOptions;
