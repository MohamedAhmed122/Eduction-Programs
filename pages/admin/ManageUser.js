import Sidebar from "../../Layouts/Sidebar/Sidebar";
import SidebarRow from "../../Layouts/Sidebar/SidebarRow";
import { useRouter } from "next/router";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import GroupIcon from "@material-ui/icons/Group";
import Loading from "../../Components/Loading/Loading";
import { useEffect } from "react";
import { deleteUser, fetchUsers } from "../../Requests/users";
import { useState } from "react";

export default function AdminManageUser() {
  const route = useRouter();
  const [users, setUsers] = useState();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
      if(deleted){
          setTimeout(() => {
            setDeleted(false)
          }, 1000);
      }
  }, [deleted]);

  if (!users) return <Loading />;
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarRow Icon={AccountCircleIcon} title="Users" />
          <SidebarRow
            Icon={LibraryBooksIcon}
            title="Disciplines"
            onClick={() => route.push("/admin/ManageDisciplines")}
          />
          <SidebarRow
            Icon={AccountBalanceIcon}
            title="Faculty"
            onClick={() => route.push("/admin/ManageFaculty")}
          />
          {/* <SidebarRow Icon={OpenWithIcon} title='Create D' onClick={()=>route.push('/admin/createNew/direction')} /> */}
          <SidebarRow
            Icon={GroupIcon}
            title="Group"
            onClick={() => route.push("/admin/createNew/group")}
          />
        </Sidebar>
        <div
          style={{
            marginLeft: "15%",
            marginTop: "9rem",
            width: "80%",
            marginBottom: "4rem",
          }}
        >
          <TableContainer component={Paper} style={{ marginBottom: 250 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">NAME</TableCell>
                  <TableCell align="center">EMAIL</TableCell>
                  <TableCell align="center">ADMIN</TableCell>
                  <TableCell align="center">Teacher</TableCell>
                  <TableCell align="right">ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map((users) => (
                  <TableRow key={users.id}>
                    <TableCell component="th" scope="row">
                      {users.id}
                    </TableCell>
                    <TableCell align="center">{users.fullName}</TableCell>
                    <TableCell align="center">{users.email}</TableCell>
                    <TableCell align="center">
                      {users.isAdmin ? (
                        <CheckCircleIcon
                          fontSize="large"
                          style={{ color: "green" }}
                        />
                      ) : (
                        <CancelIcon fontSize="large" style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {users.isTeacher ? (
                        <CheckCircleIcon
                          fontSize="large"
                          style={{ color: "green" }}
                        />
                      ) : (
                        <CancelIcon fontSize="large" style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <ButtonGroup variant="contained">
                        <Button
                          onClick={() => route.push(`/account`)}
                          style={{ color: "black" }}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          style={{ color: "red" }}
                          onClick={() => {
                            deleteUser(users.id)
                              .then((res) => console.log(res))
                              .catch((err) => console.log(err));
                              setDeleted(true)
                              console.log(users.id)
                          }}
                        >
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
  );
}
