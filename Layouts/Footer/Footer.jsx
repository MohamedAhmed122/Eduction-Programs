import classNames from 'classnames'
import Link from 'next/link'

import styles from '../../styles/nav.module.css'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import {Copyright} from '@material-ui/icons'
import { useDispatch } from 'react-redux';
import { userLogout} from '../../Redux/Auth/AuthActions'
import { useRouter } from 'next/router'



export default function Footer({inverted = true}) {

    const router = useRouter()

    const dispatch = useDispatch()


    return (
        <>
        {inverted &&
            <footer className={classNames('flex_col', styles.footer)}>
                <div className={classNames('flex_between', styles.footerLinks)}>
                    <Link href='/account'><p className={styles.footerLink}>Profile</p></Link>
                    <Link href='/disciplines'><p className={styles.footerLink}>disciplines</p></Link>
                    <p className={styles.footerLink} >disciplines Details</p>
                    <p className={styles.footerLink} 
                    onClick={()=> {
                        dispatch(userLogout())
                        router.push('/')
                    }}
                    >
                        Logout
                    </p>
                </div>
                <div className={styles.logo}>
                    <LocalLibraryIcon className={styles.icon} />
                    <h2 className={styles.logoText}>CourseBook</h2>
                </div>
                <div className={classNames(styles.footerEnd,  'flex')}> <Copyright /> Copyright by SmartDev Powered by TSU </div>
            </footer>
        }
        </>
    )
}
