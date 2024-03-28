import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/loginForm';
import { RegisterForm } from './components/RegisterForm';
import { Home } from './components/home';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser ? currentUser : {});
  });
  const register = async () => {
    try{
    const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword)
    console.log(user);
    }
    catch (error){
      console.log(error.message);
    }
  }
  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setUser(userCredential.user);
    } catch (error) {
      console.log(error.message);
    }
  }
  const logout = async () => {    
  }
  return (
    <BrowserRouter>
      <div className='flex w-full h-screen'>
        <div className='w-full flex items-center justify-center lg:w-1.5/2'>
          <Routes>
            <Route path="/" element={<LoginForm
              loginEmail={loginEmail}
              loginPassword={loginPassword}
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
              register={register}
              login = {login}
            />} />
            <Route path="/register" element={<RegisterForm
              registerEmail={registerEmail}
              registerPassword={registerPassword}
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
              register={register}
            />} />
            <Route path='home' element={<Home
              user={user}
             />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
