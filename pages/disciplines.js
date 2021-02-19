import CardItems from "../Components/Card/Card";
import { facultyData } from '../data/data'


export default function disciplines() {
    return (
        <div style={{marginTop:'10rem', display:'flex',}}>
          {facultyData.map(faculty => <CardItems key={faculty.id} faculty={faculty} />)}
        </div>
    )
}
