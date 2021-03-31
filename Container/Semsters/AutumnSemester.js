import { Typography } from "@material-ui/core";
import CardItem from "../../Components/Card/Card";

export default function AutumnSemester({firstSemester}) {
    return (
        <div className='flex_wrap' style={{marginTop: 60}}>
          {firstSemester?.map((semester,i) =>  <CardItem  semester={semester} key={i}/>)  }
        </div>
    )
}
