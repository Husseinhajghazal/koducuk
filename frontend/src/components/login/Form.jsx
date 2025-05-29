"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import Link from "next/link";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { userService } from "@/services/userService";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
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
});

const Form = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      const response = await userService.login(values);
      const { token, expiresIn, ...userData } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiration", expiresIn);

      dispatch(setUser({ user: userData, expiresIn }));

      toast.success(response.message);
      router.push("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
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
            <h3 className="text-ai-purple text-3xl font-bold">Giriş Yap</h3>
            <p className="font-medium text-sm text-kc-gray mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              placeat officiis maiores expedita laborum obcaecati.{" "}
              <Link href="/uyeol" className="text-ai-purple underline">
                Hesabınız yoksa hesab oluşturun
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
          </div>
          <Button
            type="submit"
            className="rounded-xl py-2 md:py-4 px-8"
            isSubmitting={isSubmitting}
          >
            Giriş Yap
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
