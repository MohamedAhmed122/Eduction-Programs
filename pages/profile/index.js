 
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Components/Loading/Loading'
import ProfileTab from '../../Components/Tab/ProfileTab'
import { getProfile , getAvatar} from '../../Redux/profile/profileAction'

 export default function index() {

    const { loading } = useSelector (state => state.profile)
    const { loading : avatarLoading } = useSelector (state => state.avatar)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfile())
        // dispatch(getAvatar())
    
    },[dispatch])

    useEffect(()=>{
        dispatch(getAvatar())
    },[])

    if (loading ) return <Loading />
     return (
         <div style={{marginTop: 120}}>
             <ProfileTab />
         </div>
     )
 }
 