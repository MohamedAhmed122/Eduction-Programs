import { useRouter } from 'next/router'

import Image from 'next/image'
import classNames from 'classnames'
import styles from '../styles/index.module.css'
import axios from 'axios'

import { useForm,Controller } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import InputSelect from "../Components/Form/InputSelect";
import FormInput from "../Components/Form/FormInput";
import { useEffect } from 'react';


const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(5),
});


export default function Home() {

  const route = useRouter()
  

  const { handleSubmit, errors, control  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  // const fetchData = async () =>{
  //   try {
  //     const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImQyOTc2NDBlLWFmOGUtNGNiOC1iNzNiLWJlYjUyNGFlZWM2ZiIsImV4cCI6MTYxNDk2OTIyNywiaXNzIjoiQ291cnNlIEJvb2sgUHJvamVjdCIsImF1ZCI6IlVzZXJzIn0.Osh9GxFgkEQuZarykRcx0sqKSLx_ouLBV1JIEUjQGwA'
  //     const config ={
  //       headers:{
  //           Authorization: `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //       }
  //   }
  //     const { data } = await axios.get('/profiles', config)
  //     console.log(data)
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(()=>{
  //   fetchData()
  // },[])

  const onSubmit = data => console.log(data);

  return (
    <div className='flexAll'>
        <div  className={classNames(styles.loginSvgContainer, 'flex_center')}>
            <Image height={500} width={500} src='/assets/login.svg' alt='Login image' />
        </div>
        <div className={classNames(styles.loginForm, 'flex_col')}>
            <h1 className='main_title'>Welcome to CourseBook  </h1>
            <form  style={{width: '70%'}}  onSubmit={handleSubmit(onSubmit)}>
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
              <div className='flex_center' style={{marginTop: '2rem'}}>
                  <button style={{width: '70%', margin: '2rem'}} type='submit' className='btn_primary'> Login</button>
              </div>
              <h4 className='text_align'>you don't have account! 
                  <span onClick={()=> route.push('/register')} className='span_color'>Register</span>
              </h4>
           </form>
        </div>
    </div>
  )
}

