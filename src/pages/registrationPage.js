import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
    return (
        <main className='h-screen flex justify-center items-center '>
               <div className=' w-1/2 flex flex-col justify-center items-center h-screen bg-no-repeat bg-cover opacity-80 border-r-4   border-orange-500' style={{
      backgroundImage:
      `url(https://firebasestorage.googleapis.com/v0/b/eatify-d6b85.appspot.com/o/2080289%20%5BConverted%5D-01.png?alt=media&token=4f996c19-6c9c-4330-b73b-e2cb2a18e0f0)`
    }}>
                <RegistrationForm />  
            </div>
            <div className='bg-no-repeat bg-cover  w-1/2 h-full' style={{
      backgroundImage:
      `url(https://firebasestorage.googleapis.com/v0/b/eatify-d6b85.appspot.com/o/1192.jpg?alt=media&token=6735dd68-e1db-4283-b657-85df6379a425)`
    }}>
                
            </div>
          
        </main>
    );
}

export default RegistrationPage; 

