import classNames from 'classnames'
import Link from 'next/link'

import styles from '../../styles/nav.module.css'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import {Copyright} from '@material-ui/icons'


export default function Footer({inverted = true}) {
    return (
        <>
        {inverted &&
            <footer className={classNames('flex_col', styles.footer)}>
                <div className={classNames('flex_between', styles.footerLinks)}>
                    <Link href='/account'><p className={styles.footerLink}>Profile</p></Link>
                    <Link href='/disciplines'><p className={styles.footerLink}>disciplines</p></Link>
                    <p className={styles.footerLink} >disciplines Details</p>
                    <p className={styles.footerLink}>Logout</p>
                </div>
                <div className={styles.logo}>
                    <LocalLibraryIcon className={styles.icon} />
                    <h2 className={styles.logoText}>CourseBook</h2>
                </div>
                <div className={classNames(styles.footerEnd,  'flex')}> <Copyright /> Copyright by SmartDev </div>
            </footer>
        }
        </>
    )
}
