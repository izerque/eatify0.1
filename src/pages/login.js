import React from 'react';
import LoginForm from '../components/LoginForm';




const Login = () => {
    return (
        <main className='h-screen w-1/2 border border-red-500'>
            <div className='hidden'>
                Content to be hidden initially
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
                <LoginForm />  
            </div>
        </main>
    );
};





export default Login;

