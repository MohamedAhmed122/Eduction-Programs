import { useRouter } from 'next/router'



export default function DisciplineDetail() {

    const {query : { id }} = useRouter()

    return (
        <div style={{marginTop: 130}}> 
            <h1> DisciplineDetail {id}</h1>
        </div>
    )
}
