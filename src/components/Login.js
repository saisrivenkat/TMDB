import React, { useState,useContext } from "react";
import "./login.css";
import { ToastContainer, toast } from 'react-toastify';
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../App";

const Login = () => {
    const usenavigate = useNavigate()
    const store = useContext(Appcontext);
    const[email,setemail] = useState()
    const[pwd,setpwd]  = useState()
    const[show,setshow] = useState()
    //toast.configure()
    const submit=()=>{
        const obj = {
            email,pwd
        }
        const user  = JSON.parse(localStorage.getItem('user'))
       
        if(user?.email === email){
          store.setuser(obj);
            setTimeout(()=>{
                usenavigate('/')
            },1000)
        }else{
          alert("email not found")
        }

        
    }
  return (
    <div className="background">
        <ToastContainer />
      <div className="box">
        <h1 className=" text-center font-bold text-xl">Welcome Back</h1>
        <p className="text-slate-400 mt-2">
          Enter your crendentials to access your account
        </p>

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
      <button className="bg-blue-500 w-full rounded-lg mt-4 h-11 text-slate-100" onClick={submit}>
        Sign In
      </button>
      
      </div>
    </div>
  );
};
export default Login;
