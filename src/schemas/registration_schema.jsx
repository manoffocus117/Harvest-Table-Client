import * as Yup from "yup";

const registration_schema = Yup.object({
      name: Yup.string()
            .trim()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters")
            .max(32, "Name cannot exceed 32 characters")
            .matches(
                  /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                  "Name can only contain letters",
            ),

      photo_url: Yup.string()
            .trim()
            .url("Enter a valid URL")
            .required("Photo URL is required"),

      email: Yup.string()
            .trim()
            .email("Enter a valid email address")
            .required("Email is required"),

      password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
                  /[A-Z]/,
                  "Password must contain at least one uppercase letter",
            )
            .matches(
                  /[a-z]/,
                  "Password must contain at least one lowercase letter",
            )
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(
                  /[!@#$&*]/,
                  "Password must contain at least one special character (ex: ! @ # $ & *)",
            ),

      confirm_password: Yup.string()
            .required("Please confirm your password")
            .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default registration_schema;
