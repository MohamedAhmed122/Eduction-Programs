import Link from 'next/link'
import styles from '../styles/nav.module.css'
import classNames from 'classnames'


export default function Navbar({inverted}) {
    return (
        <div className={classNames('flex_between', styles.nav)}>
            <div className={styles.logo}>
                LOGO
            </div>
            {!inverted && 
                <div className='flex'>
                    <div className={styles.link} href='/disciplines'>Disciplines</div>
                    <div className={styles.link} href='/account'>Account</div>
                </div>
            }
        </div>
    )
}
