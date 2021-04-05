import { Typography } from '@material-ui/core'
import CardItem from '../../Components/Card/Card'


export default function TeacherSubjects({disciplines}) {
    console.log(disciplines)
    return (
        <div className='flex_wrap'>
              {disciplines?.items?.map((semester, i) => <CardItem key={i} semester={semester} /> )  }
        </div>
    )
}
