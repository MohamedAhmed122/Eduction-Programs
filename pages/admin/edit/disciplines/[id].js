import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm,Controller } from "react-hook-form";
import FormInput from "../../../../Components/Form/FormInput";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useSelector } from 'react-redux';
import { fetchDisciplineById } from '../../../../Requests/disciplines';


const validationSchema = Yup.object({
    discipline: Yup.string().required().label('Discipline'),
});


export default function EditDisciplines() {

    const {query : { id}} = useRouter()

    const { register, handleSubmit, errors, control  } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const { currentUser } = useSelector(state => state.auth)
    console.log(route)
    console.log(currentUser.token)

    
    useEffect(()=>{
        fetchDisciplineById(currentUser.token, id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    },[])

    const onSubmit = data => console.log(data)
    
    return (
        <div style={{height: '100vh'}} className='flex_col'>
            <h1 className='main_title'>Edit Disciplines</h1>
            <form  style={{width: '50%'}}  onSubmit={handleSubmit(onSubmit)}>
                <p>{currentUser.token} </p>
                <Controller
                name="discipline"
                control={control}
                defaultValue=""
                render={({ onChange, value  }) => 
                    <FormInput  placeholder='Disciplines'  error={errors.discipline?.message} onChange={onChange} value={value} />}
                />
                  <Controller
                name="faculty"
                control={control}
                defaultValue=""
                render={({ onChange, value  }) => 
                    <FormInput  placeholder='faculty'  error={errors.faculty?.message} onChange={onChange} value={value} />}
                />
                  <Controller
                name="faculty"
                control={control}
                defaultValue=""
                render={({ onChange, value  }) => 
                    <FormInput  placeholder='groups'  error={errors.groups?.message} onChange={onChange} value={value} />}
                />
                <div style={{ marginBottom: 30}} />
                <button type='submit' className='btn_primary'>Edit Disciplines </button>
            </form>
        </div>
    )
}
