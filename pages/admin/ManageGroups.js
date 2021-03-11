import { users } from '../../data/data'
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


export default function AdminManageDirections() {
    const route = useRouter()
    return (
        <>
        <div style={{marginTop:120}} className='flex_center'>
            <Button variant='outlined'>Create New</Button>
        </div>
        <div style={{marginLeft: '10%', marginTop: '4rem', width:'80%', marginBottom: '4rem'}}>
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">GROUPS</TableCell>
                        <TableCell align="center">DIRECTION</TableCell>
                        <TableCell align="right">ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map((users) => (
                        <TableRow key={users.id}>
                            <TableCell component="th" scope="row">
                                {users.id}
                            </TableCell>
                            <TableCell align="center">{users.name}</TableCell>
                            <TableCell align="center">{users.email}</TableCell>
                            <TableCell align="right">
                                <ButtonGroup variant="contained">
                                    <Button 
                                    onClick={()=> route.push(`/account`)}
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
