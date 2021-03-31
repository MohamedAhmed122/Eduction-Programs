import React from 'react'
import { useState } from 'react'

export default function Page() {
    const [ Name, setName] = useState("");
    const [ Email, setEmail] = useState("");
    const [ Phone, setPhone] = useState("");
    const [ Dob, setDob] = useState("");
    const [ AdmissionYear, setAdmissionYear] = useState("");
    const [ Password, setPassword] = useState("");
    console.log(Name,Email,Phone,Dob,AdmissionYear,Password)
    return (
        <div style={{margin: 100}}>
            <input className='input' placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
            <input className='input' placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
            <input className='input' placeholder='Phone' value={Phone} onChange={(e) => setPhone(e.target.value)} />
            <input className='input' placeholder='Dob' value={Dob} onChange={(e) => setDob(e.target.value)} />
            <input className='input' placeholder='AdmissionYear' value={AdmissionYear} onChange={(e) => setAdmissionYear(e.target.value)} />
            <input className='input' placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
        </div>
    )
  };