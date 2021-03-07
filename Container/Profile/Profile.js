import { useForm,Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import FormInput from "../../Components/Form/FormInput";
import { parseDateString } from '../../utils/Validate'
import "yup-phone";

import classNames from 'classnames'
import { Card, Typography } from "@material-ui/core";
import BackupIcon from '@material-ui/icons/Backup';


import styles from '../../styles/profile.module.css'
import {  useSelector } from "react-redux";


const today = new Date()

const validationSchema = Yup.object({
    name: Yup.string().required()
        .label('Name').min(4, 'Invalid Name'),
    dob:Yup.date().transform(parseDateString)
    .max(today, "Invalid Date of birth"),
    phone: Yup.string()
    .phone("RU", true, 'Number is invalid')
    .required(),  
});
const validationSchemaEmail = Yup.object({
    email: Yup.string().email().required().label('Email'),
});

export default function account() {

    const {profile, loading} = useSelector(state => state.profile)
    
    const {  handleSubmit, errors, control  } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const {  handleSubmit : handleSubmitEmail, errors : emailError, control : controlEmail  } = useForm({
        resolver: yupResolver(validationSchemaEmail)
    });
    
    const onSubmit = data => console.log(data);
    const onSubmitEmail = data => console.log(data);
    
   
   

    if(loading) return <div>loading....</div>

    // console.log(profile.avatar, "avatar.....")
    
    return (
        <div style={{marginTop:'5rem'}} className='flex_col'>
            <Typography variant='h4'>Update Profile</Typography>
            <Card className={styles.card}>
                <div className={classNames(styles.image, 'flex_col')}>
                    <BackupIcon fontSize='large'/>
                    <p className={styles.smallText}>drag and drop image here</p>
                </div>
                <form  style={{width: '70%', marginTop: 30}}  onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                    name="name"
                    control={control}
                    defaultValue={profile.name}
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Name'  error={errors.name?.message} onChange={onChange} value={value} />}
                    />
                     <Controller
                    name="admissionYear"
                    control={control}
                    defaultValue={profile.admissionYear}
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Admission Year'  error={errors.name?.message} onChange={onChange} value={value} />}
                    />
                    <Controller
                    name="dob"
                    control={control}
                    defaultValue={profile.birthday}
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Date of Birth (mm.dd.yyyy)'  error={errors.dob?.message} onChange={onChange} value={value} />}
                    />
                    <Controller
                    name="phone"
                    defaultValue={profile.phone}
                    control={control}
                    render={({ onChange, value  }) => 
                        <FormInput placeholder='Phone Number'  error={errors.phone?.message} onChange={onChange} value={value} />}
                    />
                    <div className='flex_center' style={{margin: '2rem'}}>
                        <button  style={{width: '70%'}} type='submit' className='btn_primary'> Update</button>
                    </div>
                </form>
            </Card>
            <Card className={styles.card}>
                <Typography variant='h4'>Change Email</Typography>
                <form  style={{width: '70%', marginTop: 30}}  onSubmit={handleSubmitEmail(onSubmitEmail)}>
                    <Controller
                    name="email"
                    control={controlEmail}
                    defaultValue={profile.email}
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Email'  error={emailError.email?.message} onChange={onChange} value={value} />}
                    />
                    <div className='flex_center' style={{margin: '2rem'}}>
                        <button  style={{width: '70%'}} type='submit' className='btn_primary'> Update Email</button>
                    </div>
                </form>
            </Card>        
        </div>
    )
}
