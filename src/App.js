import React, { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModel from './components/UI/ErrorModel';

var listOfUser = [
  {
    "name": "John",
    "age": 30
  },
  {
    "name": "Alice",
    "age": 25
  },
  {
    "name": "David",
    "age": 35
  },
  {
    "name": "Emily",
    "age": 28
  },
  {
    "name": "Michael",
    "age": 32
  }
]

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {
        name: uName,
        age: uAge, id: Math.random().toString()
      }];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>No users</p>
      ) : (
        <UsersList users={usersList} />
      )}
    </Fragment>
  );
}

export default App;
