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
import {  useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../Redux/profile/profileAction";



const today = new Date()

const validationSchema = Yup.object({
    // name: Yup.string().required()
    //     .label('Name').min(4, 'Invalid Name'),
    // dob:Yup.date().transform(parseDateString)
    // .max(today, "Invalid Date of birth"),
    // phone: Yup.string()
    // .phone("RU", true, 'Number is invalid')
    // .required(), 
    // email: Yup.string().email().required().label('Email'), 
    // admissionYear: Yup.number().required(),
});


export default function account() {

    const {profile, loading} = useSelector(state => state.profile)
    const dispatch = useDispatch()
    
    const {  handleSubmit, errors, control  } = useForm({
        resolver: yupResolver(validationSchema)
    });
  
    
    const onSubmit = data =>{
         console.log(data);
        dispatch(updateProfile({
            fullName : data.name,
            admissionYear : data.admissionYear,
            birthday : data.dob,
            email : data.email
        }))
    }

    
   
   

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
                    name="email"
                    control={control}
                    defaultValue={profile.email}
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Email'  error={errors.email?.message} onChange={onChange} value={value} />}
                    />
                     <Controller
                    name="admissionYear"
                    control={control}
                    defaultValue={profile.admissionYear}
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Admission Year'  error={errors.admissionYear?.message} onChange={onChange} value={value} />}
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
            
        </div>
    )
}
