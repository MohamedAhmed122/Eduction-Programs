// hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// redux
import { userRegister } from "../Redux/Auth/AuthActions";
// Form and validation
import { Form, Formik } from "formik";
import FromikInput from "../Components/Form/FormikInput";
import FormikSelect from "../Components/Form/FormikSelect";
import * as Yup from "yup";
import "yup-phone";
// REQ
import {
  fetchDirectionFromFaculty,
  fetchFaculties,
} from "../Requests/faculties";
import { fetchGroupsByDirectionId } from "../Requests/groups";
// utils
import { ShapeArray } from "../utils/Shape";
import { parseDateString } from "../utils/Validate";
// render
import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/index.module.css";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

const today = new Date();

// validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
  student: Yup.bool(),
  phone: Yup.string().phone("RU", true, "Number is invalid").required(),
  dob: Yup.date()
    .transform(parseDateString)
    .max(today, "Invalid Date of birth"),
  admissionYear: Yup.string().required().label("admission Year"),
});

export default function Register() {
  const route = useRouter();
  const [isStudent, setIsStudent] = useState(false);
  // const [isTeacher, setIsTeacher] = useState(false);
  const [faculties, setFaculties] = useState([]);
  const [directions, setDirections] = useState([]);
  const [groups, setGroups] = useState([]);
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  // navigate Authenticated user to disciplines and fetch faculties
  useEffect(() => {
    if (isAuthenticated) {
      route.push("/disciplines");
    }
    fetchFaculties()
      .then((res) => setFaculties(res))
      .catch((err) => console.log(err));
  }, [isAuthenticated, route]);

  // handle Submit and dispatch userRegister
  const onSubmit = (data) => {
    const groupValue = groups?.find((group) => group.value === data.group);

    const value = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.password,
      birthday: data.dob,
      phoneNumber: data.phone,
      education: {
        group: groupValue.id,
        admissionYear: Number(data.admissionYear),
      },
      accountType: isStudent ? "Student" : "Teacher",
    };
    console.log(value);
    dispatch(userRegister(value));
  };

  console.log(faculties);

  // get Direction by FacultyId
  const getDirection = (value) => {
    const vl = faculties?.find((val) => val.value === value);
    fetchDirectionFromFaculty(vl?.id)
      .then((res) => {
        setDirections(res);
      })
      .catch((err) => console.log(err));

    return directions;
  };

  // get Groups by directionId and facultyId
  const getGroups = (value, facultyVal) => {
    const val = directions?.find((val) => val.value === value);
    const id = val?.id;

    fetchGroupsByDirectionId(id)
      .then((res) => {
        setGroups(res);
      })
      .catch((err) => console.log(err));
      console.log(groups)
    return groups;
  };

  return (
    <div className="flexAll" style={{ height: "auto" }}>
      <div className={classNames(styles.loginForm, "flex_col")}>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={{
            name: "",
            email: "",
            password: "",
            admissionYear: "",
            phone: "",
            faculty: "",
            dob: "",
            direction: "",
            group: "",
          }}
        >
          {({ dirty, isSubmitting, isValid, values }) => (
            <Form style={{ width: "70%" }}>
              <FromikInput name="name" label="Name " />
              <FromikInput name="email" label="Email " />
              <FromikInput name="phone" label="Phone " />
              <FromikInput
                name="dob"
                label="Date of Birth"
                placeholder="1999-09-24"
              />
              <FromikInput name="admissionYear" label="Admission Year" />
              <FromikInput name="password" label="Password " />

              <div className="flex check_box" style={{ marginTop: 20 }}>
                <input type="checkbox" name="teacher" />
                <p style={{ marginLeft: 10 }} className="text_align">
                  Are you a Teacher?
                </p>
              </div>
              <div className="flex check_box">
                <input
                  type="checkbox"
                  value={isStudent}
                  onChange={() => setIsStudent(!isStudent)}
                />
                <p style={{ marginLeft: 10 }} className="text_align">
                  Are you a Student?
                </p>
              </div>
              {isStudent && (
                <>
                  {faculties.length > 0 ? (
                    <FormikSelect
                      name="faculty"
                      options={ShapeArray(faculties)}
                      label="Faculty"
                    />
                  ) : (
                    <CircularProgress size={50} />
                  )}

                  <FormikSelect
                    name="direction"
                    options={ShapeArray(getDirection(values.faculty))}
                    label="Direction"
                    disabled={!values.faculty}
                  />

                  <FormikSelect
                    name="group"
                    options={ShapeArray(
                      getGroups(values.direction, values.faculty)
                    )}
                    label="Group"
                    disabled={!values.direction}
                  />
                </>
              )}
              {error && <Alert severity="error">{error}</Alert>}
              <div className="flex_center" style={{ margin: "2rem" }}>
                {/* <h1>{getGroups(values.direction)}</h1> */}
                <button
                  style={{ width: "70%" }}
                  type="submit"
                  className="btn_primary"
                >
                  {" "}
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
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
