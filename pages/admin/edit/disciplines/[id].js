import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../../../Components/Loading/Loading";
import {
  editDiscipline,
  fetchDisciplineById,
} from "../../../../Requests/disciplines";
import { TextField } from "@material-ui/core";

export default function updateDirection() {
  const [name, setName] = useState(discipline?.name || "");
  const [literatures, setLiteratures] = useState("");
  const {
    query: { id },
  } = useRouter();
  const router = useRouter();
  const [discipline, setDiscipline] = useState();

  useEffect(() => {
    if (id) {
      fetchDisciplineById(id)
        .then((res) => setDiscipline(res))
        .catch((err) => console.log(err));
      setName(discipline?.name);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editDiscipline(id, { name, literatures })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    router.back();
  };
  if (!discipline) return <Loading />;
  console.log(discipline);
  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Update Discipline</h1>
      <form style={{ width: "50%" }} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          defaultValue={discipline?.name}
          placeholder="Discipline Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
          label="Discipline Name"
        />
        <br /> <br />
        <TextField
          defaultValue=""
          placeholder="Literatures"
          value={literatures}
          onChange={(e) => setLiteratures(e.target.value)}
          required
          fullWidth
          label="Literatures"
          multiline
          rows={4}
        />
        <div style={{ marginBottom: 30 }} />
        <button type="submit" className="btn_primary">
          Edit Discipline
        </button>
      </form>
    </div>
  );
}
