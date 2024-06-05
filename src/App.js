import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/loginForm';
import { RegisterForm } from './components/RegisterForm';
import { Home } from './components/home';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? currentUser : null);
    });
    return () => unsubscribe();
  }, []);

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      setUser(userCredential.user);
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  }

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setUser(userCredential.user);
      return true;
    } catch (error) {
      toast.error("Invalid email or password");
      return false;
    }
  }

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <HashRouter>
      <div className='flex w-full h-screen'>
        <div className='w-full flex items-center justify-center lg:w-1.5/2'>
          <Routes>
            <Route path="/" element={<LoginForm
              loginEmail={loginEmail}
              loginPassword={loginPassword}
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
              login={login}
            />} />
            <Route path="/register" element={<RegisterForm
              registerEmail={registerEmail}
              registerPassword={registerPassword}
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
              register={register}
            />} />
            <Route path="/home" element={<Home user={user} />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </HashRouter>
  );
}

export default App;
