import { useState } from "react"
import Loading from "../Components/Loading/Loading";


export default function Home() {

    // useState - onClick -  onChange - onSubmit - conditional rendering (if else) (!) (? :) (&&)
    const [name, setName ] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(true)
    const [loading, setLoading] = useState(false)
      
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{ 
        setPassword(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            console.log(name, email, password)
            setName("")
            setEmail("")
            setPassword("")
            setLoggedIn(!loggedIn)  
            setLoading(false)
        }, 3000);
      
    }

    const handleLogout = () =>{
        setLoggedIn(!loggedIn)
    }

    if (loading) return <Loading />

    return (
        <div style={{height: '100vh'}} className='flex_col'>
            {loggedIn ? 
                <form onSubmit={(e) =>handleSubmit(e)}>
                    <input className="input" placeholder="name"  type="text" value={name} onChange={(e)=>handleName(e)} />
                    <input className="input" placeholder="email"  type="email"  value={email}  onChange={(e) => handleEmail(e)} />
                    <input className="input" placeholder="password" type="password"  value={password} onChange={(e) => handlePassword(e)} />
                    <button style={{margin: 40}} className='btn_primary' type="submit" >login</button> 
                </form> :
                <div className="flex_col">
                    <h1 className="main_title"> Fk you dsokey</h1>
                    <p> FK you to kareem </p>
                    <button style={{margin: 40}} className='btn_primary'  onClick={handleLogout} >logout</button>
                </div>
            }
        </div>
    )
}
