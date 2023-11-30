import { useState } from 'react';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Card from '../UI/Card';

  const AddUser = (props) => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const[collegename,setCollegeName] = useState('');
    const [age, setAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const addUserHandler = (event) => {
      event.preventDefault();
    };

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlecollegenameChange(event) {
    setCollegeName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleSubmit() {
    if (username.trim() && age.trim() && collegename.trim() && parseInt(age) >= 0) {
      setUsers([...users, { username: username.trim(), age: age.trim() , collegename: collegename.trim() }]);
      setUsername('');
      setCollegeName('');
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
        <label>College Name</label>
        <input type="text" value={collegename} onChange={handlecollegenameChange} />
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
            <li key={index} style={{color: '#FFFFFF'}}>
              {`Username: ${user.username}, Age: ${user.age} , CollegeName: ${user.collegename}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AddUser;

