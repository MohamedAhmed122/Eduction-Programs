// hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// redux
import { userRegister } from "../Redux/Auth/AuthActions";
// REQ
import {
  fetchDirectionFromFaculty,
  fetchFaculties,
} from "../Requests/faculties";
import { fetchGroupsByDirectionId } from "../Requests/groups";
// render
import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/index.module.css";
import Alert from "@material-ui/lab/Alert";
import FormSelect from "../Components/Form/FormSelect";
import Loading from "../Components/Loading/Loading";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { TextField } from "@material-ui/core";

export default function Register() {
  const route = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, error, success } = useSelector(
    (state) => state.auth
  );
  // state for inputs
  const [checked, setChecked] = useState(false);
  const [checkTeacher, setCheckTeacher] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [admissionYear, setAdmissionYear] = useState("");
  const [password, setPassword] = useState("");
  // state for selectInputs
  const [facultyRes, setFacultyRes] = useState(null);
  const [faculty, setFaculty] = useState("");
  const [directionRes, setDirectionRes] = useState(null);
  const [direction, setDirection] = useState("");
  const [groupRes, setGroupRes] = useState(null);
  const [groups, setGroups] = useState("");

  // navigate Authenticated user to disciplinePage || fetch faculties
  useEffect(() => {
    if (isAuthenticated) {
      route.push("/profile");
    }
    fetchFaculties()
      .then((res) => setFacultyRes(res))
      .catch((err) => console.log(err));
  }, [isAuthenticated, route]);

  // Fetch the directions using the facultyId
  useEffect(() => {
    if (faculty !== "") {
      const value = facultyRes?.find((val) => val.name === faculty);
      const facultyId = value?.id;

      fetchDirectionFromFaculty(facultyId)
        .then((res) => {
          setDirectionRes(res);
        })
        .catch((err) => console.log(err));
    }
  }, [faculty]);

  // Fetch the Groups using the DirectionId
  useEffect(() => {
    if (!faculty) return;
    if (direction !== "") {
      const value = directionRes?.find((val) => val.name === direction);
      const directionId = value?.id;

      fetchGroupsByDirectionId(directionId)
        .then((res) => {
          setGroupRes(res);
        })
        .catch((err) => console.log(err));
    }
  }, [faculty, direction, groups]);

  // set to empty
  useEffect(() => {
    if (direction === "") {
      setGroupRes(null);
    }
    if (faculty === "") {
      setGroups("");
      setDirection("");
    }
  }, [faculty, direction, groups]);

  const handleAccountType = () => {
    if (checkTeacher) {
      return "Teacher";
    } else if (checked) {
      return "Student";
    } else {
      return "StudentTeacher";
    }
  };

  // handle Submit and dispatch userRegister
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name, phone, dob, admissionYear);
    const group = groupRes?.find((group) => group.name === groups);
    const groupId = group?.id;

    const type = handleAccountType();
    console.log(type);

    console.log(handleAccountType());
    const value = {
      name,
      email,
      password,
      confirmPassword: password,
      birthday: dob,
      phoneNumber: phone,
      education: {
        group: groupId,
        admissionYear: admissionYear || 0,
      },
      accountType: handleAccountType(),
    };
    const value2 = {
      name,
      email,
      password,
      confirmPassword: password,
      birthday: dob,
      phoneNumber: phone,
      accountType: handleAccountType(),
    };
    if (type === "Teacher") {
      dispatch(userRegister(value2));
    } else {
      dispatch(userRegister(value));
    }
    // console.log(handleAccountType())
  };

  const handleCheckTeacher = () => {
    setCheckTeacher(!checkTeacher);
    setChecked(false);
  };
  const handleCheckStudent = () => {
    setCheckTeacher(false);
    setChecked(!checked);
  };

  if (success) return <Loading />;
  return (
    <div className="flexAll" style={{ height: "auto" }}>
      <div className={classNames(styles.loginForm, "flex_col")}>
        <h1 className="main_title">Welcome to CourseBook</h1>
        <form
          style={{ width: "70%" }}
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
        >
          <input
            required
            className="input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            // required
            className="input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            // required
            className="input"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            required
            className="input"
            // type='date'
            placeholder="Date of Birth (2020-03-30)"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            required
            className="input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <FormControlLabel
            checked={checked}
            color="primary"
            onClick={handleCheckStudent}
            control={<Radio />}
            label="Are you Student Student"
          />
          <FormControlLabel
            checked={checkTeacher}
            color="primary"
            onClick={handleCheckTeacher}
            control={<Radio />}
            label="Are you Teacher?"
          />
          {checked && (
            <>
              <br /> <br />
              <TextField
                required
                label="AdmissionYear"
                className="input"
                placeholder="AdmissionYear"
                value={admissionYear}
                onChange={(e) => setAdmissionYear(e.target.value)}
              />
              <br /> <br /> <br />
              <FormSelect
                label="Faculty"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                options={facultyRes}
              />
              <FormSelect
                label="Direction"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                options={directionRes}
              />
              <FormSelect
                label="Group"
                value={groups}
                onChange={(e) => setGroups(e.target.value)}
                options={groupRes}
              />
            </>
          )}
          {error && <Alert severity="error">{error}</Alert>}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn_primary"
              style={{ marginTop: 20 }}
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        <h4 className="text_align">
          you don't have account!
          <span onClick={() => route.push("/")} className="span_color">
            Login
          </span>
        </h4>
      </div>
      <div className={classNames(styles.loginSvgContainer, "flex_center")}>
        <Image
          height={500}
          width={500}
          src="/assets/login.svg"
          alt="Login image"
        />
      </div>
    </div>
  );
}
