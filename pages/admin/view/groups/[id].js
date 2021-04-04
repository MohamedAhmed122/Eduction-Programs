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


import { fetchGroupsByDirectionId} from  "../../../../Requests/groups";

export default function GroupView() {
  const {
    query: { id },
  } = useRouter();
  const route = useRouter();
  const [groups, setGroups] = useState();

  useEffect(() => {
    if (id) {
        fetchGroupsByDirectionId(id)
        .then((res) => setGroups(res))
        .catch((err) => console.log(err));
    }
  }, [id]);

  if (!groups) return <Loading />;
  console.log(groups);

  return (
    <>
      <div style={{ marginTop: 140 }} className="flex_center">
        <Button
          variant="outlined"
          onClick={() => route.push("/admin/createNew/group")}
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
                <TableCell align="left">GROUP NUMBER</TableCell>
                {/* <TableCell align="center">GO TO GROUPS</TableCell> */}
                <TableCell align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groups?.map((group) => (
                <TableRow key={group.id}>
                  <TableCell align="left">{group.name}</TableCell>
                  {/* <TableCell align="center">
                    <Button
                      style={{ color: "green" }}
                      onClick={() =>
                        route.push(`/admin/view/groups/${group.id}`)
                      }
                    >
                      <ReplyAllIcon style={{ transform: "scaleX(-1)" }} />
                    </Button>
                  </TableCell> */}
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
