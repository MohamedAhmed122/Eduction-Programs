import { useRouter } from 'next/router'
import Image from 'next/image'
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import FormInput from "../Components/Form/FormInput";

import classNames from 'classnames'
import styles from '../styles/index.module.css'
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/Auth/AuthActions';


const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(5),
});


export default function Home() {

  const route = useRouter()
  const dispatch = useDispatch()
  

  const { handleSubmit, errors, control  } = useForm({
    resolver: yupResolver(validationSchema)
  });


  const onSubmit = data =>{ 
    dispatch(userLogin(data.email, data.password))
    console.log(data.email, data.password);
  }

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

