import { facultyData } from "../../data/data";
import axios from 'axios'
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

import Loading from "../../Components/Loading/Loading";
import { baseUrl } from "../../Requests/config";

export default function AdminManageDisciplines({data}) {
  const route = useRouter();

  if (data.items?.length === 0) return <Loading />;
  return (
    <div>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "9rem",
          width: "80%",
          marginBottom: "4rem",
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>ID</TableCell> */}
                <TableCell align="left">DISCIPLINE NAME</TableCell>
                {/* <TableCell align="center">DIRECTIONS</TableCell>
                        <TableCell align="center">GROUP</TableCell> */}
                <TableCell align="right">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.items?.map((list) => (
                <TableRow key={list.id}>
                  {/* <TableCell component="th" scope="row">
                                {list.id}
                            </TableCell> */}
                  <TableCell align="left" component="th" scope="row">
                    {list.name}
                  </TableCell>
                  {/* <TableCell align="center"><h2>{users.name}</h2> </TableCell>
                            <TableCell align="center">{users.directions.map(dir =>(
                                <p style={{margin: 20}} key={dir.id}>{dir.name}</p>
                            ))}</TableCell>
                            <TableCell align="center">{users.groups.map(dir =>(
                                <div style={{margin: 20}} key={dir.id}>{dir.name}</div>
                            ))}</TableCell>
                             */}
                  <TableCell align="right">
                    <ButtonGroup variant="contained">
                      <Button style={{ color: "black" }}>
                        <EditIcon
                          onClick={() =>
                            route.push(`/admin/edit/disciplines/${list.id}`)
                          }
                        />
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
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { data } = await axios.get(`${baseUrl}Disciplines`);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};
