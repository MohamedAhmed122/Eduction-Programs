import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tab from "../Components/Tab/DisciplineTab";
import Loading from '../Components/Loading/Loading'
import {
  fetchDisciplines,
  fetchTeacherDisciplines,
} from "../Requests/disciplines";

export default function disciplines() {
  const route = useRouter();
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const [disciplines, setDisciplines] = useState([]);
  const [firstSemester, setFirstSemester] = useState([])
  const [secondSemester, setSecondSemester] = useState([])

  // check if the user is authenticated, and then fetch Disciplines for Teacher
  useEffect(() => {
    if (!isAuthenticated) {
      route.push("/");
    } else {
      fetchTeacherDisciplines(currentUser.token, currentUser.userId)
        .then((res) => setDisciplines(res))
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated, route]);

  //  set the first Semester and the second Semester
  useEffect(()=>{
    if (disciplines){
      setFirstSemester(disciplines?.items?.filter(dis => dis.semester === 0))
      setSecondSemester(disciplines?.items?.filter(dis => dis.semester === 1))
    }
  },[disciplines])


  if (disciplines.length < 0) return <Loading />
  return (
    <div style={{ marginTop: 120, marginBottom: 400 }}>
      <Tab  firstSemester={firstSemester} secondSemester={secondSemester} />
    </div>
  );
}
