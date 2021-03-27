import React from 'react'
import { FormControl,Select, Input, InputLabel, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useField } from "formik";


  
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  
  const ITEM_HEIGHT = 58;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  



export default function FromSelect({label,options, ...props}) {
    const classes = useStyles();

    const [field, meta, helpers] = useField(props);

    return (
        <FormControl className={classes.formControl} error={meta.touched && !!meta.error}>
         <InputLabel id="demo-mutiple-name-label">{label}</InputLabel>
            <Select 
            MenuProps={MenuProps}
            id="outlined-select-currency-native"
            select
            name='category'
            value={field.value}
            onChange={(e,d) => helpers.setValue(d.value) }
            {...props}
            {...field}
            error={meta.error && meta.touched}
            style={{
                marginBottom: '0.5rem',
            }}
            SelectProps={{
              native: true,
            }}
            // input={<Input />}
            >
                {options?.map(option => (
                <MenuItem key={option.value} value={option.value}>{option.label} </MenuItem>
                ))}
            </Select>
            {meta.error && meta.touched ? (
            <label  style={{color: 'red', fontSize:12}}>
            {meta.error}
            </label>
      ) : null}
      </FormControl>
    )
}
