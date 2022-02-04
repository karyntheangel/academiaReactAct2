import { useState } from "react";
import User from "./User";
const UsersList = (props) => {
  return (
    <div className="userIteator">
      <div>
      {props.getUsers.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={props.deleteUser}
          changeStatus={props.changeStatus}
          setEditUser={props.setEditUser}
          testUpdate={props.tes}
        />
      ))}
      </div>
    </div>
  );
};

export default UsersList;
