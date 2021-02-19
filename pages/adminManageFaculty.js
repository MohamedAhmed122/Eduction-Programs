
import { facultyData } from '../data/data'
import { useRouter } from 'next/router'
import { 
    Button, 
    ButtonGroup, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


export default function AdminManageFaculty() {
    const route = useRouter()
    return (
        <>
        <div style={{marginLeft: '10%', marginTop: '9rem', width:'80%', marginBottom: '4rem'}}>
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">FACULTY NAME</TableCell>
                        <TableCell align="center">DIRECTIONS</TableCell>
                        <TableCell align="center">GROUP</TableCell>
                        <TableCell align="right">ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {facultyData?.map((users) => (
                        <TableRow key={users.id}>
                            <TableCell component="th" scope="row">
                                {users.id}
                            </TableCell>
                            <TableCell align="center"><h2>{users.faculty}</h2> </TableCell>
                            <TableCell align="center">{users.directions.map(dir =>(
                                <p style={{margin: 20}} key={dir.id}>{dir.name}</p>
                            ))}</TableCell>
                            <TableCell align="center">{users.groups.map(dir =>(
                                <div style={{margin: 20}} key={dir.id}>{dir.name}</div>
                            ))}</TableCell>
                            
                            <TableCell align="right">
                                <ButtonGroup variant="contained">
                                    <Button 
                                    style={{color: 'black'}}>
                                        <EditIcon />
                                    </Button>
                                    <Button  style={{color: 'red'}} >
                                        <DeleteIcon />
                                    </Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div> 
        
        </>
    )
}
