import React, { useState } from "react";
import { useRouter } from "next/router";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { editUserRole } from "../../../../Requests/users";

export default function EditUserRole() {
  const [checkStudent, setCheckStudent] = useState(false);
  const [checkTeacher, setCheckTeacher] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const router = useRouter();
  const {
    query: { id },
  } = useRouter();

  const handleCheckT = () => {
    setCheckTeacher(!checkTeacher);
    setCheckStudent(false);
    setCheckAdmin(false);
  };

  const handleCheckS = () => {
    setCheckTeacher(false);
    setCheckStudent(!checkStudent);
    setCheckAdmin(false);
  };
  const handleCheckA = () => {
    setCheckTeacher(false);
    setCheckStudent(false);
    setCheckAdmin(!checkAdmin);
  };

  const handleRole = () => {
    if (checkTeacher) {
      return "Teacher";
    } else if (checkStudent) {
      return "Student";
    } else if (checkAdmin) {
      return "Administrator";
    } else {
      return "";
    }
  };
  const handleClick = () => {
    console.log(handleRole());
    editUserRole({ userId: id, roles: [handleRole()] })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Change User Role</h1>
      <div>
        <FormControlLabel
          checked={checkStudent}
          color="primary"
          onClick={handleCheckS}
          control={<Radio />}
          label="Student"
        />
        <FormControlLabel
          checked={checkTeacher}
          color="primary"
          onClick={handleCheckT}
          control={<Radio />}
          label="Teacher"
        />
        <FormControlLabel
          checked={checkAdmin}
          color="primary"
          onClick={handleCheckA}
          control={<Radio />}
          label="Admin"
        />
      </div>
      <button
        onClick={handleClick}
        style={{ marginTop: 30 }}
        className="btn_primary"
      >
        Submit
      </button>
    </div>
  );
}
