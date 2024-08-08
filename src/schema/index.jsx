import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .test(
      "is-ayushi-email",
      "Email must be ayushi@gmail.com",
      (email) => email === "ayushi@gmail.com"
    )
    .required("Please enter an email"),
  password: Yup.string()
    .min(8)
    .required("Please enter password")
    .oneOf(["Ayu@badika", null], "Password Hint : A__@___i_a"),
  confirm_password: Yup.string()
    .min(8)

    .required("Please enter confirm_password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
