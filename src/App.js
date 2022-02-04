import logo from "./logo.svg";
import "./App.css";
import usersFromService from "./usersService";
import Header from "./components/Header";
import { useState } from "react";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckDouble, faTimes,faTrash } from '@fortawesome/free-solid-svg-icons'
library.add( faCheckDouble, faTimes, faTrash)

function App() {
  const [users, setUsers] = useState(usersFromService);

  const [useForm, setUseForm] = useState(false);

  const INITIALSTATEUSER = {
    name: "",
    lastName: "",
    email: "",
    isActive: false,
    image: ""
  }
  const [user,setUser]= useState(INITIALSTATEUSER)

  const submitHandler = async (e, userFromForm) => {
    e.preventDefault();
    if (userFromForm.id) {
      /* let usersCopy=users;
      let userListToUpdate = usersCopy.filter((oldUser)=>oldUser.id!==userFromForm.id);
      userListToUpdate.push(userFromForm)
    await setUsers(userListToUpdate); */

    let indexFinded = 0;
    users.find((user, index) => { indexFinded = index;  return user.id === userFromForm.id });
    users.splice(indexFinded, 1, userFromForm);
    setUsers([...users]);
    
    } else {
      users.find((existingUser) => existingUser.email === userFromForm.email)
      ? alert("El email que esta tratando de utilizar ya existe")
      : (() => {
          userFromForm.id = users.slice(-1)[0].id + 1;
          const usersUpdated = [...users, userFromForm];
          setUsers(usersUpdated);
        })(); //se define una funcion anonima dentro de parentesis y luego se ejecuta, es un shortcut que vi por ahi y se me hizo util */
    }
    
  };

  const deleteHandler = (id) => {
    const finalList = users.filter((user) => user.id != id);
    //console.log(finalList);
    setUsers(finalList);
  };
  const changeStatusHandler = (id) => {
    const userFinded = users.find((user) => user.id === id);
    userFinded.isActive = !userFinded.isActive;
    setUsers([...users]);
  };
  const useFormHandler = async () => {
    await setUseForm(false);
    setUser(INITIALSTATEUSER);
    setUseForm(true);
  };
  const setEditUser = async (id) => {
    const userFinded = users.find((user) => user.id === id);
    setUser(userFinded);
    await setUseForm(false);
    setUseForm(true);
  };

  return (
    <div className="App">
      <Header userCounter={users.length}  useFormHandler={useFormHandler}/>
    {useForm && <section className="form"><UserForm submitHandler={submitHandler} user={user}/></section>}
      <UsersList
        getUsers={users}
        deleteUser={deleteHandler}
        changeStatus={changeStatusHandler}
        setEditUser={setEditUser}
        
      />
    </div>
  );
}

export default App;
