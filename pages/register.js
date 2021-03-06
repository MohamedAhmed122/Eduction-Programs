import { useRouter } from 'next/router'

import { useForm,Controller } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import InputSelect from "../Components/Form/InputSelect";
import FormInput from "../Components/Form/FormInput";
import Select from "react-select";


import Image from 'next/image'
import classNames from 'classnames'
import styles from '../styles/index.module.css'

import {  facultyOptions, directionOptions, groupOptions } from '../data/options'
import { useState } from 'react';


const validationSchema = Yup.object({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).label('Password'),
    student: Yup.bool()
    
});



export default function Register() {
    const  route  = useRouter()
    const [ checked, setChecked ] = useState(false)
    const { register, handleSubmit, errors, control  } = useForm({
      resolver: yupResolver(validationSchema)
    });
    const onSubmit = data =>{ 
      console.log(data);
      route.push('/disciplines')

    }
  
  return (
    <div className='flexAll'>
        <div className={classNames(styles.loginForm, 'flex_col')}>
            <h1 className='main_title'>Welcome to CourseBook </h1>
            <form  style={{width: '70%'}}  onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ onChange, value  }) => 
                <FormInput  placeholder='Name'  error={errors.name?.message} onChange={onChange} value={value} />}
              />
              <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ onChange, value  }) => 
                <FormInput  placeholder='Email'  error={errors.email?.message} onChange={onChange} value={value} />}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ onChange, value  }) => 
                  <FormInput placeholder='Password' type='password'  error={errors.password?.message} onChange={onChange} value={value} />}
              />
               <div className='flex check_box' style={{ marginTop: 20}}>
                    <input type='checkbox' name='teacher'  ref={register}/>
                    <p style={{marginLeft: 10}} className='text_align'>Are you a Teacher?</p>
                </div>
                <div className='flex check_box'>
                    <input type='checkbox' value={checked} onChange={()=> setChecked(!checked)}  name="student" ref={register} />
                    <p style={{marginLeft: 10}} className='text_align'>Are you a Student?</p>
                </div>
                {
                  checked &&
                  <> 
                   <InputSelect
                    name="faculty"
                    control={control}
                    options={facultyOptions}
                    placeholder='Faculty'
                    error ={errors.faculty?.message}
                  />
                   <InputSelect
                    name="direction"
                    control={control}
                    options={directionOptions}
                    placeholder='Direction'
                    error ={errors.direction?.message}
                  />
                   <InputSelect
                    name="group"
                    control={control}
                    options={groupOptions}
                    placeholder='Group'
                    error ={errors.group?.message}
                  />
                  </>
                }

              <div className='flex_center' style={{margin: '2rem'}}>
                  <button  style={{width: '70%'}} type='submit' className='btn_primary'> Register</button>
              </div>
              <h4 className='text_align'>you don't have account! 
                  <span onClick={()=> route.push('/')} className='span_color'>Login</span>
              </h4>
           </form>
        </div>
        <div  className={classNames(styles.loginSvgContainer, 'flex_center')}>
            <Image height={500} width={500} src='/assets/login.svg' alt='Login image' />
        </div>
    </div>
  )
}

