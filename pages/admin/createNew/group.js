import React, { useEffect, useState } from "react";
import FormSelect from "../../../Components/Form/FormSelect";
import Loading from "../../../Components/Loading/Loading";
import { useRouter } from "next/router";

// REQ
import {
  fetchDirectionFromFaculty,
  fetchFaculties,
} from "../../../Requests/faculties";
import { createGroupReq } from "../../../Requests/groups";

export default function group() {
  const router = useRouter();

  // state for selectInputs
  const [facultyRes, setFacultyRes] = useState(null);
  const [faculty, setFaculty] = useState("");
  const [directionRes, setDirectionRes] = useState(null);
  const [direction, setDirection] = useState("");
  //
  const [newGroup, setNewGroup] = useState("");

  // Fetch the Faculties
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

  // HandleSubmit and Create New Group

  const handleSubmit = (e) => {
    e.preventDefault();
    const directionValue = directionRes?.find((dir) => dir.name === direction);
    const dirId = directionValue?.id;
    console.log(dirId);

    createGroupReq(dirId, { name: newGroup })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    router.back();
  };

  if (!facultyRes) return <Loading />;
  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Create New Group</h1>
      {/* <FormSelect /> */}
      <form style={{ width: "70%" }} onSubmit={(e) => handleSubmit(e)}>
        <FormSelect
          label="Faculty"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          options={facultyRes}
        />
        <FormSelect
          label="Direction"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          options={directionRes}
        />

        <input
          className="input"
          placeholder="Group Number"
          required
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
        />
        <button style={{ marginTop: 35 }} type="submit" className="btn_primary">
          Create New
        </button>
      </form>
    </div>
  );
}
