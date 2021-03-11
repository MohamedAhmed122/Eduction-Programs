import React from 'react'
import { useForm,Controller } from "react-hook-form";
import InputSelect from "../../../../Components/Form/InputSelect";
import FormInput from "../../../../Components/Form/FormInput";
import { yupResolver } from '@hookform/resolvers/yup';
import { facultyOptions } from '../../../../data/options'
import * as Yup from "yup";


const validationSchema = Yup.object({
    direction: Yup.string().required().label('Direction'),
});


export default function updateDirection() {

    const { register, handleSubmit, errors, control  } = useForm({
        resolver: yupResolver(validationSchema)
      });

      const onSubmit = data => console.log(data)
    

    return (
        <div style={{height: '100vh'}} className='flex_col'>
            <h1 className='main_title'>Update New Direction</h1>
            <form  style={{width: '50%'}}  onSubmit={handleSubmit(onSubmit)}>
                <Controller
                name="direction"
                control={control}
                defaultValue=""
                render={({ onChange, value  }) => 
                    <FormInput  placeholder='Direction'  error={errors.direction?.message} onChange={onChange} value={value} />}
                />
                <div style={{marginTop: 30, marginBottom: 30}}>
                  <InputSelect
                    name="faculty"
                    control={control}
                    options={facultyOptions}
                    placeholder='Faculty'
                    error ={errors.faculty?.message}
                  />
                </div>
                <button type='submit' className='btn_primary'>Create New</button>
            </form>
        </div>
    )
}
