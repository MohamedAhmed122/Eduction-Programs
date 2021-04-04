import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  fetchDirectionFromFaculty,
  fetchFaculties,
} from "../Requests/faculties";
import { fetchGroupsByDirectionId } from "../Requests/groups";
import { ShapeArray } from "../utils/Shape";
import Loading from "../Components/Loading/Loading";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter()

  const [faculty, setFaculty] = useState("");
  const [facultyRes, setFacultyRes] = useState(null);
  const [direction, setDirection] = useState("");
  const [directionRes, setDirectionRes] = useState(null);
  const [groupRes, setGroupRes] = useState(null);
  const [groups, setGroups] = useState("");

  // fetch the faculties
  useEffect(() => {
    fetchFaculties()
      .then((res) => setFacultyRes(res))
      .catch((err) => console.log(err));
  }, []);

  // Fetch the directions using the facultyId
  useEffect(() => {
    if (faculty !== "") {
      const value = facultyRes?.find((val) => val.name === faculty);
      const facultyId = value?.id;

      fetchDirectionFromFaculty(facultyId)
        .then((res) => {
          setDirectionRes(res);
        })
        .catch((err) => console.log(err));
    }
  }, [faculty]);

  // Fetch the Groups using the DirectionId
  useEffect(() => {
    if (!faculty) return;
    if (direction !== "") {
      const value = directionRes?.find((val) => val.name === direction);
      const directionId = value?.id;

      fetchGroupsByDirectionId(directionId)
        .then((res) => {
          setGroupRes(res);
        })
        .catch((err) => console.log(err));
    }
  }, [faculty, direction, groups]);

  // set to empty
  useEffect(() => {
    if (direction === "") {
      setGroupRes(null);
    }
    if (faculty === "") {
      setGroups("");
      setDirection("");
    }
  }, [faculty, direction, groups]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(faculty, direction, groups, "res");
  };

  if (!facultyRes) return <Loading />;
  return (
    <>
    <form style={{ margin: 200 }} onSubmit={handleSubmit}>
      {/* <FormControl style={{ display: "block", width: 200 }}> */}
      <InputLabel id="demo-mutiple-name-label">Faculty</InputLabel>
      <Select
        id="outlined-select-currency-native"
        select={"true"}
        name="category"
        value={faculty}
        onChange={(e) => setFaculty(e.target.value)}
        style={{
          marginBottom: "0.5rem",
          width: "100%",
        }}
      >
        {facultyRes.length > 0 &&
          facultyRes?.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
      </Select>
      {/* </FormControl> */}
      {/* <FormControl style={{ display: "block", width: 200 }}> */}
      <InputLabel id="demo-mutiple-name-label">Direction</InputLabel>
      <Select
        id="outlined-select-currency-native"
        select={"select"}
        name="category"
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        style={{
          marginBottom: "0.5rem",
          width: "100%",
        }}
      >
        {directionRes?.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      {/* </FormControl>
      <FormControl style={{ display: "block", width: 200 }}> */}
      <InputLabel id="demo-mutiple-name-label">groups</InputLabel>
      <Select
        id="outlined-select-currency-native"
        select
        name="category"
        value={groups}
        onChange={(e) => setGroups(e.target.value)}
        style={{
          marginBottom: "0.5rem",
          width: "100%",
        }}
      >
        {groupRes?.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      {/* </FormControl> */}
      <button type="submit"> Submit</button>
    </form>
      <button onClick={()=> router.back()} >Back</button>
      </>
  );
}
