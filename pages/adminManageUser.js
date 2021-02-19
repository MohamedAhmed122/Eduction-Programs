import Sidebar from "../Layouts/Sidebar/Sidebar";
import SidebarRow from "../Layouts/Sidebar/SidebarRow";
import { users } from '../data/data'
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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export default function AdminManageUser() {
    const route = useRouter()
    return (
        <>
        <div className='flex'>
            <Sidebar>
                <SidebarRow Icon={AccountCircleIcon} title='Users' />
                <SidebarRow Icon={AccountBalanceIcon} title='Faculty' onClick={()=>route.push('/adminManageFaculty')} />
                <SidebarRow Icon={LibraryBooksIcon} title='Resources' />

            </Sidebar>
            <div style={{marginLeft: '15%', marginTop: '9rem', width:'80%', marginBottom: '4rem'}}>
                <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">NAME</TableCell>
                            <TableCell align="right">EMAIL</TableCell>
                            <TableCell align="right">ADMIN</TableCell>
                            <TableCell align="right">Teacher</TableCell>
                            <TableCell align="right">ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((users) => (
                            <TableRow key={users.id}>
                                <TableCell component="th" scope="row">
                                    {users.id}
                                </TableCell>
                                <TableCell align="right">{users.name}</TableCell>
                                <TableCell align="right">{users.email}</TableCell>
                                <TableCell align="right">
                                    {users.isAdmin ?
                                    <CheckCircleIcon fontSize='large' style={{color: 'green'}} /> 
                                    :
                                    <CancelIcon fontSize='large' style={{color:'red'}} />
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    {users.isTeacher?
                                    <CheckCircleIcon fontSize='large' style={{color: 'green'}} /> 
                                    :
                                    <CancelIcon fontSize='large' style={{color:'red'}} />
                                    }
                                </TableCell>
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
        </div>
        </>
    )
}