import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
  const nameregex = /^[a-zA-z]+$/


  function add() {
    if (name == '') {
      alert('please enter name')
    }
    else if (!name.match(nameregex)) {
      alert('please enter valid name')
    }
    else if (email == '') {
      alert('enter email')
    }
    else if (contact == '') {
      alert('please enter  contact')
    }
    else if (contact.length < 10 && contact.match(regex)) {
      alert('enter valid contact')
    }
    else {
      axios.post('http://localhost/exam/insert.php', {
        name: name,
        email: email,
        contact: contact
      })
        .then(function (response) {
          console.log(response);
          setname(response)
          setemail(response)
          setcontact(response)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  return (
    <div className="App">

      <center>

        <table border={1}>
          <h1>Add Data... </h1>
          <tr>
            <td>name</td>
            <td><input type="text" name='name' pattern={nameregex} onChange={(i) => setname(i.target.value)} /></td>
          </tr>
          <tr>
            <td>email</td>
            <td><input type="email" name='email' onChange={(i) => setemail(i.target.value)} /></td>
          </tr>
          <tr>
            <td>contact</td>
            <td><input type="number" name='contact' onChange={(i) => setcontact(i.target.value)} /></td>
          </tr>
          <tr>
            {/* <td></td> */}
            <td align='center' colSpan={2}><input type="submit" name='submit' value='submit' onClick={() => add()} /></td>
          </tr>
        </table>
      </center>
    </div>
  );
}

export default App;
