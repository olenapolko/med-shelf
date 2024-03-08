import * as yup from "yup";

export const cartFormValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "At least 2 letters")
    .max(25, "Please do not exceed 25 letters")
    .typeError("Text only")
    .required("Required"),

  email: yup.string().email("Incorrect email").required("Required"),

  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Required"),

  address: yup.string().required("Required"),
});
