import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";


const AddUser = (props) => {

const nameInputRef = useRef();
const ageInputRef = useRef();

 const [error, setError] = useState();

 

 const errorHandler = () => {
  setError(null);
 }


 const addUseHandler = (event) => {
  event.preventDefault();

  var name = nameInputRef.current.value
  var age = ageInputRef.current.value

  if (name.trim().length === 0 || age.trim().length === 0) {
   setError({
    title : "Invalid input ",
    message: 'please enter a valid name and age (non-empty values).'
   })
   return;
  }

  if (+age < 1) {
   setError({
    title : "Invalid age ",
    message: 'please enter a valid age (> 0).'
   })
   return;
  }
  props.onAddUser(name, age)
  nameInputRef.current.value = ''
  ageInputRef.current.value = ''
 }


 return (
  <Wrapper>
   
   {error &&<ErrorModel title={error.title} message={error.message} onClick={errorHandler}/>}
   <Card className={classes.input}>
    <form onSubmit={addUseHandler}>
     <label htmlFor="username">Add User</label>
     <input ref={nameInputRef} 
     id="username" 
     type="text" >

     </input>
     <label htmlFor="age">Age (Years)</label>
     <input ref={ageInputRef}
      id="age" 
      type="number"
      ></input>
     <Button type="submit">Add User</Button>
    </form>
   </Card>
  </Wrapper>
 )
};

export default AddUser;
