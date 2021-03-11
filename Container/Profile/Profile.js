import { Card } from "@material-ui/core";
import {  useSelector } from "react-redux";
import styles from './styleProfile.module.css'
import Loading from '../../Components/Loading/Loading'


export default function Profile() {


    const { profile, loading } = useSelector(state => state.profile)
    const { currentUser } = useSelector(state => state.auth)

    if (loading) return <Loading />

    const src ='https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png'

    return (
        <div>
            <Card className={styles.card}>
                <div className='flex_col'>
                    {/* <img className={styles.img} src={src} alt='Img'/> */}
                    <img className={styles.img} src={`http://localhost:5000/Profiles/get-avatar/${currentUser.id}`} />
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
