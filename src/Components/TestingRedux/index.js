import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { changeUsersName } from "./redux/actions/changeUsersName";
import { changeUsersAge } from "./redux/actions/changeUsersAge";


export const TestingRedux = () => {

  
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.name);

  return (
    <>
    <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <hr></hr>

    <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUsersName(name));
          dispatch(changeUsersAge(age));
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name"
        ></input>
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Change age"
        ></input>
        <input type="submit" value="Change user details" />
      </form>
    
    </>
  )
}
/* REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  */