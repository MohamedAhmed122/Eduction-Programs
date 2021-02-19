import { useRouter } from 'next/router'

import styles from '../../styles/nav.module.css'
import classNames from 'classnames'

import {Chip} from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face';


export default function Navbar({inverted = true}) {

    const route = useRouter()

    return (
        <div className={classNames('flex_between', styles.nav)}>
            <div className={styles.logo}>
                LOGO
            </div>
            {!inverted && 
                <div className='flex'>
                    <div className={styles.link} onClick={()=> route.push('/disciplines')}>Disciplines</div>
                    <div className={styles.link} onClick={()=> route.push('/account')}>
                        <Chip style={{cursor: 'pointer'}} size='medium' label='Mohamed Youssef' icon={<FaceIcon />} />
                    </div>
                </div>
            }
        </div>
    )
}
