import { useRouter } from "next/router";
import styles from "../../styles/disciplines.module.css";

import { Card } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchDisciplineById } from "../../Requests/disciplines";
import Loading from "../../Components/Loading/Loading";

export default function DisciplineDetail() {
  const {
    query: { id },
  } = useRouter();
  const [discipline, setDiscipline] = useState();

  useEffect(() => {
    if (id) {
      fetchDisciplineById(id)
        .then((res) => setDiscipline(res))
        .catch((err) => console.log(err));
    }
  }, [id]);

  if (!discipline) return <Loading />;
 
  console.log(discipline);

  return (
    <div style={{ marginTop: 130 }}>
      <Card className={styles.card}>
        <div className="flex">
          <h3 className={styles.mainTitle}> Name</h3>
          <p>{discipline.name}</p>
        </div>
        <div className="flex">
          <h3 className={styles.mainTitle}> Direction Name</h3>
          {discipline.directions.map((dis) => (
            <p key={dis.id}>{dis.name}</p>
          ))}
        </div>
        <div className="flex">
          <h3 className={styles.mainTitle}>Group</h3>
          {discipline.groups.map((dis) => (
            <p key={dis.id}>{dis.name}</p>
          ))}
        </div>
        <br />
        <h3 className={styles.mainTitle}>Reading & literature</h3>
        <p className={styles.longText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <br />
        <br />
        <h3 className={styles.mainTitle}>Teachers</h3>
        <div className="flex" style={{ marginTop: 50 }}>
          {discipline.teachers.map((teacher) => (
            <Card key={teacher.id}>
              
              <p style={{ textAlign: "center", margin: 20 }}>
                {teacher.fullName}
              </p>
                 
              <p style={{ textAlign: "center", margin: 20 }}>
                {teacher.email}
              </p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
