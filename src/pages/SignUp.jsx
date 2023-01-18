import React from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import ButtonDesign from '../components/ButtonDesign';
import '../components/FormDesign.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'



function SignUp() 
{
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues : 
        {
            name : '',
            mob : '',
            email : '',
            password : '',
            cpassword : ''

        },

        validationSchema : Yup.object({

            name : Yup.string()
                      .min(3, "Must be at least 3 characters")
                      .max(15, "Must be 15 characters or less")
                      .required("No name provided"),

            mob : Yup.string()
                     .matches(
                       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                        "Not a valid phone number"
                      )
                     .required("Required"),

            email :  Yup.string()
                        .email()
                        .required("No email provided"),

            password : Yup.string()
                        .required('No password provided.') 
                        .min(8, 'Password is too short - should be 8 chars minimum.'),


            cpassword : Yup.string()
                           .oneOf([Yup.ref('password'), null], 'Passwords must match')



        }),
         
         onSubmit : function(value){
            alert(`Succesfully registered`);
            navigate('/Login');
            
            
        }



    })

 


  return (
    <div className="Outer">
    <Form className="form" onSubmit={formik.handleSubmit}>
    <FormGroup >
        <Label for="name">Name</Label>
        <Input  className={` block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          value={formik.values.name}
         id="name"
          name="name"
          placeholder="Christopher Columbus"
          type="text"
        />
        {formik.touched.name && formik.errors.name && (
            <span className='text-red-400'>{formik.errors.name}</span>
          )}

      </FormGroup>
      <FormGroup >
        <Label for="mob">Phone No</Label>
        <Input className={` block w-full rounded border py-1 px-2 ${formik.touched.mob && formik.errors.mob ? 'border-red-400' : 'border-gray-300'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          value={formik.values.mob}
          id="mob"
          name="mob"
          placeholder="123456789"
          type="number"
        />
        {formik.touched.mob && formik.errors.mob && (
            <span className='text-red-400'>{formik.errors.mob}</span>
          )}
      </FormGroup>
      <FormGroup >
        <Label for="email">Email</Label>
        <Input className={` block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          value={formik.values.email}
          id="email"
          name="email"
          placeholder="abc@example.com"
          type="email"
        />
        {formik.touched.email && formik.errors.email && (
            <span className='text-red-400'>{formik.errors.email}</span>
          )}
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input className={` block w-full rounded border py-1 px-2 ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          value={formik.values.password}
          id="password"
          name="password"
          placeholder="**********"
          type="password"
        />
        {formik.touched.password && formik.errors.password && (
            <span className='text-red-400'>{formik.errors.password}</span>
          )}
      </FormGroup>

      <FormGroup>
        <Label for="cpassword">Confirm Password</Label>
        <Input className={` block w-full rounded border py-1 px-2 ${formik.touched.cpassword && formik.errors.cpassword ? 'border-red-400' : 'border-gray-300'}`}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur} 
           value={formik.values.cpassword}
          id="cpassword"
          name="cpassword"
          placeholder="********"
          type="password"
        />
        {formik.touched.cpassword && formik.errors.cpassword && (
            <span className='text-red-400'>{formik.errors.cpassword}</span>
          )}
      </FormGroup>
     
      
     
      
      
      
      <ButtonDesign>Submit</ButtonDesign>
    </Form>
    </div>
  );
}

export default SignUp;
