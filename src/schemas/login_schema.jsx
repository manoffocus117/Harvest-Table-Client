import * as Yup from "yup";

const login_schema = Yup.object({
      email: Yup.string().trim().email().required("Email is required"),
      password: Yup.string().trim().required("Password is required"),
      captcha: Yup.string().trim().required("Captcha is required"),
});

export default login_schema;
