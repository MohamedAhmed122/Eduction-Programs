import { useRouter } from 'next/router'

import FromInput from '../Components/Form/FormInput'
import FromSelect from '../Components/Form/FormSelect'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import Image from 'next/image'
import classNames from 'classnames'
import styles from '../styles/index.module.css'

import { initialValues, facultyOptions, directionOptions, groupOptions } from '../data/options'


const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(5),
});



export default function Register() {
    const  route  = useRouter()
  
  return (
    <div className='flexAll'>
        <div className={classNames(styles.loginForm, 'flex_col')}>
            <h1 className='main_title'>Welcome to Website name  </h1>
            <Formik 
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values)=> console.log(values)}
            >
            {({ values })=>(
              <Form style={{width: '70%'}}>
                <FromInput label='Name' name='name' />
                <FromInput label='Email' name='email' />
                <FromInput type="password" label='Password' name='password' />
                <div className='flex check_box' style={{marginBottom:20}}>
                    <Field type='checkbox' name='teacher' />
                    <p style={{marginLeft: 10}}>Are you a Teacher?</p>
                </div>
                <div className='flex check_box'>
                    <Field type='checkbox' name='student' />
                    <p style={{marginLeft: 10}}>Are you a Student?</p>
                </div>
                {values.student &&
                    <>
                    <FromSelect name='faculty' label='Faculty' options={facultyOptions}/>
                    <FromSelect name='direction' label='Direction' options={directionOptions}/>
                    <FromSelect name='group' label='Group' options={groupOptions} />
                    </>
                }
                <div className='flex_center' style={{marginTop: '2rem'}}>
                  <button style={{width: '70%'}} type='submit' className='btn_primary'> Register</button>
                </div>
                <h4 className='text_align'>you already have account! 
                    <span onClick={()=> route.push('/')} className='span_color'>Login</span>
                </h4>
              </Form>
            )}
            </Formik>

        </div>
        <div  className={classNames(styles.loginSvgContainer, 'flex_center')}>
            <Image height={500} width={500} src='/assets/login.svg' alt='Login image' />
        </div>
    </div>
  )
}

