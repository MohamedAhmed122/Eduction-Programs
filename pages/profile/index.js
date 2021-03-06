import { useForm,Controller } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import FormInput from "../../Components/Form/FormInput";

import classNames from 'classnames'

import { Card, Typography } from "@material-ui/core";
import BackupIcon from '@material-ui/icons/Backup';



import styles from '../../styles/profile.module.css'
// import CustomButton from '../Components/CustomButton/CustomButton';


const validationSchema = Yup.object({
    name: Yup.string().required().label('Name'),
    dob: Yup.string().required().label('Date of Birth'),
    phone:Yup.string().required().label('Phone'),
  
});
const validationSchemaEmail = Yup.object({
    email: Yup.string().email().required().label('Name'),
   
  
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
                    defaultValue="09.25.2012"
                    render={({ onChange, value  }) => 
                        <FormInput  placeholder='Date of Birth'  error={errors.dob?.message} onChange={onChange} value={value} />}
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
