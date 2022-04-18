import React from "react";
import { useFormik } from "formik";
import { validate } from "../utils/formikValidate";
import TextField from "../components/TextField";
import { useDispatch } from "react-redux";
import { userAction } from "../store/user-slice";

export const SignUpContainer = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      profilePicture: null,
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    validationSchema: validate,

    onSubmit: (values) => {
      const reader = new FileReader();
      reader.readAsDataURL(values.profilePicture);
      reader.onloadend = () => {
        localStorage.setItem("profilePicture",reader.result)
        dispatch(
          userAction.login({
            name: values.name,
            email: values.email,
            phone: values.phone,
            password: values.password,
            profilePicture: URL.createObjectURL(values.profilePicture),
          })
        );
      };
    },
  });

  return (
    <>
      <div>
        <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="img">
            <label htmlFor="file" name="profilePicture"></label>
            <input
              id="file"
              type="file"
              name="profilePicture"
              title="&nbsp;"
              accept=".jpg, .png"
              onChange={(event) => {
                formik.setFieldValue("profilePicture", event.target.files[0]);
              }}
              onBlur={formik.handleBlur}
            />

            {formik.touched.profilePicture && formik.errors.profilePicture ? (
              <div className="error">{formik.errors.profilePicture}</div>
            ) : null}
          </div>
          <TextField
            name="name"
            label="Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <TextField
            name="phone"
            label="PhoneNo"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.phone}
            error={formik.errors.phone}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
          />

          <button className="btn btn-primary my-3" type="submit">
            Submit
          </button>
          <button className="btn btn-danger mx-3 my-3" type="reset">
            Reset
          </button>
        </form>
      </div>
    </>
  );
};
export default SignUpContainer;
