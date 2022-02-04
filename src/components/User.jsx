import UserOptions from "./UserOptions";
const User = (props) => {
  const border = props.user.isActive ?  "borderInactive":"borderActive" ;
  return (
    
    <div className="listUsers">
      <img src={props.user.image} alt=""  className={border}/>
      <h4>{props.user.name + " " + props.user.lastName}</h4>
      <article><p>{props.user.email}</p></article>
      <UserOptions
        user={props.user}
        setEditUser={props.setEditUser}
        changeStatus={props.changeStatus}
        deleteUser={props.deleteUser}
      />
    </div>
  );
};

export default User;
