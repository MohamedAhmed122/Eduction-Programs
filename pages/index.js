import { useRouter } from 'next/router'

import Image from 'next/image'
import classNames from 'classnames'
import styles from '../styles/index.module.css'
import FromInput from '../Components/Form/FormInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {FormControlLabel, Checkbox} from '@material-ui/core'


const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(5),
});


export default function Home() {

  const route = useRouter()


  return (
    <div className='flexAll'>
        <div  className={classNames(styles.loginSvgContainer, 'flex_center')}>
            <Image height={500} width={500} src='/assets/login.svg' alt='Login image' />
        </div>
        <div className={classNames(styles.loginForm, 'flex_col')}>
            <h1 className='main_title'>Welcome to CourseBook  </h1>
            <Formik 
              validationSchema={validationSchema}
              initialValues={{email: '', password:''}}
              onSubmit={(values)=> console.log(values)}
            >
            {({ dirty,isSubmitting, isValid })=>(
              <Form style={{width: '70%'}}>
                <FromInput label='Email' name='email' />
                <FromInput type="password" label='Password' name='password' />
                <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary"/>}
                    label="remember me"
                />
                <div className='flex_center' style={{marginTop: '3rem'}}>
                  <button style={{width: '70%'}} type='submit' className='btn_primary'> Login</button>
                </div>
                <h4 className='text_align'>you don't have account! 
                    <span onClick={()=> route.push('/register')} className='span_color'>Register</span>
                </h4>
              </Form>
            )}
            </Formik>

        </div>
    </div>
  )
}

