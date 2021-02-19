import { IconButton } from "@material-ui/core";
import CardItems from "../Components/Card/Card";
import { facultyData } from '../data/data'
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import Typical from 'react-typical'

import style from '../styles/disciplines.module.css'


export default function disciplines() {
    
    const handleScroll =()=> window.scrollTo({top: 700 ,behavior: 'smooth'})
    
    return (
        <>
        <div className={style.bg} 
            style={{
                backgroundImage: `linear-gradient( rgba(0, 01, 0, 0.5), rgba(0, 0, 0, 0.5) )
                ,url(/assets/bg3.png)`
            }}
        >
            <Typical
                steps={['TSU', 200, 'TSU, Education Programs ', 300]}
                loop={Infinity}
                wrapper="h1"
            />
            <h3 className={style.title}>Select Your  Faculty, direction & Group</h3>
            <div onClick={()=> handleScroll()}  className={style.iconContainer}>
                <PlayForWorkIcon fontSize='large' style={{color:'white'}} />    
            </div>
        </div>
        <div style={{marginTop:'5rem'}} className='flex_wrap'>
          {facultyData.map(faculty => <CardItems key={faculty.id} faculty={faculty} />)}
        </div>
        <div style={{margin: '30rem'}} />
        </>
    )
}
