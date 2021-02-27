import React, { useState } from "react";
import { useForm,Controller } from "react-hook-form";
import Select from "react-select";


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputSelect from "../Components/Form/InputSelect";
import FormInput from "../Components/Form/FormInput";

const schema = yup.object().shape({
  second: yup.string().required(),
  iceCreamType: yup.object().required("You must provide a category"),

});

export default function App() {

  const [checked, setChecked] = useState(false)

  const { register, handleSubmit, errors, control  } = useForm({
    resolver: yupResolver(schema)
  });
  const options =[
    { value: "chocolate", label: "Chocolate" , id :'1'},
    { value: "strawberry", label: "Strawberry", id :'2' },
    { value: "vanilla", label: "Vanilla", id :'3' }
  ]
  const onSubmit = data => console.log(data.second);

  return (
    <form style={{margin: 200}} onSubmit={handleSubmit(onSubmit)}>
     
      <InputSelect
        name="iceCreamType"
        control={control}
        options={options}
        placeholder='Faculty'
        as={Select}
        error ={errors.iceCreamType?.message}
      />
       <Controller
        name="second"
        control={control}
        defaultValue=""
        render={({ onChange, value  }) => 
          <FormInput placeholder='Car'  error={errors.second?.message} onChange={onChange} value={value} />}
      />
    
       <input style={{height: 20, width: 20,}} value={checked} onChange={()=> setChecked(!checked)} type="checkbox" name="check" ref={register}/>
        {checked && <p>hi</p>}
      <input className='btn_secondary' type="submit" />
    </form>
  );
}