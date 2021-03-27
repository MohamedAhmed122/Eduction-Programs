import { users } from "../../data/data";
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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchFaculties } from "../../Requests/faculties";
import Loading from "../../Components/Loading/Loading";

export default function AdminManageFaculty() {
  const route = useRouter();
  const { currentUser } = useSelector((state) => state.auth);
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetchFaculties(currentUser.token)
      .then((res) => setFaculties(res))
      .catch((err) => console.log(err));
  }, []);

  if (faculties.length === 0) return <Loading />;
  return (
    <>
      <div style={{ marginTop: 120 }} className="flex_center">
        <Button
          variant="outlined"
          onClick={() => route.push("/admin/createNew/faculty")}
        >
          Create New
        </Button>
      </div>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "4rem",
          width: "80%",
          marginBottom: "20rem",
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">FACULTY</TableCell>
                <TableCell align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {faculties?.map((faculty) => (
                <TableRow style={{cursor: 'pointer'}} key={faculty.id}  onClick={() =>
                    route.push(`/admin/view/faculty/${faculty.id}`)
                  } >
                  <TableCell component="th" scope="row">
                    {faculty.id}
                  </TableCell>
                  <TableCell align="center">{faculty.name}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup variant="contained">
                      <Button
                        onClick={() =>
                          route.push(`/admin/edit/faculty/${faculty.id}`)
                        }
                        style={{ color: "black" }}
                      >
                        <EditIcon />
                      </Button>
                      <Button style={{ color: "red" }}>
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
  );
}
