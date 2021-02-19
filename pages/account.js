import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'

import { Card } from "@material-ui/core";
import BackupIcon from '@material-ui/icons/Backup';
import FromInput from '../Components/Form/FormInput'
import FromSelect from '../Components/Form/FormSelect'

import { profileInitialValues, facultyOptions, directionOptions, groupOptions } from '../data/options'

import styles from '../styles/profile.module.css'
import CustomButton from '../Components/CustomButton/CustomButton';


export default function account() {

    const validationSchema = Yup.object({
        name: Yup.string().required().label('Name'),
        email: Yup.string().required().email().label('Email'),
      
    });

    
    return (
        <div style={{marginTop:'10rem'}} className='flex_col'>
            <h3>Create Profile</h3>    
            <Card className={styles.card}>
                <div className={classNames(styles.image, 'flex_col')}>
                    <BackupIcon fontSize='large'/>
                    <p className={styles.smallText}>drag and drop image here</p>
                </div>
                <Formik 
                    validationSchema={validationSchema}
                    initialValues={profileInitialValues}
                    onSubmit={(values)=> console.log(values)}
                >
                    {({ values })=>(
                    <Form style={{width:'100%'}} >
                        <FromInput label='Name' name='name' />
                        <FromInput label='Email' name='email' />
                        <FromSelect name='faculty' label='Faculty' options={facultyOptions}/>
                        <FromSelect name='direction' label='Direction' options={directionOptions}/>
                        <FromSelect name='group' label='Group' options={groupOptions} />
                        <CustomButton title='Save' color='primary' />
                    
                    </Form>
                    )}
            </Formik>


            </Card>        
        </div>
    )
}
