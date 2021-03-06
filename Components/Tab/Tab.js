import { useState } from 'react'
import AutumnSemester from '../../Container/Semsters/AutumnSemester'
import SpringSemester from '../../Container/Semsters/SpringSemester'
import TeacherSubjects from '../../Container/Semsters/TeacherSubjects'

import style from './styleTab.module.css'

export default function Tab() {


    const [ activeTab, setActiveTab ] = useState(0)

    return (
        <div>
            <ul className={style.tabs}>
                <li></li>
                <li onClick={()=>setActiveTab(0)} className={activeTab === 0 ? style.current : null} >Spring Semester</li>
                <li onClick={()=>setActiveTab(1)} className={activeTab === 1 ? style.current: null } >Autumn Semester </li>
                <li onClick={()=>setActiveTab(2)} className={activeTab === 2 ? style.current: null } >Teacher Subjects</li>
            </ul>
            <div> 
                {activeTab ===0 &&      <SpringSemester />}
                {activeTab === 1 &&     <AutumnSemester />}
                {activeTab === 2 &&     <TeacherSubjects />}
            </div>
        </div>
    )
}
