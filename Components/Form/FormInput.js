
export default function FormInput({error, width = '100%', placeholder,ref, label,  options, name, ...props}) {
    return (
        <div style={{width: width}}>
            <label className='label'>{label}</label>
            <input className='input'  {...props} placeholder={placeholder} ref={ref} />
            {error &&  <div style={{marginBottom: '0.5rem', marginTop:'0.3rem'}}>
                 <label className='error_label'  >{error}</label>
            </div>}
        </div>
    )
}
