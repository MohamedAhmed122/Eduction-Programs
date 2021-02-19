import { Button } from '@material-ui/core'
import React from 'react'

export default function CustomButton({title, ...props}) {
    return (
        <div style={{display:'flex', justifyContent:'flex-end', marginTop:'3rem'}}>
            <Button  variant='contained' style={{padding:'12px 40px'}}  {...props} >
                {title}
            </Button>
        </div>
    )
}
