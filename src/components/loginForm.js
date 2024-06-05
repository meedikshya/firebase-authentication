import * as React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ loginEmail, loginPassword, setLoginEmail, setLoginPassword, login }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleSignin = async () => {
    const success = await login();
    if (success) {
      setLoginEmail('');
      setLoginPassword('');
      navigate('/home');
    }
  };

  return (
    <div>
      <h1 className='px-10 py-8 text-2xl font-semibold'>Sign in to your account</h1>
      <div className='bg-white px-10 py-10'>
        <div>
          <label className='text-sm font-medium'>Email address</label>
          <input
            className='w-full border-2 border-gray-100 p-2 mt-3 mb-4 bg-transparent focus:border-indigo-600 focus:outline-none focus:ring-0 rounded-md'
            placeholder='abc@gmail.com'
            onChange={(event) => { setLoginEmail(event.target.value); }}
            value={loginEmail}
          />
        </div>
        <div>
          <label className='text-sm font-medium'>Password</label>
          <input
            className='w-full border-2 border-gray-100 p-2 mt-3 bg-transparent focus:border-indigo-600 focus:outline-none focus:ring-0 rounded-md'
            placeholder='password'
            type='password'
            onChange={(event) => { setLoginPassword(event.target.value); }}
            value={loginPassword}
          />
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type='checkbox' id='remember' />
            <label className='ml-1 font-medium text-base' htmlFor='remember'>Remember me</label>
          </div>
          <button className='font-bold text-sm text-indigo-600'>Forgot Password?</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button onClick={handleSignin} className='py-2 bg-indigo-600 text-white text-lg rounded-md'>Sign In</button>
        </div>
        <div>
          <p className='mt-5 ml-8'>Don't have an account?
            <button onClick={handleRegister} className='font-bold text-sm text-indigo-600'>Register</button>
          </p>
        </div>
      </div>
    </div>
  );
};
