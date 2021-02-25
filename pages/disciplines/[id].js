import Image from 'next/image'

// import { useRouter } from 'next/router'
import styles from '../../styles/disciplines.module.css'

import { Card } from '@material-ui/core'


export default function DisciplineDetail() {

    // const {query : { id }} = useRouter()

    

    return (
        <div style={{marginTop: 130}}> 
          <Card className={styles.card}>
            <div className='flex'>
                <h3 className={styles.mainTitle}> Name</h3>
                <p>Computer Science</p>  
            </div>
            <div className='flex'>
                <h3 className={styles.mainTitle}>Group</h3>
                <p>98123</p>
            </div>
            <div className='flex'>
                <h3 className={styles.mainTitle}>Year</h3>
                <p>2020 -2021</p>
            </div>
            <h3 className={styles.mainTitle}>Description</h3>
            <p className={styles.longText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <br/><br/>
            <h3 className={styles.mainTitle}>Reading & literature</h3>
            <p className={styles.longText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <br/><br/>
            <h3 className={styles.mainTitle}>Teachers</h3>
            <div className='flex_wrap' style={{marginTop: 50}}>
                <Card>
                    <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2011/B005JU5JEI_BadTeacher_UXSY1._V145020191_RI_.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover'}}
                    />
                    <p style={{textAlign :'center', margin: 20}}>Sasha</p>
                </Card>
                <Card>
                    <img 
                    src="https://image.freepik.com/free-photo/woman-teacher-holding-study-book-writting-it_2221-3572.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover'}}
                    />
                    <p style={{textAlign :'center', margin: 20}}>Masha</p>
                </Card>
                <Card>
                    <img 
                    src="https://images.squarespace-cdn.com/content/v1/573e57871bbee0d6dea60fff/1551203818326-Y2YY9W2OHZT2R28UZ2UC/ke17ZwdGBToddI8pDm48kG87Sfbgg29A4BYEDq3OXvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcf4OxbJOyh_wHUnyc4kQLQ6SBshRGOku7c30Y_IRDNPta8R2IY5BHMaEj1zOWoDTZ/what-is-teacher-burnout.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover'}}
                    />
                    <p style={{textAlign :'center', margin: 20}}>IVan</p>
                </Card>
            </div>
          </Card>
        </div>
    )
}
