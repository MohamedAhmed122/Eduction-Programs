import { Card } from "@material-ui/core";
import { useSelector } from "react-redux";

import styles from './styleProfile.module.css'

export default function Profile() {

    const img ='https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg'

    const { profile, loading } = useSelector(state => state.profile)

    if (loading) return <div>loading ...</div>

    return (
        <div>
            <Card className={styles.card}>
                <div className='flex_col'>
                    <img className={styles.img} src={img} alt='img' />
                </div>
                <div className='flex' style={{marginTop: 20}}>
                    <h3 className={styles.mainText}>Name:</h3>
                    <p>{profile.name}</p>
                </div>
                <div className='flex' style={{marginTop: 20}}>
                    <h3 className={styles.mainText}>Email:</h3>
                    <p>{profile.email}</p>
                </div>
                <div className='flex' style={{marginTop: 20}}>
                    <h3 className={styles.mainText}>Phone:</h3>
                    <p>{profile.phone}</p>
                </div>
                <div className='flex' style={{marginTop: 20}}>
                    <h3 className={styles.mainText}>DOB:</h3>
                    <p>{profile.birthday}</p>
                </div>
                <div className='flex' style={{marginTop: 20}}>
                    <h3 className={styles.mainText}>Admission Year:</h3>
                    <p>{profile.admissionYear}</p>
                </div>
                <br/><br/>
                <div className='flex' style={{marginTop: 20}}>
                    <h3 className={styles.mainText}>Faculty:</h3>
                    <p>{profile.faculty}</p>
                </div>
                <div className='flex' style={{marginTop: 20}}>
                    <h3 className={styles.mainText}>Direction:</h3>
                    <p>{profile.direction}</p>
                </div>
                <div className='flex' style={{marginTop: 20}}>
                    <h3 className={styles.mainText}>Group:</h3>
                    <p>{profile.group}</p>
                </div>
            </Card>
        </div>
    )
}
