import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Must be at least 8 characters')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(true);
        }, 400);
      }}
    >
      {formikProps => (
        <Form className="bg-white flex flex-col gap-4 justify-center items-center border border-orange-200 rounded h-[620px]  w-7/12 px-8 pt-6 pb-8 mb-4">
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              name="password"
              placeholder="******************"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className=" w-full flex flex-col items-center justify-between">
            
             <button
               className="border w-full border-gray-400 text-gray-500 flex justify-center items-center gap-4 font-regular py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
               type="button"
               onClick={() => {
                 // Handle Google sign-in
               }}
             >
               <span className="text-red-500">
               <FcGoogle />
             </span> Sign in with Google
             </button>
          </div>
          <div className=" w-full flex flex-col gap-3 items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white w-[40%] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>

            <p className='text-sm text-orange-400 underline'>Forgot Password</p>
            <Link className='text-orange-500 text-[12px]' to="/registrationPage">If you have no account <span className='underline font-bold'>Register here</span></Link>

          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
