"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { toast } from "react-toastify";
import { userService } from "@/services/userService";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";

const validationSchema = Yup.object({
  first_name: Yup.string().required("Required."),
  last_name: Yup.string().required("Required."),
  password: Yup.string().required("Required."),
});

const InfoForm = ({ user }) => {
  const dispatch = useDispatch();

  const initialValues = {
    first_name: user.first_name,
    last_name: user.last_name,
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await userService.updateInfo(values);
      dispatch(setUser({ user: response.data, expiresIn: user.expiresIn }));
      toast.success("Bilgileriniz başarıyla güncellendi");
      resetForm({ values: { ...values, password: "" } });
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="first_name"
              type="text"
              value={values.first_name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Ad"
              valid={errors.first_name && touched.first_name}
              error={errors.first_name}
            />
            <Input
              id="last_name"
              type="text"
              value={values.last_name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Soyad"
              valid={errors.last_name && touched.last_name}
              error={errors.last_name}
            />
          </div>
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

export default InfoForm;
