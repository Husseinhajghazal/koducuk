"use client";

import LoginImage from "@/assets/images/login.jpg";
import Image from "next/image";
import { Formik } from "formik";
import * as Yup from "yup";

export default function UyeOl() {
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
    email: Yup.string()
      .required("Required.")
      .email("Plese enter a valid email."),
    password: Yup.string()
      .required("Required.")
      .min(8, "Min length of the password should be 8.")
      .max(16, "Max length of the password should be 16.")
      .matches(
        /(?=.*?[A-Z])/g,
        "Password should contain at least 1 big letter."
      )
      .matches(
        /(?=.*?[a-z])/g,
        "Password should contain at least 1 small letter."
      )
      .matches(/(?=.*?[0-9])/g, "Password should contain at least 1 number."),
    confirm_password: Yup.string()
      .required("Required.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

  const handleSubmit = (values) => {};

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
            setFieldValue,
          }) => (
            <form className="flex flex-col items-center justify-evenly px-8 md:px-32 bg-black-700 transition-all">
              <div className="text-center">
                <h3 className="text-ai-purple text-3xl font-bold">Üye Ol</h3>
                <p className="font-medium text-sm text-kc-gray mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti placeat officiis maiores expedita laborum obcaecati.
                </p>
              </div>
              <div className="px-10 flex flex-col gap-4 w-full">
                <div>
                  <input
                    id="first_name"
                    type="text"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Adı"
                    className={`w-full placeholder:text-white text-white p-2 px-4 rounded-3xl outline-0 border-2 duration-300 ${
                      errors.first_name && touched.first_name
                        ? "caret-red-500 border-red-500 hover:border-red-500"
                        : "caret-ai-purple hover:border-ai-purple"
                    }`}
                  />
                  {errors.first_name && touched.first_name && (
                    <p className="text-red-500 text-xs pl-5 mt-1">
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Soyadı"
                    className="w-full placeholder:text-white text-white caret-ai-purple p-2 px-4 rounded-3xl outline-0 border-2 hover:border-ai-purple border-red-500 duration-300"
                  />
                  <p className="text-red-500 text-xs pl-5 mt-1">
                    Soyadı girişi gereklidir.
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="E-posta"
                    className="w-full placeholder:text-white text-white caret-ai-purple p-2 px-4 rounded-3xl outline-0 border-2 hover:border-ai-purple border-red-500 duration-300"
                  />
                  <p className="text-red-500 text-xs pl-5 mt-1">
                    E-posta girişi gereklidir.
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Şifre"
                    className="w-full placeholder:text-white text-white caret-ai-purple p-2 px-4 rounded-3xl outline-0 border-2 hover:border-ai-purple border-red-500 duration-300"
                  />
                  <p className="text-red-500 text-xs pl-5 mt-1">
                    Şifre girişi gereklidir.
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Şifreyi tekrarla"
                    className="w-full placeholder:text-white text-white caret-ai-purple p-2 px-4 rounded-3xl outline-0 border-2 hover:border-ai-purple border-red-500 duration-300"
                  />
                  <p className="text-red-500 text-xs pl-5 mt-1">
                    Şifre tekrarı girişi gereklidir.
                  </p>
                </div>
              </div>
              <button className="bg-ai-purple border-2 w-max border-ai-purple hover:bg-transparent duration-300 text-white rounded-3xl py-2 md:py-4 px-8 font-bold">
                Üye Ol
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}
