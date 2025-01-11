import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { incrementStep, setPersonalInfo } from "../redux/userDetails";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
    .required("Phone number is required"),
});

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { personalInfo = {} } = useSelector((state) => state.personalInfo);
  const { name = "", email = "", phoneNumber = "" } = personalInfo;

  const formik = useFormik({
    initialValues: {
      name: name || "",
      email: email || "",
      phoneNumber: phoneNumber || "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(setPersonalInfo(values));
      dispatch(incrementStep());
    },
  });

  const { handleChange, handleBlur, handleSubmit, touched, errors, values } =
    formik;

  return (
    <div className="p-6 md:max-w-3xl lg:max-w-2xl mx-auto">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
          Personal Info
        </h1>
        <p className="text-black/40 text-md leading-relaxed tracking-wider">
          Please provide your name, email, and phone number.
        </p>

        <form className="grid gap-4 mt-4 md:mt-10" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`p-3 border rounded-md ${
                touched.name && errors.name
                  ? "border-red-500"
                  : "border-black/50"
              }`}
              placeholder="Enter your name"
            />
            {touched.name && errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`p-3 border rounded-md ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-black/50"
              }`}
              placeholder="Enter your email"
            />
            {touched.email && errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="grid gap-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`p-3 border rounded-md ${
                touched.phoneNumber && errors.phoneNumber
                  ? "border-red-500"
                  : "border-black/50"
              }`}
              placeholder="Enter your phone number"
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <span className="text-red-500 text-sm mt-1">
                {errors.phoneNumber}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="hidden md:flex bg-blue-950 text-white py-3 ml-auto px-10 rounded-md hover:bg-blue-700 w-fit"
          >
            Next Step
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
