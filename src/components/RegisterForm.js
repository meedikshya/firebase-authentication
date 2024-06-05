import * as React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = ({ registerEmail, registerPassword, setRegisterEmail, setRegisterPassword, register }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleRegister = async () => {
    const success = await register();
    if (success) {
      alert("Registration successful! Please log in.");
      setRegisterEmail('');
      setRegisterPassword('');
      navigate('/');
    }
  };

  return (
    <div>
      <h1 className='px-10 py-8 text-2xl font-semibold ml-9'>Create new account</h1>
      <div className='bg-white px-10 py-10'>
        <div>
          <label className='text-sm font-medium'>Email address</label>
          <input
            className='w-full border-2 border-gray-100 p-2 mt-3 mb-4 bg-transparent focus:border-indigo-600 focus:outline-none focus:ring-0 rounded-md'
            placeholder='abc@gmail.com'
            onChange={(event) => { setRegisterEmail(event.target.value); }}
            value={registerEmail}
          />
        </div>
        <div>
          <label className='text-sm font-medium'>Password</label>
          <input
            className='w-full border-2 border-gray-100 p-2 mt-3 bg-transparent focus:border-indigo-600 focus:outline-none focus:ring-0 rounded-md'
            placeholder='password'
            type='password'
            onChange={(event) => { setRegisterPassword(event.target.value); }}
            value={registerPassword}
          />
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button onClick={handleRegister} className='py-2 bg-indigo-600 text-white text-lg rounded-md'>Sign up</button>
        </div>
        <div>
          <p className='mt-5 ml-8'>Already have an account?
            <button onClick={handleLogin} className='font-bold text-sm text-indigo-600'>Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
};
