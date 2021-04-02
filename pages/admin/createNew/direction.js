import React, { useEffect, useState } from "react";
import { fetchFaculties } from "../../../Requests/faculties";
import { createDirectionReq } from "../../../Requests/directions";
import FormSelect from "../../../Components/Form/FormSelect";

export default function CreateDirection() {
  const [facultyRes, setFacultyRes] = useState(null);
  const [faculty, setFaculty] = useState("");
  const [direction, setDirection] = useState();

  // fetch faculties
  useEffect(() => {
    fetchFaculties()
      .then((res) => setFacultyRes(res))
      .catch((err) => console.log(err));
  }, []);

  // submit from
  const handleSubmit = (e) => {
    e.preventDefault();
    const facultyValue = facultyRes?.find((f) => f.name === faculty);
    const facultyId = facultyValue?.id;
    createDirectionReq(facultyId, {
      facultyId,
      name: direction,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Create New Direction</h1>
      <form onSubmit={(e) => handleSubmit(e)} style={{ width: "60%" }}>
        <input
          className="input"
          required
          placeholder="Direction Name"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        />
        <br /> <br />
        <FormSelect
          options={facultyRes}
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
        />
        <button className="btn_primary" type="Submit">
          Create New
        </button>
      </form>
    </div>
  );
}
