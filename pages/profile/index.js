 
 import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Components/Loading/Loading'
import ProfileTab from '../../Components/Tab/ProfileTab'
import { getProfile } from '../../Redux/profile/profileAction'

 export default function index() {

    const { loading } = useSelector (state => state.profile)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfile())
    },[dispatch])

    if (loading) return <Loading />
     return (
         <div style={{marginTop: 120}}>
             <ProfileTab />
         </div>
     )
 }
 