import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Components/Loading/Loading'
import ProfileTab from '../../Components/Tab/ProfileTab'
import { getAvatar, getProfile } from '../../Redux/profile/profileAction'
 export default function index() {

    const route = useRouter()
    const { loading , profile} = useSelector (state => state.profile)
    const { success, loading : updateProfileLoading } = useSelector (state => state.updateProfile)
    const { loading : avatarLoading , avatar} = useSelector (state => state.avatar)
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(state => state.auth)

    useEffect(()=>{
      if(!isAuthenticated){
        route.push('/')
      }else{
        dispatch(getProfile())
        // dispatch(getAvatar())
      }
    },[isAuthenticated, route])
    // useEffect(()=>{
       
    // },[dispatch, success])

    // useEffect(()=>{
      
    // },[dispatch])


    if (loading || updateProfileLoading || !profile ) return <Loading />
    if (avatarLoading  ) return <Loading />
     return (
         <div style={{marginTop: 120}}>
             <ProfileTab />
         </div>
     )
 }
