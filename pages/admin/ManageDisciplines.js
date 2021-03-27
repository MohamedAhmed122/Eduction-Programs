
import { facultyData } from '../../data/data'
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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchDisciplines } from '../../Requests/disciplines';
import { useState } from 'react';
import Loading from '../../Components/Loading/Loading';


export default function AdminManageDisciplines() {
    const route = useRouter()
    const { currentUser } = useSelector(state => state.auth)
    const [lists, setLists] = useState([])

    useEffect(()=>{
        fetchDisciplines(currentUser?.token)
            .then(res => setLists(res))
            .catch(err => console.log(err))
    },[])

    if (lists.length === 0) return <Loading />
    return (
        <>
        <div style={{marginLeft: '10%', marginTop: '9rem', width:'80%', marginBottom: '4rem'}}>
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">DISCIPLINE NAME</TableCell>
                        {/* <TableCell align="center">DIRECTIONS</TableCell>
                        <TableCell align="center">GROUP</TableCell> */}
                        <TableCell align="right">ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lists?.map((list) => (
                        <TableRow key={list.id}>
                            <TableCell component="th" scope="row">
                                {list.id}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                                {list.name}
                            </TableCell>
                            {/* <TableCell align="center"><h2>{users.name}</h2> </TableCell>
                            <TableCell align="center">{users.directions.map(dir =>(
                                <p style={{margin: 20}} key={dir.id}>{dir.name}</p>
                            ))}</TableCell>
                            <TableCell align="center">{users.groups.map(dir =>(
                                <div style={{margin: 20}} key={dir.id}>{dir.name}</div>
                            ))}</TableCell> */}
                            
                            <TableCell align="right">
                                <ButtonGroup variant="contained">
                                    <Button 
                                    style={{color: 'black'}}>
                                        <EditIcon     onClick={()=> route.push(`/admin/edit/disciplines/${list.id}`)}/>
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
