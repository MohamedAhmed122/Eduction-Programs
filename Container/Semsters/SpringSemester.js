import { Typography } from '@material-ui/core'
import CardItem from '../../Components/Card/Card'

export default function SpringSemester({secondSemester}) {
    return (
        <div className='flex_wrap' style={{marginTop: 50}}>
             {/* <Typography paragraph align='center' variant="h3"> Spring Semester</Typography> */}
          {secondSemester?.map((semester, i) => <CardItem key={i} semester={semester} /> )  }
        </div>
    )
}
