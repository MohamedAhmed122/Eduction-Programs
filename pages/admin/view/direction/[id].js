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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../../../Components/Loading/Loading";
import { getDirectionById } from "../../../../Requests/directions";

export default function FacultyView() {
  const {
    query: { id },
  } = useRouter();
  const route = useRouter();
  const { currentUser } = useSelector((state) => state.auth);
  const [direction, setDirections] = useState();

  useEffect(() => {
    if (id) {
      getDirectionById(currentUser.token, id)
        .then((res) => setDirections(res))
        .catch((err) => console.log(err));
    }
  }, [id]);

  console.log(direction);

  if (!direction) return <Loading />;

  return (
    <div
      style={{
        marginLeft: "10%",
        marginTop: "10rem",
        width: "80%",
        marginBottom: "43rem",
      }}
    >
      <h1 className="main_title" style={{ textAlign: "center" }}>
        {direction.name}
      </h1>
      <p style={{ textAlign: "center" }}>
        {direction.id}
      </p>
      {/* <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">FACULTY</TableCell>
              <TableCell align="right">ACTIONS</TableCell>
            </TableRow>
          </TableHead> */}
      {/* <TableBody>
            {faculty?.directions.map((direction) => (
              <TableRow key={direction.id}>
                <TableCell component="th" scope="row">
                  {direction.id}
                </TableCell>
                <TableCell align="center">{direction.name}</TableCell>
                <TableCell align="right">
                  <ButtonGroup variant="contained">
                    <Button
                      onClick={() =>
                        route.push(`/admin/edit/direction/${direction.id}`)
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
          </TableBody> */}
      {/* </Table> */}
      {/* </TableContainer> */}
    </div>
  );
}
