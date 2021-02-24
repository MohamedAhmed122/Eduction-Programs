import {  Card } from '@material-ui/core'
import { useRouter } from 'next/router'

import styles from '../../styles/semester.module.css'

export default function semester() {

    const router = useRouter()
    const {query : { id }} = useRouter()


    return (
        <div className='flex_col' style={{marginTop: 160}}>
            <h1 className={styles.title}>Hits Faculty, CS Group 98123</h1>
            <div className='flex_between'>
                <Card className={styles.card}>
                    <h1 className={styles.secondaryTitle}>Autumn semester</h1>
                    <button className='btn_secondary' onClick={()=>router.push(`/disciplines/${id}`)} >
                        View
                    </button>
                </Card>
                <Card className={styles.card}>
                    <h1 className={styles.secondaryTitle}>Spring  semester</h1>
                    <button className='btn_secondary' onClick={()=>router.push(`/disciplines/${id}`)}>
                        View
                    </button>
                </Card>
            </div>
        </div>
    )
}
