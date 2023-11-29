import { useState } from 'react';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Card from '../UI/Card';

  const AddUser = (props) => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const addUserHandler = (event) => {
      event.preventDefault();
    };

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleSubmit() {
    if (username.trim() && age.trim() && parseInt(age) >= 0) {
      setUsers([...users, { username: username.trim(), age: age.trim() }]);
      setUsername('');
      setAge('');
      setErrorMessage('');
    } else if(age < 1 ) {
      setErrorMessage('Invalid Age. Please enter age above 1.');
    }else{
        setErrorMessage('Invalid input. Please enter both username and a valid age')
    }
  }

  return (
    <>
      <div className='main'>
      <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <label>Age</label>
        <input type='number' value={age} onChange={handleAgeChange} />
        <Button onClick={handleSubmit}>Add User</Button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
        </Card>
      </div>
      <div>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {`Username: ${user.username}, Age: ${user.age}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AddUser;