import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Components/Loading/Loading'
import ProfileTab from '../../Components/Tab/ProfileTab'
import { getAvatar, getProfile } from '../../Redux/profile/profileAction'
 export default function index() {

    const { loading , profile} = useSelector (state => state.profile)
    // const { loading : avatarLoading , avatar} = useSelector (state => state.avatar)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfile())
    },[dispatch])

    // useEffect(()=>{
    //     dispatch(getAvatar())
    // },[dispatch])


    if (loading || !profile ) return <Loading />
    // if (avatarLoading  ) return <Loading />
     return (
         <div style={{marginTop: 120}}>
             <ProfileTab />
         </div>
     )
 }
