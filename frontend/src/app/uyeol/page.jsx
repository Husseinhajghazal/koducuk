"use client";

import LoginImage from "@/assets/images/login.jpg";
import Image from "next/image";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import axios from "axios";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const validationSchema = Yup.object({
  first_name: Yup.string().required("Required."),
  last_name: Yup.string().required("Required."),
  email: Yup.string().required("Required.").email("Plese enter a valid email."),
  password: Yup.string()
    .required("Required.")
    .min(8, "Min length of the password should be 8.")
    .max(16, "Max length of the password should be 16.")
    .matches(/(?=.*?[A-Z])/g, "Password should contain at least 1 big letter.")
    .matches(
      /(?=.*?[a-z])/g,
      "Password should contain at least 1 small letter."
    )
    .matches(/(?=.*?[0-9])/g, "Password should contain at least 1 number."),
  confirm_password: Yup.string()
    .required("Required.")
    .oneOf([Yup.ref("password")], "Passwords must match."),
});

export default function UyeOl() {
  const handleSubmit = async (values) => {
    let config = {
      method: "post",
      url: "{{LocalUrl}}/user/signup",
      data: values,
    };

    const response = await axios.post(
      "https://koducuk.onrender.com/api/user/signup",
      values
    );

    console.log(response);
  };

  return (
    <main className="transition-all">
      <div className="h-screen w-screen grid lg:grid-cols-2 transition-all">
        <div className="hidden lg:block relative overflow-hidden">
          <Image
            src={LoginImage}
            alt="login image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-ai-purple/30" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-evenly px-8 md:px-32 bg-black-700 transition-all"
            >
              <div className="text-center">
                <h3 className="text-ai-purple text-3xl font-bold">Üye Ol</h3>
                <p className="font-medium text-sm text-kc-gray mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti placeat officiis maiores expedita laborum obcaecati.
                </p>
              </div>
              <div className="px-10 flex flex-col gap-4 w-full">
                <Input
                  id="first_name"
                  type="text"
                  value={values.first_name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="Adı"
                  valid={errors.first_name && touched.first_name}
                  error={errors.first_name}
                />
                <Input
                  id="last_name"
                  type="text"
                  value={values.last_name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="Soyadı"
                  valid={errors.last_name && touched.last_name}
                  error={errors.last_name}
                />
                <Input
                  id="email"
                  type="text"
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="E-posta"
                  valid={errors.email && touched.email}
                  error={errors.email}
                />
                <Input
                  id="password"
                  type="text"
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="Şifre"
                  valid={errors.password && touched.password}
                  error={errors.password}
                />
                <Input
                  id="confirm_password"
                  type="text"
                  value={values.confirm_password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="Şifreyi tekrarla"
                  valid={errors.confirm_password && touched.confirm_password}
                  error={errors.confirm_password}
                />
              </div>
              <button
                type="submit"
                className="bg-ai-purple border-2 w-max border-ai-purple hover:bg-transparent duration-300 text-white rounded-3xl py-2 md:py-4 px-8 font-bold"
              >
                Üye Ol
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}
