"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import Button from "../ui/Button";

const initialValues = {
  email: ""
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required.").email("Please enter a valid email.")
});

const ForgetPassword = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL + "/api/user/forget_password",
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
            <h3 className="text-ai-purple text-3xl font-bold">Email giriniz</h3>
            <p className="font-medium text-sm text-kc-gray mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              placeat officiis maiores expedita laborum obcaecati.{" "}
              <Link href="/giris" className="text-ai-purple underline">
                şifre hatırladıysanız buraya tıklayınız giriş yapın
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
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
          </div>
          <Button
            type="submit"
            className="rounded-xl py-2 md:py-4 px-8"
            isSubmitting={isSubmitting}
          >
            Bağlantı Gönderiniz
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default ForgetPassword;
