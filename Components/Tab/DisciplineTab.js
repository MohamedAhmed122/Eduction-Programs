import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AutumnSemester from "../../Container/Semsters/AutumnSemester";
import SpringSemester from "../../Container/Semsters/SpringSemester";
import TeacherSubjects from "../../Container/Semsters/TeacherSubjects";

import style from "./styleTab.module.css";

export default function DisciplineTab({
  secondSemester,
  firstSemester,
  disciplines,
}) {
  const { currentUser } = useSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(()=>{
      if( currentUser.role === 'Teacher'){
        setActiveTab(2)
      }
  },[currentUser?.role])

  return (
    <div>
      <ul className={style.tabs}>
        <li></li>
        {currentUser.role !== "Teacher" && (
          <>
            {" "}
            <li
              onClick={() => setActiveTab(0)}
              className={activeTab === 0 ? style.current : null}
            >
              Spring Semester
            </li>
            <li
              onClick={() => setActiveTab(1)}
              className={activeTab === 1 ? style.current : null}
            >
              Autumn Semester{" "}
            </li>{" "}
          </>
        )}
        {currentUser.role === "Teacher" && (
          <li
            onClick={() => setActiveTab(2)}
            className={activeTab === 2 ? style.current : null}
          >
            Teacher Subjects
          </li>
        )}
      </ul>
      <div>
        {activeTab === 0 && <SpringSemester secondSemester={secondSemester} />}
        {activeTab === 1 && <AutumnSemester firstSemester={firstSemester} />}
        {activeTab === 2 && <TeacherSubjects disciplines={disciplines} />}
      </div>
    </div>
  );
}
