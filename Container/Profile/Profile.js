import { Card } from "@material-ui/core";
import {  useSelector } from "react-redux";
import styles from './styleProfile.module.css'
import Loading from '../../Components/Loading/Loading'
var btoa = require('btoa');


export default function Profile() {

    const img ='https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg'

    const { profile, loading } = useSelector(state => state.profile)
    // const { avatar } = useSelector(state => state.avatar)

 

    if (loading) return <Loading />

//   function hexToBase64(str) {
//         return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
//     }
    

// console.log(hexToBase64(avatar))
    

    return (
        <div>
            <Card className={styles.card}>
                <div className='flex_col'>
                    {/* <img src={ 'data:image/jpeg;base64,' + btoa(avatar)} /> */}
                    {/* <img className={styles.img} src={profile.avatar} alt='img' /> */}
                    {/* <img className={styles.img} src={avatar} alt='img' /> */}
                    {/* <img src={`data:image/png;base64, ${window.btoa(avatar)} ` } alt='Img'/> */}
                    <img className={styles.img} src={img} alt='Img'/>
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
