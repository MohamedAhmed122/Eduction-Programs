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
import ReplyAllIcon from "@material-ui/icons/ReplyAll";

import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect, useState } from "react";
import Loading from "../../../../Components/Loading/Loading";
import {
  deleteDirection,
  getDirectionById,
} from "../../../../Requests/directions";

export default function FacultyView() {
  const {
    query: { id },
  } = useRouter();
  const route = useRouter();
  const [directions, setDirections] = useState();
  // const [ isDeleted]

  useEffect(() => {
    if (id) {
      getDirectionById(id)
        .then((res) => setDirections(res))
        .catch((err) => console.log(err));
    }
  }, [id]);

  if (!directions) return <Loading />;
  console.log(directions);

  return (
    <>
      <div style={{ marginTop: 140 }} className="flex_center">
        <Button
          variant="outlined"
          onClick={() => route.push("/admin/createNew/direction")}
        >
          Create New
        </Button>
      </div>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "4rem",
          width: "80%",
          marginBottom: "43rem",
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">DIRECTION NAME</TableCell>
                <TableCell align="center">GO TO DIRECTIONS</TableCell>
                <TableCell align="center">GO TO GROUPS</TableCell>
                <TableCell align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {directions?.map((dir) => (
                <TableRow key={dir.id}>
                  <TableCell align="left">{dir.name}</TableCell>
                  <TableCell align="center">
                    <Button
                      style={{ color: "blue" }}
                      onClick={() =>
                        route.push(`/admin/DirectionDetail/${dir.id}`)
                      }
                    >
                      <ReplyAllIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      style={{ color: "green" }}
                      onClick={() =>
                        route.push(`/admin/view/groups/${dir.id}`)
                      }
                    >
                      <ReplyAllIcon style={{ transform: "scaleX(-1)" }} />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <ButtonGroup variant="contained">
                      <Button
                        // onClick={()=> route.push(`/admin/edit/direction/${dir.id}`)}
                        style={{ color: "black" }}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        style={{ color: "red" }}
                        onClick={() => {
                          deleteDirection(id, dir.id)
                            .then((res) => console.log(res))
                            .catch((err) => console.log(err));

                          window.location.reload();
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
    </>
  );
}
