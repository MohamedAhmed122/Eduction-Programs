import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'

import { Card } from "@material-ui/core";
import BackupIcon from '@material-ui/icons/Backup';


import { profileInitialValues, facultyOptions, directionOptions, groupOptions } from '../../data/options'

import styles from '../../styles/profile.module.css'
// import CustomButton from '../Components/CustomButton/CustomButton';


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
               


            </Card>        
        </div>
    )
}
