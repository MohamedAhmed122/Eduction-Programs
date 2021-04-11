import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../../../Components/Loading/Loading";
import { editGroup, getGroupById } from "../../../../Requests/groups";

export default function updateDirection() {
  const [name, setName] = useState(group?.name || "");
  const {
    query: { id },
  } = useRouter();
  const router = useRouter();
  const [group, setGroup] = useState();

  useEffect(() => {
    if (id) {
        getGroupById(id)
        .then((res) => setGroup(res))
        .catch((err) => console.log(err));
      setName(group?.name);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editGroup(id, { name })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      router.back()
  };
  if (!group) return <Loading />;
  console.log(group);
  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Update Direction</h1>
      <form style={{ width: "50%" }} onSubmit={(e) => handleSubmit(e)}>
        <input
          defaultValue={group?.name}
          placeholder="Faculty Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
        <div style={{ marginBottom: 30 }} />
        <button type="submit" className="btn_primary">
          Edit Direction
        </button>
      </form>
    </div>
  );
}
