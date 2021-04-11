import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../../../Components/Loading/Loading";
import {
  updateDirectionById,
  getSingleDirection,
} from "../../../../Requests/directions";

export default function updateDirection() {
  const [name, setName] = useState(direction?.name || "");
  const {
    query: { id },
  } = useRouter();
  const router = useRouter();
  const [direction, setDirection] = useState();

  useEffect(() => {
    if (id) {
      getSingleDirection(id, name)
        .then((res) => setDirection(res))
        .catch((err) => console.log(err));
      setName(direction?.name);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDirectionById(id, {name})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    router.back();
  };
  if (!direction) return <Loading />;
  console.log(direction);
  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Update Direction</h1>
      <form style={{ width: "50%" }} onSubmit={(e) => handleSubmit(e)}>
        <input
          defaultValue={direction?.name}
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
