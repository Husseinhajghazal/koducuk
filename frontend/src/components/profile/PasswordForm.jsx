"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { toast } from "react-toastify";
import { userService } from "@/services/userService";

const validationSchema = Yup.object({
  old_password: Yup.string().required("Required."),
  new_password: Yup.string()
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
    .oneOf([Yup.ref("new_password")], "Passwords must match"),
});

const PasswordForm = () => {
  const initialValues = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await userService.updatePassword(values);
      toast.success("Şifreniz başarıyla güncellendi");
      resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message || "Bir hata oluştu");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            id="old_password"
            type="password"
            value={values.old_password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Eski Şifre"
            valid={errors.old_password && touched.old_password}
            error={errors.old_password}
          />
          <Input
            id="new_password"
            type="password"
            value={values.new_password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Yeni Şifre"
            valid={errors.new_password && touched.new_password}
            error={errors.new_password}
          />
          <Input
            id="confirm_password"
            type="password"
            value={values.confirm_password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Yeni Şifre Tekrar"
            valid={errors.confirm_password && touched.confirm_password}
            error={errors.confirm_password}
          />
          <Button
            type="submit"
            className="w-full md:w-auto"
            isSubmitting={isSubmitting}
          >
            Güncelle
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default PasswordForm;
