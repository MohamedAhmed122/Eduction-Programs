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
import Loading from "../../../../Components/Loading/Loading";
import { baseUrl } from "../../../../Requests/config";


export default function FacultyView({ data }) {
  const route = useRouter();

  if (!data) return <Loading />;
  return (
    <div
      style={{
        marginLeft: "10%",
        marginTop: "10rem",
        width: "80%",
        marginBottom: "13rem",
      }}
    >
      <h1 className="main_title" style={{ textAlign: "center" }}>
        {data.name}
      </h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">FACULTY</TableCell>
              <TableCell align="right">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.directions.map((direction) => (
              <TableRow key={direction.id}>
                <TableCell component="th" scope="row">
                  {direction.id}
                </TableCell>
                <TableCell
                  align="center"
                  key={direction.id}
                  onClick={() =>
                    route.push(`/admin/view/direction/${direction.id}`)
                  }
                >
                  {direction.name}
                </TableCell>
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
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${baseUrl}Faculties/${context.params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async (context) => {
  const res = await fetch(`${baseUrl}Faculties`);

  const data = await res.json();

  const ids = data.map((data) => data.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
