import { facultyData } from "../../data/data";
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
import DeleteIcon from "@material-ui/icons/Delete";

import Loading from "../../Components/Loading/Loading";
import { baseUrl } from "../../Requests/config";
import { deleteDisciplineById } from "../../Requests/disciplines";

export default function AdminManageDisciplines({ data }) {
  const route = useRouter();
  console.log(route);

  if (data.items?.length === 0) return <Loading />;
  return (
    <div>
      <div style={{ marginTop: 140 }} className="flex_center">
        <Button
          variant="outlined"
          onClick={() => route.push("/admin/createNew/disciplines")}
        >
          Create New
        </Button>
      </div>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "3rem",
          width: "80%",
          marginBottom: "4rem",
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">DISCIPLINE NAME</TableCell>
                <TableCell align="right">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.items?.map((list) => (
                <TableRow key={list.id}>
                  <TableCell align="left" component="th" scope="row">
                    {list.name}
                  </TableCell>
                  <TableCell align="right">
                    <ButtonGroup variant="contained">
                      <Button style={{ color: "black" }}>
                        <EditIcon
                          onClick={() =>
                            route.push(`/admin/edit/disciplines/${list.id}`)
                          }
                        />
                      </Button>
                      <Button
                        style={{ color: "red" }}
                        onClick={() => {
                          deleteDisciplineById(list.id);
                          window.location.reload()
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
