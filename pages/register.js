import { useRouter } from "next/router";

import * as Yup from "yup";

import { parseDateString } from "../utils/Validate";
import "yup-phone";

import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/index.module.css";
import Alert from "@material-ui/lab/Alert";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Redux/Auth/AuthActions";
import {
  fetchDirectionFromFaculty,
  fetchFaculties,
} from "../Requests/faculties";
import { ShapeArray } from "../utils/Shape";
import { Form, Formik } from "formik";
import FromikInput from "../Components/Form/FormikInput";
import FormikSelect from "../Components/Form/FormikSelect";

const today = new Date();

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
  const [checked, setChecked] = useState(false);
  const [faculties, setFaculties] = useState([]);
  const [directions, setDirections] = useState([]);
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      route.push("/disciplines");
    }
    fetchFaculties()
      .then((res) => setFaculties(res))
      .catch((err) => console.log(err));
  }, [isAuthenticated, route]);

  const onSubmit = (data) => {
    const value = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.password,
      birthday: data.dob,
      phone: data.phone,
      admissionYear: Number(data.admissionYear),
      faculty: "none",
      group: "none",
      direction: "none",
    };

    dispatch(userRegister(value));
  };

  console.log(faculties);

  const getDirection= (value) => {
    const vl = faculties?.find((val) => val.value === value);
    fetchDirectionFromFaculty(vl?.id)
      .then((res) => {
        setDirections(res);
      })
      .catch((err) => console.log(err));
    return directions;
  };

  return (
    <div className="flexAll" style={{ height: "auto" }}>
      <div className={classNames(styles.loginForm, "flex_col")}>
        <Formik
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
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
                placeholder="09.25.1999"
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
                  value={checked}
                  onChange={() => setChecked(!checked)}
                />
                <p style={{ marginLeft: 10 }} className="text_align">
                  Are you a Student?
                </p>
              </div>
              {checked && (
                <>
                  <FormikSelect
                    name="faculty"
                    options={ShapeArray(faculties)}
                    label="Faculty"
                  />
                 {values.faculty && <FormikSelect
                    name="direction"
                    options={ShapeArray(getDirection(values.faculty))}
                    label="Direction"
                    disabled={!values.faculty}
                  />}
                  <FormikSelect
                    name="group"
                    options={ShapeArray(getDirection(values.faculty))}
                    label="Group"
                    disabled={!values.direction}
                  />
                </>
              )}

              {error && <Alert severity="error">{error}</Alert>}
              <div className="flex_center" style={{ margin: "2rem" }}>
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
