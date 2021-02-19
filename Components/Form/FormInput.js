import { useField } from "formik";
import { FormControl, TextField } from '@material-ui/core';

export default function FromInput({type, label, placeholder, ...props }) {
    const [field, meta] = useField(props);
    return (
         <FormControl style={{width: '100%'}}  error={meta.touched && !!meta.error}>
            <TextField
            type={type}
            placeholder={placeholder}
            label={label} 
            {...field} 
            {...props}
            error={meta.error && meta.touched}
            helperText={meta.error && meta.touched && meta.error}
            style={{
                marginBottom: '0.5rem',
                padding: 10,
            }}
            />
        </FormControl>
    )
}