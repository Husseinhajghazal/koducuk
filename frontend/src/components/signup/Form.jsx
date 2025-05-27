"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Button from "../ui/Button";

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

const Form = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL + "/api/user/signup",
        values
      );

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
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
          className="lg:col-span-2 flex flex-col items-center justify-evenly px-8 md:px-52 bg-black-700"
        >
          <div>
            <h3 className="text-ai-purple text-3xl font-bold">Üye Ol</h3>
            <p className="font-medium text-sm text-kc-gray mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              placeat officiis maiores expedita laborum obcaecati.{" "}
              <Link href="/giris" className="text-ai-purple underline">
                Hesabınız varsa giriş yapın
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
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
              type="password"
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Şifre"
              valid={errors.password && touched.password}
              error={errors.password}
            />
            <Input
              id="confirm_password"
              type="password"
              value={values.confirm_password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Şifreyi tekrarla"
              valid={errors.confirm_password && touched.confirm_password}
              error={errors.confirm_password}
            />
          </div>
          <Button
            type="submit"
            className="rounded-xl py-2 md:py-4 px-8"
            isSubmitting={isSubmitting}
          >
            Üye Ol
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
