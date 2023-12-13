import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase/compat/app';




const RegistrationForm = () =>{
    return (
        <div className=" w-full flex justify-center">
            <Formik
            initialValues={{ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Required'),
              password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
              confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
              firstName: Yup.string().required('Required'),
              lastName: Yup.string().required('Required'),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
                console.log('User registered successfully!');
                resetForm();
              } catch (error) {
                console.error('Error registering user:', error.message);
              }
              setSubmitting(false);
            }}
            >
                {formikProps => (
                  <Form className="bg-white flex flex-col gap-4 justify-center items-center border border-orange-200 rounded h-[620px]  w-7/12 px-8 pt-6 pb-8 mb-4">
                    <div className="w-full">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                      <Field 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                      <Field 
                      type="password"
                      id="password" 
                      name="password" 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                      <Field 
                      type="password"
                      id="confirmPassword" 
                      name="confirmPassword" 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs italic" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
                      <Field 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs italic" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
                      <Field 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs italic" />
                    </div>
                    <div className='w-full flex justify-center items-center'>
                    <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white w-[40%] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
                    </div>
                  </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegistrationForm;
              