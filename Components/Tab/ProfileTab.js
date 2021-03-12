import { useState } from 'react'
import Profile from '../../Container/Profile/Profile'
import EditProfile from '../../Container/Profile/EditProfile'

import style from './styleTab.module.css'

export default function DisciplineTab() {


    const [ activeTab, setActiveTab ] = useState(1)


    return (
        <div>
            <ul className={style.tabs}>
                <li></li>
                <li onClick={()=>setActiveTab(0)} className={activeTab === 0 ? style.current : null} >Profile</li>
                <li onClick={()=>setActiveTab(1)} className={activeTab === 1 ? style.current: null } >Update Profile </li>
            </ul>
            <div> 
                {activeTab === 0 &&     <Profile />}
                {activeTab === 1 &&     <EditProfile />}
            </div>
        </div>
    )
}
