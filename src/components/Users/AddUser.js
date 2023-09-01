import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {

 const [userName, setUserName] = useState('');
 const [userAge, setUserAge] = useState('');

 const [error, setError] = useState();

 const nameChangeHandler = (event) => {
  setUserName(event.target.value);
 }

 const ageChangeHandler = (event) => {
  setUserAge(event.target.value);
 }

 const errorHandler = () => {
  setError(null);
 }


 const addUseHandler = (event) => {
  event.preventDefault();
  if (userName.trim().length === 0 || userAge.trim().length === 0) {
   setError({
    title : "Invalid input ",
    message: 'please enter a valid name and age (non-empty values).'
   })
   return;
  }

  if (+userAge < 1) {
   setError({
    title : "Invalid age ",
    message: 'please enter a valid age (> 0).'
   })
   return;
  }


  // console.log(userName)
  // console.log(userAge)
  props.onAddUser(userName, userAge)
  console.log()
  setUserName("")
  setUserAge("")
 }


 return (
  <div>
   
   {error &&<ErrorModel title={error.title} message={error.message} onClick={errorHandler}/>}
   <Card className={classes.input}>
    <form onSubmit={addUseHandler}>
     <label htmlFor="username">Add User</label>
     <input value={userName} id="username" type="text" onChange={nameChangeHandler}></input>
     <label htmlFor="age">Age (Years)</label>
     <input value={userAge} id="age" type="number" onChange={ageChangeHandler}></input>
     <Button type="submit">Add User</Button>
    </form>
   </Card>
  </div>






 )
};

export default AddUser;
