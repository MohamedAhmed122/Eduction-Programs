import axios from "axios";
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

import Loading from "../../Components/Loading/Loading";
import { baseUrl } from "../../Requests/config";
import { deleteFaculty } from "../../Requests/faculties";

export default function AdminManageFaculty({ data }) {
  const route = useRouter();

  if (data.length === 0) return <Loading />;
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
                <TableCell align="center">FACULTY</TableCell>
                <TableCell align="center">GO TO DIRECTIONS</TableCell>
                <TableCell align="center">GO TO FACULTY</TableCell>
                <TableCell align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((faculty) => (
                <TableRow style={{ cursor: "pointer" }} key={faculty.id}>
                  <TableCell align="center">{faculty.name}</TableCell>

                  <TableCell align="center">
                    <Button style={{ color: "blue" }} onClick={() =>
                        route.push(`/admin/view/direction/${faculty.id}`)
                      }>
                      <ReplyAllIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      style={{ color: "green" }}
                      onClick={() =>
                        route.push(`/admin/view/faculty/${faculty.id}`)
                      }
                    >
                      <ReplyAllIcon style={{ transform: "scaleX(-1)" }} />
                    </Button>
                  </TableCell>
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
                        <DeleteIcon onClick={() => deleteFaculty(faculty.id)} />
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

export const getStaticProps = async (context) => {
  const { data } = await axios.get(`${baseUrl}Faculties`);

  return {
    props: {
      data,
    },
  };
};
