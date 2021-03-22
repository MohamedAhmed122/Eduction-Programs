import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../../../../Components/Form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { fetchFacultyById } from "../../../../Requests/faculties";

const validationSchema = Yup.object({
  faculty: Yup.string().required().label("Faculty"),
});

export default function updateFaculty() {
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const {
    query: { id },
  } = useRouter();
  const { currentUser } = useSelector((state) => state.auth);
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    if (id) {
      fetchFacultyById(currentUser.token, id)
        .then((res) => setFaculty(res))
        .catch((err) => console.log(err));
    }
  }, [id]);

  console.log(faculty);
  const onSubmit = (data) => console.log(data);

  return (
    <div style={{ height: "100vh" }} className="flex_col">
      <h1 className="main_title">Update Faculty</h1>
      <form style={{ width: "50%" }} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="faculty"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <FormInput
              placeholder="Faculty"
              error={errors.faculty?.message}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <div style={{ marginBottom: 30 }} />
        <button type="submit" className="btn_primary">
          Create New
        </button>
      </form>
    </div>
  );
}
