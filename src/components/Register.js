import React, { useState } from "react";

import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import BadgeIcon from '@mui/icons-material/Badge';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import './register.css'

import { useNavigate } from "react-router-dom";
const Register = () => {
    const usenavigate = useNavigate()
    const[name,setname] = useState()
    const[email,setemail] = useState()
    const[pwd,setpwd]  = useState()

    const[show,setshow] = useState()
    const Submit=()=>{
        const obj = {
            name,email,pwd
        }
        localStorage.setItem('user',JSON.stringify(obj));
        setTimeout(()=>{
            usenavigate("/login")
        },1000)
        
    }
  return (
    <div className="background">
      <div className="box_register">
        <h1 className=" text-center font-bold text-xl">Welcome.</h1>
        <p className="text-slate-400 mt-2">
          Create an account for the Journey
        </p>

        <div className=" input_box mt-4 mb-4 p-2 w-full border-2 border-neutral-100 rounded-lg outline-none flex">
        <label style={{ color: "#032541" }}>
          <BadgeIcon />
        </label>
        <input
          className="outline-none pl-2 w-full"
          placeholder="Name"
          type="text"
          onChange={(e)=>setname(e.target.value)}
        />
        
      </div>
        <div className=" input_box mt-4 mb-4 p-2 w-full border-2 border-neutral-100 rounded-lg outline-none flex">
        <label style={{ color: "#032541" }}>
          <MailIcon />
        </label>
        <input
          className="outline-none pl-2 w-full"
          placeholder="Email"
          type="text"
          onChange={(e)=>setemail(e.target.value)}
        />
        
      </div>
        <div className="input_box mt-4 mb-4 p-2 w-full border-2 border-neutral-100 rounded-lg outline-none flex">
        <label style={{ color: "#032541" }}>
          <LockIcon />
        </label>
        <input
          className="outline-none pl-2 w-full"
          placeholder="Password"
          type={show ? "text" : "password"}
          onChange={(e)=>setpwd(e.target.value)}
        />
        {show ? (
          <VisibilityOffIcon
            onClick={() => setshow(!show)}
            className="eye text-gray-400 cursor-pointer"
          />
        ) : (
          <VisibilityIcon
            onClick={() => setshow(!show)}
            className="eye text-gray-400 cursor-pointer"
          />
        )}
      </div>
      <button className="bg-blue-500 w-full rounded-lg mt-4 h-11 text-slate-100" onClick={Submit}>
        Sign Up
      </button>
      </div>
    </div>
  );
};
export default Register;
