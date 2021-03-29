import { Typography } from "@material-ui/core";
import CardItem from "../../Components/Card/Card";

export default function AutumnSemester({firstSemester}) {
    return (
        <div className='flex_col' style={{marginTop: 60}}>
           <Typography paragraph align='center' variant="h3"> Autumn Semester</Typography>
          {firstSemester?.map((semester,i) =>  <CardItem  semester={semester} key={i}/>)  }
        </div>
    )
}
