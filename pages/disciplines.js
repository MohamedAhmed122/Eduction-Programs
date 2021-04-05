import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tab from "../Components/Tab/DisciplineTab";
import Loading from "../Components/Loading/Loading";
import {
  fetchDisciplines,
  fetchStudentsDisciplines,
  fetchTeacherDisciplines,
} from "../Requests/disciplines";

export default function disciplines() {
  const route = useRouter();
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const [disciplines, setDisciplines] = useState([]);
  const [studentDisciplines, setStudentDisciplines] = useState([]);
  const [firstSemester, setFirstSemester] = useState([]);
  const [secondSemester, setSecondSemester] = useState([]);

  // check if the user is authenticated, and then fetch Disciplines for Teacher
  useEffect(() => {
    if (!isAuthenticated) {
      route.push("/");
    }
    if (currentUser?.role === "Teacher") {
      fetchTeacherDisciplines(currentUser.token, currentUser.userId)
        .then((res) => setDisciplines(res))
        .catch((err) => console.log(err));
    }
    if (currentUser?.role === "Student") {
      fetchStudentsDisciplines(currentUser.token, currentUser.group)
        .then((res) => setStudentDisciplines(res))
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated, route, currentUser.role]);

   // set the first Semester and the second Semester
  useEffect(()=>{
    if (studentDisciplines){
      setFirstSemester(studentDisciplines?.autumn)
      setSecondSemester(studentDisciplines?.spring)
    }
  },[studentDisciplines])
  console.log(firstSemester, secondSemester);

  if (disciplines.length < 0) return <Loading />;
  return (
    <div style={{ marginTop: 120, marginBottom: 400 }}>
      <Tab
        firstSemester={firstSemester}
        secondSemester={secondSemester}
        disciplines={disciplines}
      />
    </div>
  );
}
