import { useState } from 'react';
import './Login.css'; 
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"

const Login = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Log In"?<div></div>:
          <div className="inputs">
            <AiOutlineUser/>
            <input type="Username" placeholder="Username" />
          </div>
        }
        <div className="inputs">
          <AiOutlineMail/>
          <input type="Email" placeholder="Email" />
        </div>
        <div className="inputs">
          <RiLockPasswordLine/>
          <input type="Password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:
        <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
      }
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>
          Sign Up
        </div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Log In")}}>
          Log In
        </div>
      </div>
    </div>
  );
};

export default Login;