import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { fetchFacultyById, editFaculty } from "../../../../Requests/faculties";
import Loading from "../../../../Components/Loading/Loading";

export default function updateFaculty() {
  const [name, setName] = useState(faculty?.name || "");
  const {
    query: { id },
  } = useRouter();
  const router = useRouter();
  const [faculty, setFaculty] = useState();

  useEffect(() => {
    if (id) {
      fetchFacultyById(id)
        .then((res) => setFaculty(res))
        .catch((err) => console.log(err));
      setName(faculty?.name);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editFaculty(id, { name })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      router.back()
  };
  if (!faculty) return <Loading />;
  console.log(faculty?.name);
  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Update Faculty</h1>
      <form style={{ width: "50%" }} onSubmit={(e) => handleSubmit(e)}>
        <input
          defaultValue={faculty?.name}
          placeholder="Faculty Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
        <div style={{ marginBottom: 30 }} />
        <button type="submit" className="btn_primary">
          Update Faculty
        </button>
      </form>
    </div>
  );
}
