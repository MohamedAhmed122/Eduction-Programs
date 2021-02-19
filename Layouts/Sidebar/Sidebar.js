import styles from '../../styles/sidebar.module.css'
import classNames from 'classnames'

export default function Sidebar({children}) {
    return (
        <div className={styles.sidebar}>
             <div className={classNames(styles.sidebarRow ,'flex_col')}>
                <div>Profile</div>
                <div>Profile</div>
            </div>
         <>
            {children}
         </>
        </div>
    )
}
