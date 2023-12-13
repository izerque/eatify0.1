import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
    return (
        <main className='h-screen flex justify-center items-center '>
              <div className='flex w-1/2 flex-col  justify-center items-center h-screen'>
                <RegistrationForm />  
            </div>
            <div className='hidden w-1/2 md:block lg:block xl:block'>
                Content to be hidden initially
            </div>
          
        </main>
    );
}

export default RegistrationPage;
