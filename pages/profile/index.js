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

    const {  handleSubmit, errors, control  } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const {  handleSubmit : handleSubmitEmail, errors : emailError, control : controlEmail  } = useForm({
        resolver: yupResolver(validationSchemaEmail)
    });


    const onSubmit = data => console.log(data);
    const onSubmitEmail = data => console.log(data);
    


    
    return (
        <div style={{marginTop:'10rem'}} className='flex_col'>
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
                    defaultValue=""
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Name'  error={errors.name?.message} onChange={onChange} value={value} />}
                    />
                    <Controller
                    name="dob"
                    control={control}
                    defaultValue=""
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Date of Birth (mm.dd.yyyy)'  error={errors.dob?.message} onChange={onChange} value={value} />}
                    />
                    <Controller
                    name="phone"
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
                    defaultValue=""
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
