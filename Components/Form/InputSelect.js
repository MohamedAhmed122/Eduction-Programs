
import Select from "react-select";
import {  Controller } from "react-hook-form";
export default function InputSelect({error, width, control, options, name, ...props}) {
    return (
        <div style={{width: width, marginBottom: 20}}>
                <Controller
                name={name}
                control={control}
                options={options}
                as={Select}
                {...props}
                
            />
            {error &&  <div style={{marginBottom: '1rem', marginTop:'0.5rem'}}>
                <label className='error_label'  >{error}</label>
            </div>} 
        </div>
    )
}
