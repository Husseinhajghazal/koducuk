"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { toast } from "react-toastify";
import { userService } from "@/services/userService";

const validationSchema = Yup.object({
  password: Yup.string().required("Required."),
  new_email: Yup.string()
    .required("Required.")
    .email("Please enter a valid email."),
});

const EmailForm = ({ user }) => {
  const initialValues = {
    password: "",
    old_email: user.email,
    new_email: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await userService.updateEmailRequest(values);
      toast.success("E-posta değişikliği için onay maili gönderildi");
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
            id="old_email"
            type="text"
            value={values.old_email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Mevcut E-posta"
            disabled
          />
          <Input
            id="new_email"
            type="text"
            value={values.new_email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Yeni E-posta"
            valid={errors.new_email && touched.new_email}
            error={errors.new_email}
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

export default EmailForm;
