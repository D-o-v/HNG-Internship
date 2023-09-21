import React, { useState, FormEvent } from 'react';
import { auth } from "../firebase/firebase"
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
import { LoginProps } from '../types/types';
import backgroundVideo from "../assets/video/backgroundVedio.mp4"

const Login: React.FC<LoginProps> = ({setIsIn}) => {
  setIsIn(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      if(response){
        setIsIn(true)
        navigate("/my-gallery")
        setTimeout(()=>{
          toast.success("Login succesful!")
        },3000)
        
      }
    } catch (error:any) {
      // console.log(error);
      if(error.message){
        toast.error("INVALID LOGIN CREDENTIALS")
      }
      
    }
  };

  return (
    <div className="mx-auto align-items-center justify-content-center d-flex" style={{height:"100vh",width:"100vw"}} >
       <video autoPlay muted loop id="background-video">
      <source src={backgroundVideo} type="video/mp4" />
    </video>
      <div className='container border border-gray rounded-4 p-2 m-auto col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-10'>
      <h2 className='p-2 text-white'>Login</h2>
      <form onSubmit={handleLogin} className='d-flex flex-column gap-2 p-2'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className='col'
          name='email'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className='col'
          name='password'
        />
        <button 
        type="submit"
        className='col btn btn-danger'
        disabled={!email||!password}
        >Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
