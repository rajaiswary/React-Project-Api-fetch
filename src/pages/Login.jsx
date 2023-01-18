import React from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import ButtonDesign from '../components/ButtonDesign';
import '../components/FormDesign.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';



function Login()
{

    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },

        validationSchema : Yup.object({
            email : Yup.string()
            .email()
            .required(),

            password : Yup.string()
            .required('No password provided.') 
            .min(8, 'Password is too short - should be 8 chars minimum.')
                    
        }),

        onSubmit : function(value){
            alert(`Succesfully logged in ${value.email}`);
        }
    })

    return(
    <div className="Outer">
    <Form className="form" onSubmit={formik.handleSubmit}>
    
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
          placeholder="********"
          type="password"
        />
         {formik.touched.password && formik.errors.password && (
            <span className='text-red-400'>{formik.errors.password}</span>
          )}
      </FormGroup>

     

      
     
      
      
      
      <ButtonDesign type = "submit">Login</ButtonDesign>
    </Form>
    </div>
  )
}

export default Login;

