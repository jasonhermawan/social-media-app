import * as Yup from "yup";

export const FormLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalidg email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
