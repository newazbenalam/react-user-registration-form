import React, { useState } from "react";
import "./RegistrationForm.css";



const RegistrationForm = () => {
  
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitData = (event) => {
    event.preventDefault();
    showOnConsoleLog();
    if (!fname || !lname || !email || !contact || !password || !confirmPassword) {
      alert('Please fill in all the fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Password didn\'t match!');
      return;
    }
    alert('Your registration has been completed!');
  };

  const showOnConsoleLog = () => {
    console.log('First Name:', fname);
    console.log('Last Name:', lname);
    console.log('Email:', email);
    console.log('Contact:', contact);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div class="reg-body">
      <div class="signup-card form">
        <h2>Sign Up for free!</h2>
        <p>
          Explore all the offers<br />
          that await!
        </p>
        <h5>First Name</h5>
        <input type="text" placeholder="Enter First Name" autocomplete="off" value={fname} onChange={(event) => {setFname(event.target.value)}}/>
        <h5>Last Name</h5>
        <input type="text" placeholder="Enter Last Name" autocomplete="off" value={lname} onChange={(event) => {setLname(event.target.value)}}/>
        <h5>Email Name</h5>
        <input type="email" placeholder="Enter Email" autocomplete="off" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
        <h5>Contact No.</h5>
        <input type="number" placeholder="Enter Number" autocomplete="off" value={contact} onChange={(event) => {setContact(event.target.value)}}/>
        <h5>New Password</h5>
        <input type="password" placeholder="Enter Password" autocomplete="off" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
        <h5>Retype Password</h5>
        <input type="password" placeholder="Confirm Password" autocomplete="off" value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value)}}/>
        <br />
        <button type="submit" onClick={submitData}>Sign Up</button>
        <br />
        <div class="breaker">
          <hr />
          <p> or continue with </p>
          <hr />
        </div>
        <div class="box-container">
          <div class="box">
            <img src="g.png" alt="Google" />
          </div>
          <div class="box">
            <img src="git.png" alt="Github" />
          </div>
          <div class="box">
            <img src="f.png" alt="facebook" />
          </div>
        </div>
        <p class="signup">
          Already a member? <a href="#home">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
