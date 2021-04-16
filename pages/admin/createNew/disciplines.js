import React, { useState } from "react";
import { useRouter } from "next/router";

import { createDiscipline } from "../../../Requests/disciplines";
import { TextField } from "@material-ui/core";
import disciplines from "../../disciplines";

export default function CreateDisciplinePage() {
  const router = useRouter();
  const [discipline, setDiscipline] = useState();
  const [literatures, setLiteratures] = useState();
  // submit from
  const handleSubmit = (e) => {
    e.preventDefault();
    createDiscipline({ name: discipline, literatures })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    router.back();
  };
  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Create New Disciplines</h1>
      <form onSubmit={(e) => handleSubmit(e)} style={{ width: "60%" }}>
        <TextField
          fullWidth
          required
          label="Discipline"
          placeholder="Discipline Name"
          value={discipline}
          onChange={(e) => setDiscipline(e.target.value)}
        />
        <br /> <br />
        <TextField
          fullWidth
          required
          multiline
          rows={4}
          label="literatures"
          placeholder="literatures"
          value={literatures}
          onChange={(e) => setLiteratures(e.target.value)}
        />
         <br /> <br />
        <button className="btn_primary" type="Submit">
          Create New
        </button>
      </form>
    </div>
  );
}
