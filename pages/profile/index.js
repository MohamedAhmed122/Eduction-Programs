 
 import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProfileTab from '../../Components/Tab/ProfileTab'
import { getProfile } from '../../Redux/profile/profileAction'

 export default function index() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfile())
    },[dispatch])

     return (
         <div style={{marginTop: 120}}>
             <ProfileTab />
         </div>
     )
 }
 