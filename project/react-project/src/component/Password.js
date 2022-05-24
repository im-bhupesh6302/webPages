/* // Import useState hook from react
import React,{ useState } from "react";
import eyeClose from '../images/eye-close.jpeg';
import '../App.css';

// Input Password Component
export default function Password() {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="btn btn-group form-control" >
      <input type={passwordShown ? "text" : "password"} />
      <button onClick={togglePassword}><img src={eyeClose} alt='eye' id='eye' /></button>
    </div>
  );
} */

import React from "react";
export default function mailValidation(){
  
  const input=document.getElementById("emailn").value;
  
  const regex=/^([a-zA-Z0-9_\\.])+\\@(([a-z])+\.)+([a-z]{2,4})+$/;
  if(input.match(regex)){
      // alert("valid");
      // document.form1.email.focus();
      // console.log("valid mail");
    //  pass.focus();
  }
  else{
      alert("invalid mail");
      // document.form1.email.focus();
      console.log("invalid mail");
      return false;
  }
  
  const input2=document.getElementById("pass").value;
  const reg2=/([A-Z]{1,2}[a-z]+\W{1}\d{1})/;
  if(!(input2.match(reg2)))
  alert("password contains wrong");
  return false;

  
}


