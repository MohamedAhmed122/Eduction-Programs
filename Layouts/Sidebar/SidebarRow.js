import styles from '../../styles/sidebar.module.css'
import classNames from 'classnames'

export default function SidebarRow({onClick, title, Icon}) {
    return (
      
        <div onClick={onClick} className={classNames(styles.sidebarRow ,'flex_col')}>
           {Icon && <div className=' flexCol'>  
                <Icon fontSize='large' style={{color: 'white'}} /> 
            </div>}
            <div  className={styles.sidebarRowText}>{title}</div>
        </div>
    )
}
