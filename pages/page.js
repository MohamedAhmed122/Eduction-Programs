import React from 'react'
import { useState } from 'react'

export default function page() {
    const [ input, setInput] = useState('')
    console.log(input)
    return (
        <div style={{margin: 100}}>
            <input className='input' placeholder='shit' value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}
