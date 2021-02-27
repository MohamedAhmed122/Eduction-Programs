
export default function FormInput({error, width, placeholder,ref, label,  options, name, ...props}) {
    return (
        <div style={{width: width}}>
            <label className='label'>{label}</label>
            <input className='input'  {...props} placeholder={placeholder} ref={ref} />
            {error &&  <div style={{marginBottom: '1rem', marginTop:'-0.6rem'}}>
                 <label className='error_label'  >{error}</label>
            </div>}
        </div>
    )
}
